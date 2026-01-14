export function updateEventTemplate(eventName, updatorName) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Event Updated</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .container {
          max-width: 560px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          padding: 48px 24px;
          text-align: center;
        }
        .header-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .header p {
          color: rgba(255, 255, 255, 0.95);
          margin: 12px 0 0 0;
          font-size: 16px;
        }
        .content {
          padding: 40px 32px;
          color: #374151;
          font-size: 15px;
          line-height: 1.7;
        }
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }
        .event-name-box {
          margin: 32px 0;
          padding: 24px;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #10b981;
        }
        .event-name-label {
          font-size: 12px;
          color: #065f46;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .event-name {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .updates {
          margin: 32px 0;
        }
        .update-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
        }
        .update-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .update-text {
          flex: 1;
        }
        .update-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .update-description {
          font-size: 14px;
          color: #6b7280;
        }
        .cta-button {
          display: inline-block;
          margin: 32px 0;
          padding: 16px 32px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
        }
        .info-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #dbeafe;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          font-size: 14px;
          color: #1e40af;
        }
        .update-badge {
          display: inline-block;
          margin: 24px 0;
          padding: 12px 24px;
          background-color: #dbeafe;
          color: #1e40af;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
        }
        .footer {
          padding: 32px;
          text-align: center;
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
        }
        .footer p {
          margin: 8px 0;
          font-size: 13px;
          color: #6b7280;
        }
        .footer a {
          color: #10b981;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">🔄</div>
          <h1>Event Updated</h1>
          <p>Changes have been made to your event</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${updatorName},</p>

          <p>
            Your event has been successfully updated on Eventra. The changes you made 
            are now live and visible to all attendees.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">Updated Event</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="update-badge">✓ Changes Saved Successfully</div>
          </center>

          <p>
            Event updates may include changes to:
          </p>

          <div class="updates">
            <div class="update-item">
              <div class="update-icon">📝</div>
              <div class="update-text">
                <div class="update-title">Event Information</div>
                <div class="update-description">
                  Title, description, date, time, location, or other event details
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">🎫</div>
              <div class="update-text">
                <div class="update-title">Ticketing & Registration</div>
                <div class="update-description">
                  Ticket types, pricing, availability, or registration settings
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">🎨</div>
              <div class="update-text">
                <div class="update-title">Visual Content</div>
                <div class="update-description">
                  Event images, banners, branding, or promotional materials
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">⚙️</div>
              <div class="update-text">
                <div class="update-title">Settings & Configuration</div>
                <div class="update-description">
                  Privacy settings, notifications, integrations, or advanced options
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">👥</div>
              <div class="update-text">
                <div class="update-title">Team & Permissions</div>
                <div class="update-description">
                  Collaborator access, roles, or team member assignments
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              View Event →
            </a>
          </center>

          <div class="info-section">
            📢 <strong>Important:</strong> If you made significant changes (date, time, location, pricing), 
            we recommend notifying your registered attendees. You can send update notifications from 
            your event dashboard to keep everyone informed.
          </div>

          <p style="margin-top: 32px;">
            Your event page is now updated and ready. All changes are immediately visible to visitors 
            and registered attendees.
          </p>

          <p style="margin-top: 24px;">
            Best regards,<br />
            <strong>The Eventra Team</strong>
          </p>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Eventra. All rights reserved.</p>
          <p>
            <a href="https://eventra.com">Website</a> • 
            <a href="https://eventra.com/docs">Documentation</a> • 
            <a href="mailto:support@eventra.com">Support</a>
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
}
//# sourceMappingURL=updateEventTemplate.js.map