import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { IUserDetails } from "@/types/user.types"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"

const deleteUserSchema = z.object({
  reason: z.string().min(10, "Reason must be at least 10 characters"),
})

type DeleteUserFormValues = z.infer<typeof deleteUserSchema>

interface DeleteUserProps {
  open: boolean
  setOpen: (open: boolean) => void
  user: IUserDetails | null
  onDeleteSuccess?: () => void
}

export function DeleteUser({ open, setOpen, user, onDeleteSuccess }: DeleteUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DeleteUserFormValues>({
    resolver: zodResolver(deleteUserSchema),
  })

  const onSubmit = async (data: DeleteUserFormValues) => {
    if (!user) return

    try {
        await axiosInstance.patch(`/admin/delete-user/${user.id}`, { reason: data.reason })
        toast.success("User deleted successfully")
        setOpen(false)
        reset()
        if (onDeleteSuccess) {
            onDeleteSuccess()
        }
    } catch (error: any) {
         if(error.response && error.response.data && error.response.data.message){
            toast.error(error.response.data.message)
            return
         }
         toast.error("Error occurred while deleting user.")
         console.error(error)
    }
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <span className="font-semibold">{user.name}</span>? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Deletion </Label>
            <span className="text-xs">The reason will be sent to the user and will be logged. </span>
            <Textarea
              id="reason"
              placeholder="Please provide a reason..."
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
            <Button variant="destructive" type="submit" disabled={isSubmitting}>
              Delete User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
