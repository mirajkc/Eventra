"use client";

import { Suspense } from "react";
import BlurText from "@/components/BlurText";
import ListOrganizations from "@/components/organizations/ListOrganizations";
import { Spinner } from "@/components/ui/spinner";
import { useTranslation } from "react-i18next";


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
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[50vh]">
            <Spinner className="size-8" />
          </div>
        }>
          <ListOrganizations />
        </Suspense>
      </div>
    </div>
  );
}