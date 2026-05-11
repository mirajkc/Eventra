"use client"
import { IOrganizationDetails } from "@/types/organization.types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Calendar, Coins, BadgeCheck, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function OrganizationCard({ organization }: { organization: IOrganizationDetails }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="h-full z-10"
    >
      <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700">
        <Link href={`/organization/${organization.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View Organization Details</span>
        </Link>
        <div className="relative h-[180px] w-full p-2.5 pb-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-neutral-100 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900">
            <Image
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              src={organization.thumbnail || "/banner_placeholder.png"}
              alt={`${organization.name} banner`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
            {/* Overlay Badges */}
            <div className="absolute top-2.5 left-2.5">
              <div className="px-2.5 py-1 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md rounded-full text-[10px] font-bold text-neutral-800 dark:text-neutral-100 shadow-sm border border-black/5 dark:border-white/5 uppercase tracking-wider">
                {organization.type}
              </div>
            </div>
            {organization.isPremium && (
              <div className="absolute top-2.5 right-2.5 z-10">
                <div className="px-2.5 py-1 bg-amber-500/95 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-sm border border-amber-600/20">
                    <BadgeCheck className="w-3 h-3 text-white" />
                    <span className="text-[10px] font-bold text-white uppercase">
                        {t("organizations.card.premium")}
                    </span>
                </div>
              </div>
            )}
            <div className="absolute -bottom-1 left-2.5">
              <div className="relative size-14 rounded-xl border-2 border-white dark:border-neutral-950 overflow-hidden bg-white dark:bg-neutral-900 shadow-sm z-20">
                <Image
                  className="object-cover"
                  src={organization.image || "/organization_profile.jpg"}
                  alt={organization.name}
                  fill
                  sizes="56px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col grow pt-4">
            <div className="flex items-center gap-3 text-[12px] font-semibold tracking-tight text-neutral-500 dark:text-neutral-400 mb-1.5">
              <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500">
                <Coins className="w-3.5 h-3.5" />
                <span>{organization.credits} {t("organizations.card.credits")}</span>
              </div>
            </div>
          <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white leading-snug mb-2 line-clamp-1 transition-colors">
            {organization.name}
          </h3>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {organization.description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50">
            <div className="flex items-center gap-1.5 text-[12px] font-medium text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t("organizations.card.joined")} {format(new Date(organization.createdAt), "MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 group-hover:bg-neutral-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-neutral-900 transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}