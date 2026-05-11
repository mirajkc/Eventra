"use client";

import { useEffect } from "react";
import LoggedInHome from "@/components/home/LoggedInHome";
import NonLoggedInHome from "@/components/home/NonLoggedInHome";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getUserDetails } from "@/state/slices/auth.slice";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { userDetails, loading } = useAppSelector((state) => state.authSlice);

  useEffect(() => {
    // We always check for user details on load to ensure state is fresh
    dispatch(getUserDetails());
  }, [dispatch]);

  if (loading && !userDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Spinner className="size-5" />
        </div>
      </div>
    );
  }

  return (
    <main className="mt-12 min-h-screen">
      {userDetails ? (
        <LoggedInHome userDetails={userDetails} />
      ) : (
        <NonLoggedInHome />
      )}
    </main>
  );
}