import { SectionCards } from "@/components/ui/section-cards"
import { Spinner } from "@/components/ui/spinner"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import axiosInstance from "@/configs/axios.config"
import type { WebsiteMetadata } from "@/types/dashboard.types"
import type { INotification } from "@/types/notifications.types"
import type { AdminLog } from "@/types/adminlog.types"
import { useEffect, useState } from "react"
import { Calendar, Users, Building2, Eye, User, DollarSign, Coins, TrendingUp, ArrowUpRight, Bell, ClipboardList, Activity } from "lucide-react"
import { Chart } from "@/components/chart"
import { format } from "date-fns"

export default function Dashboard() {
    const [loading, setLoading] = useState(false)
    const [websiteMetadata, setWebSiteMetaData] = useState<WebsiteMetadata>({
        totalEvents: 0,
        totalOrganization: 0,
        totalUsers: 0,
        totalRegistrations: 0,
        totalAttendees: 0,
        totalEventViews: 0,
        monthlyData: {
            totalRegistrations: [],
            totalAttendees: [],
            totalViews: null
        }
    })
    const [creditRevenue, setCreditRevenue] = useState({
        totalRevenue: 0,
        totalCredits: 0,
        monthlyRevenue: 0,
        monthlyCredits: 0
    })
    const [recentNotifications, setRecentNotifications] = useState<INotification[]>([])
    const [recentLogs, setRecentLogs] = useState<AdminLog[]>([])

    useEffect(() => {
        fetchWebsiteMetadata()
        fetchCreditRevenue()
        fetchRecentNotifications()
        fetchRecentLogs()
    }, [])

    const fetchWebsiteMetadata = async () => {
        try {
            setLoading(true)
            const response = await axiosInstance.get('admin/website-metadata')
            setWebSiteMetaData(response.data.data ?? response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchCreditRevenue = async () => {
        try {
            const response = await axiosInstance.get('admin/get-credit-and-revenue?take=1&page=1')
            const data = response.data.data
            setCreditRevenue({
                totalRevenue: data.totalRevenue ?? 0,
                totalCredits: data.totalCredits ?? 0,
                monthlyRevenue: data.monthlyRevenue ?? 0,
                monthlyCredits: data.monthlyCredits ?? 0
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRecentNotifications = async () => {
        try {
            const response = await axiosInstance.get('admin/get-all-notifications?take=5&page=1')
            setRecentNotifications(response.data.data ?? [])
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRecentLogs = async () => {
        try {
            const response = await axiosInstance.get('admin/get-all-admin-logs?take=5&page=1')
            setRecentLogs(response.data.data ?? [])
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <div className="flex min-h-screen w-full justify-center items-center">
            <Spinner scale={8} />
        </div>
    }

    const getNotificationBadgeVariant = (type: string) => {
        if (type.includes("CREATED") || type.includes("APPROVED") || type.includes("SUCCESS")) return "default"
        if (type.includes("CANCELLED") || type.includes("DELETED")) return "destructive"
        if (type.includes("UPDATED") || type.includes("REMINDER")) return "secondary"
        return "outline"
    }

    const getActionBadgeVariant = (action: string) => {
        if (action === "CREATE") return "default"
        if (action === "DELETE") return "destructive"
        return "secondary"
    }

    return (
        <div className="flex flex-col p-4 w-full gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
                <p className="text-sm text-muted-foreground">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
            </div>

            {/* key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SectionCards
                    description="Total Events"
                    amount={websiteMetadata.totalEvents}
                    title="Events"
                    trendDescription="Total published events on the platform"
                    icon={Calendar}
                />
                <SectionCards
                    description="Total Organizations"
                    amount={websiteMetadata.totalOrganization}
                    title="Organizations"
                    trendDescription="Total registered organizations"
                    icon={Building2}
                />
                <SectionCards
                    description="Total Registrations"
                    amount={websiteMetadata.totalRegistrations}
                    title="Registrations"
                    trendDescription="Total user registrations on events"
                    icon={User}
                />
                <SectionCards
                    description="Total Attendees"
                    amount={websiteMetadata.totalAttendees}
                    title="Attendees"
                    trendDescription="Total attendees on events"
                    icon={User}
                />
                <SectionCards
                    description="Total Users"
                    amount={websiteMetadata.totalUsers}
                    title="Users"
                    trendDescription="Total registered users on the platform"
                    icon={Users}
                />
                <SectionCards
                    description="Total Views"
                    amount={websiteMetadata.totalEventViews}
                    title="Views"
                    trendDescription="Total event page views"
                    icon={Eye}
                />
            </div>

            {/* revenue cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${creditRevenue.totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Lifetime platform earnings</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${creditRevenue.monthlyRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Current calendar month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Credits Sold</CardTitle>
                        <Coins className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{creditRevenue.totalCredits.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Across all organizations</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Credits</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-amber-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{creditRevenue.monthlyCredits.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Purchased this month</p>
                    </CardContent>
                </Card>
            </div>

            {/* charts area */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full lg:col-span-3 h-[400px]">
                    <Chart data={websiteMetadata.monthlyData.totalRegistrations} title="Registrations" description="Showing total registrations for the this year" />
                </div>
                <div className="w-full lg:col-span-3 h-[400px]">
                    <Chart data={websiteMetadata.monthlyData.totalAttendees} title="Attendees" description="Showing total attendees for the this year" />
                </div>
            </div>

            {/* recent activity and notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Recent Notifications</CardTitle>
                            <Bell className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardDescription>Latest system notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        {recentNotifications.length === 0 ? (
                            <div className="text-sm text-muted-foreground text-center py-8">No recent notifications</div>
                        ) : (
                            <div className="divide-y">
                                {recentNotifications.map((notif) => (
                                    <div key={notif.id} className="flex items-start gap-3 px-6 py-3 hover:bg-muted/50 transition-colors">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-medium text-sm truncate">{notif.title}</span>
                                                <Badge variant={getNotificationBadgeVariant(notif.type)} className="text-[10px] uppercase shrink-0">
                                                    {notif.type.replace(/_/g, " ")}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-muted-foreground truncate mt-0.5">{notif.message}</p>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">
                                            {notif.createdAt ? format(new Date(notif.createdAt), "MMM d, HH:mm") : ""}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Recent Admin Activity</CardTitle>
                            <ClipboardList className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardDescription>Latest administrative actions</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        {recentLogs.length === 0 ? (
                            <div className="text-sm text-muted-foreground text-center py-8">No recent activity</div>
                        ) : (
                            <div className="divide-y">
                                {recentLogs.map((log) => (
                                    <div key={log.id} className="flex items-start gap-3 px-6 py-3 hover:bg-muted/50 transition-colors">
                                        <Activity className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-medium text-sm">{log.admin.name}</span>
                                                <Badge variant={getActionBadgeVariant(log.action)} className="text-[10px] uppercase">
                                                    {log.action}
                                                </Badge>
                                                <span className="text-[10px] text-muted-foreground">{log.entityType}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground truncate mt-0.5">{log.reason || "No reason provided"}</p>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">
                                            {log.createdAt ? format(new Date(log.createdAt), "MMM d, HH:mm") : ""}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
