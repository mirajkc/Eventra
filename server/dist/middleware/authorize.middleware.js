import { verifyToken } from "../service/jwt.service.js";
import authService from "../service/auth.service.js";
export default function authorize({ role = "CUSTOMER" }) {
    return async (req, res, next) => {
        try {
            const token = (req.cookies.accessToken || req.headers.authorization)?.replace(/^Bearer\s*/, '');
            if (!token)
                throw {
                    code: 401,
                    message: 'User not authorized',
                    status: 'USER_NOT_AUTHORIZED_ERR'
                };
            const decoded = verifyToken(token);
            const userDetails = await authService.getUserDetails({ id: decoded.userId });
            if (!userDetails)
                throw {
                    code: 404,
                    message: 'User not found',
                    status: 'USER_NOT_FOUND_ERR'
                };
            if (role === "ADMIN" && userDetails.role !== "ADMIN") {
                throw {
                    code: 403,
                    message: "You don't have permission",
                    status: "USER_NOT_PERMITTED"
                };
            }
            req.userDetails = userDetails;
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=authorize.middleware.js.map