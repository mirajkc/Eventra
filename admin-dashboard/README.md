# Admin Panel Features

The admin panel is designed to give platform administrators full control over content, user activity, and finances. It is divided into four main sections:

---

## 1️⃣ Metadata / Analytics

Admins can view high-level platform statistics:

- **Total events created** → from `Event` table
- **Total organizations created** → from `Organization` table
- **Total users registered** → from `User` table
- **Event metrics per month** → from `EventMetrics` table (`totalViews`, `totalRegistrations`, `totalAttendees`)

# TODO: (after algo has been implemented)

- **Predicted metrics for next month** → from `AdminPrediction` table
- **Trending events** → Based on `EventMetrics` or `UserInteraction` (top events by views or participation)

> Analytics provide a snapshot of platform engagement and growth.

---

## 2️⃣ Content Management (CMS)

Admins can manage all platform content:

- **Users (`User`)**
  - Delete users
  - Optional: Edit user details for support purposes

- **Organizations (`Organization`)**
  - Delete organizations
  - Optional: Edit organization details

- **Events (`Event`)**
  - Delete events
  - Optional: Edit event details

- **Notifications (`Notification`)**
  - View notifications
  - Optional: Delete or mark as read

- **Error Logs (`ErrorLog`)**
  - View application errors for debugging

---

## 3️⃣ Finance / Credits

Admins can monitor financial activity:

- View **CreditPurchases** per user or organization
- Track **total credits purchased or spent**
- Display revenue summary based on `CreditPurchase.amount`

---

## 4️⃣ Trending Events & Recommendations

Admins can view engagement trends:

- **Trending events** → Events with highest views, registrations, or attendance
- Use **UserInteraction** and **EventMetrics** to determine popularity
- Can help admins understand which events are most engaging for users

---

## ✅ Notes

- **Admin accounts** are created only at the database level (`Role = ADMIN`)
- **Normal users** cannot access the admin panel
- **Frontend role check** ensures only admins can view admin features
- **ML or advanced recommendations** are optional for admin dashboards; aggregate data is enough initially
