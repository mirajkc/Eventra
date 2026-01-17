
import Link from "next/link"
import { Button } from "../ui/button"
import NotificationDropdown from "./NotificationDropdown"
import ProfileDropDown from "./ProfileDropDown"
export default function AuthSection() {
  const isLoggedIn = true

  return (
    <>
      {!isLoggedIn ? (
        <Link href="/auth/login">
          <Button variant="default" size="default">
            Login
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <NotificationDropdown />

          {/* Profile Dropdown */}
          <ProfileDropDown />
        </div>
      )}
    </>
  )
}