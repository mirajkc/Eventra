"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"
import Link from "next/link"
import { formatDistanceToNowStrict } from "date-fns"
import {
  Bot,
  Link as LinkIcon,
  Loader2,
  MessageSquareText,
  Send,
  Sparkles,
  X
} from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type ChatRole = "user" | "assistant"

interface ChatLink {
  label: string
  url: string
}

interface ChatMessage {
  id: string
  role: ChatRole
  content: string
  links?: ChatLink[]
  createdAt: number
}

interface ChatSessionState {
  messages: ChatMessage[]
  lastActivityAt: number | null
}

interface ChatApiResponse {
  message?: string
  data?: {
    reply?: string
    locale?: string
    links?: ChatLink[]
  }
}

const STORAGE_KEY = "eventra.site-chat.session"
const EXPIRY_MS = 10 * 60 * 1000
const MAX_CHARS = 2000

const starterPrompts = [
  "How does Eventra work?",
  "Recommend me an event",
  "How can I join an organization?"
]

function createMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

function cleanReplyText(text: string) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+Useful links:\s*/i, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
}

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ?? ""
}

function buildSessionUrl() {
  const baseUrl = getApiBaseUrl()
  return baseUrl ? `${baseUrl}/chat` : "/chat"
}

export function FloatingAiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [lastActivityAt, setLastActivityAt] = useState<number | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const chatRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  const remainingChars = MAX_CHARS - message.length

  const clearSession = useCallback(() => {
    setMessages([])
    setLastActivityAt(null)

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  const persistSession = useCallback((nextMessages: ChatMessage[], updatedAt: number | null) => {
    if (typeof window === "undefined") {
      return
    }

    const payload: ChatSessionState = {
      messages: nextMessages,
      lastActivityAt: updatedAt
    }

    if (nextMessages.length === 0 || !updatedAt) {
      window.localStorage.removeItem(STORAGE_KEY)
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Partial<ChatSessionState>
        const savedAt = typeof parsed.lastActivityAt === "number" ? parsed.lastActivityAt : null
        const savedMessages = Array.isArray(parsed.messages) ? parsed.messages : []

        if (savedAt && Date.now() - savedAt < EXPIRY_MS) {
          setMessages(savedMessages)
          setLastActivityAt(savedAt)
        } else {
          window.localStorage.removeItem(STORAGE_KEY)
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    }

    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) {
      return
    }

    persistSession(messages, lastActivityAt)
  }, [hydrated, lastActivityAt, messages, persistSession])

  useEffect(() => {
    if (!hydrated || !lastActivityAt) {
      return
    }

    const remaining = EXPIRY_MS - (Date.now() - lastActivityAt)
    if (remaining <= 0) {
      clearSession()
      return
    }

    const timeoutId = window.setTimeout(() => {
      clearSession()
    }, remaining)

    return () => window.clearTimeout(timeoutId)
  }, [clearSession, hydrated, lastActivityAt])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        return
      }

      if (chatRef.current && !chatRef.current.contains(target) && !target.closest(".ai-assistant-toggle")) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const container = chatRef.current?.querySelector<HTMLElement>("[data-chat-scroll]")
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, isOpen])

  const sendMessage = useCallback(
    async (rawValue: string) => {
      const trimmed = rawValue.trim()
      if (!trimmed || isSending) {
        return
      }

      if (trimmed.length > MAX_CHARS) {
        toast.error(`Messages must be ${MAX_CHARS} characters or fewer.`)
        return
      }

      const userMessage: ChatMessage = {
        id: createMessageId(),
        role: "user",
        content: trimmed,
        createdAt: Date.now()
      }

      setMessages((current) => [...current, userMessage])
      setMessage("")
      setIsSending(true)
      setLastActivityAt(Date.now())

      try {
        const response = await fetch(buildSessionUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: trimmed,
            locale: "en"
          })
        })

        const result = (await response.json()) as ChatApiResponse

        if (!response.ok) {
          throw new Error(result.message ?? "Unable to reach the assistant.")
        }

        const assistantReply = cleanReplyText(result.data?.reply ?? "Hi, how can I help you?")
        const assistantMessage: ChatMessage = {
          id: createMessageId(),
          role: "assistant",
          content: assistantReply || "Hi, how can I help you?",
          links: result.data?.links ?? [],
          createdAt: Date.now()
        }

        setMessages((current) => [...current, assistantMessage])
        setLastActivityAt(Date.now())
      } catch (error) {
        const fallbackMessage: ChatMessage = {
          id: createMessageId(),
          role: "assistant",
          content: "I could not reach the guide right now. Please try again.",
          createdAt: Date.now()
        }

        setMessages((current) => [...current, fallbackMessage])
        setLastActivityAt(Date.now())
        toast.error(error instanceof Error ? error.message : "Unable to reach the assistant.")
      } finally {
        setIsSending(false)
      }
    },
    [isSending]
  )

  const handleSubmit = () => {
    void sendMessage(message)
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  const handleStarterPrompt = (prompt: string) => {
    setMessage(prompt)
    inputRef.current?.focus()
  }

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 flex justify-end sm:bottom-4 sm:left-auto sm:right-4">
      <button
        type="button"
        aria-label="Open chat assistant"
        className={cn(
          "ai-assistant-toggle group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14 dark:border-white/10 dark:bg-white dark:text-neutral-950",
          isOpen && "scale-105"
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />
        <span className="absolute inset-0 rounded-full ring-1 ring-white/15 dark:ring-black/10" />
        {isOpen ? <X className="relative z-10 size-5" /> : <Bot className="relative z-10 size-5" />}
      </button>

      {isOpen && (
        <div
          ref={chatRef}
          className="absolute bottom-16 right-0 flex max-h-[calc(100vh-8rem)] w-full flex-col overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-white text-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:bottom-20 sm:w-[400px] sm:max-h-[min(calc(100vh-12rem),640px)] sm:rounded-[1.5rem] dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.045),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_42%)]" />

          <div className="relative flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white">
                <Bot className="size-4" />
              </div>
              <div>
                <p className="text-[0.8rem] font-semibold tracking-tight sm:text-sm">Eventra Bot</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="relative border-b border-neutral-200 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-neutral-800">
            <p className="text-[0.8rem] leading-5 text-neutral-700 sm:text-sm sm:leading-6 dark:text-neutral-300">
              Ask about Eventra pages, navigation, or recommendations.
            </p>
          </div>

          <div
            data-chat-scroll
            className="custom-scrollbar relative min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3 sm:space-y-4 sm:px-4 sm:py-4"
          >
            {messages.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-3 sm:rounded-3xl sm:p-4 dark:border-neutral-700 dark:bg-neutral-900/40">
                <p className="text-sm font-medium">Try one of these:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleStarterPrompt(prompt)}
                      className="rounded-full border border-neutral-300 bg-white px-2.5 py-1.5 text-[0.7rem] text-neutral-700 transition-colors hover:bg-neutral-950 hover:text-white sm:px-3 sm:text-xs dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-neutral-950"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {messages.map((item) => (
              <div
                key={item.id}
                className={cn("flex", item.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "min-w-0 max-w-[90%] rounded-2xl px-3 py-2.5 text-[0.8rem] leading-5 shadow-sm sm:max-w-[85%] sm:rounded-3xl sm:px-4 sm:py-3 sm:text-sm sm:leading-6",
                    item.role === "user"
                      ? "rounded-br-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                      : "rounded-bl-md border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
                  )}
                >
                  <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{item.content}</p>

                  {item.links?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <Link
                          key={`${item.id}-${link.url}`}
                          href={link.url}
                          className={cn(
                            "inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium transition-colors sm:px-3 sm:text-xs",
                            item.role === "user"
                              ? "border-white/20 bg-white/10 text-white hover:bg-white/20 dark:border-neutral-300 dark:bg-neutral-100 dark:text-neutral-950"
                              : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                          )}
                        >
                          <LinkIcon className="size-3" />
                          <span className="truncate">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  ) : null}

                  <p
                    className={cn(
                      "mt-2 text-[10px] sm:text-[11px]",
                      item.role === "user" ? "text-white/65 dark:text-neutral-500" : "text-neutral-400 dark:text-neutral-500"
                    )}
                  >
                    {formatDistanceToNowStrict(new Date(item.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}

            {isSending ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-3 py-2.5 text-[0.8rem] text-neutral-500 sm:rounded-3xl sm:px-4 sm:py-3 sm:text-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                  <Loader2 className="size-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            ) : null}
          </div>

          <div className="border-t border-neutral-200 px-3 py-3 sm:px-4 sm:py-4 dark:border-neutral-800">
            <div className="flex items-end gap-2.5 sm:gap-3">
              <div className="flex-1">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value.slice(0, MAX_CHARS))}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about the site..."
                  rows={2}
                  className="min-h-[60px] sm:min-h-[80px] w-full resize-none rounded-2xl border border-neutral-300 bg-white px-3 py-2.5 text-[0.8rem] text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-950 sm:rounded-3xl sm:px-4 sm:py-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white"
                />
                <div className="mt-2 flex items-center justify-between px-1 text-[0.7rem] text-neutral-500 sm:text-xs dark:text-neutral-400">
                  <span className="inline-flex items-center gap-1">
                    <MessageSquareText className="size-3.5" />
                    Press Enter to send
                  </span>
                  <span className={cn(remainingChars < 200 ? "text-neutral-950 dark:text-white" : "")}>
                    {remainingChars}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSending || message.trim().length === 0}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-950 bg-neutral-950 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:w-12 sm:rounded-2xl dark:border-white dark:bg-white dark:text-neutral-950"
                aria-label="Send message"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatingAiAssistant
