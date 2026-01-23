"use client"
import { useParams } from "next/navigation";
import { TypographyH4 } from "../ui/Typography";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {  IEventParticipantsDetails, IEventParticipantsPagination } from "@/types/event.type";
import { Spinner } from "../ui/spinner";
import { formatDistanceToNow } from "date-fns";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RegisterdMembers() {
  const params = useParams()
  const [members, setMembers] = useState<Array<IEventParticipantsDetails>>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagnation] = useState<IEventParticipantsPagination>({
    currentPage: 1,
    take: 10,
    totalDoccuments: 0,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false
  })
  const eventId = params.id

  useEffect(() => {
    getRegisteredMembers(pagination.currentPage)
  }, [eventId, pagination.currentPage])

  const getRegisteredMembers = async (page: number) => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/participant/get-all-participants/${eventId}?page=${page}&take=${pagination.take}`)
      const result = await response.json()
      if (!response.ok) {
        toast.error(result.message || "Error occurred while fetching registered members.")
        return
      }
      setMembers(result.data)
      setPagnation(result.pagination)
    } catch (error) {
      toast.error("Error occurred while fetching registered members please try again later.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <Spinner />
      </div>
    )
  }

  if (members.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <TypographyH4>Registered Members</TypographyH4>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic">
          No registered members found.
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <TypographyH4>Registered Members</TypographyH4>
        {pagination?.totalDoccuments > 0 && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Total: {pagination.totalDoccuments}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {members.map((member) => (
          <div
            key={member.user.name}
            className="flex items-center justify-between p-4 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-primary/20 transition-all backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={member.user?.image || "https://github.com/shadcn.png"}
                alt={member.user?.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
              />
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {member?.user.name}
                </h4>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
                {member.registeredAt ? `Joined ${formatDistanceToNow(new Date(member.registeredAt))} ago` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center mt-6">
        {pagination.totalPages > 1 && (
          <div className="flex gap-4">
            <Button
              variant={"outline"}
              size="sm"
              disabled={!pagination.hasPreviousPage}
              onClick={() => setPagnation(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
              className="rounded-full px-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              variant={"outline"}
              size="sm"
              disabled={!pagination.hasNextPage}
              onClick={() => setPagnation(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
              className="rounded-full px-4"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}