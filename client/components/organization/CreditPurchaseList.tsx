"use client"

import { IOrganizationActivitiesPagination, IUserPurchaseCredit } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"
import { useParams } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

export default function CreditPurchaseList() {
  const params = useParams()
  const organizationId = params.id
  const [page, setPage] = useState(1)
  const [take] = useState(10)
  const [paginationMeta, setPaginationMeta] = useState<Omit<IOrganizationActivitiesPagination, "currentPage" | "take">>({
    totalPages: 0,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const { data: rawResponse, isLoading: loading, error, refetch: refetchCredits } = useQuery({
    queryKey: ["organization-credit-purchases", organizationId, page, take],
    enabled: Boolean(organizationId),
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${organizationId}?credits=true&page=${page}&take=${take}`
      )

      if (!response.ok) {
        throw new Error("Error occurred while fetching credit purchases.")
      }

      return response.json()
    },
    staleTime: 100 * 60 * 3
  })

  const creditPurchases: IUserPurchaseCredit[] | undefined = rawResponse?.data?.creditPurchases

  useEffect(() => {
    if (rawResponse?.pagination?.creditPurchasesCount) {
      const c = rawResponse.pagination.creditPurchasesCount
      setPaginationMeta({
        totalPages: c.totalPages ?? 0,
        totalDocs: c.totalDocs ?? 0,
        hasNextPage: c.hasNextPage ?? false,
        hasPreviousPage: c.hasPreviousPage ?? false
      })
    }
  }, [rawResponse?.pagination?.creditPurchasesCount])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic gap-3">
        <p>Failed to load credit purchases.</p>
        <Button variant="outline" size="sm" onClick={() => refetchCredits()}>
          Try again
        </Button>
      </div>
    )
  }

  const purchases = creditPurchases ?? []

  if (purchases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-neutral-500 italic">
        No credit purchases found.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {
        paginationMeta.totalDocs > 0 && (
          <div className="flex w-full">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Credit Purchases: {paginationMeta.totalDocs}
            </p>
          </div>
        )
      }
      {purchases.map((purchase) => (
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
        {paginationMeta.totalPages > 1 && (
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              disabled={!paginationMeta.hasPreviousPage}
              onClick={() => setPage(prev => prev - 1)}
              className="rounded-full px-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!paginationMeta.hasNextPage}
              onClick={() => setPage(prev => prev + 1)}
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
