"use client";

import Image from "next/image";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Calendar,
  ShieldCheck,
  LayoutDashboard,
  CreditCard
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />
);
const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);
const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);



export default function OrganizationDetails({ organizationDetails }: { organizationDetails: any }) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div
      onClick={() => router.push(`/organization/${organizationDetails.data?.id}`)}
      className="grid gap-6 hover:cursor-pointer">
      {/* Header Card with Image and Basic Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-32 h-32 rounded-lg overflow-hidden border bg-muted shrink-0">
              <Image
                src={organizationDetails.data?.image || "/placeholder.png"}
                alt={organizationDetails.data?.name || "Organization"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{organizationDetails.data?.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="capitalize">
                      {organizationDetails.data?.type?.toLowerCase().replace('_', ' ')}
                    </Badge>
                    {organizationDetails.data?.isPremium && (
                      <Badge variant="default" className="bg-linear-to-r from-amber-500 to-yellow-500 text-white border-none">
                        <ShieldCheck className="w-3 h-3 mr-1" /> {t("organizations.single.details.premium")}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                {organizationDetails.data?.description || t("organizations.single.details.noDescription")}
              </p>

              {organizationDetails.data?.website && (
                <div className="flex items-center gap-2 text-sm text-blue-600 hover:underline pt-1">
                  <Globe className="w-4 h-4" />
                  <a href={organizationDetails.data.website} target="_blank" rel="noopener noreferrer">
                    {organizationDetails.data.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              {t("organizations.single.details.subscriptionCredits")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">{t("organizations.single.details.availableCredits")}</span>
                <span className="text-2xl font-bold">{organizationDetails.data?.credits}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">{t("organizations.single.details.lastCreditReset")}</span>
                <span className="text-sm">
                  {organizationDetails.data?.lastCreditReset
                    ? format(new Date(organizationDetails.data.lastCreditReset), "PPP")
                    : t("organizations.single.details.na")
                  }
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-primary" />
              {t("organizations.single.details.accountDetails")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">{t("organizations.single.details.organizationId")}</span>
                <code className="text-xs bg-muted p-1 rounded w-fit mt-1">
                  {organizationDetails.data?.id}
                </code>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">{t("organizations.single.details.memberSince")}</span>
                <span className="flex items-center gap-2 text-sm mt-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {organizationDetails.data?.createdAt
                    ? format(new Date(organizationDetails.data.createdAt), "PPP")
                    : t("organizations.single.details.na")
                  }
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}