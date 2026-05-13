"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HeaderSkeleton() {
  return (
    <div className="flex flex-col gap-5 pt-12 pb-10 border-b border-neutral-200 dark:border-neutral-800">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-16 sm:h-20 lg:h-28 w-4/5 max-w-[700px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full max-w-xl" />
        <Skeleton className="h-4 w-4/5 max-w-xl" />
      </div>
    </div>
  );
}

export function HeroIntroSkeleton() {
  return (
    <div className="flex flex-col gap-7 pt-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-16 sm:h-20 lg:h-28 w-4/5 max-w-[700px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full max-w-xl" />
        <Skeleton className="h-4 w-4/5 max-w-xl" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch pt-3">
        <Skeleton className="h-14 flex-1" />
        <div className="flex items-stretch gap-3 sm:gap-2">
          <Skeleton className="h-14 w-32 sm:w-28" />
          <Skeleton className="h-14 w-32 sm:w-28" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-x-10 gap-y-6">
      <Skeleton className="aspect-[4/3] lg:min-h-[420px] rounded-none" />
      <div className="flex flex-col gap-4 lg:py-2">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-10 w-5/6" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-3 mt-2">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function EventGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <Skeleton className="aspect-[5/4] w-full rounded-3xl" />
          <Skeleton className="h-3 w-24 mt-2" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      ))}
    </div>
  );
}

export function BrowsePanelSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-x-10 gap-y-10">
      <div className="flex flex-col gap-5">
        <Skeleton className="h-3 w-24" />
        <div className="grid grid-cols-3 grid-rows-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-950 p-5 lg:p-6 min-h-[140px] flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-2 w-6" />
                <Skeleton className="h-4 w-4 rounded" />
              </div>
              <Skeleton className="h-5 w-2/3" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-14 w-full" />
        <div className="flex flex-col gap-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 py-4 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="size-9 rounded-none" />
                <Skeleton className="h-3 w-32" />
              </div>
              <Skeleton className="size-4 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QuickActionsFooterSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-neutral-950 p-7 lg:p-8 min-h-[220px] flex flex-col justify-between gap-8"
        >
          <div className="flex items-start justify-between">
            <Skeleton className="h-2 w-12" />
            <Skeleton className="size-5 rounded" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-2 w-16 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatsStripSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-3 w-24" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-950 p-6 lg:p-7 min-h-[140px] flex flex-col gap-4"
          >
            <Skeleton className="h-2 w-6" />
            <div className="flex flex-col gap-1.5 mt-auto">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-2 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromisesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-neutral-950 p-7 lg:p-9 min-h-[260px] flex flex-col justify-between gap-8"
        >
          <div className="flex items-start justify-between">
            <Skeleton className="h-2 w-12" />
            <Skeleton className="size-5 rounded" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-2 w-20 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function JoinBannerSkeleton() {
  return (
    <div className="relative overflow-hidden bg-neutral-900/90 dark:bg-neutral-100">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-x-12 gap-y-10 p-8 md:p-12 lg:p-16">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-3 w-28 bg-white/10 dark:bg-neutral-300" />
          <Skeleton className="h-12 sm:h-16 lg:h-20 w-4/5 bg-white/10 dark:bg-neutral-300" />
          <Skeleton className="h-12 sm:h-16 lg:h-20 w-3/5 bg-white/10 dark:bg-neutral-300" />
        </div>
        <div className="flex flex-col gap-7 lg:py-2">
          <div className="space-y-2 max-w-md">
            <Skeleton className="h-4 w-full bg-white/10 dark:bg-neutral-300" />
            <Skeleton className="h-4 w-5/6 bg-white/10 dark:bg-neutral-300" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Skeleton className="h-12 w-40 bg-white/10 dark:bg-neutral-300" />
            <Skeleton className="h-12 w-40 bg-white/10 dark:bg-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
