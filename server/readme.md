# Hybrid Recommendation System (Content-Based + Collaborative)

This recommendation system combines **Content-Based Filtering** and **Collaborative Filtering** to suggest events to users. The final recommendation is based on a **weighted hybrid scoring system**.

---

## **1. Goal**

- Suggest events to a user based on:
  1. **Content-Based Recommendation** → matches user interests with event metadata.
  2. **Collaborative Filtering** → recommends events liked by similar users.
- Returns the **top N recommended events** via API.

---

## **2. Database Requirements**

Tables used:

- `Event` → stores event metadata and score  
- `UserInteraction` → logs each user click on an event  
- `EventMetrics` → stores event popularity: views, registrations, attendance  

Optional:

- `UserEmbedding` & `EventEmbedding` → for future ML-based enhancements  
- `UserSimilarity` → caches top similar users for collaborative filtering  

---

## **3. Content-Based Recommendation**

**Workflow:**

1. Fetch events clicked by the target user.  
2. Compute the **average score** of events clicked by the user:  

\[
\text{UserAvgScore} = \frac{\sum_{i=1}^{n} \text{EventScore}_i}{n}
\]

3. Compute similarity of other events to this user average:  

\[
\text{ContentSimilarity(Event)} = 1 - |\text{EventScore} - \text{UserAvgScore}|
\]

4. Rank events by `ContentSimilarity` using **Quick Sort**.  
5. Select top N events → `contentBasedEvents`.

---

## **4. Collaborative Filtering**

**Workflow:**

1. Fetch all events clicked by the target user → `TargetEvents`.  
2. Fetch all other users who clicked any of the `TargetEvents`.  
3. Group clicks by user and calculate **Jaccard similarity**:

\[
\text{Similarity(UserA, UserB)} = \frac{|EventsA \cap EventsB|}{|EventsA \cup EventsB|}
\]

4. Select **top K similar users**.  
5. Recommend events clicked by similar users that the target user hasn’t clicked.  
6. Rank by frequency or similarity score → `collaborativeEvents`.

---

## **5. Hybrid Recommendation Formula**

Combine **content-based** and **collaborative scores** into a **final weighted score**:

\[
\text{FinalScore(Event)} = \alpha \cdot \text{ContentScore} + \beta \cdot \text{CollaborativeScore}
\]

- \(\alpha\) = weight for content-based score (e.g., 0.6)  
- \(\beta\) = weight for collaborative score (e.g., 0.4)  
- Rank events by `FinalScore(Event)` → top N recommendations.

---

## **6. Optional Enhancements**

1. **Popularity / Trending Factor:**  

\[
\text{PopularityScore(Event)} = \frac{\text{TotalViews}}{\text{CurrentTime} - \text{CreatedAt} + 1}
\]

Weighted hybrid with popularity:

\[
\text{FinalScore(Event)} = \alpha \cdot \text{ContentScore} + \beta \cdot \text{CollaborativeScore} + \gamma \cdot \text{PopularityScore}
\]

2. **New Users:** Show top N popular events until the user has interactions.  
3. **Caching:** Save top recommendations per user in Redis for fast API response.

---

## **7. API Design**

**Endpoint:**



### GET /api/recommendations/:userId

**Request Example:**

{
  "userId": "U1",
  "limit": 10
}

**Request Example:**

{
  "userId": "U1",
  "recommendedEvents": [
    { "eventId": "E10", "title": "AI Workshop", "score": 9.2 },
    { "eventId": "E23", "title": "Hackathon 2026", "score": 8.8 },
    { "eventId": "E15", "title": "Webinar on Cloud", "score": 8.6 }
  ]
}


###  Activity Flow Diagram
User Clicks Event ---> Update UserInteraction & User Avg Score
         |
         v
   User Requests Recommendations API
         |
         v
 -------------------------------
 | Content-Based Score         |
 | - Compare user avg score    |
 |   with all events           |
 | - Compute ContentSimilarity |
 -------------------------------
         |
         v
 -------------------------------
 | Collaborative Score         |
 | - Find similar users        |
 | - Recommend their events    |
 | - Compute Jaccard similarity|
 -------------------------------
         |
         v
 -------------------------------
 | Combine Scores              |
 | FinalScore = alpha*Content +|
 |              beta*Collaborative
 -------------------------------
         |
         v
 Return FinalRecommendedEvents


### Update Points

Event Creation / Update: Compute EventScore for content-based logic.

User Interaction: Update UserAvgScore for content-based logic.

Periodic Job (Optional): Recompute collaborative similarity and update cached recommendations.

### Summary

Hybrid system = Content-Based + Collaborative Filtering

Flexible → can add popularity, trending, or ML embeddings later

Efficient → works with your current Prisma single-row user click table

API → delivers top N events personalized for each user
