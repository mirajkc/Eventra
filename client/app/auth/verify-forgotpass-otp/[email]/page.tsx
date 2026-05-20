"use client";

import React, { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { verifyForgotPasswordOtpDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useAuthVisual } from "@/app/auth/layout";

export default function VerifyForgotPasswordOtp() {
  const { t } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const { setIsTyping } = useAuthVisual();

  const email = decodeURIComponent(
    typeof params.email === "string"
      ? params.email
      : Array.isArray(params.email)
        ? params.email[0]
        : ""
  );

  const { control, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      otp: "",
      email: email
    },
    resolver: zodResolver(verifyForgotPasswordOtpDTO)
  });

  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, [email, setValue]);

  const verifyOTP = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-forgotpass-otp`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.status !== 200) {
        throw new Error(result.message || t("auth.verifyOtp.invalidOtp"));
      }
      Cookies.set("changePasswordToken", result.data);
      toast.success(t("auth.verifyOtp.success"));
      router.push(`/auth/change-password`);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : t("auth.verifyOtp.error"));
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
          {t("auth.verifyOtp.otpSentTo")} <strong className="text-slate-800 dark:text-slate-200">{email}</strong>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(verifyOTP)} className="space-y-5">
        
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
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-[10px] text-destructive mt-1 ml-1">
              Invalid email in URL: {errors.email.message}
            </p>
          )}
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
