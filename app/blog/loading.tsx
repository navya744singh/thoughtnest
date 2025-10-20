// app/blog/loading.tsx
import BlogPostsSkeleton from "@/components/blog/blog-post-skeleton";
import SearchBarSkeleton from "@/components/header/search-bar-skeleton";

export default function Loading() {
    return (
        <main>
            {/* Hero Skeleton */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-700/40 to-orange-900/70 -z-10" />

                {/* Grid container matches real HeroSection */}
                <div className="w-full max-w-6xl py-10 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left Text Placeholder */}
                    <div className="text-center lg:text-left">
                        <div
                            aria-hidden
                            className="h-14 md:h-20 rounded-md bg-white/20 animate-pulse w-3/4 md:w-2/3 mx-auto lg:mx-0 mb-4"
                        />
                        <div
                            aria-hidden
                            className="mt-4 h-4 md:h-5 bg-white/10 animate-pulse max-w-xl mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Right Decorative Block Placeholder */}
                    <div className="hidden lg:flex justify-center">
                        <div
                            aria-hidden
                            className="p-10 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 w-72 h-60 flex items-center justify-center animate-pulse"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Section Skeleton */}
            <section className="mx-auto px-6 max-w-6xl py-16">
                {/* Heading Skeleton */}
                <div className="mb-12 text-center">
                    <div
                        aria-hidden
                        className="inline-block h-10 md:h-14 rounded bg-gray-200/80 dark:bg-gray-700 animate-pulse w-56"
                    />
                </div>

                {/* Search Skeleton */}
                <div className="max-w-3xl mx-auto pb-16">
                    <SearchBarSkeleton />
                </div>

                {/* Posts Grid Skeleton */}
                <BlogPostsSkeleton />
               
            </section>
        </main>
    );
}
