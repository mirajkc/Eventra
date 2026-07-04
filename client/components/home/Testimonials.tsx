"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });
const TESTIMONIALS = [
	{
		quote:
			"Managing registrations, announcements, and attendees used to take hours. With Eventra, everything is organized in one place, making every event much easier to run.",
		name: "Aayush Shrestha",
		rating: 5,
		image: "https://images.unsplash.com/photo-1655459936211-3acceea7129d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		quote:
			"Our annual tech conference welcomed over 800 attendees without a single registration issue. The dashboard kept our entire team perfectly coordinated.",
		name: "Prerana Karki",
		rating: 5,
		image: "https://images.unsplash.com/photo-1658288583338-ee30ae6875c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fE5lcGFsaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
	},
	{
		quote:
			"Creating events, tracking participants, and sending updates has never been this simple. Eventra saved us countless hours of manual work.",
		name: "Rohan Adhikari",
		rating: 5,
		image: "https://images.unsplash.com/photo-1520673737237-97fd29dfff0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE5lcGFsaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		quote:
			"Our volunteers, sponsors, and organizers finally work from the same platform. Communication is faster, clearer, and far less stressful.",
		name: "Sanjana Gautam",
		rating: 4.9,
		image: "https://images.unsplash.com/photo-1656238968989-b2e4410d00ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fE5lcGFsaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
	},
	{
		quote:
			"The interface is clean and intuitive. Even first-time organizers learned the system quickly, which made launching our event much smoother.",
		name: "Bikash Lama",
		rating: 5,
		image: "https://plus.unsplash.com/premium_photo-1760141101589-26d6ae61fdb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE5lcGFsaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		quote:
			"From registrations to post-event follow-ups, everything happens in one place. Our attendees also appreciated the simple and modern experience.",
		name: "Asmita Bhattarai",
		rating: 5,
		image: "https://images.unsplash.com/photo-1653104625552-98cb3848b399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxOZXBhbGklMjBnaXJsfGVufDB8fDB8fHww",
	},
	// {
	// 	quote:
	// 		"We've organized multiple workshops using Eventra, and every event has been smoother than the last. It has become an essential part of our workflow.",
	// 	name: "Niraj Poudel",
	// 	rating: 4.9,
	// 	image: "https://images.unsplash.com/photo-1598096330417-df44f5614e8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fE5lcGFsaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
	// },
];

function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex items-center gap-0.5">
			{[1, 2, 3, 4, 5].map((star) => {
				const filled = rating >= star;
				const half = !filled && rating >= star - 0.5;
				return (
					<span key={star} className="relative inline-block w-4 h-4">
						<Star className="w-4 h-4" fill="#e5e7eb" strokeWidth={0} />
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
  image,
  rating,
	isRightRail = false,
}: {
  quote: string;
  name: string;
  image: string;
  rating: number;
	isRightRail?: boolean;
}) {
  return (
    <div className={`group relative flex h-115 flex-col overflow-hidden ${ isRightRail
      ? "border-r border-t border-b border-neutral-200"
      : "border-l border-t border-b border-neutral-200"} bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>

      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[6rem] leading-none text-neutral-100"
      >
        &#8221;
      </span>

      {/* Rating */}
      <div className="relative z-10">
        <StarRating rating={rating} />
      </div>

      {/* Quote */}
      <p
        className="relative z-10 mt-8 max-w-[24ch] text-[1.15rem] leading-9 text-neutral-800"
        style={{
          fontFamily: "var(--font-fraunces, Georgia, serif)",
        }}
      >
        {quote}
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="relative z-10 border-t border-neutral-200 pt-6">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-[#2F6F62]/15"
          />

          <div>
            <h4 className="text-lg font-medium text-neutral-900">
              {name}
            </h4>

            <p className="text-sm text-neutral-500">
              Verified Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Testimonials() {
	const sectionRef = useRef<HTMLElement>(null);
	const leftRailRef = useRef<HTMLDivElement>(null);
	const rightRailRef = useRef<HTMLDivElement>(null);

	const leftTestimonials = TESTIMONIALS.slice(0, 3);
	const rightTestimonials = TESTIMONIALS.slice(3, 6);

	useGSAP(() => {
		if (!leftRailRef.current || !rightRailRef.current) return;

		const pin = ScrollTrigger.create({
			trigger: rightRailRef.current,
			start: "top top",
			end: "bottom bottom",
			pin: leftRailRef.current,
			pinSpacing: false,
		});

		ScrollTrigger.refresh();

		return () => {
			pin.kill();
		};
	}, { dependencies: [] });

	return (
		<section
			ref={sectionRef}
			className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-38"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-0">
					<div
						ref={leftRailRef}
						className="lg:flex lg:h-screen lg:items-start"
					>
						<div className="w-full max-w-2xl">
							<div className="px-6 sm:px-8 sm:py-10 lg:px-10 ">
								<p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
									What people say
								</p>
								<h2
									className="mt-5 max-w-md text-4xl font-medium leading-[0.96] text-neutral-900 sm:text-5xl lg:text-6xl"
									style={{ fontFamily: "var(--font-fraunces)" }}
								>
									Stories from the people using Eventra.
								</h2>
								<p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
									A short look at the voices behind the events, the teams, and
									the moments they remember.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-10 lg:mt-0">
						<div
							ref={rightRailRef}
							className="bg-white lg:ml-[-1px]"
						>
							<div className="flex flex-row w-full mx-auto">
								<div className="flex flex-col w-1/2 border-r border-neutral-200">
									{leftTestimonials.map((t, i) => (
										<TestimonialsCard
											key={i}
											quote={t.quote}
											name={t.name}
											image={t.image}
											rating={t.rating}
											/>
										))}
								</div>

								<div className="flex flex-col w-1/2 border-l border-neutral-200 mt-58">
									{rightTestimonials.map((t, i) => (
										<TestimonialsCard
										key={i}
										quote={t.quote}
										name={t.name}
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
