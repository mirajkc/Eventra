import { Spinner } from "@/components/ui/spinner";
import axiosInstance from "@/configs/axios.config";
import type { ICredit, ICreditPurchasePagination } from "@/types/credit.types";
import { useEffect, useState, useCallback } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
    Coins, 
    DollarSign, 
    TrendingUp, 
    Calendar, 
    Search, 
    Building2, 
    User,
    ArrowUpRight
} from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import { CreditPurchaseDetails } from "@/components/credit component/credit-purchase-details";
import type { ICreditPurchase } from "@/types/credit.types";

export default function Credits() {
  const [data, setData] = useState<ICredit | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState<ICreditPurchasePagination>({
    page: 1,
    limit: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const [selectedPurchase, setSelectedPurchase] = useState<ICreditPurchase | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const fetchCredits = useCallback(async (page: number = pagination.page, search: string = searchTerm) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`/admin/get-credit-and-revenue?take=${pagination.limit}&page=${page}&name=${search}`)
      setData(response.data.data)
      setPagination(response.data.paginations)
    } catch (error) {
      console.error("Error fetching credits:", error)
      toast.error("Failed to fetch credit records")
    } finally {
      setLoading(false)
    }
  }, [pagination.limit, searchTerm])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCredits(1, searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, fetchCredits])

  return (
    <div className="space-y-6 mt-6">
      <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">Credits & Revenue</h1>
          <p className="text-muted-foreground">Monitor platform revenue and organization credit purchases</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${data?.totalRevenue?.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">Lifetime platform earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${data?.monthlyRevenue?.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">Current calendar month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credits Sold</CardTitle>
            <Coins className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.totalCredits?.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">Across all organizations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Credits</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.monthlyCredits?.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">Purchased this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by organization name..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Purchased By</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (!data || data.creditPurchases.length === 0) ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                     <div className="flex justify-center items-center gap-2">
                          <Spinner />
                          <span className="text-muted-foreground">Loading records...</span>
                     </div>
                  </TableCell>
                </TableRow>
              ) : (!data || data.creditPurchases.length === 0) ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                    No credit purchases found.
                  </TableCell>
                </TableRow>
              ) : (
                data.creditPurchases.map((purchase) => (
                  <TableRow 
                    key={purchase.id} 
                    className="hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => {
                        setSelectedPurchase(purchase)
                        setIsDetailsOpen(true)
                    }}
                  >
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium flex items-center gap-1">
                          <Building2 className="h-3 w-3 text-muted-foreground" /> {purchase.organization.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">Org ID: {purchase.organizationId}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium flex items-center gap-1">
                          <User className="h-3 w-3 text-muted-foreground" /> {purchase.user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{purchase.user.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-[10px] font-bold">
                        {purchase.package}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-amber-600">
                      +{purchase.credits}
                    </TableCell>
                    <TableCell className="font-bold text-emerald-600">
                      ${purchase.amount}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {purchase.purchasedAt ? format(new Date(purchase.purchasedAt), "MMM d, yyyy HH:mm") : "N/A"}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Showing {data?.creditPurchases.length || 0} of {pagination.total} purchase records
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchCredits(pagination.page - 1)}
              disabled={!pagination.hasPreviousPage || loading}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchCredits(pagination.page + 1)}
              disabled={!pagination.hasNextPage || loading}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <CreditPurchaseDetails 
        open={isDetailsOpen}
        setOpen={setIsDetailsOpen}
        purchase={selectedPurchase}
      />
    </div>
  )
}   