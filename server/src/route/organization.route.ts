
// -----------------------------
// Organization CRUD
// -----------------------------

// POST /organizations
// Create a new organization. Auth required. User creating it becomes the admin of the organization.

// GET /organizations/:organizationId
// Get organization details including members and current credits. This is where current credits are fetched.

// PATCH /organizations/:organizationId
// Update organization info. Only admin/owner can update.

// DELETE /organizations/:organizationId
// Delete organization. Only admin/owner can delete. Also removes all related members.

// GET /organizations
// List all organizations. Supports pagination, filtering, search.

// -----------------------------
// Organization Members
// -----------------------------

// POST /organizations/:organizationId/join
// Join an organization. Auth required. Notification sent to all other members about the new join.

// POST /organizations/:organizationId/leave
// Leave an organization. Auth required. Notification sent to all other members about the leave.

// GET /organizations/:organizationId/members
// List all members of the organization. Includes user info and roles.

// PATCH /organizations/:organizationId/members/:memberId/role
// Change the role of a member. Only organization owner can perform this action.

// DELETE /organizations/:organizationId/members/:memberId
// Remove a member from the organization. Only organization owner can remove members.

// -----------------------------
// Credits / Premium Handling
// -----------------------------

// GET /organizations/:organizationId/credits
// Current credits are fetched along with organization details (getOrganizationDetail).

// PATCH /organizations/:organizationId/reset-credits
// Reset organization credits monthly. 
// Logic handled in CreditController: 
//   - Premium org with credits < 20 → reset
//   - Non-premium org with credits > 20 → reset to 20
// Note: Not triggered manually here.

// PATCH /organizations/:organizationId/set-premium
// Setting organization as premium happens automatically when credits are purchased. Handled in CreditController. Not manual here.

// -----------------------------
// Events
// -----------------------------

// GET /organizations/:organizationId/events
// List all events created by the organization. Could also be fetched via EventController. Event creation triggers notifications in EventController.

// -----------------------------
// Notifications
// -----------------------------

// Notifications triggered from OrganizationController:
//   - When a member joins the organization → notify all other members
//   - When a member leaves the organization → notify all other members
// Notifications for credits and events are handled in CreditController and EventController respectively.
