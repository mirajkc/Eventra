export function newOrganizationCreation(organizationName, userName) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Organization Created Successfully</title>
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
          <div class="header-icon">🏢</div>
          <h1>Organization Created!</h1>
          <p>Your new workspace is ready</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            Congratulations! You've successfully created a new organization on Eventra. 
            This will be your central hub for managing events, team members, and resources.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">Your Organization</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <center>
            <div class="success-badge">✓ Workspace Ready</div>
          </center>

          <p>
            Here's what you can do next to get started:
          </p>

          <div class="next-steps">
            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Complete Profile</div>
                <div class="step-description">
                  Add a logo, description, and contact details to make your organization stand out
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Invite Your Team</div>
                <div class="step-description">
                  Add team members and assign roles to help manage your organization and events
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Create First Event</div>
                <div class="step-description">
                  Launch your first event and start selling tickets immediately
                </div>
              </div>
            </div>

            <div class="step-item">
              <div class="step-text">
                <div class="step-title">Explore Analytics</div>
                <div class="step-description">
                  Check out the dashboard to see your organization's performance metrics
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/dashboard" class="cta-button">
              Go to Dashboard →
            </a>
          </center>

          <p style="margin-top: 32px;">
            We're excited to see what you'll build with Eventra! If you need any assistance getting set up, 
            our support team is just a click away.
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
//# sourceMappingURL=newOrganizationTemplate.js.map