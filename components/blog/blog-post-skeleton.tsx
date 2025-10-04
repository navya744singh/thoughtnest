import * as motion from "motion/react-client";

export default function BlogPostsSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-4">
    {/* <div className="grid gap-8 md:grid-cols-3"> */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="animate-pulse"
        >
          <div className="overflow-hidden rounded-xl border bg-card shadow">
            {/* Image skeleton */}
            <div className="relative w-full h-48 bg-gray-300 dark:bg-gray-700" />

            <div className="p-5">
              {/* Author skeleton */}
              <div className="flex gap-3 items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>

              {/* Category skeleton */}
              <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

              {/* Title skeleton */}
              <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3" />

              {/* Description skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-4 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>

              {/* Date skeleton */}
              <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-3" />

              {/* Read More skeleton */}
              <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
