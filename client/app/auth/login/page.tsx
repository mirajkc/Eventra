"use client";
import React, { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { loginDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from 'js-cookie'
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { IUserDetails } from "@/types/user.types";
import { getUserDetails } from "@/state/slices/auth.slice";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const router = useRouter()
  const dispatch = useAppDispatch()
  const userDetials: IUserDetails | null = useAppSelector((state) => state.authSlice.userDetails)
  useEffect(() => {
    if (userDetials?.id) {
      router.push('/home')
    }
  }, [userDetials?.id])
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginDTO)
  })
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (response.status !== 200) {
        throw new Error(result.message)
      }
      Cookies.set("accessToken", result.data.accessToken, {
        expires: 1 / 24,
        secure: true,
        path: "/"
      });
      Cookies.set("refreshToken", result.data.refreshToken, {
        expires: 15,
        secure: true,
        path: "/"
      });
      await dispatch(getUserDetails())
      toast.success(t("auth.login.loginSuccess"))
      router.push('/home')
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error(t("auth.login.loginError"))
      }
    }
  }
  if (isSubmitting) {
    return (
      <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
        <div className="flex items-center gap-4">
          <Spinner />
        </div>
      </section>
    )
  }

  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <TypographyH2>{t("auth.login.title")}</TypographyH2>
            <TypographyP>{t("auth.login.subtitle")}</TypographyP>
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.login.emailLabel")}</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("auth.login.emailPlaceholder")}
                  errorMsg={errors.email?.message}
                  control={control}
                />
              </div>

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
                <Input
                  type="password"
                  name="password"
                  placeholder={t("auth.login.passwordPlaceholder")}
                  control={control}
                  errorMsg={errors.password?.message}
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              {t("auth.login.signInBtn")}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">{t("auth.login.dontHaveAccount")} </span>
            <Link href="/auth/register" className="font-medium text-primary hover:underline">
              {t("auth.login.signUpLink")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}