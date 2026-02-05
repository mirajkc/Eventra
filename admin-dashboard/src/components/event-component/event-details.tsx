import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Tag, Building, User } from "lucide-react"
import type { IEventTypes } from "@/types/event.types"

interface EventDetailsProps {
  open: boolean
  setOpen: (open: boolean) => void
  event: IEventTypes | null
}

export function EventDetails({ open, setOpen, event }: EventDetailsProps) {
  if (!event) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant={event.status === "PUBLISHED" ? "default" : "secondary"}>
              {event.status}
            </Badge>
            <Badge variant="outline">{event.category}</Badge>
          </div>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {event.image && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Date & Time</p>
                  <p className="text-sm text-muted-foreground">
                    Start: {new Date(event.startDate).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    End: {new Date(event.endDate).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Capacity</p>
                  <p className="text-sm text-muted-foreground">
                    {event.registeredCount} / {event.capacity} registered
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Organization</p>
                  <p className="text-sm text-muted-foreground">{event.organization.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Creator</p>
                  <p className="text-sm text-muted-foreground">{event.creator.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Tag className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Tags</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Description</p>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
