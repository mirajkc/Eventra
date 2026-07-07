"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { motion } from "motion/react";
import OrganizationCard from "./OrganizationCard";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  IOrganizationDetails,
  IOrganizationsPagination,
} from "@/types/organization.types";
import { Skeleton } from "../ui/skeleton";

function OrganizationCardSkeleton() {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/80 shadow-sm">
      <div className="relative h-[180px] w-full p-2.5 pb-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-neutral-100 dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <Skeleton className="w-full h-full" />
          <div className="absolute -bottom-1 left-2.5">
            <div className="relative size-14 rounded-xl border-2 border-white dark:border-neutral-950 overflow-hidden bg-white dark:bg-neutral-900 shadow-sm z-20">
              <Skeleton className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col grow pt-4 gap-2">
        <div className="flex items-center gap-3 mb-1.5">
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ListOrganizationsSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {Array.from({ length: count }).map((_, i) => (
        <OrganizationCardSkeleton key={i} />
      ))}
    </div>
  );
}



export default function ListOrganizations() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const premium = searchParams.get("isPremium") === "true";
  const search = searchParams.get("search") ?? "";
  const type = searchParams.get("type") ?? "";
  const createdAt = searchParams.get("createdAt") ?? "";
  const updatedAt = searchParams.get("updatedAt") ?? "";

  const queryParams = useMemo(
    () => ({
      page: currentPage,
      take: 9,
      premium,
      name : search,
      type,
      createdAt,
      updatedAt,
    }),
    [currentPage, premium, search, type, createdAt, updatedAt],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [premium, search, type, createdAt, updatedAt]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["organizations", queryParams],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== "" && value !== false && value !== null && value !== undefined) {
          params.set(key, String(value));
        }
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-organizations?${params}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch organizations");
      }

      return response.json();
    },
    staleTime: 1000 * 60 * 3,
    retry: 1,
  });

  const organizations: IOrganizationDetails[] = data?.data ?? [];
  const pagination: IOrganizationsPagination = data?.pagination ?? {
    currentPage: 1,
    take: 9,
    totalPages: 0,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  };

  useEffect(() => {
    if (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : t("organizations.list.failedToFetch"),
      );
    }
  }, [error, t]);

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (isLoading && organizations.length === 0) {
    return <ListOrganizationsSkeleton />;
  }

  return (
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {organizations.length === 0 && !isLoading ? (
          <p className="col-span-full text-center text-muted-foreground">
            {t("organizations.list.noOrganizationsFound")}
          </p>
        ) : (
          organizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              organization={organization}
            />
          ))
        )}
      </div>

      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center">
          <div>
            <DropdownMenuSeparator />
            <div className="px-2 py-2 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={!pagination.hasPrevPage || isLoading}
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                {t("organizations.list.previous")}
              </Button>

              <span className="text-sm text-muted-foreground px-2">
                {t("organizations.list.pageOf", { current: pagination.currentPage, total: pagination.totalPages })}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={!pagination.hasNextPage || isLoading}
                className="flex-1"
              >
                {t("organizations.list.next")}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
