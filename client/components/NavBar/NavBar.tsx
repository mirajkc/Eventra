
"use client";

import Link from "next/link"
import { Menu, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeSwitch"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import AuthSection from "./AuthSection"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";


export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 rounded-sm z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-black dark:border-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/home"
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

            <LanguageSwitcher />
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Auth Section */}
            <AuthSection />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  )
}
