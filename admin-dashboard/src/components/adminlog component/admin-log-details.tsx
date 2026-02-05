import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { AdminLog } from "@/types/adminlog.types"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { 
  User, 
  Activity, 
  Fingerprint, 
  FileText, 
  Clock, 
  Info
} from "lucide-react"

interface AdminLogDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  log: AdminLog | null
}

export function AdminLogDetails({ open, setOpen, log }: AdminLogDetailsProps) {
  if (!log) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <DialogTitle>Audit Log Details</DialogTitle>
          </div>
          <DialogDescription>
            Detailed information about this administrative action.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="capitalize">
                {log.action.toLowerCase().replace(/_/g, " ")}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {log.createdAt ? format(new Date(log.createdAt), "PPP p") : "N/A"}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2 border rounded-md p-3 bg-muted/30">
              <Label className="text-muted-foreground flex items-center gap-1 mb-1">
                <User className="h-3 w-3" /> Performed By
              </Label>
              <div className="flex flex-col">
                <span className="font-semibold">{log.admin.name}</span>
                <span className="text-xs text-muted-foreground">{log.admin.email}</span>
                <span className="text-[10px] text-muted-foreground font-mono mt-1">ID: {log.admin.id}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" /> Entity Type
                </Label>
                <Badge variant="outline" className="w-fit">{log.entityType}</Badge>
              </div>
              <div className="grid gap-2">
                <Label className="text-muted-foreground flex items-center gap-1">
                    <Fingerprint className="h-3 w-3" /> Entity ID
                </Label>
                <div className="text-xs font-mono bg-muted p-1 rounded truncate" title={log.entityId}>
                    {log.entityId}
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground flex items-center gap-1">
                  <FileText className="h-3 w-3" /> Reason / Description
              </Label>
              <div className="rounded-md bg-muted p-3 text-sm min-h-[60px]">
                {log.reason || "No reason provided for this action."}
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground text-[10px]">Log ID</Label>
              <span className="text-[10px] font-mono text-muted-foreground">{log.id}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
