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

export default function GetForgotPasswordOtp() {

  toast.info("Alert, Eventra as of now does not have a mail server provider. So we are unable to send OTP.");

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
      toast.success("OTP sent to your email successfully.");
      console.log(result);
      // You can redirect to verify OTP page or handle as needed
      // router.push('/auth/verify-otp');
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Error occurred while sending OTP. Please try again.");
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
            <TypographyH2>Forgot Password</TypographyH2>
            <TypographyP>Enter your email to receive a password reset OTP</TypographyP>
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  value="email"
                  placeholder="name@example.com"
                  errorMsg={errors.email?.message}
                  control={control}
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Send OTP
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Remember your password? </span>
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
