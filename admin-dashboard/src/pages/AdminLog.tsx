import { Spinner } from "@/components/ui/spinner";
import axiosInstance from "@/configs/axios.config";
import type { AdminLog, AdminLogPagination } from "@/types/adminlog.types";
import { useEffect, useState, useCallback } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { AdminLogDetails } from "@/components/adminlog component/admin-log-details";

export default function AdminLog() {
  const [logs, setLogs] = useState<Array<AdminLog>>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination] = useState<AdminLogPagination>({
    page: 1,
    limit: 10,
    total: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const [selectedLog, setSelectedLog] = useState<AdminLog | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const fetchAdminLog = useCallback(async (page: number = pagination.page, search: string = searchTerm) => {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`/admin/get-all-admin-logs?take=${pagination.limit}&page=${page}&name=${search}`)
      const data = response.data
      setLogs(data.data)
      setPagination(data.paginations || {
        page: 1,
        limit: 10,
        total: 0,
        hasNextPage: false,
        hasPreviousPage: false
      })
    } catch (error) {
      console.error('Error fetching admin logs:', error)
      toast.error("Failed to fetch admin logs")
    } finally {
      setLoading(false)
    }
  }, [pagination.limit, searchTerm])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchAdminLog(1, searchTerm)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, fetchAdminLog])

  return (
    <div className="space-y-4 mt-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">Admin Logs</h1>
        <p className="text-muted-foreground">Audit trail of all administrative actions</p>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by admin name..."
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
              <TableHead>Admin</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading && logs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                   <div className="flex justify-center items-center gap-2">
                        <Spinner />
                        <span className="text-muted-foreground">Fetching logs...</span>
                   </div>
                </TableCell>
              </TableRow>
            ) : logs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No logs found.
                </TableCell>
              </TableRow>
            ) : (
              logs.map((log) => (
                <TableRow 
                  key={log.id} 
                  className="hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedLog(log)
                    setIsDetailsOpen(true)
                  }}
                >
                  <TableCell>
                    <div className="flex flex-col">
                        <span className="font-medium flex items-center gap-1">
                            <User className="h-3 w-3" /> {log.admin.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{log.admin.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                        {log.action.toLowerCase().replace(/_/g, " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col text-xs">
                        <span className="font-semibold">{log.entityType}</span>
                        <span className="text-muted-foreground font-mono">{log.entityId}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate" title={log.reason}>
                    {log.reason || "N/A"}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {log.createdAt ? format(new Date(log.createdAt), "MMM d, yyyy HH:mm") : "N/A"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {logs.length} of {pagination.total} audit logs
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchAdminLog(pagination.page - 1)}
            disabled={!pagination.hasPreviousPage || loading}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchAdminLog(pagination.page + 1)}
            disabled={!pagination.hasNextPage || loading}
          >
            Next
          </Button>
        </div>
      </div>

      <AdminLogDetails 
        open={isDetailsOpen}
        setOpen={setIsDetailsOpen}
        log={selectedLog}
      />
    </div>
  );
}