"use client"

import CheckOtherOrganizations from "@/components/organization/CheckOtherOrganizations"
import OrganizationActivities from "@/components/organization/OrganizationActivities"
import OrganizationEvents from "@/components/organization/OrganizationEvents"
import OrganizationHeroSection from "@/components/organization/OrganizationHerosection"
import { Spinner } from "@/components/ui/spinner"
import { ISingleOrganization } from "@/types/organization.types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function OrganizationPage() {
  const params = useParams()
  const id: string = params.id as string
  const [loading, setLoading] = useState(false)
  const [organizationData, setOrganizationData] = useState<ISingleOrganization>({
    id: "",
    name: "",
    thumbnail: "",
    image: "",
    website: "",
    description: "",
    type: "INDIVIDUAL",
    credits: 0,
    lastCreditReset: new Date(),
    isPremium: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  useEffect(() => { getOrganizationDetails() }, [])
  const getOrganizationDetails = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${id}`)
      if (!response.ok) {
        toast.error("Error occured while fetching organization details please try again later. ")
      }
      const result = await response.json()
      if (!result.data) {
        toast.error("Error occured while fetching organization details please try again later. ")
      }
      setOrganizationData(result.data)
    } catch (error) {
      toast.error("Error occured while fetching organization details please try again later. ")
    } finally {
      setLoading(false)
    }

    if (loading) {
      return <Spinner className="h-screen w-screen flex items-center justify-center size-8" />
    }
  }
  return (
    <div className="flex flex-col gap-4">
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