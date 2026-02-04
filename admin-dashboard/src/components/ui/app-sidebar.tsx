"use client"

import * as React from "react"
import {
  CalendarDays,
  Files,
  LayoutDashboard,
  ScrollText,
  Users,
  Bell,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Building
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useAuthStore } from "@/state/auth.state"
import type { IUserDetails } from "@/types/user.types"
import { NavUser } from "./nav-user"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"



export function AppSidebar() {
  const userDetails:IUserDetails = useAuthStore((state) => state.userDetails)  
  const [isContentManagementOpen, setIsContentManagementOpen] = React.useState(true)
  const user = {
    name: userDetails.name,
    email: userDetails.email,
    image: userDetails.image || "",
  }
  return (
    <Sidebar className="flex flex-col">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex  items-center justify-between">
             <div className="flex items-center gap-2 px-2 py-1 font-semibold text-primary">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  E
                </div>
                Eventra Admin
                
             </div>
             <div>
              <ModeToggle />
             </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        {/* Dashboard */}
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link to="/">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Content Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                 <SidebarMenuButton 
                    onClick={() => setIsContentManagementOpen(!isContentManagementOpen)} 
                    tooltip="Content Management"
                    className="justify-between"
                 >
                    <div className="flex items-center gap-2">
                        <Files />
                        <span>Content Management</span>
                    </div>
                    {isContentManagementOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                 </SidebarMenuButton>
                 {isContentManagementOpen && (
                   <SidebarMenuSub>
                     <SidebarMenuSubItem>
                       <SidebarMenuSubButton asChild>
                         <Link to="/content/event">
                           <CalendarDays />
                           <span>Event</span>
                         </Link>
                       </SidebarMenuSubButton>
                     </SidebarMenuSubItem>
                     <SidebarMenuSubItem>
                       <SidebarMenuSubButton asChild>
                         <Link to="/content/user">
                           <Users />
                           <span>User</span>
                         </Link>
                       </SidebarMenuSubButton>
                     </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                       <SidebarMenuSubButton asChild>
                         <Link to="/content/organization">
                           <Building />
                           <span> Organization</span>
                         </Link>
                       </SidebarMenuSubButton>
                     </SidebarMenuSubItem>
                   </SidebarMenuSub>
                 )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Notifications & Error */}
        <SidebarGroup>
           <SidebarGroupLabel>System</SidebarGroupLabel>
           <SidebarGroupContent>
             <SidebarMenu>
               <SidebarMenuItem>
                 <SidebarMenuButton asChild tooltip="Notifications">
                   <Link to="/notifications">
                     <Bell />
                     <span>Notifications</span>
                   </Link>
                 </SidebarMenuButton>
               </SidebarMenuItem>
                <SidebarMenuItem>
                 <SidebarMenuButton asChild tooltip="Errors">
                   <Link to="/errors">
                     <AlertCircle />
                     <span>Errors</span>
                   </Link>
                 </SidebarMenuButton>
               </SidebarMenuItem>
                 <SidebarMenuItem>
                 <SidebarMenuButton asChild tooltip="Admin Log">
                   <Link to="/admin-log">
                     <ScrollText />
                     <span>Admin Log</span>
                   </Link>
                 </SidebarMenuButton>
               </SidebarMenuItem>
             </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}