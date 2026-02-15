export function joinedOrganizationEmail(organizationName: string, userName: string) {
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
        .org-name-box {
          margin: 24px 0;
          padding: 20px;
          background-color: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          text-align: center;
        }
        .org-name-label {
          font-size: 12px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .org-name {
          font-size: 24px;
          font-weight: 700;
          color: #000000;
        }
        .features {
          margin: 24px 0;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .feature-title {
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }
        .feature-description {
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
              <div class="feature-text">
                <div class="feature-title">Collaborate with Team</div>
                <div class="feature-description">
                  Work together with other members to plan and execute events
                </div>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-text">
                <div class="feature-title">Access Organization Events</div>
                <div class="feature-description">
                  View, manage, and participate in all events within your organization
                </div>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-text">
                <div class="feature-title">Stay Updated</div>
                <div class="feature-description">
                  Receive notifications about important updates and event changes
                </div>
              </div>
            </div>
            
             <div class="feature-item">
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