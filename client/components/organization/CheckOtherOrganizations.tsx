"use client"
import { ISingleOrganization } from "@/types/organization.types";
import OrganizationCard from "../organizations/OrganizationCard";
import { TypographyH4, TypographyP } from "../ui/Typography";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CheckOtherOrganizations() {
  const [organizations, setOrganizations] = useState<Array<ISingleOrganization>>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getOrganizations()
  }, [])
  const getOrganizations = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-organizations?take=6`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        return;
      }
      setOrganizations(result.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex  flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div className="flex flex-col gap-2">
        <TypographyH4>Check Other Organizations</TypographyH4>
        <TypographyP>Check out other organizations that you might be interested in.</TypographyP>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-4">
        {
          loading ? (
            <div className="flex items-center justify-center text-center w-full h-full">
              <Spinner />
            </div>
          ) : (
            organizations.map((organization) => (
              <OrganizationCard key={organization.id} organization={organization} />
            ))
          )
        }
      </div>
      <div className="flex items-center justify-center text-center w-full h-full">
        <Link href="/organizations">
          <Button type='button' variant="outline" className="p-6">GO TO ORGANIZATIONS</Button>
        </Link>
      </div>

    </div>
  )
}