import HeroSection from "@/components/home/HeroSection";
import LovedByMany from "@/components/home/LovedByMany";
import ScreenShotShowcase from "@/components/home/ScreenShotShowcase";
import SoMuchMore from "@/components/home/SoMuchMore";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <main className="mt-12">
      <HeroSection />
      <ScreenShotShowcase />
      <SoMuchMore />
      <LovedByMany />
      <CallToAction />
    </main>
  );
}