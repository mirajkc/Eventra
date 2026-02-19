import { Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const ShareButton = () => (
    <Popover>
        <PopoverTrigger asChild className="w-full h-full rounded-md border-none shadow-none dark:bg-neutral-900 hover:bg-white hover:cursor-pointer hover:dark:bg-neutral-900">
            <Button variant="outline">
                <Share2 className="h-4 w-4" />
                Share event
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
            <div className="space-y-4">
                <h4 className="font-semibold">Share this event</h4>
                <Separator />
                <div className="space-y-2">
                    <p className="text-muted-foreground text-xs">Copy link</p>
                    <div className="flex gap-2">
                        <Input readOnly value={window.location.origin + window.location.pathname} />
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.origin + window.location.pathname)
                                toast.success("Link copied to clipboard")
                            }}
                            size="icon" variant="outline">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
)

export default ShareButton
