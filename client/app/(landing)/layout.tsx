import type { Metadata } from "next";

import LandingNavbar from "@/components/landing/Navbar";
import Preloader from "@/components/landing/Preloader";

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
			<Preloader />
			<div>
				<LandingNavbar />
				<div>{children}</div>
			</div>
		</>
	);
}
