"use client";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { verifyOtpDTO } from "@/rules/auth.rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function VerifyOtp() {
  const router = useRouter();
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
      toast.success("OTP verified successfully.");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Error occurred while verifying OTP. Please try again.");
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
            <TypographyH2>Verify OTP</TypographyH2>
            <TypographyP>Enter your email and the 6-digit OTP sent to your inbox</TypographyP>
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  errorMsg={errors.email?.message}
                  control={control}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  errorMsg={errors.otp?.message}
                  control={control}
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Verify OTP
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Didn't receive the code? </span>
            <Link href="/auth/get-forgotpass-otp" className="font-medium text-primary hover:underline">
              Resend OTP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
