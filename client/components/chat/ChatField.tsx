"use client"
import getAccessToken from "@/lib/access.token";
import { chatMessageDTO } from "@/rules/chat.types.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
export default function ChatField () {
    const params = useParams()
    const eventId = params.id
    const { control, handleSubmit, reset, formState : {errors, isSubmitting}}  = useForm({
        defaultValues: {
            message: ""
        },
        resolver : zodResolver(chatMessageDTO)
    })
    const sendMessage = async (data : any)  => {
        try {
            const accessToken = await getAccessToken()
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/chat/sendMessage/${eventId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if(!result.message){
                toast.error("Error occured while sending the message please try again later. ")
            }
            if(!response.ok){
                toast.error(result.message || "Error occured while sending the message please try again later. ")
            }
       
            reset()
        } catch (error) {
            toast.error("Error occured while sending the message please try again later. ")
        }
    }

  return (
    <div className="p-5 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 backdrop-blur-xl">
                <form onSubmit={handleSubmit(sendMessage)} className="flex items-end gap-3">
                    <div className="relative flex-1 group">
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Type your message..."
                                    className="w-full pl-5 pr-12 py-3.5 bg-neutral-100/70 dark:bg-neutral-800/70 border border-transparent focus:border-indigo-500/30 focus:bg-white dark:focus:bg-neutral-800 rounded-3xl text-[14px] dark:text-white placeholder-neutral-500 outline-none transition-all focus:ring-4 focus:ring-indigo-500/10"
                                />
                            )}
                        />
                    </div>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}    
                    <button 
                        disabled={isSubmitting}
                        type="submit"
                        className={`p-3.5 hover:cursor-pointer rounded-2xl transition-all duration-300 active:scale-95 shadow-md flex items-center justify-center ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
  )
}