import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import Link from "next/link";


export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-slate-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <TypographyH2>Welcome Back</TypographyH2>
            <TypographyP>Enter your credentials to access your account</TypographyP>
          </div>

          <form className="flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}