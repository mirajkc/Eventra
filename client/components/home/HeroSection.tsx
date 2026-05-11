"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">

    </section>
  );
}