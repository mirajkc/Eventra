import NavBar from "@/components/NavBar/NavBar";
import { OrganizationsSidebar } from "@/components/organizations/OrganizationsSidebar";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventra - Organizations",
  description: "All organizations active on Eventra. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <NavBar />
      <div className="flex flex-col md:flex-row max-w-7xl w-full p-4 min-h-screen mt-4 mb-8 gap-4">
        <div className="w-full md:w-1/4" ><OrganizationsSidebar /></div>
        <div className="w-full md:w-3/4" >{children}</div>
      </div>
      <Footer />
    </div>
  );
}
