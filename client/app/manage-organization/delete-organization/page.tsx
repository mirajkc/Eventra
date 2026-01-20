"use client"
import CreateOrganizationCard from "@/components/organization/CreateOrganizationCard";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import getAccessToken from "@/lib/access.token";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getLoggedInUserOrganization } from "@/state/slices/organization.slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Logout() {
  const dispatch = useAppDispatch()
  const hasOrganization = useAppSelector((state) => state.organization.organizationDetails?.hasOrganization)
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  useEffect(() => { dispatch(getLoggedInUserOrganization()) }, [dispatch])

  const handleDelete = async () => {
    try {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        toast.error("You are not authorized to perform this action.");
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/delete-organization`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete organization");
      }

      toast.success("Organization deleted successfully");
      router.replace("/");

    } catch (error) {
      toast.error("Error occured while deleting the organization plese try again later. ")
    } finally {
      setLoading(false)
    }
  };

  const handleCancel = () => {
    router.replace("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen" >
        <Spinner />
      </div>
    )
  }

  if (!hasOrganization) {
    return <CreateOrganizationCard />
  }

  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-md min-h-[60vh] p-4 dark:bg-neutral-900" >
      <div className="flex flex-col gap-2 h-1/4">
        <h1 className="text-2xl font-bold tracking-tight">Delete Organization</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Delete your organization
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center  w-[30vw] h-3/4 h-[40vh] " >
        <div className="flex flex-col justify-center items-center w-full h-full " >
          <h1 className="text-2xl font-bold tracking-tight">Are you sure you want to delete your organization?</h1>
          <p className="text-muted-foreground text-sm mt-2">
            This action cannot be undone. All data associated with this organization will be permanently deleted.
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <Button onClick={handleDelete} className="hover:bg-red-700 transition hover:scale-105 " variant="destructive">Delete</Button>
            <Button onClick={handleCancel} className="hover:bg-blue-700 transition hover:scale-105 " >Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}