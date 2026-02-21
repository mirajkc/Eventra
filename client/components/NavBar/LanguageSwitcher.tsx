"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Globe className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 border-border bg-background/95 backdrop-blur shadow-md">
                <DropdownMenuItem
                    onClick={() => changeLanguage("en")}
                    className={`flex items-center justify-between cursor-pointer focus:bg-accent focus:text-accent-foreground ${i18n.language === "en" ? "bg-accent/50 text-accent-foreground font-medium" : ""
                        }`}
                >
                    English
                    {i18n.language === "en" && <Check className="h-4 w-4 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => changeLanguage("ne")}
                    className={`flex items-center justify-between cursor-pointer focus:bg-accent focus:text-accent-foreground ${i18n.language === "ne" ? "bg-accent/50 text-accent-foreground font-medium" : ""
                        }`}
                >
                    Nepali
                    {i18n.language === "ne" && <Check className="h-4 w-4 text-primary" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}