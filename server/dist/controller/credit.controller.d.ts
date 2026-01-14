import type { NextFunction, Request, Response } from "express";
declare class CreditController {
    getCredit(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    purchaseCredit(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const creditController: CreditController;
export default creditController;
//# sourceMappingURL=credit.controller.d.ts.map