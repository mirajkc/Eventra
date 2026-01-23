"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { IOrganizationMember } from "@/types/user.types";
import RoleUpdateInput from "../form/RoleUpdateInput";



export default function UpdateMemberTable({members, organizationId}:{members: IOrganizationMember[], organizationId: string}) { 
 
  return (
    <div>
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Joined At</TableHead>
                  <TableHead>Actions</TableHead>
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
    