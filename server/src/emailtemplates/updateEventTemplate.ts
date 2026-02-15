export function updateEventTemplate(eventName: string, updatedBy: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Event Updated - ${eventName}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #18181b;
        }
        .container {
          max-width: 560px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #000000;
          padding: 32px 24px;
          text-align: center;
        }
        .header-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }
        .header p {
          color: rgba(255, 255, 255, 0.8);
          margin: 8px 0 0 0;
          font-size: 16px;
        }
        .content {
          padding: 32px 24px;
          font-size: 16px;
          line-height: 1.6;
        }
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 16px;
        }
        .event-name-box {
          margin: 24px 0;
          padding: 20px;
          background-color: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          text-align: center;
        }
        .event-name-label {
          font-size: 12px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .event-name {
          font-size: 24px;
          font-weight: 700;
          color: #000000;
        }
        .update-list {
          margin: 24px 0;
        }
        .update-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .update-title {
           font-weight: 700;
           color: #000000;
           margin-bottom: 4px;
        }
        .update-description {
           font-size: 14px;
           color: #52525b;
        }
        .cta-button {
          display: inline-block;
          margin: 24px 0;
          padding: 14px 28px;
          background-color: #000000;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
        }
        .updated-badge {
          display: inline-block;
          margin: 16px 0;
          padding: 8px 16px;
          background-color: #18181b;
          color: #ffffff;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
        }
        .footer {
          padding: 24px;
          text-align: center;
          background-color: #fafafa;
          border-top: 1px solid #e4e4e7;
          font-size: 14px;
          color: #71717a;
        }
        .footer p {
          margin: 8px 0;
          font-size: 13px;
        }
        .footer a {
          color: #000000;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">📢</div>
          <h1>Event Details Updated</h1>
          <p>Important changes to your event</p>
        </div>

        <div class="content">
          <p class="greeting">Hi there,</p>

          <p>
            We wanted to let you know that there have been updates to an event you're registered for 
            or following. Please review the details below.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">Event Updated</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="updated-badge">✓ Updated by ${updatedBy}</div>
          </center>

          <p>
            Recent changes may include updates to:
          </p>

          <div class="update-list">
            <div class="update-item">
              <div class="update-text">
                <div class="update-title">Date & Time</div>
                <div class="update-description">
                  Schedule adjustments or timing changes for the event
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-text">
                <div class="update-title">Venue / Location</div>
                <div class="update-description">
                  Changes to the physical location or virtual meeting link
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-text">
                <div class="update-title">Event Description</div>
                <div class="update-description">
                  New information about speakers, agenda, or activities
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              View Updated Event →
            </a>
          </center>

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