export function newEventTemplate(eventName: string, userName: string) {
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
        .next-steps {
          margin: 32px 0;
        }
        .step-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .step-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .step-text {
          flex: 1;
        }
        .step-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .step-description {
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
        .tip-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          font-size: 14px;
          color: #92400e;
        }
        .success-badge {
          display: inline-block;
          margin: 24px 0;
          padding: 12px 24px;
          background-color: #d1fae5;
          color: #065f46;
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
              <div class="step-icon">📝</div>
              <div class="step-text">
                <div class="step-title">Complete Event Details</div>
                <div class="step-description">
                  Add descriptions, images, venue information, and schedule to attract attendees
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-icon">🎫</div>
              <div class="step-text">
                <div class="step-title">Set Up Ticketing</div>
                <div class="step-description">
                  Configure ticket types, pricing, and availability for your attendees
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-icon">📢</div>
              <div class="step-text">
                <div class="step-title">Share Your Event</div>
                <div class="step-description">
                  Get your unique event link and start promoting to reach your audience
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-icon">👥</div>
              <div class="step-text">
                <div class="step-title">Invite Team Members</div>
                <div class="step-description">
                  Add collaborators to help manage registrations and event logistics
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-icon">📊</div>
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

          <div class="tip-section">
            💡 <strong>Pro Tip:</strong> Events with complete information and engaging visuals 
            get 3x more registrations! Take a few minutes to polish your event page before sharing.
          </div>

          <p style="margin-top: 32px;">
            Need help? Check out our <a href="https://eventra.com/docs/events" style="color: #10b981; text-decoration: underline;">event management guide</a> 
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