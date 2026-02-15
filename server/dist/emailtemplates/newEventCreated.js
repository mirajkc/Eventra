export function newEventTemplate(eventName, userName) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Event Created Successfully</title>
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
        .next-steps {
          margin: 24px 0;
        }
        .step-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .step-title {
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }
        .step-description {
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
        .success-badge {
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
          <div class="header-icon">🎊</div>
          <h1>Event Created Successfully!</h1>
          <p>Your event is ready to go</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            Congratulations! Your event has been successfully created on Eventra. 
            You're all set to start managing attendees, sharing details, and making your event a success.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">Your Event</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="success-badge">✓ Event is Live and Ready</div>
          </center>

          <p>
            Now that your event is created, here are the next steps to make it amazing:
          </p>

          <div class="next-steps">
            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Complete Event Details</div>
                <div class="step-description">
                  Add descriptions, images, venue information, and schedule to attract attendees
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Set Up Ticketing</div>
                <div class="step-description">
                  Configure ticket types, pricing, and availability for your attendees
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Share Your Event</div>
                <div class="step-description">
                  Get your unique event link and start promoting to reach your audience
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Invite Team Members</div>
                <div class="step-description">
                  Add collaborators to help manage registrations and event logistics
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Track Performance</div>
                <div class="step-description">
                  Monitor registrations, ticket sales, and engagement in real-time
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              Manage Event →
            </a>
          </center>

          <p style="margin-top: 32px;">
            Need help? Check out our <a href="https://eventra.com/docs/events" style="color: #000000; text-decoration: underline;">event management guide</a> 
            or reach out to our support team anytime.
          </p>

          <p style="margin-top: 24px;">
            We're excited to see your event come to life!
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
//# sourceMappingURL=newEventCreated.js.map