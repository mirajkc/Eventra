export function userCheckIn(userName: string, eventName: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Check-In Confirmed - ${eventName}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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
          background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #8b5cf6;
        }
        .event-name-label {
          font-size: 12px;
          color: #5b21b6;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .event-name {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .checkin-time-box {
          margin: 32px 0;
          padding: 20px;
          background-color: #f5f3ff;
          border-radius: 12px;
          text-align: center;
        }
        .checkin-label {
          font-size: 13px;
          color: #6d28d9;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .checkin-time {
          font-size: 18px;
          font-weight: 700;
          color: #5b21b6;
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
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
        }
        .welcome-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #d1fae5;
          border-left: 4px solid #10b981;
          border-radius: 8px;
          font-size: 14px;
          color: #065f46;
        }
        .tip-section {
          margin-top: 24px;
          padding: 20px;
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          font-size: 14px;
          color: #92400e;
        }
        .checkin-badge {
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
          color: #8b5cf6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">✅</div>
          <h1>Check-In Successful!</h1>
          <p>Welcome to the event</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            You've successfully checked in! We're thrilled to have you here. 
            Your attendance has been recorded and you're all set to enjoy the event.
          </p>

          <div class="event-name-box">
            <div class="event-name-label">Checked In To</div>
            <div class="event-name">${eventName}</div>
          </div>

          <center>
            <div class="checkin-badge">✓ Attendance Confirmed</div>
          </center>

          <div class="checkin-time-box">
            <div class="checkin-label">Check-In Time</div>
            <div class="checkin-time">${new Date().toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit'
            })}</div>
          </div>

          <div class="welcome-section">
            🎉 <strong>Welcome to ${eventName}!</strong><br>
            Thank you for being here. We hope you have an amazing experience and make 
            great connections during this event.
          </div>

          <p>
            Now that you're checked in, here's what you should know:
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-text">
                <div class="info-title">You're All Set</div>
                <div class="info-description">
                  Your attendance has been officially recorded. No further action needed for entry.
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🗺️</div>
              <div class="info-text">
                <div class="info-title">Event Information</div>
                <div class="info-description">
                  Check the event page or venue signage for schedule, sessions, and important locations
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🤝</div>
              <div class="info-text">
                <div class="info-title">Network & Connect</div>
                <div class="info-description">
                  Make the most of this opportunity to meet other attendees and speakers
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📸</div>
              <div class="info-text">
                <div class="info-title">Share Your Experience</div>
                <div class="info-description">
                  Feel free to share photos and moments from the event on social media
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">💬</div>
              <div class="info-text">
                <div class="info-title">Feedback Welcome</div>
                <div class="info-description">
                  After the event, you'll receive a survey to share your thoughts and experiences
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
              View Event Details →
            </a>
          </center>

          <div class="tip-section">
            💡 <strong>Pro Tip:</strong> Save this email as proof of attendance. It includes your 
            check-in timestamp and may be useful for certificates, expense reports, or records.
          </div>

          <p style="margin-top: 32px;">
            Enjoy the event and make it a memorable experience!
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
            <a href="https://eventra.com/events">Events</a> • 
            <a href="mailto:support@eventra.com">Support</a>
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
}