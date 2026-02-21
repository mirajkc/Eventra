"use client";
import UpdateOrganizationForm from "@/components/organization/UpdateOrganizationForm";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function UpdateOrganizationPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow-sm rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>{t("manageOrganization.update.title")}</TypographyH3>
        <TypographyP>{t("manageOrganization.update.subtitle")}</TypographyP>
      </div>
      <div>
        <UpdateOrganizationForm />
      </div>
    </div>
  );
}