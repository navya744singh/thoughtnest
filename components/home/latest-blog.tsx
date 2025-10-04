import * as motion from "motion/react-client"
import Link from "next/link"
import { Button } from "../ui/button"
import BlogPosts from "../blog/blog-posts"
import { Suspense } from "react"
import BlogPostsSkeleton from "../blog/blog-post-skeleton"
import { prisma } from "@/lib/prisma"

export default async function LatestBlog() {
    const blogPosts = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-bold">Latest <span className="text-orange-700">Blog</span></h2>
                <p className="text-lg text-muted-foreground">Stay updated with stories that inspire and inform bringing you closer to trends ideas news and insights that truly matter in daily life.</p>
            </motion.div>

            <Suspense fallback={<BlogPostsSkeleton />}>
                <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                    {/* Blog  */}

                    {
                        blogPosts.slice(0, 3).map((post, index) => (
                            <BlogPosts key={post.id} post={post} index={index} />
                        ))
                    }
                </div>
            </Suspense>

            <div className="mt-12 text-center">
                <Link href="/blog"><Button className="cursor-pointer">View All</Button></Link>
            </div>
        </section>
    )
}