import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventra - HomePage",
  description: "Eventra All In One Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col max-w-7xl  min-h-screen mx-auto" >
        <div className="sticky top-4 z-50" >
          <NavBar />
        </div>
        <div className="flex flex-col min-h-screen max-w-7xl mx-auto" >
          {children}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
