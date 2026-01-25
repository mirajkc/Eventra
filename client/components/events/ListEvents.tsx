"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IEventPagination, IEventReponse } from "@/types/event.type";

import EventCard from "./EventCard";

export default function ListEvents() {
  const [pagination, setPagination] = useState<IEventPagination>({
    currentPage: 1,
    totalPages: 0,
    take: 9,
    totalDocs: 0,
    hasNextPage: false,
    hasPreviousPage: false
  }
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<Array<IEventReponse>>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.toString();

  useEffect(() => {
    fetchEvents();
  }, [pagination.currentPage,  searchQuery]);

  useEffect(() => {
    setPagination((prev: any) => ({
      ...prev,
      currentPage: 1,
    }));
  }, [searchQuery]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.currentPage.toString(),
        limit: pagination.take.toString(),
      });

      const slug = searchParams.get("slug");
      if (slug) params.set("slug", slug);

      const capacity = searchParams.get("capacity");
      if (capacity) params.set("capacity", capacity);

      const status = searchParams.get("status");
      if (status) params.set("status", status);

      const category = searchParams.get("category");
      if (category) params.set("category", category);

      const createdAt = searchParams.get("createdAt");
      if (createdAt) params.set("createdAt", createdAt);

      const updatedAt = searchParams.get("updatedAt");
      if (updatedAt) params.set("updatedAt", updatedAt);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/event/fetchallevents?${params}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.status !== 200){
        setEvent([])
        return
      }
      const result = await response.json();
      setEvent(result.data || []);
      setPagination(result.pagination);
    } catch (error: any) {
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination((prev: any) => ({
        ...prev,
        currentPage: prev.currentPage ++,
      }));
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPreviousPage) {
      setPagination((prev: any) => ({
        ...prev,
        currentPage: prev.currentPage --,
      }));
    }
  };

  if (loading && event.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Spinner className="size-8" />
      </div>
    );
  }


  if(event.length < 1)  { 
    return (
      <div className="flex w-full justify-center items-center mt-4">
        <p>No events found. </p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
       {event.map((item) => (
          <EventCard key={item.id} event={item} /> ))}
      </div>

      {pagination?.totalPages > 1 && (
        <div className="flex items-center justify-center">
          <div>
            <DropdownMenuSeparator />
            <div className="px-2 py-2 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={!pagination.hasPreviousPage || loading}
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground px-2">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={!pagination.hasNextPage || loading}
                className="flex-1"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
