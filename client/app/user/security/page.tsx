"use client"
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Button } from "@/components/ui/button";
import getAccessToken from "@/lib/access.token";
import { passwordChangeDTO } from "@/rules/userRules";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCcw, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function Security() {
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(passwordChangeDTO)
  })

  const chanePassword = async (data: z.infer<typeof passwordChangeDTO>) => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (!response.ok) {
        toast.error(result.message)
      } else {
        toast.success(result.message)
        reset()
      }
    } catch (error) {
      toast.error("Error while updating password please try again later. ")
    }
  }
  return (
    <>
      <div className="space-y-4 shadow-sm rounded-md p-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Change Password</h1>
          <p className="text-muted-foreground text-sm">
            Update your Password settings
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(chanePassword)} className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div className="w-1/3">
                <Label htmlFor="password" >New Password: </Label>
              </div>
              <div className="2/3 w-full">
                <Input control={control} errorMsg={errors?.password?.message} type="password" name="password" placeholder="Please enter your current password" />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-1/3">
                <Label htmlFor="new-password" >Confirm New Password: </Label>
              </div>
              <div className="2/3 w-full">
                <Input control={control} errorMsg={errors?.confirmPassword?.message} type="password" name="confirmPassword" placeholder="Please enter your new password" />
              </div>
            </div>
            <div className="flex gap-2 items-center mt-12 ">
              <Button className="hover:scale-105" type="submit" variant={"default"} disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update"} <Save /> </Button>
              <Button className="hover:scale-105" type="button" variant={"destructive"} disabled={isSubmitting} onClick={() => reset()}>{isSubmitting ? "Updating..." : "Reset"} <RotateCcw /> </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}