import { prisma } from "../config/prisma.config.js";
/*
 * PSEUDO CODE for averageRecommendationScore Algorithm
 *
 * FUNCTION averageRecomendationScore(userId):
 *   1. GET user details (userScore) FROM DB WHERE id = userId
 *      IF user NOT FOUND, THROW Error
 *
 *   2. GET user interactions (eventMetrics) FROM DB WHERE userId = userId
 *      EXTRACT interacted eventIds
 *
 *   3. FIND similar users:
 *      GET distinct userIds FROM eventMetrics WHERE eventId IN interacted_eventIds AND userId != currentUserId
 *
 *   4. FETCH candidate events:
 *      GET events FROM DB WHERE status = "PUBLISHED" AND startDate >= NOW
 *      INCLUDE eventMetrics for similar users only
 *
 *   5. CALCULATE scores for each candidate event:
 *      FOR EACH event:
 *        a. contentScore = 1 - ABS(userScore - eventScore)
 *        b. IF similarUsers exist:
 *             collabScore = (count of similar users who interacted with this event) / (total similar users)
 *           ELSE:
 *             collabScore = 0
 *        c. hybridScore = (contentScore + collabScore) / 2
 *        d. ATTACH hybridScore to event object
 *
 *   6. SORT events by hybridScore DESCENDING using QUICK SORT algorithm
 *
 *   7. RETURN top 10 events
 */
export default async function averageRecomendationScore(userId: string) {

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, userScore: true }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const userPrefScore = user.userScore;

  // 2. Collaborative Filtering: Find similar users
  // Get events this user has interacted with
  const userInteractions = await prisma.eventMetric.findMany({
    where: { userId: userId },
    select: { eventId: true }
  });
  
  const userEventIds = userInteractions.map(i => i.eventId);

  // Find other users who interacted with ANY of these events (Similar Users)
  let similarUserIds: string[] = [];
  if (userEventIds.length > 0) {
      const similarUsersMetrics = await prisma.eventMetric.findMany({
        where: {
          eventId: { in: userEventIds },
          userId: { not: userId }
        },
        select: { userId: true },
        distinct: ['userId']
      });
      similarUserIds = similarUsersMetrics.map(m => m.userId);
  }

  // 3. Fetch Candidate Events (Upcoming Published Events)
  // We include eventMetrics filtered by similar users to compute collab score efficiently
  const events = await prisma.event.findMany({
    where: {
      status: "PUBLISHED",
      startDate: { gte: new Date() }
    },
    include: {
      eventMetrics: {
        where: {
            userId: { in: similarUserIds }
        },
        select: { userId: true, hasClicked: true, hasJoined: true }
      },
      organization: {
          select: { id: true, name: true, image: true, isPremium: true }
      },
      creator: {
          select: { id: true, name: true, image: true }
      }
    }
  });

  // Calculate Scores
  const eventsWithScores = events.map(event => {
    // Content Score: 1 - |userScore - eventScore|
    const eScore = event.eventScore ?? 0;
    const contentScore = 1 - Math.min(Math.abs(userPrefScore - eScore), 1);


    // Collaborative Score
    // Ratio of similar users who interacted with this event
    let collabScore = 0;
    if (similarUserIds.length > 0) {
        const interactionCount = event.eventMetrics.length;
        collabScore = interactionCount / similarUserIds.length;
    }

    // Hybrid Score (Average)
    const hybridScore = (contentScore + collabScore) / 2;

    // clean up eventMetrics from the object to return clean event data
    const { eventMetrics, ...eventData } = event;

    return {
      ...eventData,
      recommendationScore: hybridScore
    };
  });

  // Sort by Hybrid Score Descending using Quick Sort
  const sortedEvents = quickSort(eventsWithScores);

  // Return Top 10
  return sortedEvents.slice(0, 10);
}

function quickSort(arr: any[]): any[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: any[] = [];  // Elements greater than pivot
  const right: any[] = []; // Elements less than or equal to pivot

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].recommendationScore > pivot.recommendationScore) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
