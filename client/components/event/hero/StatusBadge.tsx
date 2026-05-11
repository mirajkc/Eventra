'use client';

import { cn } from '@/lib/utils';

export type EventStatus = 'CANCELLED' | 'COMPLETED' | 'ONGOING' | 'UPCOMING';

const styles: Record<EventStatus, { ring: string; dot: string; label: string }> = {
  ONGOING: {
    ring: 'ring-emerald-300/60 bg-emerald-500/15 text-emerald-50',
    dot: 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.25)]',
    label: 'Live',
  },
  UPCOMING: {
    ring: 'ring-white/30 bg-white/15 text-white',
    dot: 'bg-white',
    label: 'Upcoming',
  },
  COMPLETED: {
    ring: 'ring-white/20 bg-black/30 text-white/85',
    dot: 'bg-white/60',
    label: 'Concluded',
  },
  CANCELLED: {
    ring: 'ring-rose-300/40 bg-rose-500/15 text-rose-50',
    dot: 'bg-rose-400',
    label: 'Cancelled',
  },
};

export default function StatusBadge({ status }: { status: EventStatus }) {
  const s = styles[status];
  const isLive = status === 'ONGOING';

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md ring-1 text-[11px] font-semibold uppercase tracking-[0.16em]',
        s.ring,
      )}
    >
      <span className="relative flex size-2">
        {isLive && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
        )}
        <span className={cn('relative inline-flex rounded-full size-2', s.dot)} />
      </span>
      {s.label}
    </div>
  );
}
