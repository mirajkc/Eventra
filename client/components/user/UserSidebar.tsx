"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Key,
  LogOut,
  LayoutDashboard,
  Home,
  Calendar,
  Building,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Profile",
    href: "/user/profile",
    icon: User,
  },
  {
    title: "Security",
    href: "/user/security",
    icon: Shield,
  },
  {
    title: "Organization",
    href: "/user/organization",
    icon: Home,
  },
  {
    title: "Events",
    href: "/user/events",
    icon: Calendar,
  },
  {
    title: "Joined Organizations",
    href: "/user/organizations",
    icon: Building,
  },
];

export default function UserSidebar() {
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

        <button className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors w-full text-left">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </nav>
  );
}