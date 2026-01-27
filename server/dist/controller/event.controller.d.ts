import type { Request, Response, NextFunction } from "express";
declare class EventController {
    createNewEvent(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateEventDetails(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getSingleEvent(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllEventsByQuery(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    isLoggedInuserJoined(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const eventController: EventController;
export default eventController;
//# sourceMappingURL=event.controller.d.ts.map