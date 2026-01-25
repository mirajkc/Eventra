import Antigravity from "@/components/Antigravity";
import BlurText from "@/components/BlurText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventra - Auth",
  description: "Eventra All In One Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="hidden lg:flex justify-center items-center w-1/3 h-screen relative">
          <div className="absolute h-screen w-full">
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={4}
              waveSpeed={0.5}
              waveAmplitude={1}
              particleSize={2}
              lerpSpeed={0.2}
              color={'#3343d8'}
              particleVariance={1}
              autoAnimate={true} />
          </div>
          <BlurText text="Eventra Auth Section" delay={200}
            animateBy="words"
            direction="top" className=" text-xl md:text-2xl lg:text-4xl font-bold " />
        </div>
        <div className="w-full lg:w-2/3">
          {children}
        </div>
      </div>
    </>
  );
}
