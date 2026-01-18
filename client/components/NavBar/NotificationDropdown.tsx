"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import getAccessToken from "@/lib/access.token"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { INotification, INotificationPaginzation } from "@/types/notifucation.types"

export default function NotificationDropdown({ userId }: { userId: string }) {
  const [notifications, setNotifications] = useState<Array<INotification>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState<INotificationPaginzation>({
    hasNext: false,
    hasPrev: 0,
    limit: 10,
    page: 1,
    prevPage: 2,
    skip: 0,
    totalPages: 1
  })

  const fetchUserNotifications = async (page: number = pagination.page) => {
    try {
      setLoading(true)
      const token = await getAccessToken()
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/notification/get-notification?page=${page}&limit=${pagination.limit}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }
      const result = await response.json()
      console.log(result)

      // Handle the actual server response structure
      if (result.data) {
        setNotifications(result.data.notifications || [])
        setPagination(result.data.paginationData || pagination)
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to load notifications")
    } finally {
      setLoading(false);
    }
  }

  const handleNextPage = () => {
    if (pagination.hasNext) {
      setPagination({
        ...pagination,
        page: pagination.page + 1
      })
      fetchUserNotifications()
    }
  }

  const handlePrevPage = () => {
    if (pagination.hasPrev > 0) {
      setPagination({
        ...pagination,
        page: pagination.page - 1
      })
      fetchUserNotifications()
    }
  }

  useEffect(() => {
    if (userId) {
      fetchUserNotifications(1)
    }
  }, [userId])

  // Count unread notifications
  const unreadCount = notifications?.filter(n => !n.isRead).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          {/* Notification badge - only show if there are unread notifications */}
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex size-3 items-center justify-center rounded-full bg-destructive text-[10px] text-white font-semibold">
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 max-h-[500px] overflow-hidden flex flex-col">
        <div className="px-4 py-2 text-sm font-semibold flex items-center justify-between">
          <span>Notifications</span>
          {pagination.totalPages > 1 && (
            <span className="text-xs text-muted-foreground font-normal">
              Page {pagination.page} of {pagination.totalPages}
            </span>
          )}
        </div>
        <DropdownMenuSeparator />

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="px-2 py-8 text-center text-sm text-muted-foreground">
              <Spinner />
            </div>
          ) : notifications?.length > 0 ? (
            notifications.map((notification: INotification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`px-4 py-3 cursor-pointer ${!notification.isRead ? 'bg-accent/50' : ''}`}
              >
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm font-semibold line-clamp-1">
                      {notification.title}
                    </div>
                    {!notification.isRead && (
                      <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {notification.message}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-1">
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-2 py-8 text-center text-sm text-muted-foreground">
              No notifications yet
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {pagination.totalPages > 1 && !loading && (
          <>
            <DropdownMenuSeparator />
            <div className="px-2 py-2 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                className="flex-1"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}