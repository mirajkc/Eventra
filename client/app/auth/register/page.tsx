"use client";
import React, { useEffect } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { registerDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAppSelector } from "@/state/hooks";
import { IUserDetails } from "@/types/user.types";
import { useTranslation } from "react-i18next";


export default function Register() {
  const { t } = useTranslation();
  const router = useRouter()
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
      confirmPassword: "",
    },
    resolver: zodResolver(registerDTO)
  })
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
      })
      const result = await response.json()
      if (response.status !== 200) {
        throw new Error(result.message)
      }
      toast.success(t("auth.register.registerSuccess"))
      router.push('/auth/login')
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error(t("auth.register.registerError"))
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
            <TypographyH2>{t("auth.register.title")}</TypographyH2>
            <TypographyP>{t("auth.register.subtitle")}</TypographyP>
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.register.emailLabel")}</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("auth.register.emailPlaceholder")}
                  errorMsg={errors.email?.message}
                  control={control}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.register.passwordLabel")}</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder={t("auth.register.passwordPlaceholder")}
                  control={control}
                  errorMsg={errors.password?.message}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t("auth.register.confirmPasswordLabel")}</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder={t("auth.register.confirmPlaceholder")}
                  control={control}
                  errorMsg={errors.confirmPassword?.message}
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              {t("auth.register.signUpBtn")}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">{t("auth.register.alreadyHaveAccount")} </span>
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              {t("auth.register.signInLink")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}