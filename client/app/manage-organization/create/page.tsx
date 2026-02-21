"use client";
import CreateOrganizationForm from "@/components/organization/CreateOrganizationForm";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function CreateOrganizationPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow-sm rounded-lg" >
      <div>
        <TypographyH3>{t("manageOrganization.create.title")}</TypographyH3>
        <TypographyP>{t("manageOrganization.create.subtitle")}</TypographyP>
      </div>
      <div>
        <CreateOrganizationForm />
      </div>
    </div>
  );
}