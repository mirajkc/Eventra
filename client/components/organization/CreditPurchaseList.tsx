"use client"

import { IOrganizationActivitiesPagination, IUserPurchaseCredit, JoinedMember } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CreditPurchaseList() {
  const params = useParams()
  const organizationId = params.id
  const [creditPurchases, setCreditPurchases] = useState<Array<IUserPurchaseCredit>>([])
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
    fetchCreditPurchases(pagination.currentPage)
  }, [pagination.currentPage])

  const fetchCreditPurchases = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${organizationId}?credits=true&page=${page}&take=${pagination.take}`
      )

      if (!response.ok) {
        toast.error("Error occurred while fetching credit purchases.")
        return
      }

      const result = await response.json()
      setPagination(result.pagination.creditPurchasesCount)
      setCreditPurchases(result.data.creditPurchases)

    } catch (error) {
      toast.error("Error occurred while fetching credit purchases.")
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

  if (creditPurchases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic">
        No credit purchases found.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {creditPurchases.map((purchase) => (
        <div
          key={purchase.id}
          className="flex items-center justify-between p-4 bg-white/40 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-primary/20 transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={purchase.user.image || "https://github.com/shadcn.png"}
              alt={purchase.user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-neutral-800 shadow-sm"
            />
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {purchase.user.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {purchase.user.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] font-bold px-2.5 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full uppercase tracking-wider">
              {purchase.package}
            </span>
            <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium text-right">
              {formatDistanceToNow(new Date(purchase.purchasedAt))} ago
            </p>
          </div>
        </div>
      ))}

      <div className="flex w-full justify-center items-center mt-6">
        {pagination.totalPages > 1 && (
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              disabled={!pagination.hasPreviousPage}
              onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
              className="rounded-full px-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!pagination.hasNextPage}
              onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
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
