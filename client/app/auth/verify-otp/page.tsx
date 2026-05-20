"use client";

import React, { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { verifyOtpDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useAuthVisual } from "@/app/auth/layout";

export default function VerifyOtp() {
  const { t } = useTranslation();
  const router = useRouter();
  const { setIsTyping } = useAuthVisual();

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: "",
      otp: "",
    },
    resolver: zodResolver(verifyOtpDTO)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp`, {
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
      toast.success(t("auth.verifyOtp.success"));
      router.push('/auth/login');
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(t("auth.verifyOtp.error"));
      }
    }
  };

  // Reset typing state on unmount
  useEffect(() => {
    return () => {
      setIsTyping(false);
    };
  }, [setIsTyping]);

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {t("auth.verifyOtp.title")}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t("auth.verifyOtp.enterEmailOtp")}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("auth.verifyOtp.emailLabel")}
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder={t("auth.forgotPassword.emailPlaceholder")}
            errorMsg={errors.email?.message}
            control={control}
            className="h-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            disabled={isSubmitting}
          />
        </div>

        {/* OTP Field */}
        <div className="space-y-2">
          <Label htmlFor="otp" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t("auth.verifyOtp.otpLabel")}
          </Label>
          <Input
            id="otp"
            type="text"
            name="otp"
            placeholder={t("auth.verifyOtp.otpPlaceholder")}
            errorMsg={errors.otp?.message}
            control={control}
            className="h-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full h-12 text-sm font-semibold tracking-wide bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="h-4 w-4 text-white" />
              <span>{t("auth.verifyOtp.verifying") || "Verifying..."}</span>
            </>
          ) : (
            t("auth.verifyOtp.verifyBtn")
          )}
        </Button>
      </form>

      {/* Resend Code Link */}
      <div className="text-center text-sm text-slate-500 dark:text-slate-400 pt-4">
        {t("auth.verifyOtp.didntReceiveCode")}{" "}
        <Link href="/auth/get-forgotpass-otp" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
          {t("auth.verifyOtp.resendLink")}
        </Link>
      </div>

    </div>
  );
}
