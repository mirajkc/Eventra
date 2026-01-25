
import CheckOtherOrganizations from "@/components/organization/CheckOtherOrganizations"
import OrganizationActivities from "@/components/organization/OrganizationActivities"
import OrganizationEvents from "@/components/organization/OrganizationEvents"
import OrganizationHeroSection from "@/components/organization/OrganizationHerosection"
import { ISingleOrganization } from "@/types/organization.types"
import { notFound } from "next/navigation"

async function getOrganizationDetails(id: string): Promise<ISingleOrganization | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${id}`, {
      cache: "no-store" // Ensure fresh data, or use revalidate if appropriate
    })
    
    if (!response.ok) {
      return null
    }
    
    const result = await response.json()
    return result.data || null
  } catch (error) {
    console.error("Error fetching organization details:", error)
    return null
  }
}

export default async function OrganizationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const organizationData = await getOrganizationDetails(id)

  if (!organizationData) {
    return notFound()
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
