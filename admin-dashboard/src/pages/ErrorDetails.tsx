import { Spinner } from "@/components/ui/spinner"
import axiosInstance from "@/configs/axios.config"
import type { IErrorLog, IErrorLogPagination } from "@/types/error.type"
import { useEffect, useState, useCallback } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { toast } from "sonner"

export default function ErrorDetails() {
  const [errorDetails, setErrorDetails] = useState<Array<IErrorLog>>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState<IErrorLogPagination>({
    page: 1,
    limit: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  const fetchErrorDetails = useCallback(async (page: number = pagination.page, search: string = searchTerm) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`/admin/get-all-error-logs?take=${pagination.limit}&page=${page}&message=${search}`)
      const data = response.data
      setErrorDetails(data.data)
      setPagination(data.paginations || {
        page: 1,
        limit: 10,
        total: 0,
        hasNextPage: false,
        hasPreviousPage: false
      })
    } catch (error) {
      console.error('Error fetching logs:', error)
      toast.error("Failed to fetch error logs")
    } finally {
      setLoading(false)
    }
  }, [pagination.limit, searchTerm])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchErrorDetails(1, searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, fetchErrorDetails])

  return (
    <div className="space-y-4 mt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">System Error Logs</h1>
        <p className="text-muted-foreground">Monitor application errors and exceptions</p>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by error message..."
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
              <TableHead className="w-[150px]">Id</TableHead>
              <TableHead className="w-[80px]">Code</TableHead>
              <TableHead>Message</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading && errorDetails.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                   <div className="flex justify-center items-center gap-2">
                        <Spinner />
                        <span className="text-muted-foreground">Fetching logs...</span>
                   </div>
                </TableCell>
              </TableRow>
            ) : errorDetails.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No error logs found.
                </TableCell>
              </TableRow>
            ) : (
              errorDetails.map((log) => (
                <TableRow 
                    key={log.id} 
                    className="hover:bg-muted/50 transition-colors group"
                >
                  <TableCell className="font-mono text-xs">{log.id}</TableCell>
                  <TableCell>{log.code}</TableCell>
                  <TableCell className="max-w-[500px] truncate" title={log.message}>
                    {log.message}
                  </TableCell>
                  <TableCell>{log.status}</TableCell>
                </TableRow>
              ))
            )}
            </TableBody>
          </Table>
        </div> 

        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Showing {errorDetails.length} of {pagination.total} error logs
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchErrorDetails(pagination.page - 1)}
              disabled={!pagination.hasPreviousPage || loading}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchErrorDetails(pagination.page + 1)}
              disabled={!pagination.hasNextPage || loading}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
  )
}   
   