"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="w-full h-screen bg-transparent relative z-10 pt-24 md:pt-32 overflow-hidden">
      <div className="max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12 flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-16 lg:mb-20">
          <div className="flex-1 w-full flex flex-col items-start max-w-xl space-y-4">
            <Skeleton className="h-12 lg:h-14 w-3/4" />
            <Skeleton className="h-12 lg:h-14 w-5/6" />
            <Skeleton className="h-12 lg:h-14 w-2/3" />
            <div className="pt-4 space-y-2 w-full max-w-sm">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="flex-1 w-full flex items-center justify-end max-w-lg">
            <Skeleton className="aspect-square w-full max-w-[420px] rounded-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full border-t border-gray-100 dark:border-gray-800/60 pt-8 pb-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-start p-2 space-y-3">
              <Skeleton className="w-10 h-10 rounded-xl" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-full max-w-[250px]" />
              <Skeleton className="h-3 w-4/5 max-w-[250px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepSkeleton({ lift = "" }: { lift?: string }) {
  return (
    <li className="relative flex flex-col items-center">
      <div className={`w-full flex justify-center ${lift}`}>
        <Skeleton className="w-full max-w-[240px] aspect-[5/4] rounded-2xl" />
      </div>
      <div className={`mt-7 lg:mt-10 text-center px-2 max-w-[240px] w-full space-y-2 ${lift}`}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Skeleton className="h-2 w-6" />
          <Skeleton className="h-px w-4" />
        </div>
        <Skeleton className="h-6 w-32 mx-auto" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6 mx-auto" />
      </div>
    </li>
  );
}

export function HowItWorksSkeleton() {
  const lifts = ["lg:translate-y-6", "lg:-translate-y-3", "lg:translate-y-4", "lg:-translate-y-10"];
  return (
    <section className="relative w-full py-20 lg:py-28">
      <div className="relative text-center max-w-2xl mx-auto px-6 mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-3 mb-7">
          <Skeleton className="h-px w-8" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-px w-8" />
        </div>
        <Skeleton className="h-16 sm:h-20 lg:h-24 w-3/4 mx-auto" />
        <div className="mt-6 space-y-2 max-w-xl mx-auto">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-4 gap-y-20 lg:gap-y-0">
          {lifts.map((lift, i) => (
            <StepSkeleton key={i} lift={lift} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className="relative w-full py-20 lg:py-28">
      <div className="relative max-w-2xl mx-auto px-6 text-center mb-14 lg:mb-20">
        <Skeleton className="h-7 w-28 rounded-full mx-auto mb-7" />
        <Skeleton className="h-12 sm:h-14 lg:h-16 w-4/5 mx-auto" />
        <div className="mt-6 space-y-2 max-w-xl mx-auto">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7"
            >
              <Skeleton className="h-44 sm:h-48 w-full rounded-xl mb-6" />
              <Skeleton className="h-6 w-2/3 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCardSkeleton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "lg" | "md" | "sm";
}) {
  const linesByVariant = {
    lg: ["w-full", "w-11/12", "w-5/6", "w-4/5", "w-3/4"],
    md: ["w-full", "w-11/12", "w-3/4"],
    sm: ["w-full", "w-5/6"],
  } as const;
  const lines = linesByVariant[size];
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 flex flex-col gap-6 h-full ${className}`}
    >
      <div className="flex-1 space-y-3">
        {lines.map((w, i) => (
          <Skeleton key={i} className={`h-4 ${w}`} />
        ))}
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-3">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-40 max-w-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="relative w-full py-20 lg:py-28">
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <div className="inline-flex items-center gap-3">
            <Skeleton className="h-px w-8" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-px w-8" />
          </div>
          <Skeleton className="h-12 sm:h-14 lg:h-16 w-3/4 mx-auto" />
          <div className="space-y-2 max-w-xl mx-auto">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <TestimonialCardSkeleton size="lg" className="sm:col-span-2 lg:row-span-2" />
          <TestimonialCardSkeleton size="md" className="md:col-span-2" />
          <TestimonialCardSkeleton size="sm" />
          <TestimonialCardSkeleton size="sm" />
        </div>
      </div>
    </section>
  );
}

export function LargeTextSkeleton() {
  return <section className="min-h-screen w-full" />;
}
