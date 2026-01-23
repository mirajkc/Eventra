"use client"
import { useAppSelector } from "@/state/hooks"
import { Spinner } from "../ui/spinner"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import getAccessToken from "@/lib/access.token"
import { IJoinedOrganization, IOrganizationMemberPagination } from "@/types/user.types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { formatDistanceToNow } from "date-fns"
import { useRouter } from "next/navigation"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
export default function JoinedOrganizationList() {
  const router = useRouter()
  const loggedInUserDetails = useAppSelector((state) => { return state?.authSlice?.userDetails} )
  const [organizations, setOrganizations] = useState<Array<IJoinedOrganization>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pagination ,setPaginations] = useState<IOrganizationMemberPagination>(
     {
            currentPage: 1,
            totalPages: 0,
            take: 10,
            totalDocs: 0,
            hasNextPage: false,
            hasPreviousPage: false
        }
  )
  useEffect(() => {
    getJoinedOrganizations()
  }, [])

    useEffect(() => {
     getJoinedOrganizations()
  }, [pagination.currentPage])
   

  const getJoinedOrganizations = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me/getdetails?organizationMember=true&&page=${pagination.currentPage}&take=${pagination.take}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      setOrganizations(result.data.organizationMember)
      setPaginations(result.pagination.organizationMember)      
    } catch (error) {
      toast.error("Error occurred while fetching joined organizations. ")
    }finally{
      setLoading(false)
    }
  }

    const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPaginations((prev) => ({
        ...prev,
        currentPage: prev.currentPage ++,
      }));

    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) {
      setPaginations((prev) => ({
        ...prev,
        currentPage: prev.currentPage --,
      }));

    }
  };



    return (
        <div className="flex flex-col gap-4 min-h-[60vh]  rounded-lg dark:bg-neutral-900 mb-8">
            {
              loading ? (
                <div className="flex items-center justify-center min-h-[40vh]">
                  <Spinner className="size-6" />
                </div>
              ) : (
                <div>
                  {
                    organizations.length > 0 ? (
                        <div>
                         <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Organization Name</TableHead>
                              <TableHead>Premium</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Joined At</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {
                              organizations.map((organization) => (
                                <TableRow key={organization.id} onClick={() => {
                                   router.push(`/organization/${organization.organizationId}`)
                                }} className="cursor-pointer">
                                  <TableCell>{organization.organization.name}</TableCell>
                                  <TableCell>{organization.organization.isPremium ? "Premium" : "Non-Premium"}</TableCell>
                                  <TableCell>{organization.role}</TableCell>
                                  <TableCell>{formatDistanceToNow(new Date(organization.joinedAt), {addSuffix: true})}</TableCell>
                                </TableRow>
                              ))
                            }
                          </TableBody>
                         </Table>
                        </div>
                    ) : (
                      <p>No organizations found</p>
                    )
                  }
                </div>
              )
            }
            <div>
              {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center">
          <div>
            <DropdownMenuSeparator />
            <div className="px-2 py-2 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={ () => handlePrevPage()}
                disabled={!pagination.hasPreviousPage || loading}
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground px-2">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={ () => handleNextPage()}
                disabled={!pagination.hasNextPage || loading}
                className="flex-1"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground italic">Total Joined Organizaions: {pagination.totalDocs}</p>
            </div>
          </div>
        </div>
      )}
    </div>
</div>
    )
}