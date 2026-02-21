"use client";
import JoinedEventList from "@/components/event/JoinedEventList";
import { TypographyH4, TypographyP } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";

export default function ParticipatedEvents() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-4 p-4 shadow rounded-md dark:bg-neutral-900 min-h-[80vh]">
            <div>
                <TypographyH4>{t("manageEvents.participated.title")}</TypographyH4>
                <TypographyP>{t("manageEvents.participated.subtitle")}</TypographyP>
            </div>
            <div>
                <JoinedEventList />
            </div>
        </div>
    )
}