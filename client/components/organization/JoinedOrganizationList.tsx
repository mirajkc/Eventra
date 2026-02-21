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
import { useTranslation } from "react-i18next";
export default function JoinedOrganizationList() {
  const { t } = useTranslation();
  const router = useRouter()
  const loggedInUserDetails = useAppSelector((state) => { return state?.authSlice?.userDetails })
  const [organizations, setOrganizations] = useState<Array<IJoinedOrganization>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pagination, setPaginations] = useState<IOrganizationMemberPagination>(
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
      toast.error(t("manageOrganization.joined.error"))
    } finally {
      setLoading(false)
    }
  }

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPaginations((prev) => ({
        ...prev,
        currentPage: prev.currentPage++,
      }));

    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) {
      setPaginations((prev) => ({
        ...prev,
        currentPage: prev.currentPage--,
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
                        <TableHead>{t("manageOrganization.joined.table.name")}</TableHead>
                        <TableHead>{t("manageOrganization.joined.table.premium")}</TableHead>
                        <TableHead>{t("manageOrganization.joined.table.role")}</TableHead>
                        <TableHead>{t("manageOrganization.joined.table.joinedAt")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        organizations.map((organization) => (
                          <TableRow key={organization.id} onClick={() => {
                            router.push(`/organization/${organization.organizationId}`)
                          }} className="cursor-pointer">
                            <TableCell>{organization.organization.name}</TableCell>
                            <TableCell>{organization.organization.isPremium ? t("manageOrganization.joined.table.status.premium") : t("manageOrganization.joined.table.status.nonPremium")}</TableCell>
                            <TableCell>{organization.role}</TableCell>
                            <TableCell>{formatDistanceToNow(new Date(organization.joinedAt), { addSuffix: true })}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p>{t("manageOrganization.joined.noOrganizations")}</p>
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
                  onClick={() => handlePrevPage()}
                  disabled={!pagination.hasPreviousPage || loading}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {t("manageOrganization.updateRole.pagination.previous")}
                </Button>

                <span className="text-sm text-muted-foreground px-2">
                  {t("manageOrganization.joined.pagination.page", { current: pagination.currentPage, total: pagination.totalPages })}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleNextPage()}
                  disabled={!pagination.hasNextPage || loading}
                  className="flex-1"
                >
                  {t("manageOrganization.updateRole.pagination.next")}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-muted-foreground italic">{t("manageOrganization.joined.pagination.total", { total: pagination.totalDocs })}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}