"use client"
import { useAppSelector } from "@/state/hooks"
import { Spinner } from "../ui/spinner"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import getAccessToken from "@/lib/access.token"
export default function JoinedOrganizationList() {
  const loggedInUserDetails = useAppSelector((state) => { return state.authSlice.userDetails} )
  const [organizations, setOrganizations] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    getJoinedOrganizations()
  }, [])

  const getJoinedOrganizations = async () => {
    try {
      setLoading(true)
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/me/getdetails?organizationMember=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      })
      const result = await response.json()
      console.log(result);
      
    } catch (error) {
      toast.error("Error occurred while fetching joined organizations. ")
    }finally{
      setLoading(false)
    }
  }



    return (
        <div className="flex flex-col gap-4 min-h-[60vh] shadow rounded-lg dark:bg-neutral-900 mb-8">
            {
              loading ? (
                <div className="flex items-center justify-center min-h-[40vh]">
                  <Spinner className="size-6" />
                </div>
              ) : (
                <div>
                  
                </div>
              )
            }
        </div>
    )
}