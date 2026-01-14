import type { Request, Response, NextFunction } from "express";
declare class OrganizationController {
    createOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getOrganizationDetailsById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    joinOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    leaveOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateMemberRole(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteOrganization(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    kickMember(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const organizationController: OrganizationController;
export default organizationController;
//# sourceMappingURL=organization.controller.d.ts.map