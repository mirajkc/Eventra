"use client"
import getAccessToken from "@/lib/access.token"
import { IOrganizationMember } from "@/types/user.types"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useTranslation } from "react-i18next";

type Props = {
  member: IOrganizationMember
  organizationId: string
}

export default function RoleUpdateInput({ member, organizationId }: Props) {
  const { t } = useTranslation();
  const [role, setRole] = useState(member.role)
  const [loading, setLoading] = useState<boolean>(false)

  const changeRole = async () => {
    const accessToken = await getAccessToken()
    const data = {
      role,
      organizationId,
      id: member.id
    }
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/update-member-role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (!response.ok) {
        toast.error(result.message || t("manageOrganization.updateRole.input.error"))
        return
      }
      toast.success(result.message || t("manageOrganization.updateRole.input.success"))
    } catch (error) {
      toast.error(t("manageOrganization.updateRole.input.error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      {
        loading ? (<div>
          <Spinner />
        </div>) : (
          <div className="flex gap-2">
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value as IOrganizationMember["role"])}
              className="border dark:bg-neutral-900 dark:text-white"
            >
              <option value="MEMBER">{t("manageOrganization.updateRole.input.roles.member")}</option>
              <option value="ADMIN">{t("manageOrganization.updateRole.input.roles.admin")}</option>
              <option value="CREATOR">{t("manageOrganization.updateRole.input.roles.creator")}</option>
            </select>
            <Button variant="outline" size={'sm'} onClick={changeRole}>{t("manageOrganization.updateRole.input.update")}</Button>
          </div>

        )
      }
    </div>
  )
}
