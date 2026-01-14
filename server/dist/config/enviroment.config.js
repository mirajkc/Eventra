import 'dotenv/config';
class Enviroment {
    portNumber = Number(process.env.PORT) || 9000;
    secretKey = process.env.SECRET_KEY || "SECRET";
    mode = process.env.MODE || "DEVELOPMENT";
    SMTPConfigs = {
        provider: process.env.SMTP_PROVIDER,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD,
        from: process.env.SMTP_FROM,
    };
    cloudinaryKeys = {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET
    };
}
const enviroment = new Enviroment();
export default enviroment;
//# sourceMappingURL=enviroment.config.js.map