import { Spinner } from "@/components/ui/spinner"
import axiosInstance from "@/configs/axios.config"
import { useEffect, useState } from "react"

export default function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    fetchNotifications()
  }, [])


  const fetchNotifications = async () => {
    try {
      const response = await axiosInstance.get(`/admin/get-all-notifications?take=${10}&page=${1}`)
      const data = await response.data
      setNotifications(data.notifications)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }



  if(loading){
    return <div className="flex items-center justify-center min-h-screen w-full" >
      <Spinner />
    </div>
  }
    return (
        <div className="p-4">
            <h1>Notifications</h1>
        </div>
    )
}