import BlogPosts from "../blog/blog-posts"
import { prisma } from "@/lib/prisma"

export default async function LatestBlogSection() {
    const blogPosts = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
    return (
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {/* Blog  */}

            {
                blogPosts.slice(0, 3).map((post, index) => (
                    <BlogPosts key={post.id} post={post} index={index} />
                ))
            }
        </div>
    )
}