"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Calendar1,
  Calendar
} from "lucide-react";

const sidebarItems = [
  {
    title: "Created Events",
    href: "/manage-events/created-events",
    icon: Calendar,
  },
  {
    title: "Participated Events",
    href: "/manage-events/participated-events",
    icon: Calendar1,
  },
  
];

export default function ManageEventSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2 w-full">
      <div className="bg-background rounded-lg border shadow-sm p-2 flex flex-col gap-1">
        <div className="hidden md:block mb-4 px-4">
          <h2 className="text-xl font-bold tracking-tight">Event Settings</h2>
          <p className="text-muted-foreground text-sm">
            Manage your Event settings and Informations
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
      </div>
    </nav>
  );
}