import { IOrganizationDetails } from "@/types/organization.types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Calendar, Coins, BadgeCheck, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import Link from "next/link";



export default function OrganizationCard({ organization }: { organization: IOrganizationDetails }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

    >
      <Card className="w-full h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 cursor-pointer hover:scale-105 transition-transform duration-300">

        {/* Banner Image */}
        <div className="relative w-full h-32 md:h-40 bg-neutral-100 dark:bg-neutral-900 ">
          <Image
            className="object-cover"
            src={organization.thumbnail || "/banner_placeholder.png"}
            alt={`${organization.name} banner`}
            fill
            sizes="10"
            loading="eager"
          />
          {organization.isPremium && (
            <div className="absolute top-2 right-2 z-[10]">
              <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white border-none gap-1">
                <BadgeCheck className="w-3 h-3" /> Premium
              </Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-1">
            <div className="relative size-16 rounded-full border-2 border-white dark:border-neutral-950 overflow-hidden bg-white dark:bg-neutral-900 shadow-sm">
              <Image
                className="object-cover"
                src={organization.image || "/organization_profile.jpg"}
                alt={organization.name}
                fill
                sizes="10"
              />
            </div>
          </div>
        </div>

        <CardHeader className="pb-2  px-5">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-xl line-clamp-1 leading-tight">{organization.name}</h3>
              <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-semibold">
                {organization.type}
              </Badge>
            </div>

            {/* Meta Info Row 1 */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500" />
                <span className="font-medium">{organization.credits} Credits</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Joined {format(new Date(organization.createdAt), "MMM d, yyyy")}</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
            {organization.description}
          </p>
        </CardContent>
        <CardFooter>
          <Link className="w-full" href={`/organization/${organization.id}`}>
            <Button className="w-full " >
              View Organization
              <ArrowRight />
            </Button></Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}