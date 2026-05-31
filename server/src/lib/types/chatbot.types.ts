export type ChatbotLocale = "en"

export interface IChatbotInstruction {
  intent: string
  routes: string[]
  reply: string
}

export interface IChatbotRoute {
  path: string
  label: string
  description: string
}

export interface IChatbotLink {
  label: string
  url: string
}

export interface IChatbotKnowledgeBase {
  locale: ChatbotLocale
  siteName: string
  assistant: {
    name: string
    role: string
    instructions: string[]
  }
  site: {
    summary: string
    landing: string
    home: string
    events: string
    organizations: string
    management: string
    auth: string
    pricing: string
  }
  navigation: {
    top: IChatbotRoute[]
  }
  sitemap: IChatbotRoute[]
  intentHints: IChatbotInstruction[]
}

export interface IChatRequestBody {
  message: string
  locale?: ChatbotLocale
}

export interface IChatResponseBody {
  reply: string
  locale: ChatbotLocale
  links: IChatbotLink[]
}
