import type { NextFunction, Request, Response } from "express"
import enviroment from "../config/enviroment.config.js"
import type { IChatRequestBody } from "../lib/types/chatbot.types.js"
import chatService from "../service/chat.service.js"

class ChatController {
  chat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { message, locale } = req.body as IChatRequestBody
      const frontendBaseUrl = this.getFrontendBaseUrl(req)
      const result = await chatService.generateReply({ message, locale, frontendBaseUrl })

      return res.json({
        message: "Chat reply generated successfully.",
        data: result
      })
    } catch (error) {
      next(error)
    }
  }

  private getFrontendBaseUrl(req: Request): string {
    const origin = req.get("origin")
    if (origin) {
      return origin.replace(/\/$/, "")
    }

    const referer = req.get("referer")
    if (referer) {
      try {
        return new URL(referer).origin.replace(/\/$/, "")
      } catch {
        return enviroment.clientURL.replace(/\/$/, "")
      }
    }

    return enviroment.clientURL.replace(/\/$/, "")
  }
}

const chatController = new ChatController()
export default chatController
 