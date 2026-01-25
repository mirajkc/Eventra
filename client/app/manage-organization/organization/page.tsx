"use client";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getLoggedInUserOrganization } from "@/state/slices/organization.slice";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";
import CreateOrganizationCard from "@/components/organization/CreateOrganizationCard";
import OrganizationDetails from "@/components/organization/OrganizationDetails";


export default function MyOrganization() {
  const dispatch = useAppDispatch();
  const organizationDetails = useAppSelector(
    (state) => state.organization.organizationDetails
  );
  const loading = useAppSelector((state) => state.organization.loading);

  useEffect(() => {
    dispatch(getLoggedInUserOrganization());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full fade-in animate-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization</h1>
          <p className="text-muted-foreground mt-1">
            Manage your organization details and settings
          </p>
        </div>
      </div>

      <Separator />

      {!organizationDetails?.hasOrganization ? (
        <CreateOrganizationCard />
      ) : (
        <OrganizationDetails organizationDetails={organizationDetails} />
      )}
    </div>
  );
}