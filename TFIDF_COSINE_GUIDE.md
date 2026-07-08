# TF-IDF & Cosine Similarity — Content-Based Filtering Guide

> **Purpose:** Master the content-based filtering portion of your hybrid recommendation system so you can explain and defend it during your final year project viva.
>
> **Prerequisites:** You already understand collaborative filtering. This document covers only the content-based side and how it integrates into the hybrid pipeline.

---

# Section 1 — Understanding TF-IDF

## 1.1 The Problem TF-IDF Solves

Imagine you have 100 events in your database. A user clicks on three events:

- "Build an AI Chatbot with Python"
- "Deep Learning for Computer Vision"
- "Python for Data Science"

Now you want to recommend more events. The question is: **How do you measure how similar a candidate event is to what the user liked?**

**Naive approach — keyword matching:** Check if the candidate event contains the same words. "Python for Beginners" shares the word "Python" → somewhat similar. "Blockchain Fundamentals" shares no words → not similar.

**Problem with naive keyword matching:**
- All keywords are treated equally. The word "event" appears in every event title — it tells you nothing about similarity, yet a naive matcher counts it.
- Rare, distinctive words like "TensorFlow" or "blockchain" should matter more than common words like "learn" or "workshop."
- Short descriptions have fewer words, so they get lower scores unfairly.

**TF-IDF solves this** by weighting words based on how **rare** they are across all events. A word that appears in every event gets near-zero weight. A word that appears in only one event gets high weight. This produces a **vector** for each event that captures what makes it distinctive.

---

## 1.2 Core Vocabulary

| Term | Definition | In your project |
|---|---|---|
| **Document** | A single piece of text | One event's `title + description` |
| **Corpus** | The collection of all documents | All `PUBLISHED` events in your database |
| **Term** | A single word after tokenization | One entry in the array returned by `.split(/[^a-z0-9]+/)` |
| **Vocabulary** | The set of all unique terms across all documents | Every distinct word that appears in any event's title or description |
| **TF** | Term Frequency — how often a term appears in a single document | `count of term in event / max count in that event` |
| **IDF** | Inverse Document Frequency — how rare a term is across the corpus | `log(total events / events containing this term)` |
| **TF-IDF vector** | A vector where each dimension is a term, and the value is TF × IDF | The output of `tfidf.listTerms(index)` |

---

## 1.3 Term Frequency (TF)

**Intuition:** If a word appears many times in an event's title and description, it's probably important to that event.

**Simple definition:** TF measures how frequently a term occurs in a document.

**Formula used in your project:**

```
TF(term, document) = 0.5 + (0.5 × raw_count) / max_raw_count
```

Where:
- `raw_count` = how many times the term appears in this document
- `max_raw_count` = the count of the most frequent term in this document

**Why 0.5?** This is called **sublinear TF scaling**. Without it, a term that appears 10 times would have 10× the weight of a term that appears once. The 0.5 formula compresses this — a term appearing 10× might only get 2× the weight. This prevents frequently repeated words from dominating.

**Numerical example:**

Consider the event description: *"Python Python Python workshop workshop learn"*

| Term | raw_count | max_raw_count | TF calculation | TF value |
|---|---|---|---|---|
| python | 3 | 3 | `0.5 + 0.5 × 3/3` | **1.0** |
| workshop | 2 | 3 | `0.5 + 0.5 × 2/3` | **0.83** |
| learn | 1 | 3 | `0.5 + 0.5 × 1/3` | **0.67** |

---

## 1.4 Inverse Document Frequency (IDF)

**Intuition:** A word that appears in almost every event (like "event" or "learn") is not useful for distinguishing one event from another. A word that appears in only a few events (like "blockchain" or "tensorflow") is highly distinctive.

**Simple definition:** IDF measures how rare a term is across the entire corpus.

**Formula used in your project:**

```
IDF(term) = log(1 + (N - DF + 0.5) / (DF + 0.5))
```

Where:
- `N` = total number of documents in the corpus
- `DF` = number of documents containing this term

This is the **BM25-style IDF** formula. It's a smoothed version that prevents division by zero and handles edge cases gracefully.

**Alternative formula (more intuitive for explanation):**

```
IDF(term) = log(N / DF)
```

This is simpler to explain. If a word appears in 1 of 100 documents, IDF = log(100/1) = 4.6. If it appears in 50 of 100 documents, IDF = log(100/50) = 0.69.

**Numerical example:**

| Term | Documents containing it (DF) | Total documents (N) | IDF (simple) | IDF (your project) |
|---|---|---|---|---|
| event | 95 / 100 | 100 | log(100/95) = **0.05** | log(1 + 5.5/95.5) = **0.06** |
| learn | 60 / 100 | 100 | log(100/60) = **0.51** | log(1 + 40.5/60.5) = **0.51** |
| python | 20 / 100 | 100 | log(100/20) = **1.61** | log(1 + 80.5/20.5) = **1.41** |
| tensorflow | 2 / 100 | 100 | log(100/2) = **3.91** | log(1 + 98.5/2.5) = **3.61** |
| blockchain | 1 / 100 | 100 | log(100/1) = **4.61** | log(1 + 99.5/1.5) = **4.21** |

Notice how:
- **"event"** gets near-zero weight. It tells you nothing about what the event is about.
- **"python"** gets moderate weight. It's somewhat distinctive — not all events are about Python.
- **"tensorflow"** gets high weight. If an event mentions TensorFlow, that's very distinctive.
- **"blockchain"** gets the highest weight. Almost no events mention it, so if one does, it's extremely distinctive.

---

## 1.5 Why TF × IDF?

**TF = how important the term is to THIS document.**
**IDF = how rare the term is across ALL documents.**

If you use only TF: common words like "event" or "learn" would dominate every vector. Every event would look similar.

If you use only IDF: every document that mentions "blockchain" would get the same score, regardless of whether it mentions it once or ten times.

**Multiplying them** gives you: *"This term is important to this document AND it's rare across the corpus."*

```
TF-IDF = TF × IDF
```

**Numerical example (combining the two tables above):**

Event: *"Python Python Python workshop workshop learn"*

| Term | TF | IDF (your project) | TF-IDF |
|---|---|---|---|
| python | 1.00 | 1.41 | **1.41** |
| workshop | 0.83 | 0.51 | **0.42** |
| learn | 0.67 | 0.06 | **0.04** |

"python" dominates because it appears frequently in this document AND is relatively rare across the corpus. "learn" is nearly zero because it appears everywhere and tells you nothing distinctive.

---

## 1.6 Why Does TF-IDF Produce Vectors?

A **vector** is just an ordered list of numbers. For TF-IDF, each position in the vector corresponds to a term in the vocabulary, and the value at that position is the TF-IDF weight.

