import type { Request, Response, NextFunction } from "express";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";
import { verifyToken } from "../service/jwt.service.js";
import authService from "../service/auth.service.js";

interface IJwtPayload { 
  userId: string; 
  role: "CUSTOMER" | "ADMIN"; 
}

export default function authorize({ role = "CUSTOMER" } : { role?: "CUSTOMER" | "ADMIN" }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = (req.cookies.accessToken || req.headers.authorization)?.replace(/^Bearer\s*/, '');     
      if (!token) throw { 
        code: 401, 
        message: 'User not authorized', 
        status: 'USER_NOT_AUTHORIZED_ERR' } as IErrorTypes;

      const decoded = verifyToken(token) as IJwtPayload;
      const userDetails = await authService.getUserDetails({ id: decoded.userId });
      if (!userDetails) throw {
         code: 404, 
         message: 'User not found', 
         status: 'USER_NOT_FOUND_ERR' } as IErrorTypes;
      if (role === "ADMIN" && userDetails.role !== "ADMIN") {
        throw { 
          code: 403, 
          message: "You don't have permission", 
          status: "USER_NOT_PERMITTED" } as IErrorTypes;
      }
      req.userDetails = userDetails
      next();
    } catch (error) {
      next(error)
    }
  }
}
