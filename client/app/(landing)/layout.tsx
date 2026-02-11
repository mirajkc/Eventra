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
        <LandingNavbar />
        <div className="w-full h-screen absolute" >
          <Antigravity
            count={500}
            magnetRadius={30}
            ringRadius={15}
            waveSpeed={0.08}
            waveAmplitude={0.2}
            particleSize={0.6}
            lerpSpeed={0.02}
            color={'#0000ff'}
            particleVariance={4}
            autoAnimate={true}
            fieldStrength={2}
            rotationSpeed={0}
            depthFactor={0.4}
            pulseSpeed={0.8}
            particleShape="capsule"
          />
        </div>
        <div>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
