import type { NextFunction, Request, Response } from "express";
declare class AdminController {
    deleteOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteEvent(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getMetadata(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllNotifications(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllErrorLogs(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllAdminLogs(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getCreditAndRevenue(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const adminController: AdminController;
export default adminController;
//# sourceMappingURL=admin.controller.d.ts.map