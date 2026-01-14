import Link from "next/link";
import { ModeToggle } from "../ThemeTrigger";

export default function NavBar() {
  return (
    <div >
      <nav className="sticky top-0 z-50 max-w-7xl mx-auto px-4 shadow-lg rounded-full mt-4 dark:shadow-gray-900 shadow-lg dark:text-white sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold ">Eventra</a>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="hidden md:block  hover:text-gray-500 hover:underline px-3 py-2 text-sm font-semibold transition-colors">Home</Link>
            <Link href="/events" className="px-3 hover:underline py-2 hover:text-gray-500 text-sm font-semibold transition-colors">Events</Link>
            <Link href="/organizations" className=" hover:underlinehidden md:block hover:text-gray-500 px-3 py-2 text-sm font-semibold transition-colors">Organizations</Link>
            <Link href="/organizations" className="hidden md:block hover:text-gray-500 px-3 py-2 hover:underline text-sm font-semibold transition-colors">Pricing</Link>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
} 