## 🔍 Recommendation System (Hybrid – Rule Based)

Eventra implements a **hybrid recommendation system** built entirely using
**TypeScript and deterministic algorithms**, without using machine learning,
model training, or external AI libraries.

The system combines **content-based filtering** and
**collaborative-based filtering** to generate meaningful event recommendations
while remaining simple, explainable, and production-safe.

---

## 🎯 Design Principles

- No machine learning or model training
- Fully deterministic and debuggable logic
- Optimized for backend performance
- Safe to integrate with the deployed system
- Easy to extend in the future

---

## 🧱 Core Database Tables

### 1️⃣ Events Table

Stores event information along with an optional baseline score.

```ts
Event {
  id
  title
  category
  tags
  location
  date
  organizerId
  eventScore?: number
  totalViews
}
