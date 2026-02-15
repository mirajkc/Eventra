export default function adminDeleteTemplate(
  name: string,
  deleteType: "Event" | "Organization" | "Account"
) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deletion Notification</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #f4f4f5;
        margin: 0;
        padding: 0;
        color: #18181b;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid #e4e4e7;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background-color: #000000;
        padding: 32px 20px;
        text-align: center;
      }
      .header-title {
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
        margin: 0;
      }
      .content {
        padding: 32px 24px;
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        font-weight: 700;
        color: #000000;
      }
      .footer {
        background-color: #fafafa;
        padding: 24px;
        text-align: center;
        border-top: 1px solid #e4e4e7;
        font-size: 14px;
        color: #71717a;
      }
      a {
        color: #000000;
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="header-title">Important: ${deleteType} Deleted</div>
      </div>
      <div class="content">
        Hello ${name},<br><br>
        We wanted to inform you that your <span class="highlight">${deleteType.toLowerCase()}</span> has been <span class="highlight">permanently deleted</span> by the admin team. Please make sure to follow our platform policies to avoid future deletions.<br><br>
        If you believe this action was taken by mistake or have any questions, feel free to contact our support team immediately by replying to this email or visiting our <a href="https://www.example.com/support">support page</a>.<br><br>
        Thank you for your understanding and cooperation.
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Eventra. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
}
