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
          background-color: #f4f6f8;
          font-family: Arial, Helvetica, sans-serif;
        }
        .container {
          max-width: 500px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 24px;
        }
        .header {
          text-align: center;
          margin-bottom: 24px;
        }
        .header h1 {
          color: #1f2937;
          margin: 0;
        }
        .content {
          color: #374151;
          font-size: 14px;
          line-height: 1.6;
        }
        .otp-box {
          margin: 24px 0;
          padding: 16px;
          text-align: center;
          background-color: #f9fafb;
          border-radius: 6px;
          font-size: 24px;
          letter-spacing: 4px;
          font-weight: bold;
          color: #111827;
        }
        .warning {
          font-size: 13px;
          color: #6b7280;
        }
        .footer {
          margin-top: 32px;
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Eventra</h1>
        </div>

        <div class="content">
          <p>Hello,</p>

          <p>
            We received a request to reset your Eventra account password.
            Please use the OTP below to continue.
          </p>

          <div class="otp-box">${otp}</div>

          <p class="warning">
            This OTP is valid for <strong>6 minutes</strong>.  
            Please do not share this code with anyone.
          </p>

          <p>
            If you did not request a password reset, you can safely ignore this email.
          </p>

          <p>
            Thanks,<br />
            <strong>Eventra Team</strong>
          </p>
        </div>

        <div class="footer">
          © ${new Date().getFullYear()} Eventra. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  `
}
