import 'dotenv/config'
class Enviroment {
  portNumber: number = Number(process.env.PORT) || 9000
  secretKey: string = process.env.SECRET_KEY || "SECRET"
  mode: string = process.env.MODE || "development"
  clientURL: string = process.env.CLIENT_URL || "http://localhost:3000"
  enableEmail: boolean = true
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
  }
}
const enviroment = new Enviroment()
export default enviroment