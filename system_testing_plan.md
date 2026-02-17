# Eventra System Testing Plan

This document outlines the system testing scenarios for Eventra, focusing on end-to-end user journeys and cross-module integrations. These tests are manual and verify the complete system behavior from a user's perspective.

---

## 1. User Lifecycle & Authentication (Module 1 & 5)
**Purpose**: Verifies the onboarding flow, security, and communication.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_AUTH_01 | Complete Onboarding | 1. Register account<br>2. Receive OTP email<br>3. Verify OTP<br>4. Login | email: test@eventra.com | User is successfully registered and logged in. | | |
| SYS_AUTH_02 | Session Persistence | 1. Login<br>2. Close browser<br>3. Reopen browser to /home | N/A | User remains logged in (JWT/Session persistent). | | |

---

## 2. Organization & Event Lifecycle (Module 4 & 6)
**Purpose**: Verifies the core business logic of managing organizations and events.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_EVNT_01 | Event Creation to Public View | 1. Create Org<br>2. Create Event in Org<br>3. Search for event on home | Org: TechFest<br>Event: Hackathon | Event is discoverable by other users. | | |
| SYS_EVNT_02 | Participant Check-in Flow | 1. User joins event<br>2. System generates Token<br>3. Org admin checks-in user | User: Alice<br>Event: Hackathon | Alice is marked as "Attended" in the dashboard. | | |

---

## 3. Recommendation & Discovery (Module 3)
**Purpose**: Verifies the intelligent discovery features.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_RECO_01 | Personalized Feed | 1. User joins "Tech" orgs<br>2. User refreshes home feed | Interests: Tech | "Tech" related events appear at the top of the feed. | | |
| SYS_RECO_02 | QuickSort Integration | 1. Create multiple events with varied scores<br>2. View trending list | N/A | Events are displayed in correct descending order of score. | | |

---

## 4. Admin Dashboard & Platform Health (Module 2)
**Purpose**: Verifies the administrative and moderation capabilities.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_ADM_01 | Global Moderation | 1. Admin deletes an offending event<br>2. User tries to access event slug | Slug: bad-event-101 | Admin sees "Success"; User sees "404 Not Found". | | |
| SYS_ADM_02 | Real-time Analytics | 1. New user registers<br>2. Admin views metadata | N/A | "Total Users" count increments immediately. | | |

---

## 5. API Integrations & Real-time (Module 5)
**Purpose**: Verifies connectivity with external services.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_API_01 | Media Performance | 1. Upload high-res banner for event<br>2. Load event page | Image: 5MB JPG | Image is optimized by Cloudinary and loads smoothly. | | |
| SYS_API_02 | Real-time Chat Sync | 1. Two users open event chat<br>2. User A sends message<br>3. User B receives message | Msg: "Is it starting?" | Message appears without page refresh for User B. | | |

---

## 6. Responsive UI & Performance (Module 6)
**Purpose**: Verifies the premium web experience.

| Test Case | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SYS_WEB_01 | Theme Synchronization | 1. Toggle Dark Mode on Dashboard<br>2. Switch to Client view | Theme: Dark | Dark mode is consistent across all subdomains/ports. | | |
| SYS_WEB_02 | SEO & Dynamic Routing | 1. Inspect Event Page head tags<br>2. Check for slug routing | URL: /event/[slug] | Title and Meta tags match the event title/description. | | |
