"use client";
import { ICreateOrganization } from "@/types/organization.types";
import { useForm } from "react-hook-form";
import Label from "../form/Label";
import Input from "../form/Input";
import SelectInput from "../form/SelectInput";
import FileInput from "../form/FileInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateOrganizationDTO } from "@/rules/organization.rules";
import { Button } from "../ui/button";
import { RotateCcw, Save } from "lucide-react";
import getAccessToken from "@/lib/access.token";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function CreateOrganizationForm() {
  const { t } = useTranslation();
  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ICreateOrganization>({
    defaultValues: {
      name: "",
      description: "",
      website: "",
      type: "INDIVIDUAL"
    },
    resolver: zodResolver(ICreateOrganizationDTO)
  })

  const onSubmit = async (data: any) => {
    try {
      const accessToken = await getAccessToken()
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("website", data.website || "");
      formData.append("type", data.type);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }
      if (data.thumbnail && data.thumbnail[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/create-organization`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      const result: any = await response.json();
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      reset();
    } catch (error) {
      toast.error(t("manageOrganization.create.form.error"))
    }
  }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="name">{t("manageOrganization.create.form.name")} : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="name" control={control} errorMsg={errors.name?.message} placeholder={t("manageOrganization.create.form.placeholders.name")} />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="description">{t("manageOrganization.create.form.description")} : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="description" control={control} errorMsg={errors.description?.message} placeholder={t("manageOrganization.create.form.placeholders.description")} />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="website">{t("manageOrganization.create.form.website")} : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="website" control={control} errorMsg={errors.website?.message} placeholder={t("manageOrganization.create.form.placeholders.website")} />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="type">{t("manageOrganization.create.form.type")} : </Label>
          </div>
          <div className="w-2/3 border-2 rounded-md p-1">
            <SelectInput name="type" control={control} errorMsg={errors.type?.message} placeholder={t("manageOrganization.create.form.placeholders.type")} options={[
              { value: "INDIVIDUAL", label: t("manageOrganization.create.form.types.individual") },
              { value: "COMPANY", label: t("manageOrganization.create.form.types.company") },
              { value: "EDUCATIONAL", label: t("manageOrganization.create.form.types.educational") },
              { value: "COMMUNITY", label: t("manageOrganization.create.form.types.community") },
              { value: "NON_PROFIT", label: t("manageOrganization.create.form.types.nonProfit") },
              { value: "GOVERNMENT", label: t("manageOrganization.create.form.types.government") },
            ]} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3" >
            <Label htmlFor="logo">{t("manageOrganization.create.form.logo")} : </Label>
          </div>
          <div className="w-2/3">
            <FileInput name="image" control={control} errorMsg={errors.image?.message} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3" >
            <Label htmlFor="thumbnail">{t("manageOrganization.create.form.thumbnail")} : </Label>
          </div>
          <div className="w-2/3">
            <FileInput name="thumbnail" control={control} errorMsg={errors.thumbnail?.message} />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-12 ">
          <Button className="hover:scale-105" type="submit" variant={"default"} disabled={isSubmitting}>
            {isSubmitting ? t("manageOrganization.create.form.buttons.creating") : t("manageOrganization.create.form.buttons.create")} <Save /> </Button>
          <Button className="hover:scale-105" type="button" variant={"destructive"} disabled={isSubmitting} onClick={() => reset()}>{isSubmitting ? t("manageOrganization.create.form.buttons.creating") : t("manageOrganization.create.form.buttons.reset")} <RotateCcw /> </Button>
        </div>

      </form>
    </div>
  );
}