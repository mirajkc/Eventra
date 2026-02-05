import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { ICreditPurchase } from "@/types/credit.types"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { 
  Building2, 
  User, 
  CreditCard, 
  Coins, 
  Calendar, 
  Hash,
  DollarSign
} from "lucide-react"

interface CreditPurchaseDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  purchase: ICreditPurchase | null
}

export function CreditPurchaseDetails({ open, setOpen, purchase }: CreditPurchaseDetailsProps) {
  if (!purchase) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <DialogTitle>Credit Purchase Details</DialogTitle>
          </div>
          <DialogDescription>
            Detailed transaction record for this credit purchase.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Status and Date Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
              Transaction Successful
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {purchase.purchasedAt ? format(new Date(purchase.purchasedAt), "PPP p") : "N/A"}
            </span>
          </div>

          <div className="grid gap-4">
            {/* Package Info */}
            <div className="grid grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">Package</Label>
                <div className="text-lg font-bold">{purchase.package}</div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">Amount Paid</Label>
                <div className="text-lg font-bold text-emerald-600 flex items-center font-mono">
                  <DollarSign className="h-4 w-4 mr-0.5" />{purchase.amount}
                </div>
              </div>
              <div className="space-y-1 pt-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">Credits Added</Label>
                <div className="text-lg font-bold text-amber-600 flex items-center font-mono">
                  <Coins className="h-4 w-4 mr-0.5" />+{purchase.credits}
                </div>
              </div>
            </div>

            {/* Organization Section */}
            <div className="space-y-3 pt-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" /> Organization Information
              </Label>
              <div className="grid gap-2 border rounded-md p-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-medium">{purchase.organization.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">ID: {purchase.organizationId}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Current Balance</div>
                    <div className="font-bold text-amber-600">{purchase.organization.credits} Credits</div>
                  </div>
                </div>
                <div className="text-[10px] text-muted-foreground pt-1 border-t">
                  Last reset: {purchase.organization.lastCreditReset ? format(new Date(purchase.organization.lastCreditReset), "PP") : "Never"}
                </div>
              </div>
            </div>

            {/* User Section */}
            <div className="space-y-3 pt-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Purchaser Details
              </Label>
              <div className="grid gap-2 border rounded-md p-3">
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{purchase.user.name}</span>
                  <span className="text-xs text-muted-foreground">{purchase.user.email}</span>
                  <span className="text-[10px] text-muted-foreground font-mono mt-1">User ID: {purchase.user.id}</span>
                </div>
              </div>
            </div>

            {/* Technical Detail */}
            <div className="pt-4 border-t flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-semibold">
                <Hash className="h-3 w-3" /> Transaction ID
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">{purchase.id}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
