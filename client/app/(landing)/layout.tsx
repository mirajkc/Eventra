import type { Metadata } from "next";
import RippleGrid from "@/components/RippleGrid.jsx";
import NavBar from "@/components/landing/NavBar";
export const metadata: Metadata = {
  title: "Eventra | Landing Page",
  description: "The all in one event management platform",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className="absolute h-screen w-full top-0 left-0 overflow-hidden">
        <RippleGrid
          enableRainbow={true}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      {children}
    </div>
  );
} 