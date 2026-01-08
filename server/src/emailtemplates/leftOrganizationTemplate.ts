export function leftOrganizationEmail(organizationName: string, userName: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>You've Left ${organizationName}</title>
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
        .org-name-box {
          margin: 32px 0;
          padding: 24px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #9ca3af;
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }
        .warning-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          font-size: 14px;
          color: #92400e;
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
          <h1>You've Left an Organization</h1>
          <p>Your access has been removed</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            This email confirms that you have left the following organization on Eventra. 
            You no longer have access to this organization's events and resources.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">Organization Left</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <p>
            Here's what this means for your account:
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">🚫</div>
              <div class="info-text">
                <div class="info-title">Access Removed</div>
                <div class="info-description">
                  You no longer have access to events, data, or resources from this organization
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">
                <div class="info-title">Notifications Stopped</div>
                <div class="info-description">
                  You will not receive any further notifications from this organization
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">✅</div>
              <div class="info-text">
                <div class="info-title">Account Active</div>
                <div class="info-description">
                  Your Eventra account remains active and you can join or create other organizations
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🔄</div>
              <div class="info-text">
                <div class="info-title">Rejoin Possible</div>
                <div class="info-description">
                  You can rejoin this organization if invited again by an administrator
                </div>
              </div>
            </div>
          </div>

          <div class="warning-section">
            ⚠️ <strong>Important Notice</strong><br>
            If you believe this was done in error or you did not initiate this action, 
            please contact the organization administrator or our support team immediately.
          </div>

          <div class="help-section">
            💡 <strong>What's Next?</strong><br>
            You can continue using Eventra by creating a new organization or joining 
            an existing one. Visit your dashboard to explore your options.
          </div>

          <center>
            <a href="https://eventra.com/dashboard" class="cta-button">
              Go to Dashboard →
            </a>
          </center>

          <p style="margin-top: 32px;">
            If you have any questions or concerns, we're here to help.
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