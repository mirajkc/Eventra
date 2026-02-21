"use client"
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { useAppSelector } from "@/state/hooks";
import { IUserDetails } from "@/types/user.types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Save } from "lucide-react";
import { IUpdateProfileDTO } from "@/rules/userRules";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { toast } from "sonner";
import getAccessToken from "@/lib/access.token";
import FileInput from "@/components/form/FileInput";
import { useTranslation } from "react-i18next";

export default function UpdateUserPage() {
  const { t } = useTranslation();
  const userDetails: IUserDetails | null = useAppSelector((state) => state.authSlice.userDetails)
  const { handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: userDetails?.name,
      phone: userDetails?.phone || "",
    },
    resolver: zodResolver(IUpdateProfileDTO)
  })
  useEffect(() => {
    if (userDetails) {
      reset({
        name: userDetails.name,
        phone: userDetails.phone || "",
      });
    }
  }, [userDetails, reset]);
  const updateUser = async (data: any) => {
    const formData = new FormData();
    if (data.name) formData.append("name", data.name);
    if (data.phone) formData.append("phone", data.phone);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    const accessToken = await getAccessToken();

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/update-user`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
      body: formData
    });

    const result = await response.json();
    if (result.success) toast.success(result.message);
    else toast.error(result.message);
  };

  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-lg p-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-2xl font-bold tracking-tight">{t("user.profile.title")}</h1>
      <p className="text-muted-foreground text-sm">
        {t("user.profile.subtitle")}
      </p>
      <form onSubmit={handleSubmit(updateUser)}>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-2 items-center " >
            <div className="flex w-1/3 items-center ">
              <Label htmlFor="name" >{t("user.profile.name")}:  </Label>
            </div>
            <div className="w-2/3">
              <Input type="text" placeholder={t("user.profile.placeholders.name")} name="name" control={control} errorMsg={errors?.name?.message as string} />
            </div>
          </div>
          <div className="flex gap-2 items-center " >
            <div className="flex w-1/3 items-center">
              <Label htmlFor="phone" >{t("user.profile.phone")}:  </Label>
            </div>
            <div className="w-2/3">
              <Input type="text" placeholder={t("user.profile.placeholders.phone")} name="phone" control={control} errorMsg={errors?.phone?.message as string} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex w-1/3 items-center">
              <Label htmlFor="image" >
                <div className="flex flex-col justify-start  gap-2">
                  <span>{t("user.profile.picture")}: </span>
                  <Image src={userDetails?.image || "/placeholder.png"} alt="Profile Picture" width={100} height={100} />
                </div>
              </Label>
            </div>
            <div className="w-2/3">
              <FileInput name="image" control={control} errorMsg={errors?.image?.message as string} />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-12 ">
          <Button className="hover:scale-105" type="submit" variant={"default"} disabled={isSubmitting}>
            {isSubmitting ? t("user.profile.buttons.updating") : t("user.profile.buttons.update")} <Save /> </Button>
          <Button className="hover:scale-105" type="button" variant={"destructive"} disabled={isSubmitting} onClick={() => reset()}>{isSubmitting ? t("user.profile.buttons.updating") : t("user.profile.buttons.reset")} <RotateCcw /> </Button>
        </div>
      </form>
    </div>
  );
}