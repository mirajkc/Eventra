import nodemailer from 'nodemailer';
import enviroment from '../config/enviroment.config.js';
import { Resend } from 'resend';
class EmailService {
    // #transport;
    // constructor() {
    //   try {
    //     this.#transport = nodemailer.createTransport({
    //       host: enviroment.SMTPConfigs.host,
    //       port: Number(enviroment.SMTPConfigs.port),
    //       auth: {
    //         user: enviroment.SMTPConfigs.user,
    //         pass: enviroment.SMTPConfigs.password,
    //       },
    //     });
    //     console.log('*****         SMTP server connected.....       ******');
    //   } catch (error) {
    //     console.log('SMTP Srver not connected ');
    //     throw {
    //       code: 500,
    //       message: 'SMTP server connection error',
    //       staus: 'SMTP_SERVER_CONNECTION_ERROR',
    //     };
    //   }
    // }
    // async sendEmail({ to, subject, message }: { to: string, subject: string, message: any }) {
    //   if (!enviroment.enableEmail) {
    //     console.log("Email sending is disabled.");
    //     return;
    //   }
    //   try {
    //     return await this.#transport.sendMail({
    //       to: to,
    //       from: enviroment.SMTPConfigs.from,
    //       subject: subject,
    //       html: message,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     throw { code: 500, message: "Unable to send the email please try again", staus: "EMAIL_SEND_ERROR" };
    //   }
    // }
    async sendEmail({ to, subject, message }) {
        if (!enviroment.enableEmail) {
            console.log("Email sending is disabled.");
            return;
        }
        try {
            const resend = new Resend(enviroment.SMTPConfigs.resendApiKey);
            const { data, error } = await resend.emails.send({
                from: enviroment.SMTPConfigs.from,
                to: to,
                subject: subject,
                html: message,
            });
            if (error) {
                console.error('Error sending email:', error);
                throw { code: 500, message: "Unable to send the email please try again", staus: "EMAIL_SEND_ERROR" };
            }
            console.log('Email sent successfully:', data);
            return data;
        }
        catch (error) {
            console.error('Error sending email:', error);
            throw { code: 500, message: "Unable to send the email please try again", staus: "EMAIL_SEND_ERROR" };
        }
    }
}
const emailService = new EmailService();
export default emailService;
//# sourceMappingURL=email.service.js.map