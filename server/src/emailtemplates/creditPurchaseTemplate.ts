export function thanksForCreditPurchase(
  userName: string,
  organizationName: string,
  creditNumber: number
) {
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
        .credit-display-box {
          margin: 24px 0;
          padding: 32px;
          background-color: #ffffff;
          border-radius: 8px;
          border: 2px solid #000000;
          text-align: center;
        }
        .credit-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }
        .credit-amount {
          font-size: 48px;
          font-weight: 800;
          color: #000000;
          line-height: 1;
          margin: 12px 0;
        }
        .credit-label {
          font-size: 14px;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .purchase-details {
          margin: 24px 0;
          padding: 20px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e4e4e7;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 500;
          color: #71717a;
          font-size: 14px;
        }
        .detail-value {
          font-weight: 600;
          color: #18181b;
          font-size: 14px;
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
        .footer a {
          color: #000000;
          text-decoration: underline;
        }
        .benefits {
           margin: 24px 0;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
          padding: 16px;
          background-color: #fafafa;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
        }
        .benefit-title {
           font-weight: 700;
           margin-bottom: 4px;
        }
        .benefit-description {
           font-size: 14px;
           color: #52525b;
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
              <span class="detail-value">Completed</span>
            </div>
          </div>

          <p>
            Here's what you can do with your credits:
          </p>
          
           <div class="benefits">
            <div class="benefit-item">
              <div class="benefit-text">
                <div class="benefit-title">Create Premium Events</div>
                <div class="benefit-description">
                  Use credits to unlock advanced event features, custom branding, and enhanced capabilities
                </div>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-text">
                <div class="benefit-title">Access Analytics</div>
                <div class="benefit-description">
                  Get detailed insights and reports about your events and attendee engagement
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