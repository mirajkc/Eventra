
"use client"

import { IOrganizationActivitiesPagination, JoinedMember } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"

export default function JoinedMemberList() {
  const params = useParams()
  const organizationId = params.id
  const [members, setMembers] = useState<Array<JoinedMember>>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<IOrganizationActivitiesPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  useEffect(() => {
    fethcJoinedMember()
  }, [])

  const fethcJoinedMember = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${organizationId}?members=true&page=${pagination.currentPage}&take=${pagination.take}`)
      if (response.status !== 200) {
        toast.error("Error occured while fetching joined members please try again. ")
      }
      const data = await response.json()
      setMembers(data.members)
      setPagination(data.pagination.memberCount)
      console.log(data.pagination.memberCount);
    } catch (error) {
      toast.error("Error occured while fetching joined members please try again. ")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>
      <Spinner />
    </div>
  }

  return (
    <div>
    </div>
  )
}