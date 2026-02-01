import type { NextFunction, Request, Response } from "express";
declare class AdminController {
    deleteOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const adminController: AdminController;
export default adminController;
//# sourceMappingURL=admin.controller.d.ts.map