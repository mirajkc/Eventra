import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from '@/pages/NotFound'
import { useEffect, useState } from 'react'
import Login from '@/pages/Login'
import { useAuthStore } from '@/state/auth.state'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'



export default function RouterConfiguration() {
  const {getLoggedInUserDetails, userDetails, isUserLoggedIn, setIsUserLoggedIn } = useAuthStore()
  const [loading, setLoading] = useState(true)
  const getUserData = async() => {
    try {
      setLoading(true)
      await getLoggedInUserDetails()
      setLoading(false)
    } catch (error) {
      setIsUserLoggedIn(false)
    }finally{
      setLoading(false)
    }
  }

  const updateLoginStatus = () => {
    if(userDetails.id.length > 1){
      if(userDetails.role !== "ADMIN"){
        toast.error("Admin can only access admin panel")
        setIsUserLoggedIn(false)
        return
      }
      setIsUserLoggedIn(true)
    }
  }

  useEffect(()=> {
    getUserData()
  }, [])

  useEffect(()=> {
    updateLoginStatus()
  }, [userDetails])

  const router = createBrowserRouter([
    { path: '/', Component: (isUserLoggedIn ? () => <>Logged In</> : Login) },
    { path: '*', Component: NotFound }
  ])

  if(loading) {
    return (
      <>
      <div className='flex items-center justify-center min-h-screen'>
        <Spinner scale={8} />
      </div>
      </>
    )
  }

  return (<>
    <RouterProvider router={router} />
  </>
  )
}