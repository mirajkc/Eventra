"use client"
import {  useState } from "react";
import { Button } from "../ui/button";
import getAccessToken from "@/lib/access.token";
import { toast } from "sonner";


export default function HandleKickMember({ organizationId, memberId,fethcJoinedMember }: { organizationId: string, memberId: string,fethcJoinedMember: (page:number) => void }) {
  const [loading, setLoading] = useState(false)
  const handleKickMember = async () => {
    setLoading(true)
    try {
      const accessToken = await getAccessToken() 
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/kick-member/organization/${organizationId}/${memberId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ memberId }),
      })
      const result = await response.json()
      if (!response.ok) {
        toast.error(result.message || "Failed to kick member")
        return
      }
      toast.success(result.message || "Member kicked successfully")
      fethcJoinedMember(1)
    } catch (error) {
      toast.error("Error kicking member")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button disabled={loading} variant="outline" size="sm" onClick={handleKickMember}>
      Kick Member
    </Button>
  )
}