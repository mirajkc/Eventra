# Eventra Frontend Unit Testing Plan

This document outlines the manual unit testing cases for the Eventra frontend. These tests focus on core functionalities including Authentication, Organization Management, Event Management, and User Profile.

---

## 1. Authentication Module

### 1.1 Login Page
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| AUTH_L_01 | Valid Login | Correct email, Correct password (8+ chars, UC, LC, Num, Special) | Successful redirect to `/home`, success toast shown. |
| AUTH_L_02 | Invalid Password | Correct email, Incorrect password | Error toast: "Invalid credentials" (or similar from server). |
| AUTH_L_03 | Invalid Email Format | "invalid-email", Valid password | Validation error: "Invalid email". |
| AUTH_L_04 | Missing Fields | Empty Email, Empty Password | Validation errors: "Email is required", "Password must contain...". |
| AUTH_L_05 | Weak Password | Valid email, "12345" | Validation error: "Password must contain at least 8 characters...". |

### 1.2 Registration Page
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| AUTH_R_01 | Valid Registration | Unique email, matching valid passwords | Redirect to login, success toast shown. |
| AUTH_R_02 | Password Mismatch | Valid passwords that do not match | Validation error: "Passwords do not match". |
| AUTH_R_03 | Existing Email | Already registered email | Error toast from server: "User already exists". |
| AUTH_R_04 | Password Complexity | Password without special char/number | Validation error indicating complexity requirements. |

---

## 2. Organization Management

### 2.1 Create Organization
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| ORG_C_01 | Valid Creation | Name (3-50 chars), Desc (50-500 chars), Type selected | Success toast, organization created. |
| ORG_C_02 | Short Description | Description < 50 characters | Validation error: "Description must be at least 50 characters". |
| ORG_C_03 | Invalid Website | "not-a-url" in website field | Validation error: "Invalid website URL". |
| ORG_C_04 | Missing Type | No type selected | Validation error: "Required". |

### 2.2 Join / Leave Organization
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| ORG_J_01 | Join Organization | Click "Join" on organization page | Button text changes to "Leave", success toast. |
| ORG_J_02 | Leave Organization | Click "Leave" on organization page | Button text changes to "Join", success toast. |

---

## 3. Event Management

### 3.1 Create Event
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| EVNT_C_01 | Valid Creation | Title (10+), Desc (10+), Loc, Valid Dates, Capacity (1-200) | Success toast, redirect to events list. |
| EVNT_C_02 | Invalid Date Range | End Date before Start Date | Validation error: "End date must be greater than start date". |
| EVNT_C_03 | Over Capacity | Capacity = 250 | Validation error: "Capacity must be less than 200". |
| EVNT_C_04 | Short Title | Title < 10 characters | Validation error: "Title must be at least 10 characters". |
| EVNT_C_05 | Empty Location | Location left blank | Validation error: "Location is required". |

### 3.2 Update Event
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| EVNT_U_01 | Valid Update | Change title/description correctly | Success toast, data updated. |
| EVNT_U_02 | Status Change | Set status to "CANCELLED" | Event status updates, reflective on UI. |

---

## 4. User Profile

### 4.1 Update Profile Details
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| USER_P_01 | Valid Profile Update | New Name (3-50 chars), valid phone | Success toast, profile reflects changes. |
| USER_P_02 | Short Name | Name < 3 characters | Validation error: "Name must be at least 3 characters". |
| USER_P_03 | Invalid Phone | "123" (too short) | Validation error: "Phone must be at least 10 characters". |

### 4.2 Change Password
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| USER_W_01 | Password Change | New password, matching confirm password | Success toast, password updated. |
| USER_W_02 | Mismatch | Non-matching passwords | Validation error: "Passwords do not match". |
| USER_W_03 | Too Short | Password < 8 characters | Validation error: "Password must be at least 8 characters". |

---

## 5. Credit Purchase (Donation)

### 5.1 Pricing & Purchase
| Test Case ID | Description | Input / Scenario | Expected Outcome |
| :--- | :--- | :--- | :--- |
| CRED_P_01 | Purchase Credit (Small) | Click "Donate Credits" for SMALL package | Success toast, credits added to organization. |
| CRED_P_02 | API Error Handling | Server down / API error during purchase | Error toast: "Error occurred while purchasing...". |
