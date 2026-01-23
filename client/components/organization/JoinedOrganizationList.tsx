"use client"
import { useAppSelector } from "@/state/hooks"
import { Spinner } from "../ui/spinner"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import getAccessToken from "@/lib/access.token"
import { IJoinedOrganization, IOrganizationMemberPagination } from "@/types/user.types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { formatDistanceToNow } from "date-fns"
export default function JoinedOrganizationList() {
  const loggedInUserDetails = useAppSelector((state) => { return state.authSlice.userDetails} )
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

  const getJoinedOrganizations = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me/getdetails?organizationMember=true`, {
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



    return (
        <div className="flex flex-col gap-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8">
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
                              <TableHead>Role</TableHead>
                              <TableHead>Joined At</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {
                              organizations.map((organization) => (
                                <TableRow key={organization.id}>
                                  <TableCell>{organization.organizationId}</TableCell>
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
        </div>
    )
}