import type { NextFunction, Request, Response } from "express";
declare class EventChatController {
    sendMessage(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    fetchMessage(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const eventChatController: EventChatController;
export default eventChatController;
//# sourceMappingURL=event.chat.controller.d.ts.map