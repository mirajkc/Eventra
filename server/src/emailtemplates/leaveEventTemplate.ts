export function leftEventTemplate(userName: string, eventName: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Registration Cancelled - ${eventName}</title>
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
        .info-list {
          margin: 24px 0;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .info-title {
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }
        .info-description {
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
        .cancelled-badge {
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
        .footer a {
          color: #000000;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">👋</div>
          <h1>Registration Cancelled</h1>
          <p>You've left the event</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            This email confirms that you have successfully cancelled your registration 
            for the following event. You will no longer receive updates about this event.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">Cancelled Registration For</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="cancelled-badge">✓ Registration Cancelled</div>
          </center>

          <p>
            Here's what this means:
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-text">
                <div class="info-title">Token No Longer Valid</div>
                <div class="info-description">
                  Your entry token has been deactivated and cannot be used for event access
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-text">
                <div class="info-title">No More Notifications</div>
                <div class="info-description">
                  You will not receive any further updates or reminders about this event
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-text">
                <div class="info-title">Refund Status</div>
                <div class="info-description">
                  If applicable, refunds will be processed according to the event's cancellation policy
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-text">
                <div class="info-title">Re-register Anytime</div>
                <div class="info-description">
                  You can register again if the event is still open and tickets are available
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              View Event Page →
            </a>
          </center>

          <p style="margin-top: 32px;">
            We hope to see you at future events! Browse other upcoming events on Eventra 
            to find something that interests you.
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
            <a href="https://eventra.com/browse">Browse Events</a> • 
            <a href="mailto:support@eventra.com">Support</a>
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
}