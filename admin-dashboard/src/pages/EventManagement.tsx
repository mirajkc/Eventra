import { Spinner } from "@/components/ui/spinner"
import axiosInstance from "@/configs/axios.config"
import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Search, Calendar, MapPin } from "lucide-react"
import type { IEventTypes, IPagination } from "@/types/event.types"
import { EventDetails } from "@/components/event-component/event-details"
import { EditEvent } from "@/components/event-component/edit-event"
import { DeleteEvent } from "@/components/event-component/delete-event"
import { toast } from "sonner"

export default function EventManagement() {
    const [loading, setLoading] = useState(false)
    const [events, setEvents] = useState<IEventTypes[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [pagination, setPagination] = useState<IPagination>({
        currentPage: 1,
        totalPages: 0,
        take: 10,
        totalDocs: 0,
        hasNextPage: false,
        hasPreviousPage: false
    })

    const [selectedEvent, setSelectedEvent] = useState<IEventTypes | null>(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchEventDetails()
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [pagination.currentPage, searchTerm])

    const fetchEventDetails = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get(`/event/fetchallevents?page=${pagination.currentPage}&take=${pagination.take}&slug=${searchTerm}`)
            const data = response.data.data || response.data
            const paginationData = response.data.pagination || {}
            setEvents(Array.isArray(data) ? data : [])
            setPagination(prev => ({ ...prev, ...paginationData }))
        } catch (error) {
            console.error('Error fetching event details:', error)
            toast.error("Failed to fetch events")
        } finally {
            setLoading(false)
        }
    }

    if (loading && events.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh] w-full">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="space-y-4 mt-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight">Event Management</h1>
                <p className="text-muted-foreground">Monitor and manage all events across the platform</p>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search events by title..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Thumbnail</TableHead>
                            <TableHead>Event Info</TableHead>
                            <TableHead>Organization</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Participants</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                                    {loading ? "Loading events..." : "No events found."}
                                </TableCell>
                            </TableRow>
                        ) : (
                            events.map((event) => (
                                <TableRow 
                                    key={event.id}
                                    className="hover:cursor-pointer group"
                                    onClick={() => {
                                        setSelectedEvent(event)
                                        setIsDetailsOpen(true)
                                    }}
                                >
                                    <TableCell>
                                        <div className="relative w-16 h-10 rounded overflow-hidden bg-muted">
                                            {event.image ? (
                                                <img 
                                                    src={event.image} 
                                                    alt={event.title} 
                                                    className="object-cover w-full h-full"
                                                />
                                            ) : (
                                                <Calendar className="w-full h-full p-2 text-muted-foreground" />
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium line-clamp-1">{event.title}</span>
                                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                <span className="line-clamp-1">{event.location}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <AvatarImage src={event.organization.image} />
                                                <AvatarFallback>{event.organization.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm line-clamp-1">{event.organization.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge 
                                            variant={
                                                event.status === "PUBLISHED" ? "default" : 
                                                event.status === "DRAFT" ? "secondary" : 
                                                event.status === "CANCELLED" ? "destructive" : "outline"
                                            }
                                            className="text-[10px] uppercase font-bold"
                                        >
                                            {event.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-xs">
                                            <span>{new Date(event.startDate).toLocaleDateString()}</span>
                                            <span className="text-muted-foreground">
                                                {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-xs">
                                            <span className="font-semibold">{event.registeredCount} / {event.capacity}</span>
                                            <div className="w-full bg-muted rounded-full h-1 mt-1">
                                                <div 
                                                    className="bg-primary h-1 rounded-full" 
                                                    style={{ width: `${Math.min(100, (event.registeredCount / event.capacity) * 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => {
                                                    setSelectedEvent(event)
                                                    setIsEditOpen(true)
                                                }}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-destructive hover:text-destructive"
                                                onClick={() => {
                                                    setSelectedEvent(event)
                                                    setIsDeleteOpen(true)
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Showing {events.length} of {pagination.totalDocs} events
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
                        disabled={!pagination.hasPreviousPage || loading}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
                        disabled={!pagination.hasNextPage || loading}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <EventDetails
                open={isDetailsOpen}
                setOpen={setIsDetailsOpen}
                event={selectedEvent}
            />
            <EditEvent
                open={isEditOpen}
                setOpen={setIsEditOpen}
                event={selectedEvent}
                onSuccess={fetchEventDetails}
            />
            <DeleteEvent
                open={isDeleteOpen}
                setOpen={setIsDeleteOpen}
                event={selectedEvent}
                onDeleteSuccess={fetchEventDetails}
            />
        </div>
    )
}