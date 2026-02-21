"use client"
import CreateOrganizationCard from "@/components/organization/CreateOrganizationCard";
import UpdateMemberTable from "@/components/organization/UpdateMemberTable";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getLoggedInUserOrganization } from "@/state/slices/organization.slice";
import { IOrganizationMember, IOrganizationMemberPagination } from "@/types/user.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function UpdateMemberRolePage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false)
  const [members, setMembers] = useState<IOrganizationMember[]>([])
  const [pagination, setPagination] = useState<IOrganizationMemberPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.authSlice.userDetails)
  const getOrganizationDetails = useAppSelector((state) => state.organization.organizationDetails?.data)

  useEffect(() => {
    dispatch(getLoggedInUserOrganization())
  }, [])

  useEffect(() => {
    if (getOrganizationDetails?.id && getOrganizationDetails.id.length > 0) {
      getOrganizationMembers()
    }
  }, [getOrganizationDetails])
  const getOrganizationMembers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-single-organization/${getOrganizationDetails?.id}?members=true&page=${pagination?.currentPage}&take=${pagination?.take}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        throw new Error(t("manageOrganization.updateRole.error"))
      }
      const result = await response.json()
      setMembers(result.data.members)
      setPagination(result.pagination.memberCount)
    } catch (error) {
      toast.error(t("manageOrganization.updateRole.error"))
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow-sm rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>{t("manageOrganization.updateRole.title")}</TypographyH3>
        <TypographyP>{t("manageOrganization.updateRole.subtitle")}</TypographyP>
      </div>
      <div>
        {!loggedInUser?.id ? (
          <><CreateOrganizationCard /></>
        ) : (
          <div>
            {
              members.length === 0 ? (
                <TypographyP>{t("manageOrganization.updateRole.noMembers")}</TypographyP>
              ) : (
                <UpdateMemberTable members={members} organizationId={getOrganizationDetails?.id || ""} />
              )
            }
          </div>
        )}
      </div>
      <div>
        {
          pagination.totalPages > 1 ? (
            <>
              <div className="flex justify-between text-sm italic">
                <p>{t("manageOrganization.updateRole.pagination.showing", { current: pagination.currentPage, total: pagination.totalPages })}</p>
                <p>{t("manageOrganization.updateRole.pagination.totalMembers", { total: pagination.totalDocs })}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Button variant={"outline"} onClick={() => { setPagination({ ...pagination, currentPage: pagination.currentPage-- }); getOrganizationMembers() }} disabled={pagination.currentPage === 1}> <ChevronLeft /> {t("manageOrganization.updateRole.pagination.previous")}</Button>
                <Button variant={"outline"} onClick={() => { setPagination({ ...pagination, currentPage: pagination.currentPage++ }); getOrganizationMembers() }} disabled={pagination.currentPage === pagination.totalPages}>{t("manageOrganization.updateRole.pagination.next")} <ChevronRight /></Button>
              </div>
            </>
          ) : (<></>)
        }
      </div>
    </div>
  );
}