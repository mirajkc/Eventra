"use client"
import { HeroSection } from "@/components/ui/hero-section-2";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <HeroSection
      title={
        <>
          {t("home.cta.convincedTitle", { defaultValue: "Are you convinced yet?" })} <br />
          <span className="text-muted-foreground/60">{t("home.cta.joinUs", { defaultValue: "Join Eventra today" })}</span>
        </>
      }
      subtitle={t("home.cta.subtitle")}
      callToAction={{
        text: t("home.cta.getStartedBtn", { defaultValue: "JOIN US TO EXPLORE" }),
        onClick: () => router.push("/auth/register")
      }}
      backgroundImage="https://images.unsplash.com/photo-1775799009180-2e221c9fe431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwcG9pbnRpbmclMjBndW4lMjBhcyUyMGElMjB3YXJuaW5nfGVufDB8fDB8fHww"
      className="border-y border-border"
    />
  );
}
