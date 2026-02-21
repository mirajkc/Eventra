"use client";
import ManageEventList from "@/components/event/ManageEventList";
import { TypographyH4, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function CreatedEvents() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-4 p-4 shadow rounded-md dark:bg-neutral-900 min-h-[80vh]">
            <div>
                <TypographyH4>{t("manageEvents.created.title")}</TypographyH4>
                <TypographyP>{t("manageEvents.created.subtitle")}</TypographyP>
            </div>
            <div>
                <ManageEventList />
            </div>
        </div>
    )
}