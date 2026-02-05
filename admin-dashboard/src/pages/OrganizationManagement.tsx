import { Spinner } from "@/components/ui/spinner"
import axiosInstance from "@/configs/axios.config"
import type { IOrganization, OrganizationPagination } from "@/types/organization.types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { EditOrganization } from "@/components/organization component/edit-organization"
import { DeleteOrganization } from "@/components/organization component/delete-organization"
import { OrganizationDetails } from "@/components/organization component/organization-details"


export default function OrganizationManagement() {
  const [organizations, setOrganizations] = useState<IOrganization[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [pagination, setPagination]  = useState<OrganizationPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false
  })

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState<IOrganization | null>(null)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getOrganizations()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [pagination.currentPage, searchTerm])

  const getOrganizations = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get(`/organization/get-organizations?page=${pagination.currentPage}&take=${pagination.take}&name=${searchTerm}`)
      setOrganizations(response.data.data)
      setPagination(response.data.pagination)
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Error fetching organizations")
      }
    } finally {
      setLoading(false)
    }
  }

  if(loading){
    return <div className="flex min-h-screen items-center justify-center w-auto" ><Spinner /></div>
  }
    return (
        <div className="space-y-4 mt-6">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight">Organization Management</h1>
                <p className="text-muted-foreground">Manage organization profiles, credits and premium status</p>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-2 w-full">
                    <div className="relative w-[60vh]">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search organizations..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Credits</TableHead>
                            <TableHead>Premium</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {organizations.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No organizations found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            organizations.map((org) => (
                                <TableRow 
                                    key={org.id} 
                                    className="hover:cursor-pointer"
                                    onClick={() => {
                                        setSelectedOrg(org)
                                        setIsDetailsModalOpen(true)
                                    }}
                                >
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={org.thumbnail || org.image} alt={org.name} />
                                            <AvatarFallback>{org.name.charAt(0).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">{org.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{org.type}</Badge>
                                    </TableCell>
                                    <TableCell>{org.credits}</TableCell>
                                    <TableCell>
                                        {org.isPremium ? (
                                            <Badge className="bg-amber-500 hover:bg-amber-600">Premium</Badge>
                                        ) : (
                                            <Badge variant="outline">Free</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(org.createdAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                            <Button
                                                variant="ghost" 
                                                size="icon-sm"
                                                onClick={() => {
                                                    setSelectedOrg(org)
                                                    setIsEditModalOpen(true)
                                                }}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost" 
                                                size="icon-sm" 
                                                className="text-destructive hover:text-destructive"
                                                onClick={() => {
                                                    setSelectedOrg(org)
                                                    setIsDeleteModalOpen(true)
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Page {pagination.currentPage} of {pagination.totalPages}
                </div>
                <div className="space-x-2">
                    <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
                        disabled={!pagination.hasPrevPage}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
                        disabled={!pagination.hasNextPage}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <EditOrganization 
                open={isEditModalOpen} 
                setOpen={setIsEditModalOpen} 
                organization={selectedOrg} 
                onSuccess={getOrganizations} 
            />
            <DeleteOrganization 
                open={isDeleteModalOpen} 
                setOpen={setIsDeleteModalOpen} 
                organization={selectedOrg} 
                onSuccess={getOrganizations} 
            />
            <OrganizationDetails 
                open={isDetailsModalOpen} 
                setOpen={setIsDetailsModalOpen} 
                organization={selectedOrg} 
            />
        </div>
    )
}