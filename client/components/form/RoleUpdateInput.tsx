"use client"
import getAccessToken from "@/lib/access.token"
import { IOrganizationMember } from "@/types/user.types"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"
import { Button } from "../ui/button"
import { toast } from "sonner"

type Props = {
  member: IOrganizationMember
  organizationId: string
}

export default function RoleUpdateInput({ member, organizationId }: Props) {
  const [role, setRole] = useState(member.role)
  const [loading, setLoading] = useState<boolean>(false)

  const changeRole = async () => {
    const accessToken =  await getAccessToken()
    const data = {
      role,
      organizationId,
      id : member.id
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
     if( !response.ok){
      toast.error(  result.message || "Error occured while updating the user role please try again later. ")
      return
     }
     toast.success(result.message || "User role updated successfully")
    } catch (error) {
      toast.error("Error occured while updating the user role please try again later. ")
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
        className="dark:bg-neutral-900 text-white"
      >
        <option value="MEMBER">Member</option>
        <option value="ADMIN">Admin</option>
        <option value="CREATOR">Creator</option>
      </select>
      <Button variant="outline" size={'sm'} onClick={changeRole}>Update</Button>
          </div>
      
        )
}
    </div>
  )
}
