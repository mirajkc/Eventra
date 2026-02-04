import type { Request, Response, NextFunction } from "express";
declare class UserController {
    getLoggedInUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    getUserDetails(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllUsers(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const userController: UserController;
export default userController;
//# sourceMappingURL=user.controller.d.ts.map