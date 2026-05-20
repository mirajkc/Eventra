"use client";

import React, { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { Eye, EyeOff } from "lucide-react";
import { loginDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { IUserDetails } from "@/types/user.types";
import { getUserDetails } from "@/state/slices/auth.slice";
import { useTranslation } from "react-i18next";
import { useAuthVisual } from "@/app/auth/layout";

export default function Login() {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const { setIsTyping, setPasswordVal, showPassword, setShowPassword } = useAuthVisual();

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
    },
    resolver: zodResolver(loginDTO)
  });

  const onSubmit = async (data: any) => {
    try {
      for (const name of ["accessToken", "refreshToken"]) {
        Cookies.remove(name);
        Cookies.remove(name, { path: "/" });
        Cookies.remove(name, { path: "" });
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
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
      Cookies.set("accessToken", result.data.accessToken, {
        expires: 1 / 24,
        secure: process.env.NODE_ENV === "production",
        path: "/"
      });
      Cookies.set("refreshToken", result.data.refreshToken, {
        expires: 15,
        secure: process.env.NODE_ENV === "production",
        path: "/"
      });
      await dispatch(getUserDetails());
      toast.success(t("auth.login.loginSuccess"));
      router.push('/home');
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(t("auth.login.loginError"));
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
        <TypographyH2>{t("auth.login.title")}</TypographyH2>
        <TypographyP>{t("auth.login.subtitle")}</TypographyP>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">{t("auth.login.emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder={t("auth.login.emailPlaceholder")}
            errorMsg={errors.email?.message}
            control={control}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            disabled={isSubmitting}
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">{t("auth.login.passwordLabel")}</Label>
            <Link
              href="/auth/get-forgotpass-otp"
              className="text-sm font-medium text-primary hover:underline"
            >
              {t("auth.login.forgotPassword")}
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("auth.login.passwordPlaceholder")}
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
              <span>{t("auth.verifyOtp.verifying") || "Signing in..."}</span>
            </>
          ) : (
            t("auth.login.signInBtn")
          )}
        </Button>
      </form>

      {/* Sign Up Redirect */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">{t("auth.login.dontHaveAccount")} </span>
        <Link href="/auth/register" className="font-medium text-primary hover:underline">
          {t("auth.login.signUpLink")}
        </Link>
      </div>

    </div>
  );
}