"use client";

import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IEventTypes } from "@/types/event.type";
import Label from "../form/Label";
import Input, { DateTimeInput } from "../form/Input";
import SelectInput from "../form/SelectInput";
import FileInput from "../form/FileInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateEventSchema } from "@/rules/event.rules";
import { Button } from "../ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Tag,
  Image as ImageIcon,
  Save,
  RotateCcw,
  Type,
  AlignLeft,
  LayoutGrid
} from "lucide-react";
import getAccessToken from "@/lib/access.token";
import { toast } from "sonner";

export default function CreateEventForm() {
  const params = useParams();
  const router = useRouter();
  const organizationId = params.id as string;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<IEventTypes>({
    defaultValues: {
      organizationId: organizationId,
      title: "",
      description: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      capacity: 1,
      category: "OTHER",
      tags: [""],
      image: null
    },
    resolver: zodResolver(CreateEventSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      const accessToken = await getAccessToken();
      const formData = new FormData();

      formData.append("organizationId", organizationId);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("startDate", new Date(data.startDate).toISOString());
      formData.append("endDate", new Date(data.endDate).toISOString());
      formData.append("capacity", data.capacity.toString());
      formData.append("category", data.category);

      if (Array.isArray(data.tags)) {
        data.tags.forEach((tag: string) => formData.append("tags[]", tag));
      } else if (typeof data.tags === "string" && data.tags.trim() !== "") {
        data.tags.split(",").map((t: any) => t.trim()).forEach((tag: string) => formData.append("tags[]", tag));
      }

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/create-new-event`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || "Event created successfully!");
        reset()
        router.push(`/organization/${organizationId}/events`);
      } else {
        toast.error(result.message || "Failed to create event");
      }
    } catch (error) {
      toast.error("An error occurred while creating the event. Please try again.");
    }
  };

  return (
    <div className="mt-12">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center gap-2 pt-2">
            <Type className="w-4 h-4 text-primary" />
            <Label htmlFor="title" className="font-medium">Event Title</Label>
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              name="title"
              control={control}
              placeholder="e.g. Annual Tech Conference 2026"
              errorMsg={errors.title?.message}
              className="transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center gap-2 pt-2">
            <AlignLeft className="w-4 h-4 text-primary" />
            <Label htmlFor="description" className="font-medium">Description</Label>
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              name="description"
              control={control}
              placeholder="Tell people what your event is about..."
              errorMsg={errors.description?.message}
              className="transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center gap-2 pt-2">
            <MapPin className="w-4 h-4 text-primary" />
            <Label htmlFor="location" className="font-medium">Location</Label>
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              name="location"
              control={control}
              placeholder="Venue name or physical address"
              errorMsg={errors.location?.message}
              className="transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 pt-2">
            <Calendar className="w-4 h-4 text-primary" />
            <Label className="font-medium">Schedule</Label>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground ml-1">Start Date & Time</span>
              <DateTimeInput
                type="datetime-local"
                name="startDate"
                control={control}
                errorMsg={errors.startDate?.message}
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground ml-1">End Date & Time</span>
              <DateTimeInput
                type="datetime-local"
                name="endDate"
                control={control}
                errorMsg={errors.endDate?.message}
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Capacity & Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 pt-2">
            <LayoutGrid className="w-4 h-4 text-primary" />
            <Label className="font-medium">Details</Label>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground ml-1 flex items-center gap-1">
                <Users className="w-3 h-3" /> Capacity
              </span>
              <Input
                type="number"
                name="capacity"
                control={control}
                placeholder="Max attendees"
                errorMsg={errors.capacity?.message as string}
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground ml-1">Category</span>
              <div className="border border-input rounded-md px-1 bg-background h-10 flex items-center">
                <SelectInput
                  name="category"
                  control={control}
                  errorMsg={errors.category?.message}
                  options={[
                    { value: "WORKSHOP", label: "Workshop" },
                    { value: "MEETUP", label: "Meetup" },
                    { value: "CONFERENCE", label: "Conference" },
                    { value: "WEBINAR", label: "Webinar" },
                    { value: "HACKATHON", label: "Hackathon" },
                    { value: "COMPETITION", label: "Competition" },
                    { value: "OTHER", label: "Other" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center gap-2 pt-2">
            <Tag className="w-4 h-4 text-primary" />
            <Label htmlFor="tags" className="font-medium">Tags</Label>
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              name="tags"
              control={control}
              placeholder="E.g. tech, networking, workshop (comma separated)"
              errorMsg={errors.tags?.message as string}
              className="transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center gap-2 pt-2">
            <ImageIcon className="w-4 h-4 text-primary" />
            <Label htmlFor="image" className="font-medium">Event Poster</Label>
          </div>
          <div className="md:col-span-2">
            <FileInput
              name="image"
              control={control}
              errorMsg={errors.image?.message as string}
              className="transition-all focus:ring-2 focus:ring-primary/20 hover:bg-muted/50 cursor-pointer"
            />
            <p className="text-[10px] text-muted-foreground mt-1 ml-1 italic">
              * Recommended size: 1200x630px
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center justify-end mt-10 pt-6 border-t border-border/50">
          <Button
            className="group px-6 transition-all active:scale-95"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Event"}
            <Save className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            className="px-6 transition-all active:scale-95"
            type="button"
            variant={"destructive"}
            disabled={isSubmitting}
            onClick={() => reset()}
          >
            Reset <RotateCcw className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}