"use client";
import Link from "next/link"
import { Button } from "../ui/button"
import NotificationDropdown from "./NotificationDropdown"
import ProfileDropDown from "./ProfileDropDown"
import { useAppSelector } from "@/state/hooks"
import { useEffect, useState } from "react"
import { IUserDetails } from "@/types/user.types";
import { useTranslation } from "react-i18next";

export default function AuthSection() {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const userDetails: IUserDetails | null = useAppSelector((state) => state.authSlice.userDetails)
  useEffect(() => {
    if (userDetails?.id) {
      setIsLoggedIn(true)
    }
  }, [
    userDetails?.id
  ])

  return (
    <>
      {!isLoggedIn ? (
        <Link href="/auth/login">
          <Button variant="default" size="default">
            {t("navbar.login")}
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-2 ">
          {/* Notifications */}
          <NotificationDropdown userId={userDetails?.id || ""} />

          {/* Profile Dropdown */}
          <ProfileDropDown />
        </div>
      )}
    </>
  )
}