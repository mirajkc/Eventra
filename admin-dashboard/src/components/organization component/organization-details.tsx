import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { IOrganization } from "@/types/organization.types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

interface OrganizationDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  organization: IOrganization | null
}

export function OrganizationDetails({ open, setOpen, organization }: OrganizationDetailsProps) {
  if (!organization) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Organization Details</DialogTitle>
          <DialogDescription>
            View full profile and status of {organization.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={organization.image || organization.thumbnail} alt={organization.name} />
              <AvatarFallback className="text-xl">{organization.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl">{organization.name}</h3>
                <div className="flex gap-2">
                    <Badge variant="secondary">{organization.type}</Badge>
                    {organization.isPremium ? (
                        <Badge className="bg-amber-500">Premium</Badge>
                    ) : (
                        <Badge variant="outline">Free</Badge>
                    )}
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
                <Label>Organization ID</Label>
                <Input value={organization.id} readOnly className="bg-muted text-xs" />
            </div>
            <div className="grid gap-2">
                <Label>Website</Label>
                <Input value={organization.website || "N/A"} readOnly className="bg-muted" />
            </div>
            <div className="grid gap-2">
                <Label>Credits</Label>
                <Input value={organization.credits} readOnly className="bg-muted" />
            </div>
            <div className="grid gap-2">
                <Label>Created At</Label>
                <Input value={new Date(organization.createdAt).toLocaleDateString()} readOnly className="bg-muted" />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea 
                value={organization.description || "No description provided."} 
                readOnly 
                className="bg-muted min-h-[100px]" 
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
