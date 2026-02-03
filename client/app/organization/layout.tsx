import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Eventra - Organization",
  description: "Eventra the all in one event management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <NavBar />
      <div className="flex flex-col min-h-screen  mx-auto shadow-sm rounded-lg mt-3 p-4 mb-4 " >
        {children}
      </div>
      <Footer />
    </div>
  )
}
