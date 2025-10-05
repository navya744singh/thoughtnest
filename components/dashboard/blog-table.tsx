import RecentBlog from "@/components/dashboard/recent-blog";
import { prisma } from "@/lib/prisma";

export default async function BlogTable({ currentPage }: { currentPage: number }) {
    const ITEM_PER_PAGE = 10;
    const skip = (currentPage - 1) * ITEM_PER_PAGE;
    const take = ITEM_PER_PAGE;

    const [blogPosts, total] = await prisma.$transaction([
        prisma.blog.findMany({
            orderBy: { createdAt: "desc" },
            include: { comments: true },
            skip,
            take,
        }),
        prisma.blog.count(),
    ])

    const totalPage = Math.ceil(total / ITEM_PER_PAGE);
    return (
        <>
            <div className="my-6">
                <RecentBlog blogPosts={blogPosts} currentPage={currentPage} totalPage={totalPage} />
            </div>
        </>
    )
}