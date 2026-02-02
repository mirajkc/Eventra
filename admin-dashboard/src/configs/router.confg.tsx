import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from '@/pages/NotFound'
import { useState } from 'react'
import Login from '@/pages/Login'



export default function RouterConfiguration() {
  const [loggedIn, setLoggedIn] = useState(false)
  const router = createBrowserRouter([
    { path: '/', Component: (loggedIn ? () => <>Logged In</> : Login) },
    { path: '*', Component: NotFound }
  ])

  return (<>
    <RouterProvider router={router} />
  </>
  )
}