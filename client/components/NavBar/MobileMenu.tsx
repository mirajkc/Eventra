"use client";

import Link from "next/link";
import { navigationLinks } from "./DesktopNavigation";
import SearchBar from "./SearchBar";
import AuthSection from "./AuthSection";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-background border-b border-border dark:bg-dark md:hidden flex flex-col p-4 gap-4 shadow-xl z-40">
      <div className="flex flex-col gap-4">
        <div className="h-px bg-border w-full" />

        <div className="flex justify-start px-2">
          <AuthSection />
        </div>
        <div className="h-px bg-border w-full" />

        <SearchBar />

        <div className="flex flex-col gap-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="w-full"
            >
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-base font-medium"
              >
                {link.icon}
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
