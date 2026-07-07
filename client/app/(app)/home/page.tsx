"use client";

import { useEffect } from "react";
import LoggedInHome from "@/components/home/LoggedInHome";
import NonLoggedInHome from "@/components/home/NonLoggedInHome";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getUserDetails } from "@/state/slices/auth.slice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { userDetails, loading } = useAppSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  if (loading && !userDetails) {
    return (
      <main className="mt-12 min-h-screen">
        <NonLoggedInHome />
      </main>
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