
import Link from "next/link"
import { Menu, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeSwitch"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import AuthSection from "./AuthSection"


export default function NavBar() {


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Calendar className="h-6 w-6" />
            <span className="hidden sm:inline">Eventra</span>
          </Link>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation Links */}
            <DesktopNavigation />

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Auth Section */}
            <AuthSection />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
