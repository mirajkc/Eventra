import { Building2, Calendar, Home } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

import { useTranslation } from "react-i18next";

export const getNavigationLinks = (t: any) => [
  {
    label: t("navbar.home"),
    href: "/home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: t("navbar.events"),
    href: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    label: t("navbar.organizations"),
    href: "/organizations",
    icon: <Building2 className="h-4 w-4" />,
  },
]

export default function DesktopNavigation() {
  const { t } = useTranslation();
  const navigationLinks = getNavigationLinks(t);

  return (
    <>
      {navigationLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant="ghost"
            size="default"
            className="gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10 hover:text-primary dark:hover:text-white dark:hover:bg-primary/20 active:scale-95 hover:cursor-pointer"
          >
            {link.icon}
            {link.label}
          </Button>
        </Link>
      ))}
    </>
  )
}