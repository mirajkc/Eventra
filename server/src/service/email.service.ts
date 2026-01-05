
import nodemailer from 'nodemailer'
import enviroment from '../config/enviroment.config.ts';
import type { IErrorTypes } from '../lib/types/errorhandler.types.ts';
class EmailService {
  #transport;
  constructor() {   
    try {
      this.#transport = nodemailer.createTransport({
        host : enviroment.smtp_details.host,
        port : Number(enviroment.smtp_details.port),
        secure : false, // Use true for port 465, false for port 587
        auth : {
          user : enviroment.smtp_details.user,
          pass : enviroment.smtp_details.password
        }
      })
      console.log("====SMTP Connected====")
    } catch (error) {
      console.log('SMTP Srver not connected ');
      throw {
        code: 500,
        message: 'SMTP server connection error',
        staus: 'SMTP_SERVER_CONNECTION_ERROR',
      } as IErrorTypes
    }
  }

  async sendEmail({ to, subject, message }: {to : string, subject : string, message : any}) {
      try {
        return await this.#transport.sendMail({
          to: to,
          from: enviroment.smtp_details.from,
          subject: subject,
          html: message,
        });
      } catch (error) {
        console.log(error);
        throw { 
           code: 500,
           message: "Unable to send the email", 
           staus: "EMAIL_SEND_ERROR" } as IErrorTypes
      }
    }
}
const emailService = new EmailService()
export default  emailService