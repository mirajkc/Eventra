export function newMemberRegistrationTemplate(userName, eventName, token) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Registration Confirmed - ${eventName}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
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
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
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
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #3b82f6;
        }
        .event-name-label {
          font-size: 12px;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .event-name {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ticket-box {
          margin: 32px 0;
          padding: 32px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          border: 3px dashed #3b82f6;
          text-align: center;
        }
        .ticket-label {
          font-size: 14px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .ticket-token {
          font-size: 32px;
          font-weight: 800;
          color: #1e293b;
          font-family: 'Courier New', monospace;
          letter-spacing: 4px;
          margin: 16px 0;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          word-break: break-all;
        }
        .ticket-instruction {
          font-size: 13px;
          color: #64748b;
          margin-top: 16px;
          font-style: italic;
        }
        .info-list {
          margin: 32px 0;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
        }
        .info-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .info-text {
          flex: 1;
        }
        .info-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .info-description {
          font-size: 14px;
          color: #6b7280;
        }
        .cta-button {
          display: inline-block;
          margin: 32px 0;
          padding: 16px 32px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
        }
        .important-section {
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
          color: #3b82f6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">🎟️</div>
          <h1>Registration Confirmed!</h1>
          <p>You're all set for the event</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            Great news! Your registration has been confirmed. We're excited to have you join us 
            for this amazing event. Save this email as it contains your entry token.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">You're Registered For</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="success-badge">✓ Registration Complete</div>
          </center>

          <div class="ticket-box">
            <div class="ticket-label">⭐ Your Entry Token ⭐</div>
            <div class="ticket-token">${token}</div>
            <div class="ticket-instruction">
              Please save this token. You'll need it to enter the event.
            </div>
          </div>

          <p>
            Here's what you need to know:
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">🎫</div>
              <div class="info-text">
                <div class="info-title">Your Entry Token</div>
                <div class="info-description">
                  Present this token at the event entrance for check-in. Keep it safe and accessible.
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📱</div>
              <div class="info-text">
                <div class="info-title">Digital Access</div>
                <div class="info-description">
                  Save this email or take a screenshot of your token for easy access on event day
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">
                <div class="info-title">Event Updates</div>
                <div class="info-description">
                  You'll receive important updates and reminders about the event via email
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📅</div>
              <div class="info-text">
                <div class="info-title">Add to Calendar</div>
                <div class="info-description">
                  Don't forget to add the event to your calendar so you don't miss it
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">❓</div>
              <div class="info-text">
                <div class="info-title">Questions?</div>
                <div class="info-description">
                  Check the event page for full details, FAQs, and contact information
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              View Event Details →
            </a>
          </center>

          <div class="important-section">
            ⚠️ <strong>Important:</strong> Your entry token is unique to you. Do not share it with others. 
            If you lose this token, contact the event organizer or our support team for assistance.
          </div>

          <p style="margin-top: 32px;">
            We look forward to seeing you at the event! If you have any questions, 
            feel free to reach out to the event organizer or our support team.
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
//# sourceMappingURL=newMemberRegistrationTemplate.js.map