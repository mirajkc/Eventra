export function thanksForCreditPurchase(userName, organizationName, creditNumber) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Credit Purchase Confirmed</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-radius: 12px;
          text-align: center;
          border: 2px solid #f59e0b;
        }
        .org-name-label {
          font-size: 12px;
          color: #92400e;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .org-name {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .credit-display-box {
          margin: 32px 0;
          padding: 32px;
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
          border-radius: 16px;
          border: 3px solid #f59e0b;
          text-align: center;
        }
        .credit-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .credit-amount {
          font-size: 56px;
          font-weight: 900;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin: 16px 0;
        }
        .credit-label {
          font-size: 14px;
          color: #92400e;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .purchase-details {
          margin: 32px 0;
          padding: 24px;
          background-color: #f9fafb;
          border-radius: 12px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #6b7280;
          font-size: 14px;
        }
        .detail-value {
          font-weight: 700;
          color: #1f2937;
          font-size: 14px;
        }
        .benefits {
          margin: 32px 0;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #f9fafb;
          border-radius: 8px;
        }
        .benefit-icon {
          font-size: 24px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .benefit-text {
          flex: 1;
        }
        .benefit-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .benefit-description {
          font-size: 14px;
          color: #6b7280;
        }
        .cta-button {
          display: inline-block;
          margin: 32px 0;
          padding: 16px 32px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);
        }
        .success-section {
          margin-top: 32px;
          padding: 20px;
          background-color: #d1fae5;
          border-left: 4px solid #10b981;
          border-radius: 8px;
          font-size: 14px;
          color: #065f46;
        }
        .info-section {
          margin-top: 24px;
          padding: 20px;
          background-color: #eff6ff;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          font-size: 14px;
          color: #1e40af;
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
          color: #f59e0b;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-icon">💳</div>
          <h1>Purchase Successful!</h1>
          <p>Thank you for your purchase</p>
        </div>

        <div class="content">
          <p class="greeting">Hi ${userName},</p>

          <p>
            Thank you for purchasing credits on Eventra! Your transaction has been completed 
            successfully and the credits have been added to your organization.
          </p>

          <div class="org-name-box">
            <div class="org-name-label">Credits Added To</div>
            <div class="org-name">${organizationName}</div>
          </div>

          <center>
            <div class="success-badge">✓ Payment Processed Successfully</div>
          </center>

          <div class="credit-display-box">
            <div class="credit-icon">⭐</div>
            <div class="credit-amount">${creditNumber.toLocaleString()}</div>
            <div class="credit-label">Credits Purchased</div>
          </div>

          <div class="purchase-details">
            <div class="detail-row">
              <span class="detail-label">Organization</span>
              <span class="detail-value">${organizationName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Credits Purchased</span>
              <span class="detail-value">${creditNumber.toLocaleString()} Credits</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Purchase Date</span>
              <span class="detail-value">${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status</span>
              <span class="detail-value" style="color: #10b981;">Completed</span>
            </div>
          </div>

          <div class="success-section">
            ✅ <strong>Credits Now Available!</strong><br>
            Your credits are now active and ready to use. You can start using them immediately 
            for events, features, and premium services within your organization.
          </div>

          <p>
            Here's what you can do with your credits:
          </p>

          <div class="benefits">
            <div class="benefit-item">
              <div class="benefit-icon">🎫</div>
              <div class="benefit-text">
                <div class="benefit-title">Create Premium Events</div>
                <div class="benefit-description">
                  Use credits to unlock advanced event features, custom branding, and enhanced capabilities
                </div>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">📊</div>
              <div class="benefit-text">
                <div class="benefit-title">Access Analytics</div>
                <div class="benefit-description">
                  Get detailed insights and reports about your events and attendee engagement
                </div>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">🚀</div>
              <div class="benefit-text">
                <div class="benefit-title">Unlock Premium Features</div>
                <div class="benefit-description">
                  Access advanced tools, integrations, and priority support for your organization
                </div>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">📧</div>
              <div class="benefit-text">
                <div class="benefit-title">Enhanced Communications</div>
                <div class="benefit-description">
                  Send custom email campaigns and automated notifications to your attendees
                </div>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">💰</div>
              <div class="benefit-text">
                <div class="benefit-title">Track Your Balance</div>
                <div class="benefit-description">
                  Monitor your credit usage and remaining balance in your organization dashboard
                </div>
              </div>
            </div>
          </div>

          <center>
            <a href="https://eventra.com/dashboard" class="cta-button">
              Go to Dashboard →
            </a>
          </center>

          <div class="info-section">
            💡 <strong>Need Help?</strong><br>
            Visit your organization dashboard to view your credit balance, usage history, and available 
            features. If you have questions about using credits, check our 
            <a href="https://eventra.com/docs/credits" style="color: #1e40af; text-decoration: underline;">credits guide</a> 
            or contact our support team.
          </div>

          <p style="margin-top: 32px;">
            A detailed receipt has been sent to your email for your records. Thank you for 
            choosing Eventra to power your events!
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
            <a href="https://eventra.com/billing">Billing</a> • 
            <a href="mailto:support@eventra.com">Support</a>
          </p>
        </div>
      </div>
    </body>
  </html>
  `;
}
//# sourceMappingURL=creditPurchaseTemplate.js.map