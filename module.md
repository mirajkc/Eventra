# Eventra Project Modules Documentation

This document categorizes the Eventra architecture into Core Functional Modules and Supporting Components, detailing their purpose, components, and implementation logic.

---

# I. Core Functional Modules

## 1. User Management Module
- **Purpose**: Manages user lifecycles, global authentication, and personal profile security.
- **Key Components**:
    - **Authentication System**: Secure login/signup using JWT and bcrypt.
    - **OTP Verification**: `OtpService` for password resets and identity verification.
    - **Profile Management**: `UserController` for managing user personal data and registration history.
- **Functionality**:
    - Real-time user registration and secure session management.
    - Automated OTP generation and expiration logic.
    - Tiered user roles (CUSTOMER, ADMIN).
- **Code Snippet**:
```typescript
// server/src/controller/auth.controller.ts
async loginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const user = await authService.getUserByFilter({ email });
  const isCorrect = await bcrypt.compare(password, user.password);
  const token = await jwtService.generateToken({ id: user.id, email: user.email, role: user.role });
  return res.json({ message: "Welcome back!", data: { user, token } });
}
```

---

## 2. Admin Management Module
- **Purpose**: A high-privilege supervisory module for platform health monitoring and entity moderation.
- **Key Components**:
    - **Global Metrics Provider**: `AdminController.getMetadata` for real-time analytics.
    - **Moderation Engine**: Tools for deleting events, organizations, and users.
    - **Audit System**: `AdminLogsService` for tracking administrative actions.
- **Functionality**:
    - Unified dashboard displaying revenue, registrations, and error rates.
    - Enforcement of platform policies via moderated entity removal.
    - Error log aggregation for debugging production issues.
- **Code Snippet**:
```typescript
// server/src/controller/admin.controller.ts
async getMetadata(req: Request, res: Response, next: NextFunction) {
  const totalEvents = await eventService.getTotalEventsCount({});
  const totalUsers = await userService.getTotalUsersCount();
  const totalRegistrations = await eventParticipantService.getParticipantsCount({});
  return res.json({
    data: { totalEvents, totalUsers, totalRegistrations, monthlyData: { ... } }
  });
}
```

---

## 3. Recommendation System Management Module
- **Purpose**: Uses intelligent scoring algorithms to personalize the event discovery experience.
- **Key Components**:
    - **Hybrid Scorer**: `averageRecomendationScore.ts` combining content and collaborative data.
    - **Quality Scorer**: `getEventScore.ts` for quantifying event metadata richness.
    - **Metric Tracker**: `EventMetric` for capturing click-through and join behaviors.
- **Functionality**:
    - **Content Filtering**: Matches user interest profiles with event metadata.
    - **Collaborative Filtering**: Suggests events based on behaviors of similar users.
    - High-performance sorting using a custom QuickSort implementation.
- **Code Snippet**:
```typescript
// server/src/Algorithms/averageRecomendationScore.ts
const hybridScore = (contentScore + collabScore) / 2;
// contentScore derived from metadata matching
// collabScore derived from peer behavior
const sortedEvents = quickSort(eventsWithScores);
return sortedEvents.slice(0, 10);
```

---

## 4. Event and Organization Management Module
- **Purpose**: Orchestrates organizational structures and the end-to-end lifecycle of events.
- **Key Components**:
    - **Org Governance**: `OrganizationService` handling tiered roles (OWNER, ADMIN, MEMBER).
    - **Lifecycle Engine**: `EventService` for publishing, state transitions, and capacity control.
    - **Attendance Manager**: `EventRegistrationController` for secure QR/Token-based check-ins.
- **Functionality**:
    - Role-Based Access Control (RBAC) within organization workspaces.
    - Automated attendee limit management and registration windows.
    - Secure "Check-in" process with `checkedInAt` timestamp logging.
- **Code Snippet**:
```typescript
// server/src/service/eventParticipants.service.ts
async chekIn(token: string, eventId: string) {
  return await prisma.eventParticipants.update({
    where: { eventId: eventId, checkInToken: token, attended: false },
    data: { attended: true, checkedInAt: new Date(Date.now()) }
  });
}
```

---

## 5. API Integration Module
- **Purpose**: Bridges the platform with external services for media, communication, and real-time features.
- **Key Components**:
    - **Media Hosting**: `Cloudinary` integration for image/thumbnail storage.
    - **Communication**: `Nodemailer` for transactional emails and alerts.
    - **Real-time Sync**: `Socket.IO` for live chat and notification distribution.
- **Functionality**:
    - Automated buffer-to-cloud image uploads with secure URL generation.
    - Transactional email delivery for registrations and administrative notices.
    - Distributed real-time messaging for active event attendees.
- **Code Snippet**:
```typescript
// server/src/service/upload.service.ts
export function uploadImage(buffer: Buffer, folderName: string): Promise<string> {
  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: folderName, resource_type: "image" },
    (error, result) => { resolve(result.secure_url); }
  );
  Readable.from(buffer).pipe(uploadStream);
}
```

---

## 6. Web Application Module
- **Purpose**: Delivers a premium, responsive user interface for both organizers and attendees.
- **Key Components**:
    - **Next.js Client**: The main participant portal using the App Router.
    - **Vite Dashboard**: High-performance React application for platform administrators.
    - **State Layer**: Redux Toolkit for complex client-side state management.
- **Functionality**:
    - Dynamic routing and server-side rendering for optimal SEO.
    - Interactive 3D/animated components using Three.js and Framer Motion.
    - Unified theme system (Dark/Light mode).
- **Code Snippet**:
```typescript
// client/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ReduxProvider>
        <NavBar />
        {children}
        <Toaster />
      </ReduxProvider>
    </ThemeProvider>
  );
}
```

---

# II. Supporting Components

## 1. Database Models & Schema
- **Purpose**: Defines the rigid relational structure of the entire system.
- **Key Components**:
    - **User Model**: Stores credentials, roles, and behavioral preference scores.
    - **Organization & Event Models**: Complex relations for groups and their hosting history.
    - **Notification & Chat Models**: Schema for persistent communication data.
- **Functionality**:
    - Ensures referential integrity with cascading deletes for sensitive data.
    - Optimized indexing for frequent lookups (e.g., event status and dates).
- **Code Snippet**:
```prisma
// server/prisma/schema.prisma
model Event {
  id             String        @id @default(cuid())
  slug           String        @unique
  organizationId String
  title          String
  status         EventStatus   @default(PUBLISHED)
  eventScore     Float?        // Preference scoring
  participants   EventParticipants[]
}
```

## 2. Database Setup Scripts
- **Purpose**: Automates the provisioning and migration of the database environment.
- **Key Components**:
    - **Prisma Migrations**: Managed SQL changes tracking.
    - **Workspace Config**: PNPM workspace integration for multi-package management.
- **Functionality**:
    - One-command environment setup using `npx prisma migrate dev`.
    - Cross-package type safety through generated Prisma clients.
- **Code Snippet**:
```bash
# server/package.json scripts
"build": "npx prisma generate && tsc",
"dev": "nodemon"
```
