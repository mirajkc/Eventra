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
  Coins,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const getSidebarItems = (t: any) => [
  {
    title: t("manageOrganization.sidebar.myOrganization"),
    href: "/manage-organization/organization",
    icon: Building,
  },
  {
    title: t("manageOrganization.sidebar.updateOrganization"),
    href: "/manage-organization/update-organization",
    icon: Settings,
  },
  {
    title: t("manageOrganization.sidebar.updateMemberRole"),
    href: "/manage-organization/update-member-role",
    icon: Settings2,
  },
  {
    title: t("manageOrganization.sidebar.joinedOrganizations"),
    href: "/manage-organization/joined-organizations",
    icon: HandshakeIcon,
  },
  {
    title: t("manageOrganization.sidebar.creditsDonated"),
    href: "/manage-organization/credits-donated",
    icon: Coins,
  },
];

export default function ManageOrganizationSidebar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const sidebarItems = getSidebarItems(t);

  return (
    <nav className="flex flex-col space-y-2 w-full">
      <div className="bg-background rounded-lg border shadow-sm p-2 flex flex-col gap-1">
        <div className="hidden md:block mb-4 px-4">
          <h2 className="text-xl font-bold tracking-tight">{t("manageOrganization.sidebar.title")}</h2>
          <p className="text-muted-foreground text-sm">
            {t("manageOrganization.sidebar.subtitle")}
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
          {t("manageOrganization.sidebar.deleteOrganization")}
        </Link>
      </div>
    </nav>
  );
}