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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import type { IOrganization } from "@/types/organization.types"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"

const editOrgSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  type: z.enum(["INDIVIDUAL", "COMPANY", "EDUCATIONAL", "COMMUNITY", "NON_PROFIT", "GOVERNMENT"]),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  description: z.string().optional(),
  reason: z.string().min(5, "Reason for change is required"),
})

type EditOrgFormValues = z.infer<typeof editOrgSchema>

interface EditOrganizationProps {
  open: boolean
  setOpen: (open: boolean) => void
  organization: IOrganization | null
  onSuccess?: () => void
}

export function EditOrganization({ open, setOpen, organization, onSuccess }: EditOrganizationProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<EditOrgFormValues>({
    resolver: zodResolver(editOrgSchema),
  })

  useEffect(() => {
    if (organization) {
      setValue("name", organization.name)
      setValue("type", organization.type)
      setValue("website", organization.website || "")
      setValue("description", organization.description || "")
      setValue("reason", "")
    }
  }, [organization, setValue, open])

  const onSubmit = async (data: EditOrgFormValues) => {
    if (!organization) return

    try {
      const { reason, ...updateData } = data
      await axiosInstance.patch(`/admin/update/update-organization/${organization.id}/${reason}`, updateData)
      toast.success("Organization updated successfully")
      setOpen(false)
      reset()
      if (onSuccess) onSuccess()
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Error occurred while updating organization.")
      }
    }
  }

  if (!organization) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Organization</DialogTitle>
          <DialogDescription>
            Update organization details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Organization Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Organization Type</Label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                    <SelectItem value="COMPANY">Company</SelectItem>
                    <SelectItem value="EDUCATIONAL">Educational</SelectItem>
                    <SelectItem value="COMMUNITY">Community</SelectItem>
                    <SelectItem value="NON_PROFIT">Non-Profit</SelectItem>
                    <SelectItem value="GOVERNMENT">Government</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" {...register("website")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register("description")} placeholder="Describe the organization..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason">Update Reason</Label>
            <Input id="reason" {...register("reason")} placeholder="Why is this being changed?" />
            {errors.reason && (
              <p className="text-sm text-destructive">{errors.reason.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button disabled={isSubmitting} type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
