"use client"
import { useState } from "react";
import { Button } from "../ui/button";

export default function HandleKickMember({ memberId, organizationId }: { memberId: string, organizationId: string }) {
  const [loading, setLoading] = useState(false)
  return (
    <Button variant="outline" size="sm">
      Kick Member
    </Button>
  )
}