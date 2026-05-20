"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { Eye, EyeOff } from "lucide-react";
import { registerDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAppSelector } from "@/state/hooks";
import { IUserDetails } from "@/types/user.types";
import { useTranslation } from "react-i18next";
import { useAuthVisual } from "@/app/auth/layout";

export default function Register() {
  const { t } = useTranslation();
  const router = useRouter();
  
  const { setIsTyping, setPasswordVal, showPassword, setShowPassword } = useAuthVisual();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userDetails: IUserDetails | null = useAppSelector((state) => state.authSlice.userDetails);
  
  useEffect(() => {
    if (userDetails?.id) {
      router.push('/home');
    }
  }, [userDetails?.id, router]);

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerDTO)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword
        })
      });
      const result = await response.json();
      if (response.status !== 200) {
        throw new Error(result.message);
      }
      toast.success(t("auth.register.registerSuccess"));
      router.push('/auth/login');
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(t("auth.register.registerError"));
      }
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
      <div className="flex flex-col space-y-2 text-center mb-8">
        <TypographyH2>{t("auth.register.title")}</TypographyH2>
        <TypographyP>{t("auth.register.subtitle")}</TypographyP>
      </div>

      {/* Register Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.register.emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder={t("auth.register.emailPlaceholder")}
            errorMsg={errors.email?.message}
            control={control}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            disabled={isSubmitting}
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password">{t("auth.register.passwordLabel")}</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("auth.register.passwordPlaceholder")}
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
          <Label htmlFor="confirmPassword">{t("auth.register.confirmPasswordLabel")}</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder={t("auth.register.confirmPlaceholder")}
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
              <span>{t("auth.verifyOtp.verifying") || "Creating account..."}</span>
            </>
          ) : (
            t("auth.register.signUpBtn")
          )}
        </Button>
      </form>

      {/* Sign In Redirect */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">{t("auth.register.alreadyHaveAccount")} </span>
        <Link href="/auth/login" className="font-medium text-primary hover:underline">
          {t("auth.register.signInLink")}
        </Link>
      </div>

    </div>
  );
}