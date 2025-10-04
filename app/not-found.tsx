import Link from "next/link";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found, Let’s Get You Back Home",
  description: "404 Page Not Found. Wrong turn? Head back home or explore trending blogs filled with health, lifestyle, and creative insights.",
};

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        {/* Big 404 Text */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-8xl md:text-9xl font-extrabold text-orange-700 mb-4"
        >
          404
        </motion.h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Sorry but the page you are looking for does not exist.  
          It might have been moved or deleted.  
          Please check the URL or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-semibold shadow-md transition"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200 font-semibold shadow-md transition"
          >
            Visit Blog
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
