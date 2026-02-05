import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { INotification } from "@/types/notifications.types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { 
  Bell, 
  Calendar, 
  Building, 
  CreditCard, 
  User, 
  AlertCircle,
  CheckCircle2,
  Clock,
  XCircle,
  Info
} from "lucide-react"

interface NotificationDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  notification: INotification | null
}

export function NotificationDetails({ open, setOpen, notification }: NotificationDetailsProps) {
  if (!notification) return null

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "EVENT_CREATED":
        return <Calendar className="h-5 w-5 text-blue-500" />
      case "EVENT_UPDATED":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "EVENT_REMINDER":
        return <Bell className="h-5 w-5 text-purple-500" />
      case "EVENT_CANCELLED":
      case "EVENT_DELETED":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "ORG_APPROVED":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "ORGANIZATION_DELETED":
        return <Building className="h-5 w-5 text-red-500" />
      case "PAYMENT_SUCCESS":
        return <CreditCard className="h-5 w-5 text-emerald-500" />
      case "USER_DELETED":
        return <User className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getBadgeVariant = (type: string) => {
    if (type.includes("CREATED") || type.includes("APPROVED") || type.includes("SUCCESS")) return "default"
    if (type.includes("CANCELLED") || type.includes("DELETED")) return "destructive"
    if (type.includes("UPDATED") || type.includes("REMINDER")) return "secondary"
    return "outline"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {getNotificationIcon(notification.type)}
            <DialogTitle>Notification Details</DialogTitle>
          </div>
          <DialogDescription>
            Detailed information about this system notification.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Badge variant={getBadgeVariant(notification.type)}>
                {notification.type.replace("_", " ")}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {format(new Date(notification.createdAt), "PPP p")}
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {notification.title}
            </h3>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-muted-foreground">Message</Label>
              <div className="rounded-md bg-muted p-3 text-sm">
                {notification.message}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-muted-foreground">Entity Type</Label>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Info className="h-4 w-4" />
                  {notification.entityType}
                </div>
              </div>
              <div className="grid gap-2">
                <Label className="text-muted-foreground">Entity ID</Label>
                <Input value={notification.entityId} readOnly className="h-8 bg-muted text-xs" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground">Recipient User ID</Label>
              <Input value={notification.userId} readOnly className="h-8 bg-muted text-xs" />
            </div>
            
            <div className="flex items-center gap-2">
                <Label className="text-muted-foreground">Status:</Label>
                <Badge variant={notification.isRead ? "outline" : "default"}>
                    {notification.isRead ? "Read" : "Unread"}
                </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
