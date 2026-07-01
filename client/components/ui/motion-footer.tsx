"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Calendar, House, Info, Rocket, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function MagneticButton({
	className,
	children,
	...props
}: MagneticButtonProps) {
	const localRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const element = localRef.current;
		if (!element) return;

		const ctx = gsap.context(() => {
			const handleMouseMove = (e: MouseEvent) => {
				const rect = element.getBoundingClientRect();
				const halfWidth = rect.width / 2;
				const halfHeight = rect.height / 2;
				const x = e.clientX - rect.left - halfWidth;
				const y = e.clientY - rect.top - halfHeight;

				gsap.to(element, {
					x: x * 0.4,
					y: y * 0.4,
					rotationX: -y * 0.15,
					rotationY: x * 0.15,
					scale: 1.05,
					ease: "power2.out",
					duration: 0.4,
				});
			};

			const handleMouseLeave = () => {
				gsap.to(element, {
					x: 0,
					y: 0,
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					ease: "elastic.out(1, 0.3)",
					duration: 1.2,
				});
			};

			element.addEventListener("mousemove", handleMouseMove);
			element.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				element.removeEventListener("mousemove", handleMouseMove);
				element.removeEventListener("mouseleave", handleMouseLeave);
			};
		}, element);

		return () => ctx.revert();
	}, []);

	return (
		<button
			ref={localRef}
			type="button"
			className={cn("cursor-pointer", className)}
			{...props}
		>
			{children}
		</button>
	);
}

function MarqueeItem({ items }: { items: string[] }) {
	return (
		<div className="flex items-center space-x-12 px-6">
			{items.map((item, index) => (
				<React.Fragment key={item}>
					<span>{item}</span>
					{index < items.length - 1 ? (
						<span className="text-primary/60">✦</span>
					) : null}
				</React.Fragment>
			))}
		</div>
	);
}

export function CinematicFooter() {
	const router = useRouter();
	const { t } = useTranslation();
	const wrapperRef = useRef<HTMLDivElement>(null);
	const giantTextRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	const marqueeItems = [
		t("landing.featuresSection.quickActions"),
		t("landing.featuresSection.fastResponsive"),
		t("landing.featuresSection.eventAnalysis"),
		t("landing.featuresSection.dynamicFilters"),
		t("landing.featuresSection.andMuchMore"),
	];

	useEffect(() => {
		if (typeof window === "undefined" || !wrapperRef.current) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				giantTextRef.current,
				{ y: "10vh", scale: 0.8, opacity: 0 },
				{
					y: "0vh",
					scale: 1,
					opacity: 1,
					ease: "power1.out",
					scrollTrigger: {
						trigger: wrapperRef.current,
						start: "top 80%",
						end: "bottom bottom",
						scrub: 1,
					},
				},
			);

			gsap.fromTo(
				[headingRef.current, linksRef.current],
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: wrapperRef.current,
						start: "top 40%",
						end: "bottom bottom",
						scrub: 1,
					},
				},
			);
		}, wrapperRef);

		return () => ctx.revert();
	}, []);

	const goTo = (href: string) => {
		router.push(href);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			ref={wrapperRef}
			className="relative h-screen w-full"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<footer className="cinematic-footer-wrapper fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
				<div className="footer-aurora animate-footer-breathe pointer-events-none absolute top-1/2 left-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px]" />
				<div className="footer-bg-grid pointer-events-none absolute inset-0 z-0" />

				<div
					ref={giantTextRef}
					className="footer-giant-bg-text pointer-events-none absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
				>
					EVENTRA
				</div>

				<div className="absolute top-12 left-0 z-10 w-full scale-110 -rotate-2 overflow-hidden border-y border-border/50 bg-background/60 py-4 shadow-2xl backdrop-blur-md">
					<div className="animate-footer-scroll-marquee flex w-max text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase md:text-sm">
						<MarqueeItem items={marqueeItems} />
						<MarqueeItem items={marqueeItems} />
					</div>
				</div>

				<div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
					<h2
						ref={headingRef}
						className="footer-text-glow mb-12 text-center text-5xl font-black tracking-tighter md:text-8xl"
					>
						{t("footer.cinematic.readyToBegin")}
					</h2>

					<div
						ref={linksRef}
						className="flex w-full flex-col items-center gap-6"
					>
						<div className="flex w-full flex-wrap justify-center gap-4">
							<MagneticButton
								onClick={() => goTo("/home")}
								className="footer-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
							>
								<House className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
								{t("footer.cinematic.home")}
							</MagneticButton>

							<MagneticButton
								onClick={() => goTo("/auth/register")}
								className="footer-glass-pill group flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-foreground md:text-base"
							>
								<Rocket className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
								{t("footer.cinematic.getStarted")}
							</MagneticButton>
						</div>

						<div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-6">
							<MagneticButton
								onClick={() => goTo("/events")}
								className="footer-glass-pill px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
							>
								<span className="inline-flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									{t("footer.cinematic.events")}
								</span>
							</MagneticButton>
							<MagneticButton
								onClick={() => goTo("/organizations")}
								className="footer-glass-pill px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
							>
								<span className="inline-flex items-center gap-2">
									<Users className="h-4 w-4" />
									{t("footer.cinematic.organization")}
								</span>
							</MagneticButton>
							<MagneticButton
								onClick={() => goTo("/about")}
								className="footer-glass-pill px-6 py-3 text-xs font-medium text-muted-foreground hover:text-foreground md:text-sm"
							>
								<span className="inline-flex items-center gap-2">
									<Info className="h-4 w-4" />
									{t("footer.aboutUs")}
								</span>
							</MagneticButton>
						</div>
					</div>
				</div>

				<div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 px-6 pb-8 md:flex-row md:px-12">
					<div className="order-2 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase md:order-1 md:text-xs">
						{t("footer.cinematic.copyright")}
					</div>

					<div className="footer-glass-pill order-1 flex cursor-default items-center gap-2 rounded-full border-border/50 px-6 py-3 md:order-2">
						<span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:text-xs">
							{t("footer.cinematic.craftedWith")}
						</span>
						<span className="animate-footer-heartbeat text-sm text-destructive md:text-base">
							❤
						</span>
						<span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:text-xs">
							{t("footer.cinematic.by")}
						</span>
						<span className="ml-1 text-xs font-black tracking-normal text-foreground md:text-sm">
							Eventra
						</span>
					</div>

					<MagneticButton
						onClick={scrollToTop}
						aria-label={t("footer.cinematic.backToTop")}
						className="footer-glass-pill group order-3 flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
					>
						<ArrowUp className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1.5" />
					</MagneticButton>
				</div>
			</footer>
		</div>
	);
}
