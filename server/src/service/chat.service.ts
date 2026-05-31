import { readFile } from "node:fs/promises"
import path from "node:path"
import enviroment from "../config/enviroment.config.js"
import type { IErrorTypes } from "../lib/types/errorhandler.types.js"
import type {
  ChatbotLocale,
  IChatbotKnowledgeBase,
  IChatbotLink,
  IChatResponseBody
} from "../lib/types/chatbot.types.js"

type OpenRouterChoice = {
  message?: {
    content?: string | Array<{ text?: string }>
  }
}

type OpenRouterResponse = {
  choices?: OpenRouterChoice[]
}

const knowledgeBaseCache = new Map<ChatbotLocale, Promise<IChatbotKnowledgeBase>>()
const greetingPatterns = [
  /\bhello\b/i,
  /\bhi\b/i,
  /\bhey\b/i,
  /\bhowdy\b/i
]

class ChatService {
  private readonly dataDir = path.resolve(process.cwd(), "src", "chatbot", "data")

  private async loadKnowledgeBase(locale: ChatbotLocale): Promise<IChatbotKnowledgeBase> {
    const cached = knowledgeBaseCache.get(locale)
    if (cached) {
      return cached
    }

    const loader = (async () => {
      const filePath = path.join(this.dataDir, `${locale}.json`)
      const raw = await readFile(filePath, "utf8")
      const parsed = JSON.parse(raw) as IChatbotKnowledgeBase

      if (!parsed || parsed.locale !== locale) {
        throw {
          code: 500,
          message: "Chatbot context is invalid for the selected locale.",
          status: "CHATBOT_CONTEXT_INVALID_ERR"
        } as IErrorTypes
      }

      return parsed
    })()

    knowledgeBaseCache.set(locale, loader)
    return loader
  }

  private isWebsiteScoped(message: string): boolean {
    const normalized = message.toLowerCase()
    const keywords = [
      "eventra",
      "event",
      "events",
      "organization",
      "organizations",
      "organisation",
      "organisations",
      "home",
      "dashboard",
      "about",
      "login",
      "register",
      "profile",
      "security",
      "password",
      "otp",
      "credit",
      "pricing",
      "price",
      "subscription",
      "browse",
      "navigate",
      "navigation",
      "website",
      "guide",
      "help",
      "manage",
      "join",
      "create",
      "recommend"
    ]

    return keywords.some((keyword) => normalized.includes(keyword))
  }

  private isGreeting(message: string): boolean {
    return greetingPatterns.some((pattern) => pattern.test(message))
  }

  private buildRefusalReply(): string {
    return "I can only help with Eventra website questions, navigation, and recommendations."
  }

  private buildGreetingReply(): string {
    return "Hi, how can I help you?"
  }

