import { Building2, Calendar, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const navigationLinks = [
  {
    label: "Events",
    href: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    label: "Organizations",
    href: "/organizations",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    label: "About Us",
    href: "/about",
    icon: <User className="h-4 w-4" />,
  },
]

export default function DesktopNavigation() {
  return (
    <>
      {navigationLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant="ghost"
            size="default"
            className="gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10 hover:text-primary dark:hover:text-white dark:hover:bg-primary/20 dark:hover:text-white dark:hover:bg-primary/20 active:scale-95"
          >
            {link.icon}
            {link.label}
          </Button>
        </Link>
      ))}
    </>
  )
}