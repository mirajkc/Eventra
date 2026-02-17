import 'dotenv/config';
class Enviroment {
    portNumber = Number(process.env.PORT) || 9000;
    secretKey = process.env.SECRET_KEY || "SECRET";
    mode = process.env.MODE || "development";
    clientURL = process.env.CLIENT_URL || "http://localhost:3000";
    enableEmail = true;
    SMTPConfigs = {
        provider: process.env.SMTP_PROVIDER || "gmail",
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: process.env.SMTP_PORT || "587",
        user: process.env.SMTP_USER || "",
        password: process.env.SMTP_PASSWORD || "",
        from: process.env.SMTP_FROM || "miraj@eventraa.tech",
        resendApiKey: process.env.RESEND_API || "",
    };
    cloudinaryKeys = {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET
    };
    geocodeKeys = {
        locationIq: process.env.LOCATION_IQ_ACCESSTOKEN
    };
}
const enviroment = new Enviroment();
export default enviroment;
//# sourceMappingURL=enviroment.config.js.map