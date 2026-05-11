'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { ISingleEvent } from '@/types/event.type';
import getAccessToken from '@/lib/access.token';
import { useAppSelector } from '@/state/hooks';

import EventBanner from './hero/EventBanner';
import EventMetaStrip from './hero/EventMetaStrip';
import EventAbout from './hero/EventAbout';
import EventVenue from './hero/EventVenue';
import EventTerms from './hero/EventTerms';
import EventInfoCard from './hero/EventInfoCard';
import EventCreator from './hero/EventCreator';
import { EventStatus } from './hero/StatusBadge';

interface EventHeroProps {
  event: ISingleEvent;
}

function deriveStatus(event: ISingleEvent): EventStatus {
  if (event.status === 'CANCELLED') return 'CANCELLED';
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  if (end < now) return 'COMPLETED';
  if (start <= now && end >= now) return 'ONGOING';
  return 'UPCOMING';
}

export default function EventHero({ event }: EventHeroProps) {
  const { t } = useTranslation();
  const loggedInUser = useAppSelector((state) => state.authSlice.userDetails);
  const [leaving, setLeaving] = useState(false);
  const status = deriveStatus(event);

  const handleLeaveEvent = async () => {
    try {
      setLeaving(true);
      if (!loggedInUser?.id) {
        toast.error(t('events.single.loginToLeave'));
        return;
      }
      const accessToken = await getAccessToken();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/event/participant/remove-registration/${event.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const result = await response.json();
      if (response.status !== 200) {
        toast.error(result.message || t('events.single.failedToLeave'));
        return;
      }
      toast.success(t('events.single.leftSuccessfully'));
      window.location.reload();
    } catch {
      toast.error(t('events.single.anErrorOccurred'));
    } finally {
      setLeaving(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-10">
      <div className="mx-auto max-w-7xl">
        <EventBanner event={event} status={status} />
        <EventMetaStrip event={event} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <EventAbout description={event.description} />
            <EventVenue event={event} />
            <EventTerms />
          </div>

          <div>
            <EventInfoCard
              event={event}
              mode="leave"
              onAction={handleLeaveEvent}
              loading={leaving}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
