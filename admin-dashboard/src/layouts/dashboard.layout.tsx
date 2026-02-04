import { AppSidebar } from "@/components/ui/app-sidebar";
import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout() {
    return (
    <>
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className=" md:hidden flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-col gap-4 p-4">
             <Outlet  />
        </div>
      </SidebarInset>
       </SidebarProvider>
        </>
    )
}