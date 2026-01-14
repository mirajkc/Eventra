import type { Request, Response, NextFunction } from "express";
declare class EventRegistrationController {
    registerNewParticipant(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    removeRegistration(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    makeAttendance(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllParticipants(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const eventRegistrationController: EventRegistrationController;
export default eventRegistrationController;
//# sourceMappingURL=event.registration.controller.d.ts.map