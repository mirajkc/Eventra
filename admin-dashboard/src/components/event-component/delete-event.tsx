import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import axiosInstance from "@/configs/axios.config"
import { toast } from "sonner"
import type { IEventTypes } from "@/types/event.types"

interface DeleteEventProps {
  open: boolean
  setOpen: (open: boolean) => void
  event: IEventTypes | null
  onDeleteSuccess: () => void
}

export function DeleteEvent({ open, setOpen, event, onDeleteSuccess }: DeleteEventProps) {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: { reason: string }) => {
    if (!event) return
    try {
      setLoading(true)
      await axiosInstance.patch(`/admin/delete-event/${event.id}`, { reason: data.reason })
      toast.success("Event deleted successfully")
      onDeleteSuccess()
      setOpen(false)
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete event")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Event</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <span className="font-semibold">{event?.title}</span>? 
            This action will be logged and the event creator will be notified.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          onSubmit({ reason: formData.get("reason") as string });
        }} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Deletion</Label>
            <Textarea
              id="reason"
              name="reason"
              required
              minLength={10}
              placeholder="Why is this event being deleted?"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => setOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button variant="destructive" type="submit" disabled={loading}>
              {loading ? "Deleting..." : "Delete Event"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
