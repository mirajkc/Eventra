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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background-color: #6366f1;
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
    }
    .content {
      padding: 40px 30px;
      color: #333333;
      line-height: 1.6;
    }
    .content h2 {
      color: #1e293b;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .content p {
      margin: 15px 0;
      font-size: 16px;
    }
    .reason-box {
      background-color: #f8fafc;
      border-left: 4px solid #6366f1;
      padding: 20px;
      margin: 20px 0;
    }
    .reason-box p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #334155;
    }
    .footer {
      background-color: #f1f5f9;
      padding: 30px 20px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      margin: 5px 0;
      font-size: 14px;
      color: #64748b;
    }
    .support-link {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
    }
    .support-link:hover {
      text-decoration: underline;
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
      <p><a href="mailto:[EMAIL_ADDRESS]" class="support-link">[EMAIL_ADDRESS]</a></p>
      <p>© ${new Date().getFullYear()} Eventra. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}
//# sourceMappingURL=adminUpdateTemplate.js.map