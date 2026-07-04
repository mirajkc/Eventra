"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import KineticNav from "@/components/landing/KineticNav";
import MessageSection from "@/components/landing/MessageSection";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { useIsMobile } from "@/hooks/use-mobile";
import {
	FeaturesSkeleton,
	HeroSkeleton,
	HowItWorksSkeleton,
	LargeTextSkeleton,
	TestimonialsSkeleton,
} from "./skeletons";

const ScrambleHero = dynamic(
	() => import("@/components/landing/ScrambleHero"),
	{
		loading: () => <HeroSkeleton />,
	},
);
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks"), {
	loading: () => <HowItWorksSkeleton />,
});
const Features = dynamic(() => import("@/components/home/Features"), {
	loading: () => <FeaturesSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
	loading: () => <TestimonialsSkeleton />,
});
const LargeText = dynamic(() => import("@/components/landing/LargeText"), {
	loading: () => <LargeTextSkeleton />,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
	const smoothWrapperRef = useRef<HTMLElement>(null);
	const smoothContentRef = useRef<HTMLDivElement>(null);
	const isMobile = useIsMobile();

	useEffect(() => {
		document.documentElement.classList.add("scrollbar-hide");
		return () => {
			document.documentElement.classList.remove("scrollbar-hide");
		};
	}, []);

	useEffect(() => {
		if (sessionStorage.getItem("_landing_visited")) {
			sessionStorage.removeItem("_landing_visited");
			window.location.reload();
			return;
		}
		sessionStorage.setItem("_landing_visited", "true");
	}, []);

	useGSAP(
		() => {
			if (!smoothWrapperRef.current || !smoothContentRef.current || isMobile)
				return;

			const smoother = ScrollSmoother.create({
				wrapper: smoothWrapperRef.current,
				content: smoothContentRef.current,
				smooth: 1.5,
				effects: true,
				smoothTouch: 0.1,
			});

			return () => {
				smoother.kill();
				ScrollTrigger.getAll().forEach((st) => {
					st.kill();
				});
			};
		},
		{ dependencies: [] },
	);
	return (
		<>
			<KineticNav />
			<main className="w-full" ref={smoothWrapperRef}>
				<div ref={smoothContentRef}>
					<ScrambleHero />
					<MessageSection />
					<div className="w-full py-16 md:py-0">
						<HowItWorks />
					</div>

					<div className="w-full py-16 md:py-0 min-h-screen">
						<Features />
					</div>
					<div className="mx-auto px-4 sm:px-6 lg:px-8">
						<Testimonials />
					</div>
					<LargeText />
					<CinematicFooter />
				</div>
			</main>
		</>
	);
}
