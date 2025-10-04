import BlogPostsSkeleton from "@/components/blog/blog-post-skeleton";
import BlogPosts from "@/components/blog/blog-posts";
import NoSearchResult from "@/components/blog/no-search-result";
import HeroSection from "@/components/header/hero-section";
import SearchBar from "@/components/header/search-bar";
import SearchBarSkeleton from "@/components/header/search-bar-skeleton";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog – Stories That Inspire, Inform and Connect You",
  description: "Explore the blog for creative insights, wellness advice, and lifestyle guides. Find meaningful stories that inspire growth and learning.",
}

export default async function Blog({ searchParams }: { searchParams: Promise<{ search?: string; page?: string }> }) {
    const search = (await searchParams).search || "";
    const currentPage = Number((await searchParams).page) || 1;
    const ITEMS_PER_PAGE = 3;
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;
    const take = ITEMS_PER_PAGE;

    const [blogPosts, total] = await prisma.$transaction([
        prisma.blog.findMany({
            orderBy: { createdAt: "desc" },
            skip,
            take,
            where: search ? {
                OR: [
                    { title: { contains: search } },
                    { category: { contains: search } },
                ]
            } : undefined
        }),
        prisma.blog.count({
            where: search ? {
                OR: [
                    { title: { contains: search } },
                    { category: { contains: search } },
                ]
            } : undefined
        }),
    ]);

    const totalPage = Math.ceil(total / ITEMS_PER_PAGE);

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


                {
                    blogPosts.length > 0 ? (
                        <>

                            <Suspense fallback={<BlogPostsSkeleton />}>
                                <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                                    {blogPosts.map((post, index) => (
                                        <BlogPosts key={post.id} post={post} index={index} />
                                    ))}
                                </div>

                                { /* Pagination Placeholder */}
                                <div className="mt-16 flex justify-center gap-2">

                                    {
                                        currentPage > 1 ? (
                                            <Link href={`?search=${search}&page=${currentPage - 1}`} passHref>
                                                <Button disabled={currentPage === 1} variant={"outline"} size={"sm"} className="cursor-pointer">Prev</Button>
                                            </Link>
                                        ) : (
                                            <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Prev</Button>
                                        )
                                    }


                                    {
                                        Array.from({ length: totalPage }).map((_, index) => (
                                            <Link key={index} href={`?search=${search}&page=${index + 1}`}>
                                                <Button variant={"outline"} size={"sm"} className={`cursor-pointer ${currentPage === index + 1 ? "text-white hover:text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-700 dark:hover:bg-orange-800" : ""}`}>{index + 1}</Button>
                                            </Link>
                                        ))
                                    }

                                    {
                                        currentPage < totalPage ? (
                                            <Link href={`?search=${search}&page=${currentPage + 1}`} passHref>
                                                <Button disabled={currentPage === totalPage} variant={"outline"} size={"sm"} className="cursor-pointer">Next</Button>
                                            </Link>
                                        ) : (
                                            <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Next</Button>
                                        )
                                    }

                                </div>
                            </Suspense>
                        </>
                    ) : (
                        <NoSearchResult />
                    )
                }


            </section>
        </main>
    )
}