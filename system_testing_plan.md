# Eventra System Testing Plan

This document outlines the system testing scenarios for Eventra, focusing on end-to-end user journeys and cross-module integrations (Client, Admin Dashboard, and Server). These tests are manual and "graphical based."

---

## 1. End-To-End User Onboarding & Interaction

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_USER_01 | Complete Signup to Home Journey | Register new account -> Auto-login or Manual Login -> Land on Home Page. | User successfully enters the platform and sees the personalized home feed. |
| SYS_USER_02 | Profile Branding | Login -> Update Name & Bio -> Upload Profile Picture -> View updated profile. | Profile updates are reflected globally (in headers, comments, etc.). |
| SYS_USER_03 | Session Persistence | Login -> Close Browser Tab -> Reopen Browser -> Navigate to `/home`. | User remains logged in (cookies properly handled). |

---

## 2. Organization Lifecycle & Member Management

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_ORG_01 | Organization Launch | Create Organization -> Verify it appears in "Organizations" list -> Visit its public page. | Organization is discoverable and the owner can see administrative buttons. |
| SYS_ORG_02 | Member Interaction | User A creates Org -> User B Joins Org -> User A Views Member List. | User B appears in the list; User A can manage User B's role. |
| SYS_ORG_03 | Leaving & Rejoining | User B Leaves Org -> Visit Org page again -> Rejoin. | Counter updates correctly; Join/Leave buttons toggle accurately. |

---

## 3. Event Management & Participation

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_EVNT_01 | Event Discovery | Org A creates Event -> User B searches for Event title on Home/Events page. | Event appears in search results with correct summary. |
| SYS_EVNT_02 | The "Join Event" Flow | User B visits Event page -> Sees "Invitation" -> Clicks "Join" -> Sees "Event Details". | Access is granted; participant count incremented. |
| SYS_EVNT_03 | Restricted Access | Logged-out user tries to access `/organization/[id]/create-event`. | User is redirected to `/auth/login`. |

---

## 4. Premium & Credit Ecosystem

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_PREM_01 | Credit Purchase Integration | Visit Org -> Click "Donate" -> Select "LARGE" paket -> Success message. | Org Credits balance increases immediately. |
| SYS_PREM_02 | Premium Badge Logic | Purchase credits -> Verify "Premium" badge appears on the Organization Hero section. | Visual indicator reflects new premium status. |

---

## 5. Admin Dashboard (Global Management)

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_ADM_01 | Dashboard Login | Navigate to admin URL -> Login with Admin creds -> See statistics. | Statistics (Total Users, Orgs) match database counts. |
| SYS_ADM_02 | Organization Supervision | Admin searches for a specific Org -> Opens Edit Modal -> Changes Description/Type. | Changes are reflected when viewing that Org on the main Client site. |
| SYS_ADM_03 | Active Monitoring | Visit "Admin Log" -> Perform an action on the dashboard -> Verify log entry appears. | Action is recorded with correct timestamp and admin ID. |

---

## 6. Responsive & Cross-Browser Testing

| Scenario ID | Description | Flow / Steps | Expected Outcome |
| :--- | :--- | :--- | :--- |
| SYS_UI_01 | Desktop vs Mobile Layout | View Landing Page on 1920px -> View on 375px (Mobile Sim). | Navbar collapses into burger menu; content stacks vertically without overflow. |
| SYS_UI_02 | Dark Mode Synergy | Toggle Dark Mode in Settings -> Navigate through Auth, Orgs, and Events. | Entire UI remains readable; no "white flashes" or inconsistent theme colors. |
