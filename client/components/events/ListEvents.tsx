'use client';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Skeleton } from '../ui/skeleton';
import { motion } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { DropdownMenuSeparator } from '../ui/dropdown-menu';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { IEventPagination, IEventReponse } from '@/types/event.type';

import EventCard from './EventCard';
import { useAppSelector } from '@/state/hooks';
import { useTranslation } from 'react-i18next';

function EventCardSkeleton() {
  return (
    <div className='h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/80 shadow-sm'>
      <div className='h-[180px] w-full p-2.5 pb-0'>
        <Skeleton className='w-full h-full rounded-2xl' />
      </div>
      <div className='p-4 flex flex-col flex-grow gap-2'>
        <Skeleton className='h-3 w-32' />
        <Skeleton className='h-5 w-full' />
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-3 w-2/3 mt-1' />
        <div className='mt-auto flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50'>
          <div className='flex items-center gap-3 flex-1 pr-4'>
            <Skeleton className='h-1.5 w-24 rounded-full' />
            <Skeleton className='h-3 w-8' />
          </div>
          <Skeleton className='w-8 h-8 rounded-full' />
        </div>
      </div>
    </div>
  );
}

export function ListEventsSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
      {Array.from({ length: count }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function ListEvents() {
  const { t } = useTranslation();

  const search = useAppSelector((state) => state.search.search);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const capacity = searchParams.get('capacity') ?? '';
  const status = searchParams.get('status') ?? '';
  const category = searchParams.get('category') ?? '';
  const createdAt = searchParams.get('createdAt') ?? '';
  const updatedAt = searchParams.get('updatedAt') ?? '';

  const queryParams = useMemo(() => {
    return {
      page: currentPage,
      limit: 9,
      slug: search,
      capacity,
      status,
      category,
      createdAt,
      updatedAt,
    };
  }, [
    currentPage,
    search,
    capacity,
    status,
    category,
    createdAt,
    updatedAt,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, capacity, status, category, createdAt, updatedAt]);

    const { data, isLoading, error } = useQuery({
    queryKey: ['events', queryParams],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value) params.set(key, String(value));
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/event/fetchallevents?${params}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } },
      );

      if (!response.ok) throw new Error('Failed to fetch events');
      return response.json();
    },
    staleTime: 1000 * 60 * 3, 
    retry: 1,
  });

  const event: IEventReponse[] = data?.data || [];
  const pagination: IEventPagination = data?.pagination || {
    currentPage: 1,
    totalPages: 0,
    take: 9,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  useEffect(() => {
    if (error) {
      toast.error(
        error.message ||
          'Error occured while fetching events please try again later. ',
      );
    }
  }, [error]);

  const handleNextPage = () => {
    if (pagination.hasNextPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading && event.length === 0) {
    return <ListEventsSkeleton />;
  }

  if (event.length < 1) {
    return (
      <div className='flex w-full justify-center items-center mt-4'>
        <p>{t('events.list.noEvents')}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {event.map((item) => (
          <EventCard key={item.id} event={item} />
        ))}
      </div>

      {pagination?.totalPages > 1 && (
        <div className='flex items-center justify-center'>
          <div>
            <DropdownMenuSeparator />
            <div className='px-2 py-2 flex items-center justify-between gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={handlePrevPage}
                disabled={!pagination.hasPreviousPage || isLoading}
                className='flex-1'
              >
                <ChevronLeft className='h-4 w-4 mr-1' />
                {t('events.list.previous')}
              </Button>

              <span className='text-sm text-muted-foreground px-2'>
                {t('events.list.page')} {pagination.currentPage}{' '}
                {t('events.list.of')} {pagination.totalPages}
              </span>

              <Button
                variant='outline'
                size='sm'
                onClick={handleNextPage}
                disabled={!pagination.hasNextPage || isLoading}
                className='flex-1'
              >
                {t('events.list.next')}
                <ChevronRight className='h-4 w-4 ml-1' />
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
