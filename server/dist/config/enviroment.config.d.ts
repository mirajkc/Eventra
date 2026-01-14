import 'dotenv/config';
declare class Enviroment {
    portNumber: number;
    secretKey: string;
    mode: string;
    SMTPConfigs: {
        provider: string | undefined;
        host: string | undefined;
        port: string | undefined;
        user: string | undefined;
        password: string | undefined;
        from: string | undefined;
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