"use client";

import { Navigation } from "lucide-react";

interface GoogleMapsProps {
  latitude: number | undefined;
  longitude: number | undefined;
  address?: string;
}

export default function GoogleMaps({ latitude, longitude, address }: GoogleMapsProps) {
  if (latitude === undefined || longitude === undefined) return null;

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duratidon-1000">
      <div className="group relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/5 bg-neutral-100 dark:bg-neutral-900 transition-all duration-500 hover:shadow-primary/5 hover:border-primary/20">
        <iframe
          title="Google Maps"
          src={mapUrl}
          className="w-full h-full border-0 grayscale-[0.4] contrast-[1.1] brightness-[0.95] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02] group-hover:brightness-100"
          loading="lazy"
          allowFullScreen
        />

        {/* Floating Direction Link */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full shadow-lg text-xs font-black uppercase tracking-wider hover:bg-white dark:hover:bg-black transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-primary" />
            <span>Open in Maps</span>
          </a>
        </div>
      </div>

      {address && (
        <div className="flex items-center gap-2 px-2">
          <div className="size-2 rounded-full bg-primary animate-pulse" />
          <p className="text-sm font-bold text-neutral-500 dark:text-neutral-400 truncate">
            {address}
          </p>
        </div>
      )}
    </div>
  );
}