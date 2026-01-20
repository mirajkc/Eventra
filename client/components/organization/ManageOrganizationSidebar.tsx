"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LogOut,
  Building,
  Settings,
  Settings2,
  HandshakeIcon,
  UserX,
} from "lucide-react";

const sidebarItems = [
  {
    title: "My Organization",
    href: "/manage-organization/organization",
    icon: Building,
  },
  {
    title: "Update Organization",
    href: "/manage-organization/update-organization",
    icon: Settings,
  },
  {
    title: "Update Member Role",
    href: "/manage-organization/update-member-role",
    icon: Settings2,
  },
  {
    title: "Kick Member",
    href: "/manage-organization/kick-member",
    icon: UserX,
  },
  {
    title: "Joined Organizations",
    href: "/manage-organization/joined-organizations",
    icon: HandshakeIcon,
  },
];

export default function ManageOrganizationSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2 w-full">
      <div className="bg-background rounded-lg border shadow-sm p-2 flex flex-col gap-1">
        <div className="hidden md:block mb-4 px-4">
          <h2 className="text-xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground text-sm">
            Manage your account settings and Informations
          </p>
        </div>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}

        <div className="h-px bg-border my-1" />
        <Link
          href={"/manage-organization/delete-organization"}
          className={
            "flex items-center text-red-500 gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent "}
        >
          <LogOut className="h-4 w-4" />
          Delete Organization
        </Link>
      </div>
    </nav>
  );
}