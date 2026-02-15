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
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
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
        .otp-container {
          margin: 32px 0;
          text-align: center;
        }
        .otp-label {
          font-size: 13px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .otp-box {
          display: inline-block;
          padding: 24px 48px;
          background-color: #fafafa;
          border: 2px solid #000000;
          border-radius: 8px;
          font-size: 40px;
          letter-spacing: 8px;
          font-weight: 700;
          color: #000000;
        }
        .info-box {
          margin: 24px 0;
          padding: 20px;
          background-color: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          font-size: 14px;
          color: #52525b;
          text-align: center;
        }
        .info-box strong {
          color: #000000;
        }
        .security-note {
          margin-top: 24px;
          padding: 20px;
          background-color: #f4f4f5;
          border-radius: 8px;
          font-size: 14px;
          color: #52525b;
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
          <h1>Eventra</h1>
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
             This code will <strong>expire in 6 minutes</strong>. Please use it promptly to reset your password.
          </div>

          <div class="security-note">
             <strong>Security Reminder:</strong> Never share this code with anyone. 
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

