"use client"

import dynamic from 'next/dynamic'
import { ISingleOrganization } from "@/types/organization.types"
import { notFound, useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import OrganizationPageSkeleton, { 
  CheckOtherOrganizationsSkeleton, 
  OrganizationActivitiesSkeleton, 
  OrganizationEventsSkeleton, 
  OrganizationHeroSkeleton 
} from "@/components/organization/OrganizationPageSkeleton"

const OrganizationHeroSection = dynamic(() => import('@/components/organization/OrganizationHerosection'), { ssr: false, loading: () => <OrganizationHeroSkeleton /> })
const OrganizationActivities = dynamic(() => import('@/components/organization/OrganizationActivities'), { ssr: false, loading: () => <OrganizationActivitiesSkeleton /> })
const OrganizationEvents = dynamic(() => import('@/components/organization/OrganizationEvents'), { ssr: false, loading: () => <OrganizationEventsSkeleton /> })
const CheckOtherOrganizations = dynamic(() => import('@/components/organization/CheckOtherOrganizations'), { ssr: false, loading: () => <CheckOtherOrganizationsSkeleton /> })

export default function OrganizationPage() {
  const params = useParams()
  const id = params.id
  const { data, isLoading, error } = useQuery({
    queryKey: [`EventDetails_${id}`],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${id}`)
      if (!response.ok) {
        toast.error("Unable to fettch organization details please try again later . ")
      }
      return response.json()
    },
    staleTime: 1000 * 60
  })

  const organizationData: ISingleOrganization | null = data?.data ?? null

  if (error) {
    toast.error("Error occured while loading the organizaion details please try again later.")
    window.location.replace("/organization")
  }

  if (isLoading) {
    return <OrganizationPageSkeleton />
  }

  if (!organizationData) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-4 max-w-7xl md:min-w-7xl mx-auto w-full">
      {/* layout */}
      <div>
        <OrganizationHeroSection organizationData={organizationData} />
      </div>
      <div>
        <OrganizationActivities organizationId={organizationData.id} />
      </div>
      <div>
        <OrganizationEvents />
      </div>
      <div>
        <CheckOtherOrganizations />
      </div>
    </div>
  )
}
