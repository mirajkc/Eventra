import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { IUserDetails } from "@/types/user.types"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"
import { useEffect } from "react"

const editUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  reason: z.string().min(5, "Reason is required (min 5 characters)"),
})

type EditUserFormValues = z.infer<typeof editUserSchema>

interface EditUserProps {
  open: boolean
  setOpen: (open: boolean) => void
  user: IUserDetails | null
  onUpdateSuccess?: () => void
}

export function EditUser({ open, setOpen, user, onUpdateSuccess }: EditUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<EditUserFormValues>({
    resolver: zodResolver(editUserSchema),
  })

  useEffect(() => {
    if (user) {
        setValue("name", user.name)
        setValue("phone", user.phone || "")
        setValue("reason", "")
    }
  }, [user, setValue, open])

  const onSubmit = async (data: EditUserFormValues) => {
    if (!user) return

    try {
        const encodedReason = encodeURIComponent(data.reason)
        await axiosInstance.patch(`/admin/update/update-user/${user.id}/${encodedReason}`, { 
            name: data.name, 
            phone: data.phone 
        })
        
        toast.success("User updated successfully")
        setOpen(false)
        reset()
        if (onUpdateSuccess) {
            onUpdateSuccess()
        }
    } catch (error: any) {
         if(error.response && error.response.data && error.response.data.message){
            toast.error(error.response.data.message)
            return
         }
         toast.error("Error occurred while updating user.")
         console.error(error)
    }
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update user details. Name and Phone can be modified. Reason is required.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="John Doe" />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("phone")} placeholder="+1234567890" />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Update</Label>
            <Textarea
              id="reason"
              placeholder="Reason for changing user details..."
              {...register("reason")}
            />
            {errors.reason && (
              <p className="text-sm text-destructive">{errors.reason.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => setOpen(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Update User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
