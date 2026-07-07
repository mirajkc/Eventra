"use client";

import dynamic from "next/dynamic";
import BlurText from "@/components/BlurText";
import { ListOrganizationsSkeleton } from "@/components/organizations/ListOrganizations";
import { useTranslation } from "react-i18next";

const ListOrganizations = dynamic(
  () => import("@/components/organizations/ListOrganizations"),
  { loading: () => <ListOrganizationsSkeleton /> }
);

export default function OrganizationsPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 w-full shadow-sm rounded-lg p-4 min-h-[60vh] ">
      <div className="flex flex-col p-4 w-full rounded-lg border-b dark:border-b">
        <BlurText
          text={t("organizations.title")}
          delay={0}
          animateBy="words"
          direction='top'
          className="text-2xl md:text-3xl mb-6 font-bold tracking-tight"
        />
        <BlurText
          text={t("organizations.subtitle")}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-sm md:text-base mb-12 text-gray-600 dark:text-gray-300"
        />
      </div>
      <div>
        <ListOrganizations />
      </div>
    </div>
  );
}