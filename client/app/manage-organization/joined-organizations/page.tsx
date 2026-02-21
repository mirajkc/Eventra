"use client";
import JoinedOrganizationList from "@/components/organization/JoinedOrganizationList";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function JoinedOrganizationsPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>{t("manageOrganization.joined.title")}</TypographyH3>
        <TypographyP>{t("manageOrganization.joined.subtitle")}</TypographyP>
      </div>
      <div>
        <JoinedOrganizationList />
      </div>

    </div>
  );
}