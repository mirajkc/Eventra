"use client";
import CreditsDonatedList from "@/components/credits/CreditsDonatedList";
import { TypographyH3, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function CreditsDonatedPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 p-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8" >
      <div>
        <TypographyH3>{t("manageOrganization.credits.title")}</TypographyH3>
        <TypographyP>{t("manageOrganization.credits.subtitle")}</TypographyP>
      </div>
      <div>
        <CreditsDonatedList />
      </div>

    </div>
  );
}