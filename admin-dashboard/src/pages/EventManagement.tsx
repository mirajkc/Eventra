import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

export default function EventManagement() {
  //admin can create a new user, update the user and also delete the user 
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [pagination, setPageniation] = useState({});

  const fetchUsersDetails = async () => {
    try {
      setLoading(true)

    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsersDetails()
  }, [])

  if(loading){
    return <div className="flex items-center justify-center min-h-screen min-w-screen" >
      <Spinner />
    </div>
  }

    return (
        <div>
            <h1>Event Management</h1>
        </div>
    )
}