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

export default function CreateOrganizationForm() {
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
      toast.error("Error while creting organization please try again later. ")
    }
  }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="name">Organization Name : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="name" control={control} errorMsg={errors.name?.message} placeholder="Enter your organization name" />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="description">Organization Description : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="description" control={control} errorMsg={errors.description?.message} placeholder="Enter your organization description" />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="website">Organization Social Link or Website : </Label>
          </div>
          <div className="w-2/3">
            <Input type="text" name="website" control={control} errorMsg={errors.website?.message} placeholder="Enter your organization website (eg: https://example.com)" />
          </div>
        </div>
        <div className="flex" >
          <div className="w-1/3" >
            <Label htmlFor="type">Organization Type : </Label>
          </div>
          <div className="w-2/3 border-2 rounded-md p-1">
            <SelectInput name="type" control={control} errorMsg={errors.type?.message} placeholder="Select your organization type" options={[
              { value: "INDIVIDUAL", label: "Individual" },
              { value: "COMPANY", label: "Company" },
              { value: "EDUCATIONAL", label: "Educational" },
              { value: "COMMUNITY", label: "Community" },
              { value: "NON_PROFIT", label: "Non Profit" },
              { value: "GOVERNMENT", label: "Government" },
            ]} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3" >
            <Label htmlFor="logo">Organization Logo : </Label>
          </div>
          <div className="w-2/3">
            <FileInput name="image" control={control} errorMsg={errors.image?.message} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3" >
            <Label htmlFor="thumbnail">Thumbnail : </Label>
          </div>
          <div className="w-2/3">
            <FileInput name="thumbnail" control={control} errorMsg={errors.thumbnail?.message} />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-12 ">
          <Button className="hover:scale-105" type="submit" variant={"default"} disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create"} <Save /> </Button>
          <Button className="hover:scale-105" type="button" variant={"destructive"} disabled={isSubmitting} onClick={() => reset()}>{isSubmitting ? "Creating..." : "Reset"} <RotateCcw /> </Button>
        </div>

      </form>
    </div>
  );
}