"use client";

import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { IOrganizationDetails, IOrganizationsPagination } from "@/types/organization.types";
import { motion } from "motion/react";
import OrganizationCard from "./OrganizationCard";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ListOrganizations() {
  const [pagination, setPagination] = useState<IOrganizationsPagination>({
    currentPage: 1,
    take: 9,
    totalPages: 0,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [organizations, setOrganizations] = useState<IOrganizationDetails[]>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.toString();

  useEffect(() => {
    fetchOrganizations();
  }, [pagination.currentPage, searchQuery]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
    }));
  }, [searchQuery]);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.currentPage.toString(),
        take: pagination.take.toString(),
      });

      const premium = searchParams.get("isPremium") === "true";
      if (premium) params.set("premium", "true");

      const search = searchParams.get("search");
      if (search) params.set("name", search);

      const type = searchParams.get("type");
      if (type) params.set("type", type);

      const createdAt = searchParams.get("createdAt");
      if (createdAt) params.set("createdAt", createdAt);

      const updatedAt = searchParams.get("updatedAt");
      if (updatedAt) params.set("updatedAt", updatedAt);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-organizations?${params}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error("Failed to fetch organizations");
        return;
      }
      setOrganizations(result.data || []);
      setPagination(result.pagination);
    } catch (error: any) {
      toast.error("Failed to fetch organizations");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));

    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));

    }
  };

  if (loading && organizations.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Spinner className="size-8" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {organizations.length === 0 && !loading ? (
          <p className="col-span-full text-center text-muted-foreground">
            No organizations found.
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
                disabled={!pagination.hasPrevPage || loading}
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