```
Vocabulary: ["ai", "blockchain", "event", "learn", "python", "tensorflow", "workshop"]

Event A: "AI Python workshop" → Vector: [1.2, 0, 0, 0, 1.4, 0, 0.4]
Event B: "Blockchain workshop" → Vector: [0, 2.1, 0, 0, 0, 0, 0.4]
Event C: "Learn Python AI"     → Vector: [1.2, 0, 0, 0.06, 1.4, 0, 0]
```

Notice:
- Most values are 0 (the vocabulary has many terms, but each event uses few of them)
- Non-zero values capture what makes each event distinctive
- Events A and C share "ai" and "python" → their vectors point in similar directions
- Event B shares nothing with C except "workshop" → their vectors are nearly perpendicular

This vector representation is what allows us to compute **cosine similarity** (covered in Section 2).

---

## 1.7 Tokenization in Your Project

Your project uses this tokenizer (`tfidf.ts:9-11`):

```typescript
function tokenize(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 0);
}
```

Step by step:

1. **toLowerCase()** — converts everything to lowercase so "Python" and "python" match
2. **split(/[^a-z0-9]+/)** — splits on anything that isn't a letter or number. This removes punctuation, spaces, hyphens, etc.
3. **filter(t => t.length > 0)** — removes empty strings from the result

**Example:**

Input: *"Build an AI Chatbot with Python!"*

After `.toLowerCase()`: `"build an ai chatbot with python!"`

After `.split(/[^a-z0-9]+/)`: `["build", "an", "ai", "chatbot", "with", "python"]`

After `.filter(...)`: `["build", "an", "ai", "chatbot", "with", "python"]`

Note: Common English stop words like "an" and "with" are still present here. They survive tokenization. However, TF-IDF naturally handles them — since they appear in almost every document, their IDF is near zero, so their contribution to the vector is negligible.

---

## 1.8 The `natural.TfIdf` Library

Your project uses the `natural` npm package's `TfIdf` class. When you call:

```typescript
tfidf.addDocument(text);
```

It internally:
1. Tokenizes the text (similar to the tokenizer above)
2. Counts term frequencies for this document
3. Updates its global document frequency counts

When you call:

```typescript
tfidf.listTerms(index);
```

It returns an array of `{ term: string, tfidf: number }` objects, each representing one term's TF-IDF weight in the document at that index. The array is sorted by TF-IDF weight descending (highest weight first).

**Key point:** The `natural` library handles all the complexity of tracking term frequencies across documents and computing IDF values. You don't need to implement TF-IDF from scratch — the library does it for you, exactly like `sklearn.feature_extraction.text.TfidfVectorizer` does in Python.

---

## Section 1 Summary

| Concept | Key Takeaway |
|---|---|
| TF | How often a word appears in this event |
| IDF | How rare a word is across all events |
| TF-IDF | TF × IDF — importance of a word to this event, adjusted by rarity |
| Vector | An event becomes a list of TF-IDF weights, one per term in the vocabulary |
| `natural.TfIdf` | The library that computes all of this for you |

---

# Section 2 — Understanding Cosine Similarity

## 2.1 What Is a Vector?

A vector is an arrow in multidimensional space. It has both **direction** and **magnitude**.

In your project:
- **Each event** is a vector in a space where every dimension is a term from the vocabulary
- **Each user** is also a vector — the average of all event vectors they clicked
- The **direction** of the vector represents *what topics the event/user is about*
- The **magnitude** represents *how much content the event has*

**Visual analogy (3-term vocabulary):**

```
Vocabulary: ["python", "blockchain", "workshop"]

Event A: "Python workshop"
Vector A: [python=1.4, blockchain=0, workshop=0.4]
         → direction: mostly python, slightly workshop
         
Event B: "Blockchain workshop"  
Vector B: [python=0, blockchain=2.1, workshop=0.4]
         → direction: mostly blockchain, slightly workshop

Event C: "Python AI" (but AI not in vocabulary so ignored)
Vector C: [python=1.4, blockchain=0, workshop=0]
         → direction: entirely python
```

**ASCII diagram of these vectors in 3D space:**

```
          blockchain
              |
              |  * Event B (blockchain + workshop)
              | /|
             / | 
            /  |  
    python <---*------*---> workshop
           |   A    C
           |
           |
```

Event A and Event C both point toward "python" — they're close in direction. Event B points toward "blockchain" — it's far from A and C.

---

## 2.2 Why Users Become Vectors

When a user clicks multiple events, we average their TF-IDF vectors:

```
userProfile = (Vector_A + Vector_B + Vector_C) / 3
```

This produces a single vector that represents "the centroid of what this user likes."

**Example:**

User clicks three events:

| Event | Vector |
|---|---|
| "AI Chatbot with Python" | `{ai:1.2, chatbot:2.1, python:1.4}` |
| "Python for Data Science" | `{python:1.4, data:1.8, science:1.6}` |
| "Deep Learning with AI" | `{deep:2.0, learning:1.5, ai:1.2}` |

**User profile vector** (average of the three):

```
{ai: (1.2 + 0 + 1.2)/3 = 0.8, 
 chatbot: (2.1 + 0 + 0)/3 = 0.7,
 python: (1.4 + 1.4 + 0)/3 = 0.93,
 data: 0.6, science: 0.53,
 deep: 0.67, learning: 0.5}
```

This user profile now represents a user who likes AI, Python, and data-related content.

---

## 2.3 Dot Product

The **dot product** measures how much two vectors point in the same direction.

**Formula:**

```
A · B = Σ(A[i] × B[i]) for all dimensions i
```

**Intuition:** Multiply corresponding dimensions, then sum. If both vectors have high values in the same dimensions, the dot product is high. If they have high values in completely different dimensions, the dot product is low.

**Numerical example:**

```
Vector A: [python=1.4, blockchain=0, workshop=0.4]
Vector B: [python=0, blockchain=2.1, workshop=0.4]

A · B = (1.4 × 0) + (0 × 2.1) + (0.4 × 0.4) = 0 + 0 + 0.16 = 0.16
```

A and B share only "workshop" — their dot product is low.

```
Vector A: [python=1.4, blockchain=0, workshop=0.4]
Vector C: [python=1.4, blockchain=0, workshop=0]

A · C = (1.4 × 1.4) + (0 × 0) + (0.4 × 0) = 1.96 + 0 + 0 = 1.96
```

A and C both have "python" — their dot product is much higher.

---

## 2.4 Vector Magnitude

The **magnitude** (length) of a vector is the square root of the sum of squared values.

**Formula:**

```
|A| = √(Σ A[i]²)
```

**Intuition:** A vector with many high TF-IDF values is longer than a vector with few low values. A long event description with many distinctive keywords produces a longer vector than a short, generic description.

**Numerical example:**

```
Vector A: [python=1.4, blockchain=0, workshop=0.4]
|A| = √(1.4² + 0² + 0.4²) = √(1.96 + 0 + 0.16) = √2.12 = 1.46
```

