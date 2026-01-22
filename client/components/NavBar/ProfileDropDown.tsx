
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Building, Calendar1, Settings, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppSelector } from "@/state/hooks";
import Image from "next/image";

export const userMenuItems = [

  {
    label: "Organization Settings",
    href: "/manage-organization/organization",
    icon: Building,
  },
  {
    label: "Events",
    href: "/user/profile",
    icon: Calendar1,
  },
  {
    label: "Settings",
    href: "/user/profile",
    icon: Settings,
  },
]

export default function ProfileDropDown() {
  const userDetails = useAppSelector((state) => state.authSlice.userDetails)
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="h-8 w-8 rounded-full   flex items-center justify-center">
            {
              userDetails?.image ? (
                <Image src={userDetails.image} width={20} height={20} alt="Profile" className="size-8 rounded-full " />
              ) : (
                <User className="h-5 w-5 text-primary" />
              )
            }
          </div>
          <span className="sr-only">Profile menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium">{userDetails?.name}</p>
          <p className="text-xs text-muted-foreground">{userDetails?.email}</p>
        </div>
        <DropdownMenuSeparator />
        {userMenuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link href={item.href} className="cursor-pointer flex items-center">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}