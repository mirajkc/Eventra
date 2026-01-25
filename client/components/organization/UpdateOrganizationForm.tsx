"use client"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { getLoggedInUserOrganization } from "@/state/slices/organization.slice"
import { useEffect } from "react"
import { Spinner } from "../ui/spinner"
import CreateOrganizationCard from "./CreateOrganizationCard"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdateOrganizationDTO } from "@/rules/organization.rules"
import Label from "../form/Label"
import Input from "../form/Input"
import SelectInput from "../form/SelectInput"
import Image from "next/image"
import FileInput from "../form/FileInput"
import { Button } from "../ui/button"
import { RotateCcw, Save } from "lucide-react"
import { toast } from "sonner"
import getAccessToken from "@/lib/access.token"

export default function UpdateOrganizationForm() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getLoggedInUserOrganization())
  }, [])
  const { organizationDetails, loading } = useAppSelector((state) => state.organization)
  const hasOrganization = organizationDetails?.hasOrganization
  const organizationData = organizationDetails?.data

  useEffect(() => {
    reset({
      name: organizationData?.name,
      description: organizationData?.description,
      website: organizationData?.website,
      type: organizationData?.type,
      image: organizationData?.image,
      thumbnail: organizationData?.thumbnail
    })
  }, [organizationData?.id])

  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      name: organizationData?.name,
      description: organizationData?.description,
      website: organizationData?.website,
      type: organizationData?.type,
    },
    resolver: zodResolver(IUpdateOrganizationDTO)
  })
  const onSubmit = async (data: any) => {
    try {
      const accessToken = await getAccessToken()
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("description", data.description)
      formData.append("website", data.website)
      formData.append("type", data.type)
      if (data.image instanceof FileList && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      if (data.thumbnail instanceof FileList && data.thumbnail.length > 0) {
        formData.append("thumbnail", data.thumbnail[0]);
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/update-organization`, {
        method: "PUT",
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
      toast.error("Error while updating the organizations details please try again later. ")
    }
  }
  if (loading) return <div className="flex items-center justify-center h-screen" ><Spinner /></div>
  if (!hasOrganization) return <CreateOrganizationCard />
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
        <div className="flex">
          <div className="w-1/3 s">
            <Label>Name: </Label></div>
          <div className="w-2/3">
            <Input className="dark:bg-neutral-900" control={control} placeholder="Please enter new name for the organization" name="name" type="text" errorMsg={errors.name?.message} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <Label>Description: </Label></div>
          <div className="w-2/3">
            <Input className="dark:bg-neutral-900" control={control} placeholder="Please enter new description for the organization" name="description" type="text" errorMsg={errors.description?.message} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <Label>Website: </Label></div>
          <div className="w-2/3">
            <Input className="dark:bg-neutral-900" control={control} placeholder="Please enter new website for the organization" name="website" type="text" errorMsg={errors.website?.message} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <Label>Type: </Label></div>
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
          <div className="w-1/3">
            <p>Current Organization Image</p>
            <Label htmlFor="image"><div>
              <Image width={100} height={100} src={String(organizationData?.image)} alt="organization image" />
            </div></Label>
          </div>
          <div className="w-2/3 dark:bg-neutral-900" >
            <FileInput name="image" control={control} errorMsg={errors.image?.message as string} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <p>Current Organization Thumbnail</p>
            <Label htmlFor="image"><div>
              <Image width={100} height={100} src={String(organizationData?.thumbnail)} alt="organization thumbnail" />
            </div></Label>
          </div>
          <div className="w-2/3 dark:bg-neutral-900" >
            <FileInput name="thumbnail" control={control} errorMsg={errors.thumbnail?.message as string} />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-12 ">
          <Button className="hover:scale-105" type="submit" variant={"default"} disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"} <Save /> </Button>
          <Button className="hover:scale-105" type="button" variant={"destructive"} disabled={isSubmitting} onClick={() => {
            reset()
            dispatch(getLoggedInUserOrganization())
          }}>{isSubmitting ? "Updating..." : "Reset"} <RotateCcw /> </Button>
        </div>
      </form>
    </div>
  )
}