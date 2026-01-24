"use client";

import { useForm } from "react-hook-form";
import {  IEventUpdate, IHostedEvents } from "@/types/event.type";
import Label from "../form/Label";
import Input, { DateTimeInput } from "../form/Input";
import SelectInput from "../form/SelectInput";
import FileInput from "../form/FileInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {  updateEventDTO } from "@/rules/event.rules";
import { Button } from "../ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Tag,
  Image as ImageIcon,
  Save,
  Type,
  AlignLeft,
  LayoutGrid
} from "lucide-react";
import getAccessToken from "@/lib/access.token";
import { toast } from "sonner";
import Image from "next/image";

interface UpdateEventFormProps {
  event: IHostedEvents;
  onSuccess: () => void;
  onClose: () => void;
}

export default function UpdateEventForm({ event, onSuccess, onClose }: UpdateEventFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<IEventUpdate>({
    defaultValues: {
      id: event.id,
      organizationId: event.organizationId,
      title: event.title,
      description: event.description,
      location: event.location,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      capacity: Number(event.capacity) || 0,
      category: event.category,
      tags: event.tags || [""],
      image: event.image || null
    },
    resolver: zodResolver(updateEventDTO)
  });

  const onSubmit = async (data: any) => {
    try {
      const accessToken = await getAccessToken();
      const formData = new FormData();

      formData.append("id", data.id);
      formData.append("organizationId", data.organizationId);
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

      if(data.status === "CANCELLED") {
        formData.append("status", "CANCELLED");
      }

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0] );
      }else{
        formData.append("image", data.image );
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/event/update-event-details`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || "Event updated successfully!");
        onSuccess();
        onClose();
      } else {
        toast.error(result.message || "Failed to update event");
      }
    } catch (error) {
      toast.error("An error occurred while updating the event. Please try again.");
    }
  };

  return (
    <div className="mt-4 pb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-primary" />
            <Label htmlFor="title" className="font-medium">Event Title</Label>
          </div>
          <Input
            type="text"
            name="title"
            control={control}
            placeholder="e.g. Annual Tech Conference 2026"
            errorMsg={errors.title?.message}
            className="transition-all focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <AlignLeft className="w-4 h-4 text-primary" />
            <Label htmlFor="description" className="font-medium">Description</Label>
          </div>
          <Input
            type="text"
            name="description"
            control={control}
            placeholder="Tell people what your event is about..."
            errorMsg={errors.description?.message}
            className="transition-all focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
            <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <Label htmlFor="location" className="font-medium">Location</Label>
            </div>
            <Input
            type="text"
            name="location"
            control={control}
            placeholder="Venue name or physical address"
            errorMsg={errors.location?.message}
            className="transition-all focus:ring-2 focus:ring-primary/20"
            />
        </div>

        {/* Dates */}
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <Label className="font-medium">Schedule</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-primary" />
                <Label className="font-medium">Details</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="space-y-2">
            <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            <Label htmlFor="tags" className="font-medium">Tags</Label>
            </div>
            <Input
            type="text"
            name="tags"
            control={control}
            placeholder="E.g. tech, networking, workshop (comma separated)"
            errorMsg={errors.tags?.message as string}
            className="transition-all focus:ring-2 focus:ring-primary/20"
            />
        </div>

        {/* Image */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-primary" />
            <Label htmlFor="image" className="font-medium">Event Poster</Label>
          </div>
          
          {event.image && (
             <div className="relative h-40 w-full mb-2 rounded-md overflow-hidden border border-input">
                <Image src={event.image} alt="Current Event Poster" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-medium">
                    Current Image
                </div>
             </div>
          )}

          <FileInput
            name="image"
            control={control}
            errorMsg={errors.image?.message as string}
            className="transition-all focus:ring-2 focus:ring-primary/20 hover:bg-muted/50 cursor-pointer"
          />
        </div>
        <div>
          <SelectInput
          className="max-w-[200px] border rounded-sm hover:bg-muted/50 cursor-pointer dark:bg-black p-1"
            name="status"
            control={control}
            options={[
              { value: "", label: "Select Status" },
              { value: "CANCELLED", label: "Cancelled" },
            ]}
            errorMsg={errors.status?.message as string}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center justify-end pt-4 border-t border-border/50">
          <Button
            className="px-6 transition-all active:scale-95"
            type="button"
            variant={"outline"}
            disabled={isSubmitting}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="group px-6 transition-all active:scale-95"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Event"}
            <Save className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
}
