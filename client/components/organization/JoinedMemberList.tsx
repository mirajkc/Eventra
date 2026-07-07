
"use client"

import { IOrganizationActivitiesPagination, JoinedMember } from "@/types/organization.types"
import { useEffect, useMemo, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import HandleKickMember from "./HandleKickMember"
import getAccessToken from "@/lib/access.token"
import { useQuery } from "@tanstack/react-query"


export default function JoinedMemberList() {
  const params = useParams()
  const organizationId = useMemo(() => String(params.id ?? ""), [params.id])
  const [page, setPage] = useState(1)
  const [take] = useState(10)
  const [paginationMeta, setPaginationMeta] = useState<Omit<IOrganizationActivitiesPagination, "currentPage" | "take">>({
    totalPages: 0,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })


  const { data: rawResponse, isLoading: loadingMembers, error, refetch: refetchMembers } = useQuery({
    queryKey: ["organization-member", organizationId, page, take],
    enabled: Boolean(organizationId),
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${organizationId}?members=true&page=${page}&take=${take}`
      )
      if (!response.ok) {
        throw new Error("Error occurred while fetching joined members.")
      }
      return response.json()
    },
    staleTime: 100 * 60 * 3
  })

  const joinedMembersData = rawResponse?.data?.members
  const joinedMembers: JoinedMember[] = joinedMembersData ?? []

  useEffect(() => {
    if (rawResponse?.pagination?.memberCount) {
      const m = rawResponse.pagination.memberCount
      setPaginationMeta({
        totalPages: m.totalPages ?? 0,
        totalDocs: m.totalDocs ?? 0,
        hasNextPage: m.hasNextPage ?? false,
        hasPreviousPage: m.hasPreviousPage ?? false
      })
    }
  }, [rawResponse?.pagination?.memberCount])


  const { data: role, isLoading: loadingRole } = useQuery({
    queryKey: ["organization-user-role", organizationId],
    queryFn: async () => {
      const accessToken = await getAccessToken()
      if (!accessToken) {
        return "GUEST" as const
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-loggedinuser-role/${organizationId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      return result.data.members[0].role as string
    },
    enabled: Boolean(organizationId),
    staleTime: 100 * 60 * 3
  })


  if (loadingMembers) {
    return <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <Spinner />
    </div>
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic gap-3">
        <p>Failed to load joined members.</p>
        <Button variant="outline" size="sm" onClick={() => refetchMembers()}>
          Try again
        </Button>
      </div>
    )
  }

  if (joinedMembers.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-neutral-500 italic text-sm">
        No members found.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {
        paginationMeta.totalDocs > 0 && (
          <div className="flex w-full">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Members: {paginationMeta.totalDocs}
            </p>
          </div>
        )
      }
      {joinedMembers.map((member) => (
        <div
          key={member.id}
          className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:ring-1 hover:ring-primary/20 hover:border-primary/20 transition-all backdrop-blur-sm gap-4"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative shrink-0">
              <img
                src={member.user.image || "https://github.com/shadcn.png"}
                alt={member.user.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
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
              <Badge variant="info" className="uppercase text-[10px] px-2.5 py-0.5">
                {member.role}
              </Badge>
              <p className="hidden sm:block text-[10px] text-neutral-400 dark:text-neutral-500 font-medium mt-1">
                Joined {formatDistanceToNow(new Date(member.joinedAt))} ago
              </p>
            </div>

            {(role === "OWNER" || role === "ADMIN") && (
              <div className="shrink-0">
                <HandleKickMember
                  fethcJoinedMember={() => refetchMembers()}
                  memberId={String(member.id)}
                  organizationId={organizationId}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="flex w-full justify-center items-center mt-6">
        {
          paginationMeta.totalPages > 1 && (
            <div className="flex gap-4">
              <Button
                variant={"outline"}
                size="sm"
                disabled={!paginationMeta.hasPreviousPage}
                onClick={() => setPage(prev => prev - 1)}
                className="rounded-full px-4"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant={"outline"}
                size="sm"
                disabled={!paginationMeta.hasNextPage}
                onClick={() => setPage(prev => prev + 1)}
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
