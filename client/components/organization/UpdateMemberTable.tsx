"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { IOrganizationMember } from "@/types/user.types";
import RoleUpdateInput from "../form/RoleUpdateInput";
import { useTranslation } from "react-i18next";



export default function UpdateMemberTable({ members, organizationId }: { members: IOrganizationMember[], organizationId: string }) {
  const { t } = useTranslation();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("manageOrganization.updateRole.table.name")}</TableHead>
            <TableHead>{t("manageOrganization.updateRole.table.email")}</TableHead>
            <TableHead>{t("manageOrganization.updateRole.table.role")}</TableHead>
            <TableHead>{t("manageOrganization.updateRole.table.joinedAt")}</TableHead>
            <TableHead>{t("manageOrganization.updateRole.table.actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.user.name}</TableCell>
              <TableCell>{member.user.email}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{new Date(member.joinedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <div>
                  <RoleUpdateInput member={member} organizationId={organizationId} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
