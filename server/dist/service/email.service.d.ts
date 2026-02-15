declare class EmailService {
    sendEmail({ to, subject, message }: {
        to: string;
        subject: string;
        message: any;
    }): Promise<import("resend").CreateEmailResponseSuccess | undefined>;
}
declare const emailService: EmailService;
export default emailService;
//# sourceMappingURL=email.service.d.ts.map