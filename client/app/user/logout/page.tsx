"use client"
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import getAccessToken from "@/lib/access.token";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export default function Logout() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      if (!response.ok) {
        throw new Error(t("user.logout.error"))
      }
      const result = await response.json()
      Cookies.remove("accessToken")
      Cookies.remove("refreshToken")
      toast.success(result.message)
      window.location.href = "/"
    } catch (error) {
      toast.error(t("user.logout.error"))
    } finally {
      setLoading(false)
    }
  };

  const handleCancel = () => {
    router.replace("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen" >
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-md min-h-[60vh] p-4" >
      <div className="flex flex-col gap-2 h-1/4">
        <h1 className="text-2xl font-bold tracking-tight">{t("user.logout.title")}</h1>
        <p className="text-muted-foreground text-sm mt-2">
          {t("user.logout.subtitle")}
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center  h-[40vh] " >
        <div className="flex flex-col justify-center items-center w-full h-full " >
          <h1 className="text-2xl font-bold tracking-tight">{t("user.logout.areYouSure")}</h1>
          <p className="text-muted-foreground text-sm mt-2">
            {t("user.logout.subtitle")}
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <Button onClick={handleLogout} className="hover:bg-red-700 transition hover:scale-105 " variant="destructive">{t("user.logout.logoutBtn")}</Button>
            <Button onClick={handleCancel} className="hover:bg-blue-700 transition hover:scale-105 " >{t("user.logout.cancelBtn")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}