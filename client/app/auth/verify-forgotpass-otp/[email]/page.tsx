"use client"
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { verifyForgotPasswordOtpDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export default function VerifyForgotPasswordOtp() {
    const { t } = useTranslation();
    const params = useParams();
    const router = useRouter();

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
    })

    useEffect(() => {
        if (email) {
            setValue("email", email)
        }
    }, [email, setValue])

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
    }

    if (isSubmitting) {
        return (
            <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
                <Spinner />
            </section>
        )
    }

    return (
        <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col space-y-2 text-center mb-8">
                        <TypographyH2>{t("auth.verifyOtp.title")}</TypographyH2>
                        <TypographyP>{t("auth.verifyOtp.otpSentTo")} <b>{email}</b></TypographyP>
                    </div>

                    <form className="flex flex-col space-y-6" onSubmit={handleSubmit(verifyOTP)}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="otp">{t("auth.verifyOtp.otpLabel")}</Label>
                                <Input
                                    type="text"
                                    name="otp"
                                    placeholder={t("auth.verifyOtp.otpPlaceholder")}
                                    control={control}
                                    errorMsg={errors.otp?.message}
                                />
                                {errors.email && (
                                    <p className="text-[10px] text-destructive mt-1 ml-1">
                                        Invalid email in URL: {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <Button className="w-full hover:cursor-pointer" size="lg" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? t("auth.verifyOtp.verifying") : t("auth.verifyOtp.verifyBtn")}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">{t("auth.verifyOtp.didntReceiveCode")} </span>
                        <Link href="/auth/get-forgotpass-otp" className="font-medium text-primary hover:underline">
                            {t("auth.verifyOtp.resendLink")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
