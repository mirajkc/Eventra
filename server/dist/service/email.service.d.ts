declare class EmailService {
    #private;
    constructor();
    sendEmail({ to, subject, message }: {
        to: string;
        subject: string;
        message: any;
    }): Promise<import("nodemailer/lib/smtp-transport/index.js").SentMessageInfo>;
}
declare const emailService: EmailService;
export default emailService;
//# sourceMappingURL=email.service.d.ts.map