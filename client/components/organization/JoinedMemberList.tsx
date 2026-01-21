
"use client"

import { IOrganizationActivitiesPagination, JoinedMember } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"



export default function JoinedMemberList() {
  const params = useParams()
  const organizationId = params.id
  const [joinedMembers, setJoinedMembers] = useState<Array<JoinedMember>>([])
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
    fethcJoinedMember(pagination.currentPage)
  }, [pagination.currentPage])


  const fethcJoinedMember = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${organizationId}?members=true&page=${page}&take=${pagination.take}`
      )

      if (!response.ok) {
        toast.error("Error occurred while fetching joined members.")
        return
      }

      const result = await response.json()

      setPagination(result.pagination.memberCount)
      setJoinedMembers(result.data.members)


    } catch (error) {
      toast.error("Error occurred while fetching joined members.")
    } finally {
      setLoading(false)
    }
  }


  if (loading) {
    return <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <Spinner />
    </div>
  }

  if (joinedMembers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic">
        No members found.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {joinedMembers.map((member) => (
        <div
          key={member.id}
          className="flex items-center  justify-between p-4 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-primary/20 transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={member.user.image || "https://github.com/shadcn.png"}
              alt={member.user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
            />
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {member.user.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {member.user.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-wider">
              {member.role}
            </span>
            <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
              Joined {formatDistanceToNow(new Date(member.joinedAt))} ago
            </p>
          </div>
        </div>
      ))}
      <div className="flex w-full justify-center items-center mt-6">
        {
          pagination.totalPages > 1 && (
            <div className="flex gap-4">
              <Button
                variant={"outline"}
                size="sm"
                disabled={!pagination.hasPreviousPage}
                onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
                className="rounded-full px-4"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant={"outline"}
                size="sm"
                disabled={!pagination.hasNextPage}
                onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
                className="rounded-full px-4"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}