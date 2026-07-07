"use client"
import dynamic from "next/dynamic";
import { TypographyH4, TypographyP } from "../ui/Typography"
const JoinedMemberList = dynamic(() => import("./JoinedMemberList"), {
  loading: () => (<>
    <div className="flex-1 overflow-auto">
      <Spinner />
    </div>
  </>)
})
const CreditPurchaseList = dynamic(() => import("./CreditPurchaseList"), {
  loading: () => (<>
    <div className="flex-1 overflow-auto">
      <Spinner />
    </div>
  </>)
})
import { useTranslation } from "react-i18next";
import { Spinner } from "../ui/spinner";

export default function OrganizationActivities({ organizationId }: { organizationId: string }) {
  const { t } = useTranslation();
  return (
    <div className="flex  flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]" >
      <div>
        <TypographyH4>{t("organizations.single.activities.title")}</TypographyH4>
        <TypographyP>{t("organizations.single.activities.subtitle")}</TypographyP>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:items-start mt-8">
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
          <TypographyH4 className="mb-4">{t("organizations.single.activities.recentMembers")}</TypographyH4>
          <div className="flex-1 overflow-auto">
            <JoinedMemberList />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
          <TypographyH4 className="mb-4">{t("organizations.single.activities.recentPurchases")}</TypographyH4>
          <div className="flex-1 overflow-auto">
            <CreditPurchaseList />
          </div>
        </div>
      </div>
    </div>

  )
}


