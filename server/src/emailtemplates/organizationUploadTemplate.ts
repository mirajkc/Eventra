export function organizationUpdateTemplate(organizationName: string, userName: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Organization Updated</title>
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
        .updates {
          margin: 32px 0;
        }
        .update-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .update-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .update-text {
          flex: 1;
        }
        .update-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .update-description {
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
          <div class="header-icon">🔄</div>
          <h1>Organization Updated</h1>
          <p>Important changes have been made</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            We're writing to let you know that your organization has been updated on Eventra. 
            Changes have been made to the organization settings or information.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">Updated Organization</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <p>
            Organization updates may include changes to:
          </p>

          <div class="updates">
            <div class="update-item">
              <div class="update-icon">✏️</div>
              <div class="update-text">
                <div class="update-title">Organization Details</div>
                <div class="update-description">
                  Name, description, or other basic information about the organization
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">🎨</div>
              <div class="update-text">
                <div class="update-title">Branding & Appearance</div>
                <div class="update-description">
                  Logo, colors, themes, or other visual customizations
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">⚙️</div>
              <div class="update-text">
                <div class="update-title">Settings & Preferences</div>
                <div class="update-description">
                  Permissions, notifications, integrations, or configuration options
                </div>
              </div>
            </div>

            <div class="update-item">
              <div class="update-icon">👥</div>
              <div class="update-text">
                <div class="update-title">Team & Roles</div>
                <div class="update-description">
                  Member roles, access levels, or team structure changes
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
            ℹ️ <strong>Stay Informed</strong><br>
            To review all changes and current settings, visit your organization dashboard. 
            If you have questions about specific updates, contact your organization administrator 
            or our <a href="mailto:support@eventra.com" style="color: #065f46; text-decoration: underline;">support team</a>.
          </div>

          <p style="margin-top: 32px;">
            Thank you for being part of the Eventra community!
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