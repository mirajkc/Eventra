export interface WebsiteMetadata {
        totalEvents : number,
        totalOrganization : number,
        totalUsers : number,
        totalRegistrations : number,
        totalAttendees : number,
        totalEventViews : number,
        monthlyData : {
            totalRegistrations : Array<{
                    year : number,
                    month : number,
                    count : number
                }>
            totalAttendees : Array<{
                    year : number,
                    month : number,
                    count : number
                }>,
            totalViews : null
        }
    }