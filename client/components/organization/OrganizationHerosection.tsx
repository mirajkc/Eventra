"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ISingleOrganization } from "@/types/organization.types"
import { Globe, Calendar, ExternalLink, ShieldCheck, Plus } from "lucide-react"
import * as motion from "motion/react-client"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { format } from "date-fns"
import getAccessToken from "@/lib/access.token"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

interface OrganizationHeroSectionProps {
  organizationData: ISingleOrganization
}


export default function OrganizationHeroSection({ organizationData }: OrganizationHeroSectionProps) {
  const { t } = useTranslation();
  const params = useParams()
  const organizationId = params.id
  const [isJoined, setIsJoined] = useState<boolean>(false)
  const [userRole, setUserRole] = useState("MEMBER")
  useEffect(() => {
    checkIfJoined()
  }, [])
  const checkIfJoined = async () => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/is-user-joined/${organizationId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      if (!result.message) {
        setIsJoined(false)
        return
      }
      if (!result.data.loggedInUserDetails.role) {
        setUserRole("MEMBER")
      }
      setIsJoined(result.data.hasJoined)
      setUserRole(result.data.loggedInUserDetails[0].role)

    } catch (error) {
      setIsJoined(false)
    }
  }
  const handleJoin = async () => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/join-organization/${organizationId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      if (!result.message) {
        toast.error(t("organizations.single.hero.errorJoining"))
        return
      }
      toast.success(result.message)
      checkIfJoined()
    } catch (error) {
      toast.error(t("organizations.single.hero.errorJoining"))
    }
  }
  const handleLeave = async () => {
    const accessToken = await getAccessToken()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/leave-organization/${organizationId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      if (!result.message) {
        toast.error(t("organizations.single.hero.errorLeaving"))
        return
      }
      toast.success(result.message)
      checkIfJoined()
    } catch (error) {
      toast.error(t("organizations.single.hero.errorLeaving"))
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 shadow-xl backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/50">
      {/* Banner/Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden md:h-64 lg:h-80">
        <Image
          src={organizationData.thumbnail ? organizationData.thumbnail : '/banner_placeholder.png'}
          alt={organizationData.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
          sizes="100vw"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-1 left-1 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-background bg-white shadow-2xl dark:bg-neutral-900 md:h-44 md:w-44 "
        >
          <Image
            src={organizationData.image ? organizationData.image : '/organization_profile.jpg'}
            alt={organizationData.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 176px"
          />
        </motion.div>
      </div>

      {/* Profile Section */}
      <div className="px-6 pb-10 md:px-12">
        <div className="flex flex-col items-center gap-6 mt-4 md:flex-row md:items-end">
          {/* Info Details */}
          <div className="flex w-full flex-col gap-4 pt-4 md:pt-0">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <h1 className="bg-linear-to-br from-neutral-900 to-neutral-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-neutral-400 md:text-4xl">
                    {organizationData.name}
                  </h1>
                  <div className="flex gap-2">
                    {organizationData.isPremium && (
                      <Badge className="bg-amber-500 hover:bg-amber-600 border-none text-white shadow-sm gap-1 animate-pulse">
                        <ShieldCheck className="w-3 h-3" /> {t("organizations.single.hero.premium")}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="capitalize px-3 py-1 font-semibold tracking-wide">
                      {organizationData.type.toLowerCase()}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-neutral-500 dark:text-neutral-400 md:justify-start">
                  {organizationData.website && (
                    <Link
                      href={organizationData.website.startsWith('http') ? organizationData.website : `https://${organizationData.website}`}
                      target="_blank"
                      className="group flex items-center gap-2 transition-all hover:text-primary"
                    >
                      <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      <span className="border-b border-transparent group-hover:border-primary">
                        {(() => {
                          try {
                            const url = organizationData.website.startsWith('http')
                              ? organizationData.website
                              : `https://${organizationData.website}`;
                            return new URL(url).hostname;
                          } catch {
                            return organizationData.website;
                          }
                        })()}
                      </span>
                      <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{t("organizations.single.hero.memberSince")} {format(new Date(organizationData.createdAt), "MMMM yyyy")}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end w-full md:flex-row gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto flex gap-2"
                >
                  {
                    userRole === "OWNER" || userRole === "CREATOR" ? (
                      <>
                        <Link
                          className="w-full md:w-auto"
                          href={`/organization/${organizationId}/create-event`}>
                          <Button
                            size="lg"
                            className="w-full md:w-auto h-12 hover:cursor-pointer rounded-2xl bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 "
                          >
                            <Plus />
                            {t("organizations.single.hero.createEvent")}
                          </Button></Link>
                      </>
                    ) : (<></>)
                  }

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto flex gap-2"
                >

                  {
                    isJoined ? (
                      <Button
                        onClick={handleLeave}
                        size="lg"
                        className="h-12 w-full hover:cursor-pointer rounded-2xl bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 md:w-auto"
                      >
                        {t("organizations.single.hero.leaveOrganization")}
                      </Button>
                    ) : (
                      <Button
                        onClick={handleJoin}
                        size="lg"
                        className="h-12 w-full hover:cursor-pointer rounded-2xl bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 md:w-auto"
                      >
                        {t("organizations.single.hero.joinOrganization")}
                      </Button>
                    )
                  }
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 border-t border-neutral-100 pt-8 dark:border-neutral-800/50"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-3 text-lg font-bold text-neutral-900 dark:text-neutral-100">{t("organizations.single.hero.aboutOrganization")}</h3>
              <p className="max-w-4xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {organizationData.description || t("organizations.single.hero.defaultDescription")}
              </p>
            </div>

            {/* Quick Stats or Additional Info could go here */}
            <div className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-900/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500">{t("organizations.single.hero.credits")}</span>
                <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{organizationData.credits} pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500">{t("organizations.single.hero.status")}</span>
                <Badge variant={organizationData.isPremium ? "default" : "secondary"} className="text-[10px] h-5">
                  {organizationData.isPremium ? t("organizations.single.hero.activePremium") : t("organizations.single.hero.standard")}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500">{t("organizations.single.hero.lastUpdated")}</span>
                <span className="text-sm text-neutral-900 dark:text-neutral-100">{format(new Date(organizationData.updatedAt), "PP")}</span>
              </div>
              <Link href={`/credit/purchase/${organizationData.id}`}>
                <Button
                  size={'sm'}
                  className="p-2 hover:cursor-pointer w-full"
                >
                  {t("organizations.single.hero.donateCredits")}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}