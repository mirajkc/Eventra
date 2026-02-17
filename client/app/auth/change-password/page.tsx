"use client";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { changePasswordDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function ChangePassword() {
    const router = useRouter();
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
            toast.success("Password changed successfully.");
            router.push(`/auth/login`);
        } catch (error) {
            toast.error("Error occurred while changing password. Please try again.");
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
                        <TypographyH2> New Password</TypographyH2>
                        <TypographyP>Enter your new password</TypographyP>
                    </div>

                    <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    errorMsg={errors.password?.message}
                                    control={control}
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Enter your confirm password"
                                    errorMsg={errors.confirmPassword?.message}
                                    control={control}
                                />
                            </div>
                        </div>

                        <Button className="w-full" size="lg">
                            Change Password
                        </Button>
                    </form>

                </div>
            </div>
        </section>
    );
}
