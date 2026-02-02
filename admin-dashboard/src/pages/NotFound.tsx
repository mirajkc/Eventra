import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center py-16 md:py-0">
      <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-indigo-500">404</h1>
        <div className="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
        <p className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
        <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="flex items-center gap-4 mt-6">
          <Link to="/" className="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
            Return Home
          </Link>
          <Link to="/" onClick={() => window.location.reload()}
            className="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
            Reload Page
          </Link>
        </div>
      </div>
    </main>
  );
}