
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/ui/Footer"; ``
import UserSidebar from "@/components/user/UserSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventra - User Settings",
  description: "Eventra All In One Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col max-w-7xl w-full min-h-screen mx-auto" >
        <div className="sticky top-4 z-50" >
          <NavBar />
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-6 max-w-7xl w-full mx-auto px-4">
          <div className="w-full  md:w-1/4">
            <UserSidebar />
          </div>
          <main className="w-full min-h-screen md:w-3/4">
            {children}
          </main>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
