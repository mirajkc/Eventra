import type { Metadata } from "next";

import LandingNavbar from "@/components/landing/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Eventra - Landing Page",
  description: "Eventra All In One Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <LandingNavbar />
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
