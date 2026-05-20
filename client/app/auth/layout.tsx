"use client";

import React, { createContext, useContext, useState } from "react";
import CartoonCharacters from "@/components/auth/CartoonCharacters";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/NavBar/LanguageSwitcher";
import { ModeToggle } from "@/components/ModeSwitch";
import { useTranslation } from "react-i18next";

// Context to share visual state between inputs and characters
interface AuthVisualContextType {
  isTyping: boolean;
  setIsTyping: (v: boolean) => void;
  passwordVal: string;
  setPasswordVal: (v: string) => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
}

const AuthVisualContext = createContext<AuthVisualContextType | undefined>(undefined);

export function useAuthVisual() {
  const context = useContext(AuthVisualContext);
  if (!context) {
    throw new Error("useAuthVisual must be used within an AuthVisualProvider");
  }
  return context;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();
  const router = useRouter();
  const [isTyping, setIsTyping] = useState(false);
  const [passwordVal, setPasswordVal] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthVisualContext.Provider value={{
      isTyping,
      setIsTyping,
      passwordVal,
      setPasswordVal,
      showPassword,
      setShowPassword
    }}>
      <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        {/* Left Column - Character Animation (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-end items-center w-[40%] h-screen sticky top-0 bg-zinc-950 border-r border-zinc-900 pt-12 px-12 pb-0 text-white overflow-hidden select-none">
          
          {/* Subtle Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Character Canvas bottom aligned */}
          <div className="relative z-20 flex items-end justify-center w-full h-[400px]">
            <div className="scale-90 xl:scale-100 origin-bottom transition-transform duration-300 translate-y-[2px]">
              <CartoonCharacters />
            </div>
          </div>

        </div>

        {/* Right Column - Children Forms (Login, SignUp, OTP, etc.) */}
        <div className="w-full lg:w-[60%] flex flex-col min-h-screen relative overflow-y-auto">
          
          {/* Top Actions: Back Button, Language, Theme */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30">
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm backdrop-blur transition-all hover:cursor-pointer"
            >
              <ArrowLeft className="size-4" />
              <span>{t("events.single.goBack") || "Go Back"}</span>
            </button>

            <div className="flex items-center gap-2.5">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
          </div>

          {/* Children Form Container */}
          <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-16">
            <div className="w-full max-w-md mt-16 lg:mt-0">
              {children}
            </div>
          </div>

        </div>
      </div>
    </AuthVisualContext.Provider>
  );
}
