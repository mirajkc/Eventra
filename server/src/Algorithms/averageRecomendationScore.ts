import { prisma } from "../config/prisma.config.js";
import { ensureCorpus, getUserProfileVector, getDocumentVector, cosineSimilarity } from "./tfidf.js";

export default async function averageRecomendationScore(userId: string) {

  // 0. Build TF-IDF corpus from all published events (lazy, runs once)
  const allEvents = await prisma.event.findMany({
    where: { status: "PUBLISHED" },
    select: { id: true, title: true, description: true }
  });
  await ensureCorpus(allEvents);

  // 1. Get user's click history
  const userInteractions = await prisma.eventMetric.findMany({
    where: { userId: userId },
    select: { eventId: true }
  });

  const userEventIds = userInteractions.map(i => i.eventId);

  // 2. Content-Based: Build user TF-IDF profile from clicked events
  const profileVec = getUserProfileVector(userEventIds);

  // 3. Collaborative Filtering: Find similar users
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

  // 4. Fetch Candidate Events (Upcoming Published Events)
  const events = await prisma.event.findMany({
    where: {
      status: "PUBLISHED",
      startDate: { gte: new Date() }
    },
    include: {
      eventMetrics: {
        where: { userId: { in: similarUserIds } },
        select: { userId: true, hasClicked: true, hasJoined: true }
      },
      organization: { select: { id: true, name: true, image: true, isPremium: true } },
      creator: { select: { id: true, name: true, image: true } }
    }
  });

  // 5. Calculate Scores
  const eventsWithScores = events.map(event => {
    // Content-Based Score: TF-IDF Cosine Similarity
    const candidateVec = getDocumentVector(event.id);
    const contentScore = cosineSimilarity(profileVec, candidateVec);

    // Collaborative Score
    let collabScore = 0;
    if (similarUserIds.length > 0) {
      const interactionCount = event.eventMetrics.length;
      collabScore = interactionCount / similarUserIds.length;
    }

    // Hybrid Score (Average)
    const hybridScore = (contentScore + collabScore) / 2;

    const { eventMetrics, ...eventData } = event;
    return { ...eventData, recommendationScore: hybridScore };
  });

  // 6. Sort by Hybrid Score Descending
  const sortedEvents = quickSort(eventsWithScores);

  // 7. Debug: Log top keywords and scores (visible in server console)
  const topKeywords = Object.entries(profileVec)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([term, weight]) => `${term}(${weight.toFixed(2)})`);

  if (topKeywords.length > 0) {
    console.log(`\n📊 User ${userId.slice(0, 8)} → Top keywords: [${topKeywords.join(', ')}]`);
  }
  console.log(`📊 Recommendations (top 3):`);
  sortedEvents.slice(0, 3).forEach((e: any, i: number) => {
    console.log(`   ${i + 1}. "${e.title}" → hybrid: ${e.recommendationScore.toFixed(3)}`);
  });

  // 8. Return Top 10
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
