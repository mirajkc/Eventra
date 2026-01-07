export function forgotPasswordTemplate(otp: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Eventra Password Reset</title>
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
          padding: 40px 24px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .header p {
          color: rgba(255, 255, 255, 0.9);
          margin: 8px 0 0 0;
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
        .otp-container {
          margin: 32px 0;
          text-align: center;
        }
        .otp-label {
          font-size: 13px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .otp-box {
          display: inline-block;
          padding: 20px 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          font-size: 36px;
          letter-spacing: 8px;
          font-weight: 700;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }
        .info-box {
          margin: 24px 0;
          padding: 16px 20px;
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          font-size: 14px;
          color: #92400e;
        }
        .info-box strong {
          color: #78350f;
        }
        .security-note {
          margin-top: 32px;
          padding: 20px;
          background-color: #f3f4f6;
          border-radius: 8px;
          font-size: 14px;
          color: #4b5563;
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
          <h1>🎭 Eventra</h1>
          <p>Password Reset Request</p>
        </div>

        <div class="content">
          <p class="greeting">Hello there,</p>

          <p>
            We received a request to reset the password for your Eventra account.
            To proceed with resetting your password, please use the one-time password below.
          </p>

          <div class="otp-container">
            <div class="otp-label">Your verification code</div>
            <div class="otp-box">${otp}</div>
          </div>

          <div class="info-box">
            ⏱️ This code will <strong>expire in 6 minutes</strong>. Please use it promptly to reset your password.
          </div>

          <div class="security-note">
            🔒 <strong>Security Reminder:</strong> Never share this code with anyone. 
            The Eventra team will never ask you for this code via email, phone, or any other method.
          </div>

          <p style="margin-top: 32px;">
            If you didn't request a password reset, you can safely ignore this email. 
            Your password will remain unchanged.
          </p>

          <p style="margin-top: 24px;">
            Best regards,<br />
            <strong>The Eventra Team</strong>
          </p>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Eventra. All rights reserved.</p>
          <p>Need help? <a href="mailto:support@eventra.com">Contact Support</a></p>
        </div>
      </div>
    </body>
  </html>
  `;
}

