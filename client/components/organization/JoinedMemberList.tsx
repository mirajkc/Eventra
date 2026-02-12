
"use client"

import { IOrganizationActivitiesPagination, JoinedMember } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import HandleKickMember from "./HandleKickMember"
import getAccessToken from "@/lib/access.token"
export default function JoinedMemberList() {
  const params = useParams()
  const organizationId = params.id
  const [joinedMembers, setJoinedMembers] = useState<Array<JoinedMember>>([])

  const [loadingMembers, setLoadingMembers] = useState(true)
  const [loadingRole, setLoadingRole] = useState(true)
  const [role, setRole] = useState<string>("")
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

  useEffect(() => {
    fetchUserRole()
  }, [])


  const fethcJoinedMember = async (page: number) => {
    setLoadingMembers(true)
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
      setLoadingMembers(false)
    }
  }

  const fetchUserRole = async () => {
    try {
      setLoadingRole(true)
      const accessToken = await getAccessToken()
      if (!accessToken) {
        setRole("GUEST")
        return
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-loggedinuser-role/${organizationId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      setRole(result.data.members[0].role)

    } catch (error) {
      console.log(error)
    } finally {
      setLoadingRole(false)
    }
  }


  if (loadingMembers) {
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
      {
        pagination?.totalDocs > 0 && (
          <div className="flex w-full">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Members: {pagination.totalDocs}
            </p>
          </div>
        )
      }
      {joinedMembers.map((member) => (
        <div
          key={member.id}
          className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-3xl shadow-sm hover:ring-1 hover:ring-primary/20 hover:border-primary/20 transition-all backdrop-blur-sm gap-4"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative shrink-0">
              <img
                src={member.user.image || "https://github.com/shadcn.png"}
                alt={member.user.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-primary transition-colors">
                {member.user.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                {member.user.email}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between sm:justify-end gap-3 sm:gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-col items-start sm:items-end">
              <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-wider border border-blue-100/50 dark:border-blue-800/30">
                {member.role}
              </span>
              <p className="hidden sm:block text-[10px] text-neutral-400 dark:text-neutral-500 font-medium mt-1">
                Joined {formatDistanceToNow(new Date(member.joinedAt))} ago
              </p>
            </div>

            {(role === "OWNER" || role === "ADMIN") && (
              <div className="shrink-0">
                <HandleKickMember
                  fethcJoinedMember={fethcJoinedMember}
                  memberId={String(member.id)}
                  organizationId={String(organizationId)}
                />
              </div>
            )}
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