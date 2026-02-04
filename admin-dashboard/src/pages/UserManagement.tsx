import { Spinner } from "@/components/ui/spinner";
import axiosInstance from "@/configs/axios.config";
import type { IUserDetails, IUserPagination } from "@/types/user.types";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import { AddUser } from "@/components/user component/add-user";
import { UserDetails } from "@/components/user component/user-details";
import { DeleteUser } from "@/components/user component/delete-user";
import { EditUser } from "@/components/user component/edit-user";
import { toast } from "sonner";

export default function UserManagement() { 
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<Array<IUserDetails>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState<IUserPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  });
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<IUserDetails | null>(null)
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false)
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false)
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchUsersDetails()
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [pagination.currentPage, searchTerm])
  const fetchUsersDetails = async () => {
    try {
      setLoading(true)
      const reponse = await axiosInstance.get(`/user/get-all-users?page=${pagination.currentPage}&take=${pagination.take}&name=${searchTerm}`)
      setUserDetails(reponse.data.data)
      setPagination(reponse.data.pagination)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <div className="flex items-center justify-center min-h-screen w-full" >
      <Spinner />
    </div>
  }

    return (
        <div className="space-y-4 mt-6">
          <div className="flex flex-col">
                  <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
                  <p className="text-muted-foreground">Create, update or delete users</p>
          </div>
            <div className="flex items-center gap-4 w-full">
                <div className="flex justify-between items-center gap-2 w-full">
                    <div className="relative w-[60vh]">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search users..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button className="ml-auto" onClick={() => setIsAddUserModalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New User
                    </Button>
                </div>
            </div>
            
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userDetails.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        ) : (
                            userDetails.map((user) => (
                                <TableRow 
                                    className="hover:cursor-pointer" 
                                    key={user.id}
                                    onClick={() => {
                                        setSelectedUser(user)
                                        setIsUserDetailsModalOpen(true)
                                    }}
                                >
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={user.image} alt={user.name} />
                                            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone || "N/A"}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                            <Button
                                            variant="ghost" size="icon-sm"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedUser(user)
                                                setIsEditUserModalOpen(true)
                                            }}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                            variant="ghost" size="icon-sm" className="text-destructive hover:text-destructive"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedUser(user)
                                                setIsDeleteUserModalOpen(true)
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
                        disabled={!pagination.hasPreviousPage}
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
            <AddUser open={isAddUserModalOpen} setOpen={setIsAddUserModalOpen} />
            <UserDetails 
                open={isUserDetailsModalOpen} 
                setOpen={setIsUserDetailsModalOpen} 
                user={selectedUser} 
            />
            <DeleteUser
                open={isDeleteUserModalOpen}
                setOpen={setIsDeleteUserModalOpen}
                user={selectedUser}
                onDeleteSuccess={() => {
                    fetchUsersDetails()
                }}
            />
            <EditUser
                open={isEditUserModalOpen}
                setOpen={setIsEditUserModalOpen}
                user={selectedUser}
                onUpdateSuccess={() => {
                    fetchUsersDetails()
                }}
            />
        </div>
    )
}