import { Skeleton } from "@/components/ui/skeleton";

export function OrganizationHeroSkeleton() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50">
      <div className="relative h-48 w-full md:h-64 lg:h-80">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-1 left-1 h-32 w-32 shrink-0 rounded-full border-4 border-background bg-white dark:bg-neutral-900 md:h-44 md:w-44">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
      </div>
      <div className="px-6 pb-10 md:px-12">
        <div className="flex flex-col items-center gap-6 mt-4 md:flex-row md:items-end">
          <div className="flex w-full flex-col gap-4 pt-4 md:pt-0">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3 w-full max-w-md text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Skeleton className="h-10 w-48" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <div className="flex flex-col justify-end w-full md:flex-row gap-2">
                 <Skeleton className="h-12 w-full md:w-44 rounded-2xl" />
                 <Skeleton className="h-12 w-full md:w-44 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-100 pt-8 dark:border-neutral-800/50">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-900/50">
               <Skeleton className="h-5 w-full" />
               <Skeleton className="h-5 w-full" />
               <Skeleton className="h-5 w-full" />
               <Skeleton className="h-9 w-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrganizationActivitiesSkeleton() {
  return (
    <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]">
      <div className="space-y-2">
        <Skeleton className="h-7 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 min-h-[50vh] mt-8">
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
          <Skeleton className="h-6 w-40 mb-4" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 border dark:border-gray-800 shadow-sm rounded-2xl p-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
           <Skeleton className="h-6 w-40 mb-4" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrganizationEventsSkeleton() {
  return (
    <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]">
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-80" />
      </div>
      <div className="flex-1 overflow-auto mt-6 space-y-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border rounded-2xl bg-white/40 dark:bg-neutral-900/40">
             <Skeleton className="h-48 w-full md:w-72 rounded-xl" />
             <div className="flex flex-1 flex-col gap-4">
               <Skeleton className="h-6 w-3/4" />
               <Skeleton className="h-4 w-full" />
               <Skeleton className="h-4 w-2/3" />
               <div className="mt-auto flex gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded" />
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CheckOtherOrganizationsSkeleton() {
  return (
    <div className="flex flex-col p-4 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50 min-h-[60vh]">
      <div className="space-y-2">
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-4 w-72" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/80 shadow-sm min-h-[300px]">
            <Skeleton className="h-40 w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OrganizationPageSkeleton() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl md:min-w-7xl mx-auto w-full">
      <OrganizationHeroSkeleton />
      <OrganizationActivitiesSkeleton />
      <OrganizationEventsSkeleton />
      <CheckOtherOrganizationsSkeleton />
    </div>
  )
}
