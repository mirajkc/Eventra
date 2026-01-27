import { Users } from "lucide-react";

export default function ChatHeader () {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md z-10">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                                <Users size={20} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[15px] font-bold text-neutral-900 dark:text-white leading-tight">
                                Event Discussion
                            </h3>
                            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                               Connect with the fellow event participants. 
                            </p>
                        </div>
                    </div>
                </div>
  )
}