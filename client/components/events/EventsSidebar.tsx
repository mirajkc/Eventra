"use client";


import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { usePathname, useRouter } from "next/navigation";
import { EventSearch } from "./Search";
import { useTranslation } from "react-i18next";

export function EventsSidebar() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const pathName = usePathname()
  const { replace } = useRouter();
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("slug", searchTerm);
    if (isPremium) {
      params.set("status", "PUBLISHED");
    }
    if (capacity) params.set("capacity", capacity)
    if (type) params.set("category", type);
    if (createdAt) params.set("createdAt", createdAt);
    if (updatedAt) params.set("updatedAt", updatedAt);
    replace(`${pathName}?${params.toString()}`);
  }
  useEffect(() => {
    handleSearch();
  }, [searchTerm, isPremium, type, createdAt, updatedAt, capacity])


  const handleReset = () => {
    setSearchTerm("");
    setIsPremium(false);
    setType("");
    setCreatedAt("");
    setUpdatedAt("");
    setCapacity("")
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex flex-col sticky top-24 gap-6 bg-white dark:bg-neutral-950 border dark:border-neutral-800 rounded-xl p-6 shadow-sm h-fit">

      {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b dark:border-neutral-800">
        <Filter className="w-5 h-5 text-neutral-500" />
        <h2 className="font-semibold text-lg">{t("events.sidebar.filters")}</h2>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto text-neutral-500 hover:text-neutral-900   dark:hover:text-neutral-100 hover:cursor-pointer"
          onClick={handleReset}
        >
          {t("events.sidebar.reset")}
        </Button>
      </div>

      {/* Search */}
      <EventSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Capacity Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("events.sidebar.capacity")}
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        >
          <option value="">{t("events.sidebar.allCapacity")}</option>
          <option value="20">{t("events.sidebar.lessThan")} 20</option>
          <option value="50">{t("events.sidebar.lessThan")} 50</option>
          <option value="100">{t("events.sidebar.lessThan")} 100</option>
          <option value="200">{t("events.sidebar.lessThan")} 200</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("events.sidebar.categories")}
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">{t("events.sidebar.allCategories")}</option>
          <option value="WORKSHOP">WORKSHOP</option>
          <option value="MEETUP">MEETUP</option>
          <option value="CONFERENCE">CONFERENCE</option>
          <option value="WEBINAR">WEBINAR</option>
          <option value="HACKATHON">HACKATHON</option>
          <option value="COMPETITION">COMPETITION</option>
          <option value="OTHER">OTHER</option>
        </select>
      </div>

      {/* Published Filter */}
      <div className="flex items-center justify-between py-2">
        <label htmlFor="published-filter" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          {t("events.sidebar.publishedOnly")}
        </label>
        <input
          id="published-filter"
          type="checkbox"
          className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:ring-offset-neutral-950 hover:cursor-pointer"
          onChange={(e) => setIsPremium(e.target.checked)}
        />
      </div>

      {/* Date Filters */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("events.sidebar.createdAt")}
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        >
          <option value="">{t("events.sidebar.allTypes")}</option>
          <option value="asc">{t("events.sidebar.ascending")}</option>
          <option value="desc">{t("events.sidebar.descending")}</option>

        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {t("events.sidebar.updatedAt")}
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
        >
          <option value="">{t("events.sidebar.allTypes")}</option>
          <option value="asc">{t("events.sidebar.ascending")}</option>
          <option value="desc">{t("events.sidebar.descending")}</option>

        </select>
      </div>
    </motion.aside>
  );
}

// slug?: string,           // search by slug
//   capacity?: number,       // filter by capacity
//   category?: IEventTypes,     // filter by category
//   createdAt?: "desc" | 'asc',  // filter by creation date
//   updatedAt?: "desc" | 'asc',  // filter by last update
//   status?: IEventStatus