```
Vector C: [python=1.4, blockchain=0, workshop=0]
|C| = √(1.4² + 0² + 0²) = √1.96 = 1.40
```

---

## 2.5 Cosine Similarity Formula

**Formula:**

```
cosineSimilarity(A, B) = (A · B) / (|A| × |B|)
```

This is the **dot product divided by the product of magnitudes**.

**Intuition:** The dot product measures raw overlap. Dividing by magnitudes normalizes it so that the result depends only on the **angle** between the vectors, not their lengths.

- **1.0** = vectors point in exactly the same direction (identical topic focus)
- **0.7** = vectors are at 45° angle (moderate topic overlap)
- **0.0** = vectors are perpendicular (no topic overlap)
- **Negative** = vectors point in opposite directions (in practice, TF-IDF vectors are non-negative, so this doesn't happen)

**Why 0 to 1 in your implementation:** TF-IDF vectors never contain negative values (term frequencies and IDF are always positive). Cosine similarity of non-negative vectors ranges from 0 (no overlap) to 1 (identical direction). Your implementation explicitly clamps this:

```typescript
return Math.max(0, dotProduct / (magA * magB));
```

The `Math.max(0, ...)` ensures that floating-point rounding errors don't produce tiny negative values.

---

## 2.6 Numerical Worked Example

Let's trace through a complete example using your project's actual functions.

**Vocabulary (simplified):** `["ai", "blockchain", "python", "workshop"]`

**Event vectors from TF-IDF:**

```
Event 1: "AI Python Workshop"          → [1.2, 0, 1.4, 0.4]
Event 2: "Blockchain Workshop"         → [0, 2.1, 0, 0.4]  
Event 3: "Advanced AI with Python"     → [1.2, 0, 1.4, 0]
```

**User clicks:** Event 1 and Event 3

**Step 1 — User profile vector:**

```
profile = (Event1 + Event3) / 2
        = ([1.2, 0, 1.4, 0.4] + [1.2, 0, 1.4, 0]) / 2
        = [2.4, 0, 2.8, 0.4] / 2
        = [1.2, 0, 1.4, 0.2]
```

**Step 2 — Cosine similarity between user profile and Event 2:**

```
profile = [1.2, 0, 1.4, 0.2]
Event 2 = [0, 2.1, 0, 0.4]

dot = (1.2 × 0) + (0 × 2.1) + (1.4 × 0) + (0.2 × 0.4) = 0 + 0 + 0 + 0.08 = 0.08

|profile| = √(1.2² + 0² + 1.4² + 0.2²) = √(1.44 + 0 + 1.96 + 0.04) = √3.44 = 1.85
|Event 2| = √(0² + 2.1² + 0² + 0.4²) = √(0 + 4.41 + 0 + 0.16) = √4.57 = 2.14

cosine = 0.08 / (1.85 × 2.14) = 0.08 / 3.96 = 0.02
```

**Result:** contentScore = **0.02** (almost 0). The user likes AI and Python. Event 2 is about blockchain. No keyword overlap → not recommended.

**Step 3 — Cosine similarity between user profile and a new event:**

```
New Event: "AI for Beginners Workshop"
Vector: [1.2, 0, 0, 0.4]

dot = (1.2 × 1.2) + (0 × 0) + (1.4 × 0) + (0.2 × 0.4) = 1.44 + 0 + 0 + 0.08 = 1.52

|New| = √(1.2² + 0² + 0² + 0.4²) = √(1.44 + 0 + 0 + 0.16) = √1.60 = 1.26

cosine = 1.52 / (1.85 × 1.26) = 1.52 / 2.33 = 0.65
```

**Result:** contentScore = **0.65**. The new event shares "ai" and "workshop" with the user profile. Strong match.

---

## 2.7 Visual Intuition

```
                     User Profile Direction
                            ↑
                            |  * New Event (AI workshop)
                            | /  cosine = 0.65
                           / 
                          / 
                         *────→ (python direction)
                         User Profile
                         
                         
                    * Event 2 (blockchain)
                    ↑
                    | cosine ≈ 0
                    |
                    |
                    |
   (ai/python) ←────┼────────────────────→ (workshop)
                    |
                    |
```

The user profile points toward "ai" and "python". Events pointing in a similar direction (like "AI for Beginners Workshop") get high cosine similarity. Events pointing in a completely different direction (like "Blockchain Workshop") get near-zero cosine similarity.

---

## 2.8 Why Cosine Similarity Over Euclidean Distance?

**Euclidean distance** measures the straight-line distance between two points in vector space. It's the intuitive "how far apart are they?"

**Problem with Euclidean distance for text:**

```
Document A: "Python AI"           → Vector: [python=1.4, ai=1.2]
Document B: "Python Python AI AI" → Vector: [python=2.0, ai=1.8]
Document C: "Blockchain"          → Vector: [blockchain=2.1]
```

Euclidean distance between A and B is large (they have very different magnitudes, even though they're about the same topic).

Cosine similarity between A and B ≈ 1.0 (they point in the same direction — same topic).

**For text, the direction (what topics?) matters more than the magnitude (how much text?).** Cosine similarity captures this. Euclidean distance does not.

---

## 2.9 Complexity Analysis

| Operation | Time | Space |
|---|---|---|
| Computing one cosine similarity | O(V) where V = vocabulary size | O(V) for storing two vectors |
| Computing N cosine similarities (for N candidate events) | O(N × V) | O(V) for user profile + O(V × N) worst case |

In practice, TF-IDF vectors are **sparse** — most values are 0. Your implementation exploits this by iterating only over the union of non-zero keys:

```typescript
const allTerms = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
```

This makes the actual runtime proportional to the number of **non-zero terms**, which is typically much smaller than the full vocabulary.

---

## Section 2 Summary

| Concept | Key Takeaway |
|---|---|
| Vector | Event or user represented as a list of TF-IDF weights |
| User Profile | Average of all clicked event vectors |
| Dot Product | Sum of dimension-wise products — measures raw overlap |
| Magnitude | Length of the vector |
| Cosine Similarity | Dot product divided by magnitudes — measures angle, not distance |
| Range | 0 to 1 (non-negative vectors) |
| Why cosine | Direction (topic) matters more than magnitude (text length) |

---

# Section 3 — My Project Implementation

## 3.1 File Structure

```
server/src/Algorithms/
├── tfidf.ts                     ← TF-IDF corpus, vectors, cosine similarity
├── averageRecomendationScore.ts ← Hybrid recommendation orchestrator
```

---

## 3.2 `ensureCorpus()`

**Purpose:** Build the TF-IDF corpus from all published events. This runs once (lazy initialization) and caches the result.

**Declaration:**
```typescript
export async function ensureCorpus(
  events: Array<{ id: string; title: string; description: string }>
): Promise<void>
```

**Input:** An array of event objects. Each must have `id`, `title`, and `description`.

**Output:** Nothing (void). Side effect: populates the in-memory TF-IDF index and event index map.

**Internal working (line by line):**

```
if (isBuilt) return;
```
Guard clause. If the corpus was already built in a previous call, skip everything. This is what makes it "lazy" — the first request to any recommendation endpoint triggers the corpus build, and subsequent requests reuse it.

```
tfidf = new TfIdf();
```
Creates a new instance of the TF-IDF index from the `natural` library. This object will store all term frequencies and document frequencies internally.

```
eventIndexMap = new Map();
```
Creates a mapping from event ID (a UUID string from the database) to document index (a number representing the document's position in the TF-IDF index). This is needed because `tfidf.listTerms(index)` requires a numeric index, but you want to look up events by their database ID.

```
events.forEach((event, index) => {
  const text = `${event.title} ${event.description}`.toLowerCase();
  tfidf!.addDocument(text);
  eventIndexMap!.set(event.id, index);
});
```
For each event:
1. Concatenate title and description into a single string
2. Convert to lowercase
3. Add to the TF-IDF index as a document
4. Record the mapping from event ID to index position

The `!` (non-null assertion) tells TypeScript that `tfidf` and `eventIndexMap` are definitely assigned at this point. They were set two lines above.

```
isBuilt = true;
```
Set the flag so subsequent calls skip the build process.

**Time complexity:** O(E × L) where E = number of events and L = average text length. Tokenization is O(L) per event.

**Space complexity:** O(V) where V = vocabulary size (stored in the TF-IDF index) + O(E) for the event index map.

---

## 3.3 `getDocumentVector()`

**Purpose:** Retrieve the TF-IDF vector for a single event.

**Declaration:**
```typescript
export function getDocumentVector(eventId: string): Record<string, number>
```

**Input:** An event ID string.

**Output:** A record (dictionary) where keys are terms and values are TF-IDF weights. Returns an empty object `{}` if the event ID is not found in the index.

**Internal working (line by line):**

```
const idx = eventIndexMap!.get(eventId);
if (idx === undefined) return {};
```
Look up the event ID in the index map. If not found (e.g., the event was created after the corpus was built), return an empty vector.

```
const terms = tfidf!.listTerms(idx);
```
Call the `natural` library to get all terms with their TF-IDF weights for the document at position `idx`. This returns an array like `[{term: "python", tfidf: 1.41}, {term: "workshop", tfidf: 0.42}]`.

```
const vector: Record<string, number> = {};
terms.forEach(t => { vector[t.term] = t.tfidf; });
```
Convert the array format into a dictionary format where terms are keys and weights are values. This dictionary format is what `cosineSimilarity()` expects.

**Time complexity:** O(T) where T = number of terms in this document (typically 50-200 for event descriptions).

**Space complexity:** O(T) for the output vector.

---

## 3.4 `getUserProfileVector()`

**Purpose:** Build a user profile vector by averaging the TF-IDF vectors of all events the user clicked.

**Declaration:**
```typescript
export function getUserProfileVector(clickedEventIds: string[]): Record<string, number>
```

**Input:** An array of event ID strings (the events this user has clicked).

**Output:** A record where keys are terms and values are the **average** TF-IDF weight across all clicked events. Returns an empty object if the array is empty or no events are found in the index.

**Internal working (line by line):**

```
if (clickedEventIds.length === 0) return {};
```
Guard clause. If the user hasn't clicked anything, return an empty profile. This will make all content scores zero, and the recommendation will rely entirely on collaborative filtering.

```
const profile: Record<string, number> = {};
```
Initialize an empty dictionary for accumulating term weights.

```
clickedEventIds.forEach(eventId => {
  const idx = eventIndexMap!.get(eventId);
  if (idx === undefined) return;
```
For each clicked event: look up its index. If it's not in the index (shouldn't happen normally, but handles edge cases), skip it.

```
  const terms = tfidf!.listTerms(idx);
  terms.forEach(t => {
    profile[t.term] = (profile[t.term] || 0) + t.tfidf;
  });
});
```
Get the event's TF-IDF vector and add each term's weight to the profile accumulator. The `|| 0` handles the case where the term hasn't been seen before (it's undefined, so default to 0).

After this loop, `profile` contains the **sum** of all clicked event vectors.

```
for (const term of Object.keys(profile)) {
  profile[term] = (profile[term] as number) / clickedEventIds.length;
}
```
**Divide by the count to get the average.** Each term's accumulated weight is divided by the number of clicked events. This produces the **centroid** — the average vector.

**Time complexity:** O(C × T) where C = number of clicked events and T = average terms per event.

**Space complexity:** O(V') where V' = union of terms across all clicked events (typically a subset of the full vocabulary).

---

## 3.5 `cosineSimilarity()`

**Purpose:** Compute the cosine similarity between two sparse vectors.

**Declaration:**
```typescript
export function cosineSimilarity(
  vecA: Record<string, number>,
  vecB: Record<string, number>
): number
```

**Input:** Two records (dictionaries) where keys are terms and values are weights. These are sparse — only non-zero terms are stored.

**Output:** A number between 0 and 1 representing the cosine of the angle between the two vectors.

**Internal working (line by line):**

```
let dotProduct = 0;
let magA = 0;
let magB = 0;
```
Initialize accumulators for the dot product and the squared magnitudes.

```
const allTerms = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
```
Create a set containing the union of all terms from both vectors. This ensures we only iterate over terms that exist in at least one vector, avoiding wasted computation on zero entries.

```
for (const term of allTerms) {
  const a = vecA[term] || 0;
  const b = vecB[term] || 0;
  dotProduct += a * b;
  magA += a * a;
  magB += b * b;
}
```
For each term in the union:
- Get the weight from each vector (default to 0 if not present)
- Add the product to the dot product accumulator
- Add the squares to the magnitude accumulators

The `|| 0` handles the case where a term exists in one vector but not the other (the lookup returns `undefined`, so we treat it as 0).

```
magA = Math.sqrt(magA);
magB = Math.sqrt(magB);

if (magA === 0 || magB === 0) return 0;
return Math.max(0, dotProduct / (magA * magB));
```
Take the square root of the squared magnitudes. If either vector is empty (magnitude = 0), return 0 (no similarity). Otherwise, divide the dot product by the product of magnitudes and clamp to non-negative.

**Time complexity:** O(U) where U = number of terms in the union of both vectors (typically 50-400).

**Space complexity:** O(U) for the allTerms set.

---

## 3.6 `averageRecommendationScore()`

**Purpose:** The main orchestrator. Produces the final hybrid recommendation score for all candidate events.

**Declaration:**
```typescript
export default async function averageRecomendationScore(userId: string): Promise<any[]>
```

**Full flow (already detailed above):**

1. Build TF-IDF corpus from all published events
2. Get user's click history → extract event IDs
3. Build user profile vector from clicked events
4. Find similar users (collaborative filtering)
5. Fetch candidate upcoming events
6. For each event: compute content score + collaborative score → hybrid
7. Sort by hybrid score descending
8. Return top 10

**Key integration point:**

```typescript
const profileVec = getUserProfileVector(userEventIds);
```
Content-based filtering starts here. The user's click history is converted into a TF-IDF vector.

```typescript
const candidateVec = getDocumentVector(event.id);
const contentScore = cosineSimilarity(profileVec, candidateVec);
```
For each candidate event, compute cosine similarity between the user profile and the event vector.

```typescript
const hybridScore = (contentScore + collabScore) / 2;
```
Equal-weight combination with collaborative score.

---

# Section 4 — End-to-End Recommendation Flow

## 4.1 Complete Pipeline Diagram

```
                    ┌──────────────────────────────┐
                    │   Organization creates event  │
                    └──────────────┬───────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │   Event saved to database     │
                    │   with title, description,    │
                    │   category, tags, etc.        │
                    └──────────────┬───────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                                                 │
         ▼                                                 ▼
┌──────────────────┐                            ┌──────────────────┐
│  First call to   │                            │  User clicks     │
│  recommend()     │                            │  an event        │
└────────┬─────────┘                            └────────┬─────────┘
         │                                               │
         ▼                                               ▼
┌──────────────────────────────────────────────────────────────┐
│  ensureCorpus(allEvents) → builds TF-IDF index from ALL      │
│  published events (lazy, runs once)                          │
│                                                              │
│  1. new TfIdf() instance created                             │
│  2. For each event: addDocument(title + " " + description)   │
│  3. eventIndexMap[eventId] = numeric index                   │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  getUserProfileVector(clickedEventIds)                       │
│                                                              │
│  1. For each clicked event ID:                               │
│     - Look up numeric index in eventIndexMap                 │
│     - Call tfidf.listTerms(index) → get TF-IDF vector        │
│     - Accumulate term weights into profile dictionary        │
│  2. Divide all accumulated weights by clicked event count    │
│  3. Return average vector (the "user profile")              │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  getDocumentVector(eventId) for each candidate event         │
│                                                              │
│  1. Look up numeric index in eventIndexMap                   │
│  2. Call tfidf.listTerms(index) → get TF-IDF vector         │
│  3. Convert to Record<string, number> format                 │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  cosineSimilarity(userProfile, eventVector)                  │
│                                                              │
│  contentScore = dotProduct(userProfile, eventVector)         │
│               / ( |userProfile| × |eventVector| )           │
│                                                              │
│  Result: number between 0 and 1                              │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Collaborative Score                                         │
│                                                              │
│  collabScore = (similar users who interacted with event)     │
│              / (total similar users)                         │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  hybridScore = (contentScore + collabScore) / 2              │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  QuickSort by hybridScore descending → top 10                │
└──────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────┐
│  Return sorted events to frontend                            │
└──────────────────────────────────────────────────────────────┘
```

## 4.2 Detailed Stage Explanation

### Stage 1: Event Created
When an organization creates an event, it's saved to the `Event` table with fields including `title`, `description`, `category`, `tags`, and `status`. Only events with `status = "PUBLISHED"` are included in the recommendation corpus.

### Stage 2: Corpus Built
The first time any user requests recommendations, `ensureCorpus()` is called. It fetches all published events from the database and feeds their `title + description` into the `natural.TfIdf` instance. This builds the term frequency and document frequency tables internally.

**Important:** The corpus is built **lazily** on the first request, not at server startup. This means if no recommendations are requested, no corpus is built. Subsequent requests reuse the cached corpus.

### Stage 3: TF-IDF Vector Generated
For each event in the corpus, the `natural` library maintains its term frequency counts and TF-IDF vector. When `tfidf.listTerms(index)` is called, it computes TF-IDF on the fly using the stored term frequencies and the global document frequencies.

### Stage 4: User Clicks Events
When a user clicks on an event, an `EventMetric` record is created with `hasClicked: true`. This record links the user to the event. Over time, each user accumulates a history of clicked events.

### Stage 5: User Profile Vector Created
When recommendations are requested, `getUserProfileVector()` retrieves the TF-IDF vectors of all events the user clicked and averages them. This produces a single vector representing the user's content preferences.

### Stage 6: Cosine Similarity Calculated
For each upcoming published event, `cosineSimilarity()` computes the cosine of the angle between the user profile vector and the event's TF-IDF vector. This is the content-based score.

### Stage 7: Content Score Generated
The cosine similarity value (0 to 1) becomes the `contentScore`. A score of 0 means no keyword overlap; a score of 1 means identical keyword profiles.

### Stage 8: Collaborative Score Generated
The system finds users who clicked overlapping events. For each event, `collabScore` = proportion of those similar users who engaged with it.

### Stage 9: Hybrid Score Calculated
The hybrid score is a simple average: `(contentScore + collabScore) / 2`. Both scores range from 0 to 1, so the hybrid also ranges from 0 to 1.

### Stage 10: Events Sorted
All candidate events are sorted by their hybrid score in descending order using QuickSort.

### Stage 11: Top Recommendations Returned
The top 10 events are returned to the frontend for display.

---

# Section 5 — Why This Design?

## 5.1 Why TF-IDF Instead of Rule-Based Scoring?

**Rule-based scoring** (your original approach):

```typescript
eventScore = (textScore + categoryScore + tagsScore + premiumScore + thumbnailScore) / 5;
contentScore = 1 - |userScore - eventScore|;
```

This scored events based on arbitrary heuristics (word count, category prestige, has image, etc.).

| Aspect | Rule-based | TF-IDF |
|---|---|---|
| **What it captures** | Event quality (how well-described, prestigious category) | Event topic (what keywords distinguish it) |
| **Weakness** | A Hackathon with short description scores same as a Webinar with long description | Doesn't capture event quality at all |
| **Strength** | Simple, fast, no library needed | Captures actual topic similarity |
| **Defensibility** | Hard to justify scoring rules | Well-established information retrieval technique |

**Why TF-IDF wins:** Rule-based scoring conflates "event quality" with "user preference." TF-IDF directly measures topical similarity between what the user clicked and what you're recommending.

## 5.2 Why TF-IDF Instead of Category Matching?

**Category matching** (intermediate approach):

```typescript
contentScore = categoryCount.get(event.category) / totalClicked;
```

This only matches on category enum (HACKATHON, WORKSHOP, etc.).

| Aspect | Category matching | TF-IDF |
|---|---|---|
| **Granularity** | 7 categories | Hundreds of keywords |
| **Cross-category connections** | "AI Hackathon" ≠ "AI Webinar" (different categories) | "AI Hackathon" ≈ "AI Webinar" (both have "AI") |
| **Distinctiveness** | All events in same category get same score | Each event gets unique vector |
| **Defensibility** | Valid but shallow | Standard IR technique |

**Why TF-IDF wins:** Category matching misses cross-category topic connections. A user who clicks "AI Hackathon" and "AI Webinar" both have "AI" as a common topic, but category matching treats them as completely separate. TF-IDF captures the keyword "AI" in both.

## 5.3 Why TF-IDF Instead of Simple Keyword Matching?

Simple keyword matching (e.g., count overlapping words, no IDF weighting):

| Aspect | Simple keyword matching | TF-IDF |
|---|---|---|
| **Common words** | High weight (appear everywhere) | Near-zero weight (filtered by IDF) |
| **Rare words** | Same weight as common words | High weight (distinctive) |
| **Short vs long text** | Long text matches more (unfair advantage) | Normalized by TF formula |
| **Accuracy** | Poor | Good |

**Why TF-IDF wins:** Without IDF, the word "event" (which appears in 95% of event descriptions) would dominate similarity calculations. TF-IDF naturally suppresses it and amplifies rare, distinctive words.

## 5.4 Summary of Design Choices

| Approach | Simplicity | Accuracy | Defensibility |
|---|---|---|---|
| Rule-based scoring | ⭐⭐⭐⭐⭐ | ⭐ | ⭐ |
| Category matching | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Keyword matching | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **TF-IDF (your choice)** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

TF-IDF is the sweet spot for a final year project — complex enough to demonstrate understanding of information retrieval concepts, simple enough to implement and explain clearly.

---

# Section 6 — Weaknesses of My Implementation

## 6.1 Cold Start Problem

**Issue:** A new user with no click history has an empty profile vector. `getUserProfileVector([])` returns `{}`. Cosine similarity between an empty vector and any event vector is 0. The user gets no content-based recommendations.

Additionally, a new user has no event interactions, so `userEventIds` is empty, and `similarUserIds` is also empty. The collaborative score is 0 for all events.

**Result:** All hybrid scores are 0. The user sees events in random order (the frontend fallback handles this by shuffling).

**Future improvement:** Use a **popularity-based fallback** for new users — recommend the most popular or highest-rated events until the user builds a click history. Alternatively, ask the user to select preferred categories during signup.

## 6.2 Corpus Rebuilding

**Issue:** The TF-IDF corpus is built once when `ensureCorpus()` is first called. It is never rebuilt. Events created after this point are not in the `eventIndexMap`, so `getDocumentVector()` returns `{}` for them.

**Future improvement:** Add a mechanism to rebuild the corpus periodically (e.g., every hour) or trigger a rebuild when a new event is created. Alternatively, add new documents to the existing TF-IDF instance incrementally.

## 6.3 New Events

**Issue:** As above, new events created after the corpus is built have no TF-IDF vector and get contentScore = 0. They can still be recommended via collaborative filtering if a similar user interacts with them, but content-based filtering won't surface them.

**Future improvement:** Assign a temporary vector to new events by processing their title and description immediately. The `natural.TfIdf` class supports adding documents after initialization — the IDF values would be slightly outdated but still usable.

## 6.4 Sparse Interactions

**Issue:** If a user has clicked only 1-2 events, the user profile vector is very sparse (few terms). Cosine similarity becomes unstable — a single overlapping keyword can produce a high score that may not reflect genuine similarity.

**Example:**

```
User clicked 1 event: "AI Workshop" → profile = {ai: 1.2, workshop: 0.4}
Candidate event: "AI for Marketing" → vector = {ai: 1.2, marketing: 1.8}
cosine = (1.2 × 1.2 + 0.4 × 0)/... = 1.44/... = 0.72 → high! But user might not care about marketing.
```

**Future improvement:** Require a minimum number of clicks before using content-based scores. Below the threshold, rely only on collaborative filtering or popularity-based recommendations.

## 6.5 Equal Weighting of Clicked Events

**Issue:** All clicked events contribute equally to the user profile vector. A user who clicked an event 3 months ago and an event yesterday — both events have the same influence. There's no **temporal decay** or **frequency weighting**.

**Future improvement:** Apply recency weighting — more recent clicks contribute more to the user profile. Apply frequency weighting — events clicked multiple times should contribute more.

## 6.6 TF-IDF Cannot Understand Semantic Meaning

**Issue:** TF-IDF is a **bag-of-words** model. It treats each word as an independent token. It doesn't understand:
- Synonyms: "car" and "automobile" are completely different terms
- Word order: "Python for Data Science" and "Data Science for Python" have identical vectors
- Context: "bank" (river bank) and "bank" (financial bank) are treated as the same term

**Example of a failure case:**

```
User clicked: "Deep Learning with PyTorch"
TF-IDF profile contains: {deep, learning, pytorch}

Candidate event: "Neural Networks with PyTorch"
TF-IDF vector contains: {neural, networks, pytorch}

cosine similarity = (pytorch: high) / (slightly different terms) = moderate match
```

But semantically, these events are very similar (both about deep learning frameworks). TF-IDF misses this because "deep learning" ≠ "neural networks."

**A better event that's actually less relevant:**
```
"Advanced Deep Dive into Learning Methods"
TF-IDF vector: {advanced, deep, dive, learning, methods}
cosine similarity = (deep + learning: high) / (all terms) = very high match!
```

But this event might be about educational theory, not deep learning! TF-IDF can't distinguish because it doesn't understand meaning.

**Future improvement:** Use **word embeddings** (Word2Vec, GloVe) or **sentence embeddings** (SBERT, Sentence Transformers). These models map words to vectors where semantically similar words have similar vectors:
- `vector("car")` ≈ `vector("automobile")`
- `vector("deep" + "learning")` ≈ `vector("neural" + "network")`

This would solve the synonym problem but requires:
- Pre-trained embedding models (increased memory and dependencies)
- Embedding lookup infrastructure
- More complex vector operations

## 6.7 Scalability

**Issue:** The TF-IDF corpus and all event vectors are stored in memory. For a small project (hundreds of events), this is negligible. For millions of events, this becomes a problem.

Additionally, computing cosine similarity against every upcoming event is O(N × V) where N is the number of events. For a few hundred events, this is fast. For millions, it would need optimization.

**Future improvement:** Use **approximate nearest neighbor (ANN)** search libraries (FAISS, Annoy) to find similar vectors without brute-force comparison. Or use a vector database (Pinecone, Weaviate, pgvector).

## 6.8 Memory Usage

**Issue:** The event index map (`Map<string, number>`) stores one entry per event. The term vectors are stored implicitly in the `natural.TfIdf` instance. For your project (likely <1000 events), this uses <10 MB of memory. For production scale, it could grow significantly.

**Future improvement:** Store TF-IDF vectors in the database instead of memory. Use PostgreSQL's `vector` extension (pgvector) to store and query them directly with SQL.

## 6.9 Why SBERT or Embeddings Would Perform Better

| Aspect | TF-IDF | SBERT / Embeddings |
|---|---|---|
| **Semantic understanding** | None (bag of words) | Full (understands context and synonyms) |
| **Cross-lingual** | No | Yes (multilingual models) |
| **Handles typos** | No | Somewhat |
| **Training data** | None needed | Requires pre-trained model |
| **Model size** | N/A | 100-500 MB |
| **Speed** | Very fast | Slower (needs model inference) |
| **Library dependencies** | `natural` | `@xenova/transformers` or Python microservice |

For a final year project, TF-IDF is the right choice. SBERT would be over-engineered and harder to explain. Mention SBERT as a future enhancement to show awareness of advanced techniques.

---

# Section 7 — Viva Preparation

## 7.1 TF-IDF Questions

### Q1: What is TF-IDF and why do you use it?

**A:** TF-IDF stands for Term Frequency - Inverse Document Frequency. It's a numerical statistic that reflects how important a word is to a document in a corpus. I use it to convert event descriptions into numerical vectors, where each word gets a weight based on how frequently it appears in the event (TF) and how rare it is across all events (IDF). This allows me to measure similarity between events and build user preference profiles.

### Q2: Explain the TF formula you used.

**A:** I use sublinear TF scaling: `TF = 0.5 + (0.5 × count) / maxCount`. The 0.5 prevents zero values and compresses the range so that a word appearing 10 times doesn't get 10× the weight of a word appearing once. This is handled internally by the `natural.TfIdf` library.

### Q3: Explain the IDF formula you used.

**A:** I use a smoothed IDF formula: `log(1 + (N - DF + 0.5) / (DF + 0.5))`. This is the BM25-style IDF. N is the total number of events, and DF is the number of events containing the term. Smoothing prevents division by zero when a term appears in all documents.

### Q4: What happens if a word appears in all events?

**A:** Its IDF is near zero. For example, if "event" appears in 95 of 100 documents, IDF ≈ 0.06. When multiplied by TF, the final TF-IDF weight is negligible. This is desirable because common words carry no distinctive information.

### Q5: What happens if a word appears in only one event?

**A:** Its IDF is high. For example, if "blockchain" appears in 1 of 100 documents, IDF ≈ 4.2. The TF-IDF weight is high because the word is very distinctive to that event.

### Q6: Why multiply TF and IDF instead of adding them?

**A:** A word needs to satisfy both conditions to be important: it must appear frequently in THIS event (high TF) AND be rare across ALL events (high IDF). If either is low, the word is not distinctive. Multiplication captures this AND relationship naturally. Addition would allow a common word with high TF to still score high even if IDF is near zero.

### Q7: What is the vocabulary of your corpus?

**A:** The vocabulary is the set of all unique terms (after tokenization) that appear in any event's title or description across all published events. Each term becomes one dimension in the TF-IDF vector space.

### Q8: How do you handle punctuation and case?

**A:** I convert to lowercase and split on non-alphanumeric characters. So "Python!" becomes just "python", and "Data-Science" becomes "data" and "science" as separate terms.

### Q9: Does your tokenizer remove stop words?

**A:** No, my tokenizer does not explicitly remove stop words like "the", "and", "or". However, TF-IDF naturally handles these — since stop words appear in almost every document, their IDF is near zero, making their TF-IDF weight negligible.

### Q10: What library do you use for TF-IDF computation?

**A:** I use the `natural` npm package, specifically its `TfIdf` class. It provides `addDocument()` to add a document to the corpus and `listTerms()` to retrieve the TF-IDF vector for a document. This is equivalent to scikit-learn's `TfidfVectorizer` in Python.

## 7.2 Cosine Similarity Questions

### Q11: What is cosine similarity?

**A:** Cosine similarity measures the cosine of the angle between two vectors. For TF-IDF vectors, it measures how similar the keyword profiles of two events are, independent of their length (how much text they have).

### Q12: Why does cosine similarity range from 0 to 1 in your implementation?

**A:** TF-IDF vectors contain only non-negative values (term frequencies and inverse document frequencies are always positive). The cosine of two non-negative vectors ranges from 0 (perpendicular, no overlap) to 1 (same direction, identical profile). I explicitly clamp the result with `Math.max(0, ...)` to handle floating-point edge cases.

### Q13: Why cosine similarity over Euclidean distance?

**A:** For text, the direction of the vector (what topics?) matters more than the magnitude (how much text?). Cosine similarity isolates the angle, normalizing for document length. Euclidean distance would make a short description and a long description of the same topic appear different, even though they're about the same thing.

### Q14: How do you handle sparse vectors efficiently?

**A:** Both TF-IDF vectors are stored as dictionaries (key-value pairs) containing only non-zero terms. My cosine similarity function iterates over the union of keys from both vectors, treating any missing key as zero. This avoids wasting computation on thousands of zero entries.

### Q15: What's the time complexity of your cosine similarity function?

**A:** O(U) where U is the number of terms in the union of both vectors. In practice, this is typically 50-400 terms per event, regardless of the full vocabulary size.

## 7.3 User Profile Vector Questions

### Q16: How do you create a user profile?

**A:** I collect all event IDs the user has clicked, retrieve the TF-IDF vector for each event, then average them element-wise. The result is a single vector representing the centroid of the user's content preferences.

### Q17: Why average instead of sum?

**A:** Averaging normalizes for the number of clicks. A user who clicked 3 events would have the same scale as a user who clicked 30 events. Without averaging, frequent clickers would have disproportionately large vectors.

### Q18: What if a user clicks events on very different topics?

**A:** The averaged profile vector will be a mix of all topics, with each topic weighted by how many events the user clicked in that area. This is a limitation — a user who likes both "AI" and "Cooking" would have a profile that neither AI events nor Cooking events match well. This is one reason we use collaborative filtering alongside content-based: other users with similar patterns can help make better recommendations.

### Q19: Does the order of clicks matter?

**A:** No. All clicks are weighted equally regardless of when they happened. There's no temporal decay. This is a simplification. A production system might give more weight to recent clicks to capture changing preferences.

## 7.4 Content-Based Filtering Questions

### Q20: Define content-based filtering in your own words.

**A:** Content-based filtering recommends items based on their attributes. In my project, the attributes are keywords from event titles and descriptions, encoded as TF-IDF vectors. The system builds a user preference profile from the keywords of events they clicked, then recommends events with similar keyword profiles.

### Q21: What attributes of an event do you use for content-based filtering?

**A:** I use the event's title and description. These are converted into TF-IDF vectors, where each term is an attribute with a numerical weight. I do not use category, tags, or other metadata for the content-based score.

### Q22: How is this different from category-based matching?

**A:** Category-based matching only looks at the event's category enum (HACKATHON, WORKSHOP, etc.). Two events in the same category are treated as identical. TF-IDF can distinguish between "AI Hackathon" and "Design Hackathon" — different keywords, different vectors, different content scores. It can also connect "AI Hackathon" and "AI Workshop" through the shared keyword "AI," which category matching would miss.

## 7.5 Hybrid Recommendation Questions

### Q23: How do you combine content-based and collaborative filtering?

**A:** I use a simple average: `hybridScore = (contentScore + collabScore) / 2`. Both scores range from 0 to 1, so the result also ranges from 0 to 1. The content score measures keyword similarity to the user's profile, and the collaborative score measures what similar users engaged with.

### Q24: Why a simple average instead of a weighted average?

**A:** A weighted average would require tuning the weight parameter. Without a labeled dataset to optimize against, any weight is arbitrary. A simple 50-50 split is unbiased, easy to explain, and ensures both methods contribute equally. Future work could tune this weight based on user feedback.

### Q25: What happens if one score is much higher than the other?

**A:** The average still works. If contentScore = 0.9 (strong keyword match) and collabScore = 0.1 (not popular among similar users), the hybrid is 0.5 — the event might still rank if others also score moderately. This is desirable because it means neither method can be vetoed by the other.

## 7.6 Implementation-Specific Questions

### Q26: Why do you call `ensureCorpus()` on every request?

**A:** It has a guard clause: `if (isBuilt) return;`. The corpus is built only on the first request. All subsequent requests skip the build. This is lazy initialization — the corpus is built when first needed, not at server startup.

### Q27: What happens if a new event is created after the corpus is built?

**A:** The new event won't be in `eventIndexMap`, so `getDocumentVector()` returns `{}` for it. Its content score will be 0. This is a known limitation — the corpus needs to be rebuilt to include new events. In a production system, I would trigger a rebuild on event creation or run a scheduled rebuild.

### Q28: What happens if the user has no clicks?

**A:** `getUserProfileVector([])` returns `{}`, and all content scores become 0. The recommendation relies entirely on collaborative filtering. If the user also has no similar users (because they have no click history), all scores are 0, and the frontend falls back to random selection.

### Q29: Why do you use synchronous functions (`getUserProfileVector`) instead of async?

**A:** After `ensureCorpus()` completes (which is async), the corpus is in memory. All subsequent operations — looking up event indices, listing terms, computing cosine similarity — are purely computational and don't involve I/O. Making them synchronous avoids unnecessary async overhead.

### Q30: How would you improve this system for production?

**A:** Four improvements: (1) Use sentence embeddings (SBERT) instead of TF-IDF for semantic understanding. (2) Implement temporal decay to weight recent clicks higher. (3) Add a popularity-based fallback for cold-start users. (4) Move vector storage to a database (pgvector) for better scalability and persistence.

### Q31: What is the difference between your implementation and scikit-learn's TfidfVectorizer?

**A:** The core algorithm is identical — both compute TF-IDF vectors from text, and my cosine similarity function implements the same formula as scikit-learn's. The only differences are: (1) I use `natural` (Node.js) instead of scikit-learn (Python), and (2) my IDF smoothing formula slightly differs from scikit-learn's default. Both produce the same relative rankings — events with similar keywords get high scores, dissimilar events get low scores.

### Q32: How many events do you need in your corpus for TF-IDF to work well?

**A:** TF-IDF works with any number of events, but the IDF values become more meaningful with more documents. With only 2-3 events, IDF can't distinguish rare from common words meaningfully. With 50+ events, the IDF values stabilize and the recommendations improve. Our project has [estimate] events, which is sufficient for meaningful TF-IDF weighting.

### Q33: Can you explain the tokenization failure modes?

**A:** Two main failure modes: (1) Compound words like "MachineLearning" won't be split correctly — they become a single term "machinelearning" instead of "machine" + "learning". (2) Numbers like "2024" become terms, which may or may not be meaningful depending on the context. Both are standard limitations of simple tokenization.

### Q34: How do you justify using a library (natural) rather than implementing TF-IDF from scratch?

**A:** Using a well-established library is standard practice in software engineering. The `natural` library's `TfIdf` class is the Node.js equivalent of Python's scikit-learn. It handles the complex bookkeeping of term frequencies, document frequencies, and smoothing correctly. Reimplementing this from scratch would introduce unnecessary risk of bugs and would not demonstrate better understanding.

### Q35: If you had to reimplement TF-IDF without the natural library, could you?

**A:** Yes. The formulas are well-defined: count term frequencies per document, count document frequencies across the corpus, compute IDF, multiply. I could implement this in approximately 50 lines of TypeScript. The `natural` library saves implementation effort but the underlying logic is straightforward and well-documented.

---

# Section 8 — One Page Revision Notes

## Important Formulas

```
TF = 0.5 + (0.5 × count) / maxCount

IDF = log(1 + (N - DF + 0.5) / (DF + 0.5))

TF-IDF = TF × IDF

cosineSimilarity(A, B) = (A · B) / (|A| × |B|)

hybridScore = (contentScore + collabScore) / 2
```

## Important Definitions

| Concept | One-line definition |
|---|---|
| Term Frequency | How often a word appears in this event |
| Inverse Document Frequency | How rare a word is across all events |
| TF-IDF Vector | Numerical representation of an event's keywords |
| User Profile Vector | Average TF-IDF vector of all clicked events |
| Cosine Similarity | Angle between two vectors (0 to 1) |
| Content Score | Cosine similarity between user profile and event |
| Collaborative Score | Proportion of similar users who engaged with event |
| Hybrid Score | Average of content and collaborative scores |

## Pipeline

```
Events → TF-IDF Corpus → User Clicks → User Profile → Cosine Similarity → Content Score
                                                                               ↓
                                                                       hybridScore = avg
                                                                               ↓
Similar Users → Interaction Check → Collaborative Score → Sort → Top 10 ↑
```

## Advantages

- Uses well-established information retrieval technique (TF-IDF)
- Captures keyword-level similarity (more granular than category matching)
- Naturally suppresses common words, amplifies distinctive words
- Combined with collaborative filtering for robustness
- Simple, explainable, and easy to debug

## Disadvantages

- No semantic understanding (bag of words)
- Cold start for new users (no clicks → no content profile)
- Corpus needs rebuilding for new events
- All clicks weighted equally (no temporal decay)
- Sparse vectors with few clicks produce unstable results

## Things to Remember During Presentation

1. **TF-IDF is NOT machine learning** — it's a deterministic statistical method. Don't call it ML.
2. **The library does the heavy lifting** — `natural.TfIdf` handles all TF-IDF computation. Be honest about this.
3. **Cosine similarity is the standard** — it's not a custom metric, it's the standard way to compare text vectors.
4. **Defend the hybrid** — content-based alone is weak; collaborative alone is weak; together they work well.
5. **Acknowledge limitations** — examiners prefer honest answers to defensive ones. Mention cold start, corpus rebuilding, and semantic understanding as future work.
6. **Compare with sklearn** — the Node.js `natural` library is equivalent to Python's scikit-learn.
7. **Know your numbers** — be ready with: vocabulary size, number of events, number of users, number of clicks.
8. **Viva formula cheat** — if they ask about any formula, write it down first, then explain each component.
