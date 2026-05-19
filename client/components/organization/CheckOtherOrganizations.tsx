"use client"
import { ISingleOrganization } from "@/types/organization.types";
import OrganizationCard from "../organizations/OrganizationCard";
import { TypographyH4, TypographyP } from "../ui/Typography";
import { Spinner } from "../ui/spinner";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";

export default function CheckOtherOrganizations() {
  const { t } = useTranslation();

  const { data: rawResponse, isLoading: loading } = useQuery({
    queryKey: ["check-other-organizations"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-organizations?take=6`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch organizations.")
      }
      return response.json()
    },
    staleTime: 100 * 60 * 3
  })

  const organizations: ISingleOrganization[] = rawResponse?.data ?? []

  return (
    <div className="flex  flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div className="flex flex-col gap-2">
        <TypographyH4>{t("organizations.single.other.title")}</TypographyH4>
        <TypographyP>{t("organizations.single.other.subtitle")}</TypographyP>
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
          <Button type='button' variant="outline" className="p-6">{t("organizations.single.other.goToOrganizations")}</Button>
        </Link>
      </div>

    </div>
  )
}