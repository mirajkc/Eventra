export default function adminUpdateTemplate(type, reason) {
    return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eventra - Your Profile Has Been Updated</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f4f5;
      color: #18181b;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      border: 1px solid #e4e4e7;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #000000;
      padding: 32px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 32px 24px;
      line-height: 1.6;
    }
    .content h2 {
      color: #000000;
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .content p {
      margin: 16px 0;
      font-size: 16px;
      color: #18181b;
    }
    .reason-box {
      background-color: #fafafa;
      border: 1px solid #e4e4e7;
      border-left: 4px solid #000000;
      padding: 20px;
      margin: 24px 0;
      border-radius: 4px;
    }
    .reason-box p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #18181b;
    }
    .footer {
      background-color: #fafafa;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e4e4e7;
    }
    .footer p {
      margin: 8px 0;
      font-size: 14px;
      color: #71717a;
    }
    .support-link {
      color: #000000;
      text-decoration: underline;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Eventra</h1>
    </div>
    <div class="content">
      <h2>Hello user,</h2>
      <p>We're writing to inform you that your ${type} information on Eventra has been updated by our administrative team.</p>
      <p>This update was made to ensure your ${type} information is accurate and up-to-date.</p>
      
      <div class="reason-box">
        <p><strong>Reason for Update:</strong></p>
        <p>${reason}</p>
      </div>
      
      <p>We take the security and integrity of our platform very seriously. If you have any questions or concerns about this update, please don't hesitate to reach out to our support team.</p>
      
      <p>Thank you for being a part of the Eventra community!</p>
    </div>
    <div class="footer">
      <p>If you need assistance, please contact our support team:</p>
      <p><a href="mailto:support@eventra.com" class="support-link">support@eventra.com</a></p>
      <p>© ${new Date().getFullYear()} Eventra. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}
//# sourceMappingURL=adminUpdateTemplate.js.map