import axiosInstance from "@/configs/axios.config"
import type { INotification, INotificationPagination, INotificationType } from "@/types/notifications.types"
import { useEffect, useState, useCallback } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search} from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import { NotificationDetails } from "@/components/notification component/notification-details"

export default function Notifications() {
  const [notifications, setNotifications] = useState<Array<INotification>>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState<INotificationPagination>({
    page: 1,
    limit: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const [selectedNotification, setSelectedNotification] = useState<INotification | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const fetchNotifications = useCallback(async (page: number = pagination.page, search: string = searchTerm) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`/admin/get-all-notifications?take=${pagination.limit}&page=${page}&title=${search}`)
      const data = response.data
      setNotifications(data.data)
      setPagination(data.paginations)
    } catch (error) {
      console.error('Error fetching notifications:', error)
      toast.error("Failed to fetch notifications")
    } finally {
      setLoading(false)
    }
  }, [pagination.limit, pagination.page, searchTerm])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchNotifications(1, searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])



  const getBadgeVariant = (type: INotificationType) => {
    if (type.includes("CREATED") || type.includes("APPROVED") || type.includes("SUCCESS")) return "default"
    if (type.includes("CANCELLED") || type.includes("DELETED")) return "destructive"
    if (type.includes("UPDATED") || type.includes("REMINDER")) return "secondary"
    return "outline"
  }

  return (
    <div className="space-y-4 mt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with system activities and alerts</p>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title..."
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
              <TableHead className="w-[50px]">Name</TableHead>
              <TableHead>Notification</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading && notifications.length === 0 ? (
              <TableRow>
              </TableRow>
            ) : notifications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No notifications found.
                </TableCell>
              </TableRow>
            ) : (
              notifications.map((notification) => (
                <TableRow 
                  key={notification.id} 
                  className={`hover:cursor-pointer hover:bg-muted/50 transition-colors ${notification.isRead ? "opacity-70" : ""}`}
                  onClick={() => {
                    setSelectedNotification(notification)
                    setIsDetailsOpen(true)
                  }}
                >
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-sm text-muted-foreground max-w-[500px] truncate">{notification.message}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(notification.type)} className="text-[10px] uppercase">
                      {notification.type.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {notification.createdAt ? (
                      format(new Date(notification.createdAt), "MMM d, yyyy HH:mm")
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {notifications.length} of {pagination.total} notifications
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchNotifications(pagination.page - 1)}
            disabled={!pagination.hasPreviousPage || loading}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchNotifications(pagination.page + 1)}
            disabled={!pagination.hasNextPage || loading}
          >
            Next
          </Button>
        </div>
      </div>

      <NotificationDetails 
        open={isDetailsOpen}
        setOpen={setIsDetailsOpen}
        notification={selectedNotification}
      />
    </div>
  )
}