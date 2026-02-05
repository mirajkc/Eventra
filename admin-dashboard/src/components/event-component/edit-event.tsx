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
import { Switch } from "@/components/ui/switch"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import type { IEventTypes } from "@/types/event.types"
import { toast } from "sonner"
import axiosInstance from "@/configs/axios.config"
import { editEventSchema } from "@/rules/event.rules"


interface EditEventProps {
  open: boolean
  setOpen: (open: boolean) => void
  event: IEventTypes | null
  onSuccess?: () => void
}

export function EditEvent({ open, setOpen, event, onSuccess }: EditEventProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(editEventSchema),
  })

  useEffect(() => {
    if (event) {
      setValue("id", event.id)
      setValue("title", event.title)
      setValue("description", event.description)
      setValue("location", event.location)
      // Format dates for datetime-local input
      const startDate = new Date(event.startDate)
      const endDate = new Date(event.endDate)
      setValue("startDate", startDate)
      setValue("endDate", endDate)
      setValue("capacity", event.capacity)
      setValue("category", event.category)
      setValue("tags", event.tags)
      setValue("reason", "")
      setIsDeleting(event.status === "DELETED")
    }
  }, [event, setValue, open])

  const onSubmit = async (data: any) => {
    if (!event) return
    try {
      const payload = {
        id: event.id,
        title: data.title,
        description: data.description,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        capacity: data.capacity,
        category: data.category,
        tags: data.tags,
        status: isDeleting ? "CANCELLED" : undefined,
      }
      const encodedReason = encodeURIComponent(data.reason)
      await axiosInstance.patch(`/admin/update/update-event/${event.id}/${encodedReason}`, payload)
      toast.success("Event updated successfully")
      setOpen(false)
      reset()
      if (onSuccess) onSuccess()
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Error occurred while updating event.")
      }
    }
  }

  if (!event) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Update event details. All fields are required to maintain consistency.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-xs text-destructive">{(errors.title as any).message}</p>}
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {["WORKSHOP", "MEETUP", "CONFERENCE", "WEBINAR", "HACKATHON", "COMPETITION", "OTHER"].map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && <p className="text-xs text-destructive">{(errors.category as any).message}</p>}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register("description")} className="min-h-[100px]" />
            {errors.description && <p className="text-xs text-destructive">{(errors.description as any).message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" {...register("location")} />
              {errors.location && <p className="text-xs text-destructive">{(errors.location as any).message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="capacity">Capacity</Label>
              <Input id="capacity" type="number" {...register("capacity", { valueAsNumber: true })} />
              {errors.capacity && <p className="text-xs text-destructive">{(errors.capacity as any).message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <Input 
                    type="datetime-local" 
                    id="startDate"
                    value={field.value ? new Date(new Date(field.value).getTime() - new Date(field.value).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                )}
              />
              {errors.startDate && <p className="text-xs text-destructive">{(errors.startDate as any).message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="endDate">End Date</Label>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <Input 
                    type="datetime-local" 
                    id="endDate"
                    value={field.value ? new Date(new Date(field.value).getTime() - new Date(field.value).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                )}
              />
              {errors.endDate && <p className="text-xs text-destructive">{(errors.endDate as any).message}</p>}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tags">Tags (Comma separated)</Label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Input 
                  id="tags" 
                  placeholder="tech, fun, meetup" 
                  value={field.value?.join(", ") || ""}
                  onChange={(e) => field.onChange(e.target.value.split(",").map(t => t.trim()).filter(t => t !== ""))}
                />
              )}
            />
          </div>

          <div className="flex items-center space-x-2 border p-3 rounded-md ">
            <Switch 
              id="is-deleted" 
              checked={isDeleting} 
              onCheckedChange={setIsDeleting}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="is-deleted" className="font-bold">Mark as Cancelled</Label>
              <p className="text-xs text-muted-foreground italic">
                This will set the event status to cancelled and once cancelled the event will not be updated.
              </p>
            </div>
          </div>

          <div className="grid gap-2 p-3 rounded-md border border-dashed">
            <Label htmlFor="reason">Reason for Update</Label>
            <Textarea
              id="reason"
              placeholder="Explain why you are making these changes..."
              {...register("reason")}
            />
            {errors.reason && (
              <p className="text-xs text-destructive">{(errors.reason as any).message}</p>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => setOpen(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
