"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  User,
  Shield,
  LogOut,
  Delete,
  Trash
} from "lucide-react";
import { useTranslation } from "react-i18next";

const getSidebarItems = (t: any) => [
  {
    title: t("user.sidebar.profile"),
    href: "/user/profile",
    icon: User,
  },
  {
    title: t("user.sidebar.security"),
    href: "/user/security",
    icon: Shield,
  }
];

export default function UserSidebar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const sidebarItems = getSidebarItems(t);

  return (
    <nav className="flex flex-col space-y-2 w-full">
      <div className="bg-background rounded-lg border shadow-sm p-2 flex flex-col gap-1">
        <div className="hidden md:block mb-4 px-4">
          <h2 className="text-xl font-bold tracking-tight">{t("user.sidebar.title")}</h2>
          <p className="text-muted-foreground text-sm">
            {t("user.sidebar.subtitle")}
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
          href={"/user/logout"}
          className={
            "flex items-center text-red-500 gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent "}
        >
          <LogOut className="h-4 w-4" />
          {t("user.sidebar.logout")}
        </Link>
      </div>
    </nav>
  );
}