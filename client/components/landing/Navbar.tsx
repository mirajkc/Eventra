"use client";

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { motion } from "motion/react";

export const getMenuLinks = (t: any) => [
  { href: "/home", label: t("navbar.home") || "Home" },
  { href: "/events", label: t("navbar.events") || "Events" },
  { href: "/organizations", label: t("navbar.organizations") || "Organizations" },
];

export default function LandingNavbar() {
  const { t, i18n } = useTranslation();
  const menuLinks = getMenuLinks(t);
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50 pt-6 px-4 md:px-8 bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex justify-between w-full max-w-[1440px] mx-auto items-center text-black dark:text-white relative"
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-3 cursor-pointer z-10 lg:w-[200px]  justify-center">
          <h1 className="text-xl font-extrabold tracking-[0.2em] uppercase text-center">
            Eventra
          </h1>
        </div>


        {/* Right - Actions */}
        <div className="hidden md:flex gap-6 justify-end items-center z-10 lg:w-[350px]">
          {/* Toggles */}
          <div className="flex items-center gap-4 border-r border-gray-200 dark:border-gray-800 pr-5">
            <button
              onClick={toggleLanguage}
              className="text-[11px] font-bold tracking-widest uppercase hover:text-gray-500 transition-colors w-8 text-center"
            >
              {mounted && i18n.language === "ne" ? "NP" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="text-[11px] font-bold tracking-widest uppercase hover:text-gray-500 transition-colors w-12 text-center"
            >
              {mounted && theme === "dark" ? "DARK" : "LIGHT"}
            </button>
          </div>

          <Link href="/home">
            <Button size="sm" className="rounded-full px-6 py-0 h-10 text-[11px] font-bold tracking-widest uppercase bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all shadow-md active:scale-95 hover:cursor-pointer">
              {t("navbar.getStarted", "Get Started")}
            </Button>
          </Link>
        </div>

        {/* mobile menu */}
        <div className="flex lg:hidden gap-4 items-center">
          <button
            onClick={toggleLanguage}
            className="text-[11px] font-bold tracking-widest uppercase w-8 text-center"
          >
            {mounted && i18n.language === "ne" ? "NP" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="text-[11px] font-bold tracking-widest uppercase w-12 text-center"
          >
            {mounted && theme === "dark" ? "DARK" : "LIGHT"}
          </button>
          <MobileMenu />
        </div>
      </motion.div>
    </nav>
  )
}