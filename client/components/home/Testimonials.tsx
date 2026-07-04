"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Star } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const IMAGES = [
	"https://images.unsplash.com/photo-1655459936211-3acceea7129d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1658288583338-ee30ae6875c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fE5lcGFsaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
	"https://images.unsplash.com/photo-1520673737237-97fd29dfff0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE5lcGFsaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
	"https://images.unsplash.com/photo-1656238968989-b2e4410d00ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fE5lcGFsaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
	"https://plus.unsplash.com/premium_photo-1760141101589-26d6ae61fdb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE5lcGFsaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
	"https://images.unsplash.com/photo-1653104625552-98cb3848b399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxOZXBhbGklMjBnaXJsfGVufDB8fDB8fHww",
];

function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex items-center gap-0.5">
			{[1, 2, 3, 4, 5].map((star) => {
				const filled = rating >= star;
				const half = !filled && rating >= star - 0.5;
				return (
					<span key={star} className="relative inline-block w-4 h-4">
						<span className="text-neutral-200 dark:text-neutral-700">
							<Star className="w-4 h-4" fill="currentColor" strokeWidth={0} />
						</span>
						{(filled || half) && (
							<span
								className="absolute inset-0 overflow-hidden"
								style={{ width: filled ? "100%" : "50%" }}
							>
								<Star className="w-4 h-4" fill="#2F6F62" strokeWidth={0} />
							</span>
						)}
					</span>
				);
			})}
		</div>
	);
}

function TestimonialsCard({
	quote,
	name,
	role,
	image,
	rating,
	isRightRail = false,
}: {
	quote: string;
	name: string;
	role: string;
	image: string;
	rating: number;
	isRightRail?: boolean;
}) {
	return (
		<div
			className={`group relative flex lg:h-115 flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800 ${
				isRightRail
					? "lg:border-r lg:border-t lg:border-b"
					: "lg:border-l lg:border-t lg:border-b"
			} bg-white dark:bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50`}
		>
			{/* Watermark */}
			<span
				aria-hidden
				className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[6rem] leading-none text-neutral-100 dark:text-neutral-800"
			>
				&#8221;
			</span>

			{/* Rating */}
			<div className="relative z-10">
				<StarRating rating={rating} />
			</div>

			{/* Quote */}
			<p
				className="relative z-10 mt-8 lg:max-w-[24ch] text-[1.15rem] leading-9 text-neutral-800 dark:text-neutral-200"
				style={{
					fontFamily: "var(--font-fraunces, Georgia, serif)",
				}}
			>
				{quote}
			</p>

			{/* Spacer */}
			<div className="flex-1" />

			{/* Footer */}
			<div className="relative z-10 border-t border-neutral-200 dark:border-neutral-800 pt-6">
				<div className="flex items-center gap-4">
					<img
						src={image}
						alt={name}
						className="h-11 w-11 rounded-full object-cover ring-2 ring-[#2F6F62]/15 dark:ring-[#2F6F62]/30"
					/>

					<div>
						<h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
							{name}
						</h4>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							{role}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Testimonials() {
	const { t } = useTranslation();
	const sectionRef = useRef<HTMLElement>(null);
	const leftRailRef = useRef<HTMLDivElement>(null);
	const rightRailRef = useRef<HTMLDivElement>(null);
	const isMobile = useIsMobile();

	const testimonials = Array.from({ length: 6 }, (_, i) => ({
		quote: t(`home.testimonials.t${i + 1}`, ""),
		name: t(`home.testimonials.n${(i % 4) + 1}`, ""),
		role: t(`home.testimonials.r${(i % 4) + 1}`, ""),
		image: IMAGES[i],
		rating: i === 3 ? 4.9 : 5,
	}));

	const leftTestimonials = testimonials.slice(0, 3);
	const rightTestimonials = testimonials.slice(3, 6);

	useGSAP(
		() => {
			const firstWord = new SplitText(".first-text", { type: "words" });
			const secondWord = new SplitText(".second-text", { type: "words" });
			const thirdWord = new SplitText(".third-text", { type: "words" });
			const revealTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 60%",
					end: "top top",
					toggleActions: "play none none reverse",
				},
			});

			revealTimeline
				.from(firstWord.words, {
					yPercent: 150,
					opacity: 0,
					ease: "power3.out",
					duration: 0.8,
					stagger: 0.02,
				})
				.from(
					secondWord.words,
					{
						yPercent: 150,
						opacity: 0,
						ease: "power3.out",
						duration: 0.8,
						stagger: 0.02,
					},
					"<",
				)
				.from(
					thirdWord.words,
					{
						yPercent: 150,
						opacity: 0,
						ease: "power3.out",
						duration: 0.8,
						stagger: 0.02,
					},
					"<",
				);

			if (isMobile) return;

			if (!leftRailRef.current || !rightRailRef.current || !sectionRef.current)
				return;
			const innerPin = ScrollTrigger.create({
				trigger: rightRailRef.current,
				start: "top top",
				end: "bottom bottom",
				pin: leftRailRef.current,
				pinSpacing: false,
			});

			ScrollTrigger.refresh();

			return () => {
				innerPin.kill();
				firstWord.revert();
				secondWord.revert();
				thirdWord.revert();
			};
		},
		{ dependencies: [isMobile], revertOnUpdate: true },
	);

	return (
		<section
			ref={sectionRef}
			className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 py-20 sm:py-24 lg:py-38 -z-20"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-0">
					<div ref={leftRailRef} className="lg:flex lg:h-screen lg:items-start">
						<div className="w-full max-w-2xl">
							<div className="px-6 sm:px-8 sm:py-10 lg:px-10">
								<p className="first-text text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-500">
									{t("home.testimonials.eyebrow", "What people say")}
								</p>
								<h2
									className="second-text mt-5 max-w-md text-4xl font-medium leading-[0.96] text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl"
									style={{ fontFamily: "var(--font-fraunces)" }}
								>
									{t("home.testimonials.title1", "Stories from the people")}{" "}
									{t("home.testimonials.title2", "using Eventra.")}
								</h2>
								<p className="third-text mt-5 max-w-lg text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
									{t(
										"home.testimonials.subtitle",
										"A short look at the voices behind the events, the teams, and the moments they remember.",
									)}
								</p>
							</div>
						</div>
					</div>

					<div className="mt-10 lg:mt-0">
						<div
							ref={rightRailRef}
							className="bg-white dark:bg-neutral-950 lg:ml-[-1px] pb-10"
						>
							{/* Mobile: single column with all cards */}
							<div className="flex flex-col w-full lg:hidden gap-4">
								{testimonials.map((t, i) => (
									<TestimonialsCard
										key={i}
										quote={t.quote}
										name={t.name}
										role={t.role}
										image={t.image}
										rating={t.rating}
									/>
								))}
							</div>

							{/* Desktop: two-column split */}
							<div className="hidden lg:flex flex-row w-full mx-auto">
								<div className="flex flex-col w-1/2 border-r border-neutral-200 dark:border-neutral-800">
									{leftTestimonials.map((t, i) => (
										<TestimonialsCard
											key={i}
											quote={t.quote}
											name={t.name}
											role={t.role}
											image={t.image}
											rating={t.rating}
										/>
									))}
								</div>

								<div className="flex flex-col w-1/2 border-l border-neutral-200 dark:border-neutral-800 mt-58">
									{rightTestimonials.map((t, i) => (
										<TestimonialsCard
											key={i}
											quote={t.quote}
											name={t.name}
											role={t.role}
											image={t.image}
											rating={t.rating}
											isRightRail={true}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
