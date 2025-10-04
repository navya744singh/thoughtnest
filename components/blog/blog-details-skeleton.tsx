import * as motion from "motion/react-client";

export default function BlogDetailsSkeleton() {
  return (
    <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="max-w-5xl mx-auto animate-pulse">
        {/* Title Skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="h-10 md:h-14 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"
        />

        {/* Meta Info Skeleton */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <span className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          <span className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Cover Image Skeleton */}
        <div className="w-full h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl mb-10" />

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-10/12 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-9/12 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </section>
  );
}
