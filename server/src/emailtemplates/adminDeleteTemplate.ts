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
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .header {
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #d32f2f;
        margin-bottom: 20px;
      }
      .content {
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        font-weight: bold;
        color: #d32f2f;
      }
      .footer {
        margin-top: 30px;
        font-size: 14px;
        color: #888;
        text-align: center;
      }
      a {
        color: #1976d2;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Important: ${deleteType} Deleted</div>
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
