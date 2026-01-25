export function joinedOrganizationEmail(organizationName, userName) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to ${organizationName}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
        .org-name-box {
          margin: 32px 0;
          padding: 24px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #667eea;
        }
        .org-name-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .org-name {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .features {
          margin: 32px 0;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .feature-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .feature-text {
          flex: 1;
        }
        .feature-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .feature-description {
          font-size: 14px;
          color: #6b7280;
        }
        .cta-button {
          display: inline-block;
          margin: 32px 0;
          padding: 16px 32px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }
        .info-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #f0fdf4;
          border-left: 4px solid #10b981;
          border-radius: 8px;
          font-size: 14px;
          color: #065f46;
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
          color: #667eea;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">👋</div>
          <h1>Welcome to the Team!</h1>
          <p>You've been added to an organization</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            Great news! You've successfully joined an organization on Eventra. 
            You can now collaborate with your team to create and manage events together.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">You're now part of</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <p>
            As a team member, you'll have access to collaborate on events and 
            work with your colleagues. Here's what you can do:
          </p>

          <div class="features">
            <div class="feature-item">
              <div class="feature-icon">🤝</div>
              <div class="feature-text">
                <div class="feature-title">Collaborate with Team</div>
                <div class="feature-description">
                  Work together with other members to plan and execute events
                </div>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">📅</div>
              <div class="feature-text">
                <div class="feature-title">Access Organization Events</div>
                <div class="feature-description">
                  View, manage, and participate in all events within your organization
                </div>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">🔔</div>
              <div class="feature-text">
                <div class="feature-title">Stay Updated</div>
                <div class="feature-description">
                  Receive notifications about important updates and event changes
                </div>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon">💬</div>
              <div class="feature-text">
                <div class="feature-title">Team Communication</div>
                <div class="feature-description">
                  Connect with team members and coordinate effectively
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/dashboard" class="cta-button">
              View Organization →
            </a>
          </center>

          <div class="info-section">
            ℹ️ <strong>Getting Started</strong><br>
            Your permissions and access level are determined by your organization admin. 
            If you have questions about your role, reach out to your team administrator 
            or check our <a href="https://eventra.com/docs" style="color: #065f46; text-decoration: underline;">documentation</a>.
          </div>

          <p style="margin-top: 32px;">
            We're excited to have you on board!
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
//# sourceMappingURL=joinedOrganizationTemplate.js.map