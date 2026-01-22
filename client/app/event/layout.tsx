import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Eventra - Event",
  description: "Eventra the all in one event management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto shadow shadow-sm rounded-lg mt-3 p-4 mb-4 " >
        {children}
      </div>
      <Footer />
    </div>
  )
}
