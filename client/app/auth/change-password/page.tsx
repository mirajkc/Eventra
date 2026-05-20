"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { changePasswordDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { useAuthVisual } from "@/app/auth/layout";

export default function ChangePassword() {
  const { t } = useTranslation();
  const router = useRouter();
  
  const { setIsTyping, setPasswordVal, showPassword, setShowPassword } = useAuthVisual();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(changePasswordDTO)
  });

  const onSubmit = async (data: any) => {
    try {
      data.token = Cookies.get("changePasswordToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.status !== 200) {
        throw new Error(result.message);
      }
      Cookies.remove("changePasswordToken");
      toast.success(t("auth.changePassword.success"));
      router.push(`/auth/login`);
    } catch (error) {
      toast.error(t("auth.changePassword.error"));
    }
  };

  // Reset typing state on unmount
  useEffect(() => {
    return () => {
      setIsTyping(false);
      setPasswordVal("");
    };
  }, [setIsTyping, setPasswordVal]);

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("auth.changePassword.title")}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t("auth.changePassword.subtitle")}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("auth.changePassword.passwordLabel")}
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("auth.changePassword.passwordPlaceholder")}
              errorMsg={errors.password?.message}
              control={control}
              className="pr-10"
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              onChange={(val) => setPasswordVal(val)}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors hover:cursor-pointer"
              disabled={isSubmitting}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("auth.changePassword.confirmPasswordLabel")}
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder={t("auth.changePassword.confirmPlaceholder")}
              errorMsg={errors.confirmPassword?.message}
              control={control}
              className="pr-10"
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors hover:cursor-pointer"
              disabled={isSubmitting}
            >
              {showConfirmPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full hover:cursor-pointer flex items-center justify-center gap-2" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="h-4 w-4 text-white" />
              <span>{t("auth.verifyOtp.verifying") || "Updating password..."}</span>
            </>
          ) : (
            t("auth.changePassword.changeBtn")
          )}
        </Button>
      </form>

    </div>
  );
}
