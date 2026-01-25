"use client"
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce"
import { useState } from "react";

export function EventSearch({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}) {

  const [localValue, setLocalValue] = useState(searchTerm);
  const debouncedSetSearch = useDebouncedCallback((value: string) => {
    setSearchTerm(value);
  }, 400);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Search Events
      </label>
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500" />
        <Input
          placeholder="Search events..."
          className="pl-9 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
          value={localValue}
          onChange={(e) => {
            setLocalValue(e.target.value);
            debouncedSetSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
