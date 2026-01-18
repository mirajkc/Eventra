"use client"
import { useAppSelector } from "@/state/hooks";
import { Form } from "react-hook-form";
import { useState } from "react";
import { IUserDetails } from "@/types/user.types";
export default function UpdateUserPage() {
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const [updatedUser, setUpdatedUser] = useState<IUserDetails>()
  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-lg p-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-2xl font-bold tracking-tight">Update User</h1>
      <p className="text-muted-foreground text-sm">
        Update your account settings and Informations
      </p>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
      <div>
      </div>
    </div>
  );
}