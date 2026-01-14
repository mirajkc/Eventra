export function leftEventTemplate(userName, eventName) {
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
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
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
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
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
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #9ca3af;
        }
        .event-name-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .event-name {
          font-size: 28px;
          font-weight: 700;
          color: #4b5563;
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
        .token-invalid-box {
          margin: 32px 0;
          padding: 20px;
          background-color: #fee2e2;
          border-left: 4px solid #dc2626;
          border-radius: 8px;
          font-size: 14px;
          color: #991b1b;
        }
        .help-section {
          margin-top: 24px;
          padding: 20px;
          background-color: #eff6ff;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          font-size: 14px;
          color: #1e40af;
        }
        .cancelled-badge {
          display: inline-block;
          margin: 24px 0;
          padding: 12px 24px;
          background-color: #e5e7eb;
          color: #4b5563;
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
              <div class="info-icon">🎫</div>
              <div class="info-text">
                <div class="info-title">Token No Longer Valid</div>
                <div class="info-description">
                  Your entry token has been deactivated and cannot be used for event access
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">
                <div class="info-title">No More Notifications</div>
                <div class="info-description">
                  You will not receive any further updates or reminders about this event
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">💳</div>
              <div class="info-text">
                <div class="info-title">Refund Status</div>
                <div class="info-description">
                  If applicable, refunds will be processed according to the event's cancellation policy
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🔄</div>
              <div class="info-text">
                <div class="info-title">Re-register Anytime</div>
                <div class="info-description">
                  You can register again if the event is still open and tickets are available
                </div>
              </div>
            </div>
          </div>

          <div class="token-invalid-box">
            <strong>⚠️ Important:</strong> Your previous entry token is now invalid. 
            If you had saved it, you can delete it as it will no longer grant access to the event.
          </div>

          <div class="help-section">
            💡 <strong>Changed Your Mind?</strong><br>
            If you cancelled by mistake or would like to attend after all, you can register 
            again by visiting the event page. Note that availability and pricing may have changed.
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
//# sourceMappingURL=leaveEventTemplate.js.map