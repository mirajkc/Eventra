"use client";


import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { OrganizationSearch } from "./Search";
import { usePathname, useRouter } from "next/navigation";

export function OrganizationsSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const pathName = usePathname()
  const { replace } = useRouter();
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (isPremium) {
      params.set("isPremium", "true");
    }
    if (type) params.set("type", type);
    if (createdAt) params.set("createdAt", createdAt);
    if (updatedAt) params.set("updatedAt", updatedAt);
    replace(`${pathName}?${params.toString()}`);
  }
  useEffect(() => {
    handleSearch();
  }, [searchTerm, isPremium, type, createdAt, updatedAt])


  const handleReset = () => {
    setSearchTerm("");
    setIsPremium(false);
    setType("");
    setCreatedAt("");
    setUpdatedAt("");
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
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>

      {/* Search */}
      <OrganizationSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Type Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Type
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="INDIVIDUAL">Individual</option>
          <option value="COMPANY">Company</option>
          <option value="EDUCATIONAL">Educational</option>
          <option value="COMMUNITY">Community</option>
          <option value="NON_PROFIT">Non Profit</option>
          <option value="GOVERNMENT">Government</option>
        </select>
      </div>

      {/* Premium Filter */}
      <div className="flex items-center justify-between py-2">
        <label htmlFor="premium-filter" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          Premium Only
        </label>
        <input
          id="premium-filter"
          type="checkbox"
          className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:ring-offset-neutral-950 hover:cursor-pointer"
          onChange={(e) => setIsPremium(e.target.checked)}
        />
      </div>

      {/* Date Filters */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Created At
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>

        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Updated At
        </label>
        <select
          className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:cursor-pointer"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>

        </select>
      </div>
    </motion.aside>
  );
}