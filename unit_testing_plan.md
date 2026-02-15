# Eventra Unit Testing Plan

This document outlines the manual unit testing cases for the Eventra platform, organized by core functional modules as defined in `module.md`. These tests focus on individual component logic and specific service functionalities.

---

## 1. User Management Module
**Purpose**: Manages user lifecycles, authentication, and profile security.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AUTH_L_01 | Valid Login | 1. Enter Email<br>2. Enter Password<br>3. Click "Login" | email: test@example.com<br>password: ValidPass123! | Redirect to /home, success toast shown. | | |
| AUTH_L_02 | Invalid Password | 1. Enter Email<br>2. Enter Wrong Password<br>3. Click "Login" | email: test@example.com<br>password: wrong123 | Error toast: "Invalid credentials". | | |
| AUTH_R_01 | User Registration | 1. Fill all fields<br>2. Click "Sign Up" | email: new@ex.com<br>pass: Secure123!<br>name: John Doe | Redirect to login, success toast. | | |
| AUTH_OTP_01 | OTP Verification | 1. Request password reset<br>2. Enter 6-digit OTP | email: test@example.com<br>otp: 123456 | OTP accepted, redirect to password reset. | | |
| USER_P_01 | Profile Update | 1. Change name/bio<br>2. Click "Save" | name: John Updated<br>bio: Event Enthusiast | Profile reflects changes globally. | | |

---

## 2. Admin Management Module
**Purpose**: Supervisory module for platform health and moderation.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ADM_MET_01 | Global Metrics | 1. Access Admin Dashboard<br>2. View Metrics section | N/A | Total Users, Events, and Registrations displayed correctly. | | |
| ADM_MOD_01 | Entity Moderation | 1. Search for Event<br>2. Click "Delete/Moderate" | Event ID: EVT-001 | Event is removed from database and public view. | | |
| ADM_LOG_01 | Audit Logging | 1. Admin deletes an Org<br>2. Check Admin Logs | Admin Action: Delete Org | Log entry created with timestamp and Admin ID. | | |

---

## 3. Recommendation System Management Module
**Purpose**: Intelligent scoring and sorting for personalized discovery.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| REC_SCR_01 | Hybrid Scoring | 1. Trigger recommendation engine<br>2. Calculate scores | Content Score: 0.8<br>Collab Score: 0.6 | Hybrid score calculated as 0.7. | | |
| REC_SRT_01 | QuickSort Efficiency | 1. Provide unsorted event list<br>2. Apply QuickSort | [S-2, S-5, S-1, S-4] | Events sorted by score in descending order. | | |
| REC_MET_01 | Metric Tracking | 1. User clicks an event<br>2. Check Metric Tracker | UserID, EventID, Click | Click-through behavior recorded in EventMetric. | | |

---

## 4. Event and Organization Management Module
**Purpose**: Orchestrates organizational structures and event lifecycles.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ORG_GOV_01 | RBAC Validation | 1. Login as Member<br>2. Try to delete Org | User Role: MEMBER | Action denied; error: "Insufficient permissions". | | |
| EVNT_LC_01 | Create Event | 1. Fill event details<br>2. Click "Publish" | title: Annual Gala<br>date: 2026-05-20 | Event appears in organization list. | | |
| EVNT_CHK_01 | Attendee Check-in | 1. Provide check-in token<br>2. Verify attendance | token: QR-998877<br>eventId: EVT-101 | `attended` set to true; `checkedInAt` updated. | | |

---

## 5. API Integration Module
**Purpose**: External service bridges for media, mail, and real-time features.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| API_CLD_01 | Image Upload | 1. Upload Buffer to Cloudinary<br>2. Generate URL | buffer: image_data<br>folder: events | Secure URL returned from Cloudinary. | | |
| API_ML_01 | OTP Email Delivery | 1. Send OTP via Nodemailer<br>2. Verify inbox | email: user@ex.com<br>otp: 654321 | User receives email with correct OTP. | | |
| API_SKT_01 | Real-time Chat | 1. Join chat room<br>2. Send message | Room: EVT-101<br>msg: "Hello!" | Message broadcast to all connected users in room. | | |

---

## 6. Web Application Module
**Purpose**: Core UI/UX for organizers and attendees.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| WEB_RDX_01 | Global State Sync | 1. Update user info in profile<br>2. Check NavBar name | New Name: Alex | NavBar displays "Alex" immediately via Redux. | | |
| WEB_THM_01 | Dark Mode Synergy | 1. Toggle Theme to Dark<br>2. Visit multiple pages | Theme: Dark | Consistent dark theme applied to all components. | | |
| WEB_RSP_01 | Responsive Design | 1. Resize to 375px<br>2. Check burger menu | Width: 375px | Navbar collapses; menu is accessible. | | |
