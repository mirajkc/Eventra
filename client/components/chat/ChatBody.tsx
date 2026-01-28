"use client"
import getAccessToken from "@/lib/access.token";
import socket from "@/lib/socket";
import { IEventChatTypes } from "@/types/chat.types";
import { error } from "console";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";


export default function ChatBody () {
    const [messages, setMessages ] = useState<Array<IEventChatTypes>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const params = useParams()
    const eventId = params.id as string
     const scrollRef = useRef<HTMLDivElement>(null);
      const scrollToBottom = () => {
          if (scrollRef.current) {
              scrollRef.current.scrollTo({
                  top: scrollRef.current.scrollHeight,
                  behavior: "smooth"
              });
          }
      };
  useEffect(() => {
    if (eventId) {
      socket.emit("join-event", eventId);
      const handleUpdate = () => {
        fetchMessages();
      };
      socket.on("update-chat", handleUpdate);
      return () => {
        socket.emit("leave-event", eventId);
        socket.off("update-chat", handleUpdate);
      };
    }
  }, [eventId]); 

useEffect(() => {
    fetchMessages();
}, [eventId]);

useEffect(() => {
    scrollToBottom();
}, [messages]);


      const fetchMessages = async() => {
        try {
            setLoading(true)
            const accessToken = await getAccessToken()
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/chat/recieve-message/${eventId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            const result = await response.json()
            if(!result.message){
                console.log(error);
                return
            }
            if(!response.ok){
                console.log(error);
                return
            }
            setMessages(result.data)
        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false)
        }
      }
  return (
                <div 
                ref={scrollRef}
                className="flex-1 h-full overflow-y-auto px-5 py-6 space-y-6 custom-scrollbar"
            >
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex gap-4 group animate-in fade-in slide-in-from-bottom-2 duration-500 ${msg.isMe ? "flex-row-reverse" : "flex-row"}`}
                    >
                        <div className="shrink-0 mt-1">
                            <div className="relative">
                                <Image 
                                    src={msg.sender.image || "https://github.com/shadcn.png"} 
                                    alt={msg.sender.name} 
                                    width={38} 
                                    height={38} 
                                    className="rounded-full bg-neutral-100 dark:bg-neutral-800 ring-2 ring-white dark:ring-neutral-900 shadow-sm"
                                />
                                
                            </div>
                        </div>
                        <div className={`flex flex-col max-w-[80%] ${msg.isMe ? "items-end" : "items-start"}`}>
                            {!msg.isMe && (
                                <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-500 mb-1.5 ml-1 flex items-center gap-1">
                                    {msg.sender.name}
                                    <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                                    {formatDistanceToNow(new Date(msg.createdAt))}
                                </span>
                            )}
                            <div className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm transition-all relative ${
                                msg.isMe 
                                    ? "bg-indigo-600 text-white rounded-tr-none hover:bg-indigo-700" 
                                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none hover:bg-neutral-200 dark:hover:bg-neutral-750"
                            }`}>
                                {msg.message}
                            </div>
                            {msg.isMe && (
                                <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 mt-1.5 px-1 uppercase tracking-widest text-right">
                                    Delivered • {formatDistanceToNow(new Date(msg.createdAt))}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
  )
}