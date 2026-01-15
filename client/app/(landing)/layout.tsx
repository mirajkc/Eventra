import type { Metadata } from "next";
import Antigravity from "@/components/Antigravity";

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
        <div className="w-full h-screen z-[-1] absolute" >
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.5}
            waveAmplitude={1}
            particleSize={1}
            lerpSpeed={0.2}
            color={'#3343d8'}
            particleVariance={1}
            autoAnimate={true} />
        </div>
        <div>
          <LandingNavbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
