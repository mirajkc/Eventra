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
import type { IOrganization } from "@/types/organization.types"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"

const deleteOrgSchema = z.object({
  reason: z.string().min(10, "Reason must be at least 10 characters"),
})

type DeleteOrgFormValues = z.infer<typeof deleteOrgSchema>

interface DeleteOrganizationProps {
  open: boolean
  setOpen: (open: boolean) => void
  organization: IOrganization | null
  onSuccess?: () => void
}

export function DeleteOrganization({ open, setOpen, organization, onSuccess }: DeleteOrganizationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DeleteOrgFormValues>({
    resolver: zodResolver(deleteOrgSchema),
  })

  const onSubmit = async (data: DeleteOrgFormValues) => {
    if (!organization) return

    try {
      await axiosInstance.patch(`/admin/deleteorganization/${organization.id}`, { reason: data.reason })
      toast.success("Organization deleted successfully")
      setOpen(false)
      reset()
      if (onSuccess) onSuccess()
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Error occurred while deleting organization.")
      }
    }
  }

  if (!organization) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Organization</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <span className="font-semibold">{organization.name}</span>? 
            This action will be logged and notify the organization admins.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Deletion</Label>
            <p className="text-xs text-muted-foreground">The reason will be sent to the user and will be logged.</p>
            <Textarea
              id="reason"
              placeholder="Why is this organization being deleted?"
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
              Delete Organization
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
