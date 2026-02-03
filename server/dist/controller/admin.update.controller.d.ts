import type { NextFunction, Request, Response } from "express";
declare class AdminUpdateController {
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateEvent(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const adminUpdateController: AdminUpdateController;
export default adminUpdateController;
//# sourceMappingURL=admin.update.controller.d.ts.map