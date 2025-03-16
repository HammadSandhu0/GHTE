import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-4 py-10 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <div className="h-2 bg-indigo-500 w-24 mx-auto my-4 rounded-full"></div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
