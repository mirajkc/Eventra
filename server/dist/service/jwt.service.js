import jwt, {} from "jsonwebtoken";
import enviroment from "../config/enviroment.config.js";
export function generateToken({ payload, expiresIn, }) {
    return jwt.sign({ userId: payload }, enviroment.secretKey, { expiresIn });
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, enviroment.secretKey);
    }
    catch {
        throw {
            code: 401,
            message: "Invalid or expired token. Please login again.",
            status: "VERIFICATION_ERR",
        };
    }
}
//# sourceMappingURL=jwt.service.js.map