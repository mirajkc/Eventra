import { SectionCards } from "@/components/ui/section-cards"
import { Spinner } from "@/components/ui/spinner"
import axiosInstance from "@/configs/axios.config"
import type { WebsiteMetadata } from "@/types/dashboard.types"
import { useEffect, useState } from "react"
import { Calendar, Users, Building2, Eye, User } from "lucide-react"
import { Chart } from "@/components/chart"

export default function Dashboard() {
    const [loading, setLoading ]= useState(false)
    const [websiteMetadata, setWebSiteMetaData] = useState<WebsiteMetadata>({
        totalEvents : 0,
        totalOrganization : 0,
        totalUsers : 0,
        totalRegistrations : 0,
        totalAttendees : 0,
        totalEventViews : 0,
        monthlyData : {
            totalRegistrations : [],
            totalAttendees : [],
            totalViews : null
        }
    })
    useEffect(() => {
        fetchWebsiteMetadata()
    },[])
    const fetchWebsiteMetadata = async() => {
        try {
            setLoading(true)
            const response = await axiosInstance.get('admin/website-metadata')
            setWebSiteMetaData(response.data.data ?? response.data) 
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <div className="flex min-h-screen w-full justify-center items-center" >
            <Spinner scale={8} />
        </div>
    }
    return (
        <div className="flex flex-col p-4 w-full gap-6">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
            
            {/* key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SectionCards 
                    description="Total Events"
                    amount={websiteMetadata.totalEvents}
                    title="Events"
                    trendDescription="Total published events in the website so far"
                    icon={Calendar}
                />
                <SectionCards 
                    description="Total Organizations"
                    amount={websiteMetadata.totalOrganization}
                    title="Organizations"
                    trendDescription="Total registered organizations in the website so far"
                    icon={Building2}
                />
                 <SectionCards 
                    description="Total Registrations"
                    amount={websiteMetadata?.totalRegistrations}
                    title="Registrations"
                    trendDescription="Total registered users on the events so far"
                    icon={User}
                />
                 <SectionCards 
                    description="Total Attendees"
                    amount={websiteMetadata?.totalAttendees}
                    title="Attendees"
                    trendDescription="Total attendees on the events so far"
                    icon={User}
                />
                <SectionCards 
                    description="Total Users"
                    amount={websiteMetadata.totalUsers}
                    title="Users"
                    trendDescription="Total registered users on the website so far"
                    icon={Users}
                />
                 <SectionCards 
                    description="Total Views"
                    amount={websiteMetadata.totalEventViews}
                    title="Views"
                    trendDescription="Total registered users on the website so far"
                    icon={Eye}
                />
            </div>

            {/* charts area */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full lg:col-span-3 h-[400px]">
                     <Chart data={websiteMetadata.monthlyData.totalRegistrations} title="Registrations" description="Showing total registrations for the this year" />
                </div>
                <div className="w-full lg:col-span-3 h-[400px]">
                     <Chart data={websiteMetadata.monthlyData.totalRegistrations} title="Registrations" description="Showing total registrations for the this year" />
                </div>
                
                
            </div>
             {/* Placeholder for future charts or lists */}
                <div className="lg:col-span-3 min-h-[300px] flex items-center justify-center border rounded-lg bg-muted/20 border-dashed">
                    <p className="text-muted-foreground text-sm">More analytics coming soon after the algorithmn has been implemented</p>
                </div>
        </div>
    )
}