import type { NextFunction, Request, Response } from "express";
declare class ChatController {
    chat: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    private getFrontendBaseUrl;
}
declare const chatController: ChatController;
export default chatController;
//# sourceMappingURL=chat.controller.d.ts.map