import { Copy, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useTranslation } from "react-i18next";

interface ShareButtonProps {
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    iconOnly?: boolean;
}

const ShareButton = ({ className, variant = "outline", size = "default", iconOnly = false }: ShareButtonProps) => {
    const { t } = useTranslation();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={variant} size={size} className={className}>
                    <Share2 className={iconOnly ? "h-4 w-4" : "h-4 w-4 mr-2"} />
                    {!iconOnly && t("events.single.shareEvent")}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full sm:w-[400px]">
                <div className="space-y-4">
                    <h4 className="font-semibold">{t("events.single.shareThisEvent")}</h4>
                    <Separator />
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs">{t("events.single.copyLink")}</p>
                        <div className="flex gap-2">
                            <Input readOnly value={window.location.origin + window.location.pathname} />
                            <Button
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.origin + window.location.pathname)
                                    toast.success(t("events.single.linkCopied"))
                                }}
                                size="icon" variant="outline" className="shrink-0">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ShareButton
