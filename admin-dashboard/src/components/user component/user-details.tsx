import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { IUserDetails } from "@/types/user.types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface UserDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  user: IUserDetails | null
}

export function UserDetails({ open, setOpen, user }: UserDetailsProps) {
  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>
            View detailed information about the user.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center">
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="grid gap-2">
                <Label>ID</Label>
                <Input value={user.id} readOnly className="bg-muted" />
            </div>
            <div className="grid gap-2">
                <Label>Phone</Label>
                <Input value={user.phone || "N/A"} readOnly />
            </div>
            <div className="grid gap-2">
                <Label>Role</Label>
                <Input value={user.role} readOnly />
            </div>
            <div className="grid gap-2">
                <Label>Created At</Label>
                <Input value={new Date(user.createdAt).toLocaleDateString()} readOnly />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
