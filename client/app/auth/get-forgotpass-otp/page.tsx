"use client";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { forgotPasswordOtpDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function GetForgotPasswordOtp() {
  const { t } = useTranslation();
  const router = useRouter();
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordOtpDTO)
  });
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/get-forgot-password-otp`, {
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
      toast.success(t("auth.forgotPassword.success"));
      router.push(`/auth/verify-forgotpass-otp/${data.email}`);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(t("auth.forgotPassword.error"));
      }
    }
  };

  if (isSubmitting) {
    return (
      <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
        <div className="flex items-center gap-4">
          <Spinner />
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <TypographyH2>{t("auth.forgotPassword.title")}</TypographyH2>
            <TypographyP>{t("auth.forgotPassword.subtitle")}</TypographyP>
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.forgotPassword.emailLabel")}</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("auth.forgotPassword.emailPlaceholder")}
                  errorMsg={errors.email?.message}
                  control={control}
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              {t("auth.forgotPassword.sendOtpBtn")}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">{t("auth.forgotPassword.rememberPassword")} </span>
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              {t("auth.forgotPassword.signInLink")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
