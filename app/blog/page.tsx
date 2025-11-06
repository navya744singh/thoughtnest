import BlogPostsSkeleton from "@/components/blog/blog-post-skeleton";
import HeroSection from "@/components/header/hero-section";
import SearchBar from "@/components/header/search-bar";
import SearchBarSkeleton from "@/components/header/search-bar-skeleton";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { lazy, Suspense } from "react";
// const BlogSection = lazy(() => import("@/components/blog/blog-section"));
import BlogSection from "@/components/blog/blog-section";

export const metadata: Metadata = {
    title: "Blog – Stories That Inspire, Inform and Connect You",
    description: "Explore the blog for creative insights, wellness advice, and lifestyle guides. Find meaningful stories that inspire growth and learning.",
}

export default async function Blog({ searchParams }: { searchParams: Promise<{ search?: string; page?: string }> }) {
    const search = (await searchParams).search || "";
    const currentPage = Number((await searchParams).page) || 1;


    return (
        <main key={`blog-${search}-${currentPage}`}>
            <HeroSection title="Blog" subtitle="Read stories, ideas and insights that inspire." />

            {/* Blog Posts */}
            <section className="mx-auto px-6 max-w-6xl py-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Latest Posts
                    </h2>
                </motion.div>
                <div className="max-w-3xl mx-auto pb-16">
                    <Suspense fallback={<SearchBarSkeleton />}>
                        <SearchBar />
                    </Suspense>
                </div>

                <Suspense fallback={<BlogPostsSkeleton />}>
                    <BlogSection search={search} currentPage={currentPage} />
                </Suspense>

            </section>
        </main>
    )
}