  private stripEmojis(text: string): string {
    return text.replace(
      /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{27BF}]/gu,
      ""
    )
  }

  private sanitizeReply(text: string): string {
    return this.stripEmojis(text).replace(/\s{2,}/g, " ").trim()
  }

  private buildUrl(frontendBaseUrl: string, path: string): string {
    return new URL(path, frontendBaseUrl.endsWith("/") ? frontendBaseUrl : `${frontendBaseUrl}/`).toString()
  }

  private buildLink(label: string, path: string, frontendBaseUrl: string): IChatbotLink {
    return {
      label,
      url: this.buildUrl(frontendBaseUrl, path)
    }
  }

  private getStaticRouteLinks(message: string, frontendBaseUrl: string): IChatbotLink[] {
    const normalized = message.toLowerCase()
    const links: IChatbotLink[] = []
    const push = (label: string, path: string) => {
      if (!links.some((link) => link.url === this.buildUrl(frontendBaseUrl, path))) {
        links.push(this.buildLink(label, path, frontendBaseUrl))
      }
    }

    if (/join|join.*organization|organization.*join|how can i join|become a member/.test(normalized)) {
      push("Organizations", "/organizations")
    }

    if (/event|recommend|browse|find/.test(normalized)) {
      push("Events", "/events")
      push("Home", "/home")
    }

    if (/about|what is eventra|how does.*work|how it works|website/.test(normalized)) {
      push("About", "/about")
      push("Home", "/home")
    }

    if (/login|sign in|log in/.test(normalized)) {
      push("Login", "/auth/login")
    }

    if (/register|signup|sign up/.test(normalized)) {
      push("Register", "/auth/register")
    }

    if (/profile/.test(normalized)) {
      push("Profile", "/user/profile")
    }

    if (/security|password|otp/.test(normalized)) {
      push("Security", "/user/security")
    }

    if (/manage|create organization|update organization|delete organization/.test(normalized)) {
      push("Create organization", "/manage-organization/create")
      push("Manage organization", "/manage-organization/organization")
      push("Joined organizations", "/manage-organization/joined-organizations")
    }

    if (/credit|pricing|price|subscription/.test(normalized)) {
      push("Home", "/")
    }

    return links
  }

  private appendHelpfulLinks(reply: string, links: IChatbotLink[]): string {
    if (links.length < 1) {
      return this.sanitizeReply(reply)
    }

    const usefulLinks = links
      .map((link) => `[${link.label}](${link.url})`)
      .join(", ")

    return `${this.sanitizeReply(reply)} Useful links: ${usefulLinks}.`
  }

  private buildDeterministicReply(message: string, frontendBaseUrl: string): { reply: string; links: IChatbotLink[] } | null {
    const normalized = message.toLowerCase()

    if (/join|join.*organization|organization.*join|how can i join|become a member/.test(normalized)) {
      const link = this.buildLink("organization listing page", "/organizations", frontendBaseUrl)
      return {
        reply: `Please visit the organization listing page [here](${link.url}) and find a fitting organization to join.`,
        links: [link]
      }
    }

    if (/recommend|suggest.*event|find.*event|browse.*event/.test(normalized)) {
      const eventsLink = this.buildLink("Events page", "/events", frontendBaseUrl)
      const homeLink = this.buildLink("Home dashboard", "/home", frontendBaseUrl)
      return {
        reply: `Check the Events page [here](${eventsLink.url}) or the Home dashboard [here](${homeLink.url}) for recommendations.`,
        links: [eventsLink, homeLink]
      }
    }

    if (/what is eventra|how does.*work|how it works|website/.test(normalized)) {
      const aboutLink = this.buildLink("About page", "/about", frontendBaseUrl)
      const homeLink = this.buildLink("Home dashboard", "/home", frontendBaseUrl)
      return {
        reply: `Eventra is an all in one event management system. Learn more on the About page [here](${aboutLink.url}) or start from the Home dashboard [here](${homeLink.url}).`,
        links: [aboutLink, homeLink]
      }
    }

    if (/credit|pricing|price|subscription/.test(normalized)) {
      const homeLink = this.buildLink("Landing page", "/", frontendBaseUrl)
      return {
        reply: `To find credit and pricing information for organizations, head over to the landing page [here](${homeLink.url}).`,
        links: [homeLink]
      }
    }

    return null
  }

  private buildSystemPrompt(knowledgeBase: IChatbotKnowledgeBase, frontendBaseUrl: string): string {
    const sitemap = knowledgeBase.sitemap
      .map((route) => `- ${route.path} | ${route.label} | ${route.description}`)
      .join("\n")

    const intentHints = knowledgeBase.intentHints
      .map((hint) => `- ${hint.intent}: ${hint.reply} (routes: ${hint.routes.join(", ")})`)
      .join("\n")

    return [
      `${knowledgeBase.assistant.name} — ${knowledgeBase.assistant.role}.`,
      ...knowledgeBase.assistant.instructions,
      `Frontend base URL: ${frontendBaseUrl}`,
      `Site summary: ${knowledgeBase.site.summary}`,
      `Landing: ${knowledgeBase.site.landing}`,
      `Home: ${knowledgeBase.site.home}`,
      `Events: ${knowledgeBase.site.events}`,
      `Organizations: ${knowledgeBase.site.organizations}`,
      `Management: ${knowledgeBase.site.management}`,
      `Authentication: ${knowledgeBase.site.auth}`,
      `Pricing: ${knowledgeBase.site.pricing}`,
      `Top navigation:\n${knowledgeBase.navigation.top.map((item) => `- ${item.label} -> ${item.path} (${item.description})`).join("\n")}`,
      `Sitemap:\n${sitemap}`,
      `Intent hints:\n${intentHints}`,
      `If the user asks for a recommendation, point them to the most relevant route and briefly explain why.`,
      `Never invent dynamic IDs or detail-page URLs.`
    ].join("\n\n")
  }

  private extractReply(response: OpenRouterResponse): string {
    const content = response.choices?.[0]?.message?.content

    if (typeof content === "string") {
    return this.sanitizeReply(content)
    }

    if (Array.isArray(content)) {
      return content
        .map((part) => part.text ?? "")
        .join("")
        .trim()
    }

    throw {
      code: 502,
      message: "OpenRouter returned an empty response.",
      status: "OPENROUTER_EMPTY_RESPONSE_ERR"
    } as IErrorTypes
  }

  async generateReply({ message, locale, frontendBaseUrl }: { message: string; locale: ChatbotLocale | undefined; frontendBaseUrl: string }): Promise<IChatResponseBody> {
    const selectedLocale = locale ?? "en"

    if (this.isGreeting(message)) {
      return {
        reply: this.buildGreetingReply(),
        locale: selectedLocale,
        links: []
      }
    }

    const deterministicReply = this.buildDeterministicReply(message, frontendBaseUrl)
    if (deterministicReply) {
      return {
        reply: deterministicReply.reply,
        locale: selectedLocale,
        links: deterministicReply.links
      }
    }

    if (!this.isWebsiteScoped(message)) {
      return {
        reply: this.buildRefusalReply(),
        locale: selectedLocale,
        links: []
      }
    }

    const knowledgeBase = await this.loadKnowledgeBase(selectedLocale)
    const apiKey = enviroment.openRouterApiKey.trim()

    if (!apiKey) {
      throw {
        code: 500,
        message: "OpenRouter API key is missing. Set OPENROUTERAPI in the server env.",
        status: "OPENROUTER_API_KEY_MISSING_ERR"
      } as IErrorTypes
    }

    const response = await fetch(enviroment.openRouterEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": enviroment.clientURL,
        "X-Title": knowledgeBase.siteName
      },
      body: JSON.stringify({
        model: enviroment.openRouterModel,
        messages: [
          {
            role: "system",
            content: this.buildSystemPrompt(knowledgeBase, frontendBaseUrl)
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.3
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw {
        code: response.status,
        message: `OpenRouter request failed: ${errorText}`,
        status: "OPENROUTER_REQUEST_FAILED_ERR"
      } as IErrorTypes
    }

    const data = (await response.json()) as OpenRouterResponse
    const links = this.getStaticRouteLinks(message, frontendBaseUrl)

    return {
      reply: this.appendHelpfulLinks(this.extractReply(data), links),
      locale: selectedLocale,
      links
    }
  }
}

const chatService = new ChatService()
export default chatService
