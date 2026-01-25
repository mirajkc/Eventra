
import Link from "next/link";

export const footerLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Events",
  },
  {
    href: "/",
    label: "Organizations",
  },
  {
    href: "/",
    label: "Pricing",
  },
]

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 mb-4">
      <div className="bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm/50  rounded-lg shadow-sm p-8 text-black dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
              <h1 className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer" >Eventra</h1>
            </Link>
            <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
              Eventra is a platform for event planning and management. With the sophisticated techology and credits system.
            </p>
          </div>

          <div className="flex flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col text-sm space-y-2.5">
              <h2 className="font-semibold mb-5 text-black dark:text-white">Company</h2>
              {footerLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-black dark:text-white mb-5">Contact</h2>
            <div className="text-sm space-y-6 max-w-sm">
              <p className="text-gray-600 dark:text-gray-400">
                For any inquiries or support, please contact us at:
              </p>
              <div className="flex items-center">
                <input
                  className="rounded-l-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-200 w-full max-w-64 h-11 px-3 text-black dark:text-white"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200 px-4 h-11 text-white rounded-r-md font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center border-t mt-8 border-gray-300 dark:border-gray-700">
          <p className=" text-center text-gray-600 dark:text-gray-400 text-sm italic mt-4">
            Copyright 2026 © <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Eventra</Link> All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}