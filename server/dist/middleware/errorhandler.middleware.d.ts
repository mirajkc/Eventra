import type { Request, Response, NextFunction } from "express";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";
export default function errorHandler(error: IErrorTypes, req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=errorhandler.middleware.d.ts.map