export function userKickedTemplate(organizationName: string, userName: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Removed from Organization</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
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
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
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
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #dc2626;
        }
        .org-name-label {
          font-size: 12px;
          color: #991b1b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .org-name {
          font-size: 28px;
          font-weight: 700;
          color: #991b1b;
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
        .alert-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #fef2f2;
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
          <div class="header-icon">⚠️</div>
          <h1>Removed from Organization</h1>
          <p>Your access has been revoked</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            We're writing to inform you that you have been removed from an organization on Eventra. 
            An administrator has revoked your access to this organization.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">Removed From</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <p>
            This action was taken by an organization administrator. Here's what this means:
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">🚫</div>
              <div class="info-text">
                <div class="info-title">Access Revoked</div>
                <div class="info-description">
                  You can no longer access events, data, or resources from this organization
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">
                <div class="info-title">Notifications Disabled</div>
                <div class="info-description">
                  You will no longer receive notifications or updates from this organization
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">💾</div>
              <div class="info-text">
                <div class="info-title">Data Access Lost</div>
                <div class="info-description">
                  Any work or contributions you made remain with the organization
                </div>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">✅</div>
              <div class="info-text">
                <div class="info-title">Your Account is Safe</div>
                <div class="info-description">
                  Your Eventra account remains active and unaffected by this action
                </div>
              </div>
            </div>
          </div>

          <div class="alert-section">
            <strong>⚠️ Important Information</strong><br><br>
            If you believe this removal was made in error or have questions about why you were removed, 
            please contact the organization administrator directly. Eventra support cannot reverse 
            administrative decisions made by organization owners.
          </div>

          <div class="help-section">
            💡 <strong>What You Can Do</strong><br>
            You can continue using Eventra by creating your own organization or joining other organizations. 
            To rejoin this organization, you would need to be invited again by an administrator.
          </div>

          <center>
            <a href="https://eventra.com/dashboard" class="cta-button">
              Go to Dashboard →
            </a>
          </center>

          <p style="margin-top: 32px;">
            If you have any questions about your account or need assistance, our support team is here to help.
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