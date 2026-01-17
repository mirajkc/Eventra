import Link from "next/link";
import { ModeToggle } from "../ModeSwitch";
import { MobileMenu } from "./MobileMenu";

export const menuLinks = [
  {
    href: "/home",
    label: "Home",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/organizations",
    label: "Organizations",
  },
]

export default function LandingNavbar() {
  return (
    <nav className="sticky top-2 z-50">
      <div className="flex justify-between max-w-7xl mx-auto items-center mt-4 text-black dark:text-white bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg shadow-sm" >
        <div>
          <h1 className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer" >Eventra</h1>
        </div>
        <div className="hidden md:block flex items-center" >
          <div className="flex items-center gap-4" >
            {menuLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="relative px-3 py-2 rounded-md font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
        <div className="hidden md:block md:flex gap-4 justify-center items-center" >
          <div>
            <ModeToggle />
          </div>
          <div>
            <Link href="/auth/login" className="bg-blue-400  dark:bg-blue-600 px-4 py-2 rounded-md font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-200 hover:after:w-full" >Get Started</Link>
          </div>
        </div>

        {/* mobile menu */}
        <div className="block md:hidden flex gap-2" >
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}