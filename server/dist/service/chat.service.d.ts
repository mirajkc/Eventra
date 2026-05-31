import type { ChatbotLocale, IChatResponseBody } from "../lib/types/chatbot.types.js";
declare class ChatService {
    private readonly dataDir;
    private loadKnowledgeBase;
    private isWebsiteScoped;
    private isGreeting;
    private buildRefusalReply;
    private buildGreetingReply;
    private stripEmojis;
    private sanitizeReply;
    private buildUrl;
    private buildLink;
    private getStaticRouteLinks;
    private appendHelpfulLinks;
    private buildDeterministicReply;
    private buildSystemPrompt;
    private extractReply;
    generateReply({ message, locale, frontendBaseUrl }: {
        message: string;
        locale: ChatbotLocale | undefined;
        frontendBaseUrl: string;
    }): Promise<IChatResponseBody>;
}
declare const chatService: ChatService;
export default chatService;
//# sourceMappingURL=chat.service.d.ts.map