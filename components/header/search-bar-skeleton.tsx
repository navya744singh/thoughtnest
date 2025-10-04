
export default function SearchBarSkeleton() {
  return (
    <div className="relative w-full h-9 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse">
      {/* Icon placeholder */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      {/* Input placeholder */}
      <div className="absolute left-10 right-0 top-1/2 -translate-y-1/2 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
}
