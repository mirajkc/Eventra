import 'dotenv/config';
declare class Enviroment {
    portNumber: number;
    secretKey: string;
    mode: string;
    clientURL: string;
    enableEmail: boolean;
    SMTPConfigs: {
        provider: string;
        host: string;
        port: string;
        user: string;
        password: string;
        from: string;
        resendApiKey: string;
    };
    cloudinaryKeys: {
        cloudName: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
    };
}
declare const enviroment: Enviroment;
export default enviroment;
//# sourceMappingURL=enviroment.config.d.ts.map