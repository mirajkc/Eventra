import jwt from "jsonwebtoken";
export declare function generateToken({ payload, expiresIn, }: {
    payload: string;
    expiresIn: any;
}): string;
export declare function verifyToken(token: string): string | jwt.JwtPayload;
//# sourceMappingURL=jwt.service.d.ts.map