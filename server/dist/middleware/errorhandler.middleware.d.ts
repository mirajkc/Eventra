import type { Request, Response, NextFunction } from "express";
export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=errorhandler.middleware.d.ts.map