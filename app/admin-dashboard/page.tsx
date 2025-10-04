import SideBar from "@/components/dashboard/sidebar";
import RecentBlog from "@/components/dashboard/recent-blog";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard – Create Blogs and Manage Content",
  description: "Dashboard gives you tools to create blogs, edit content, and manage posts. Control your writing journey in one simple hub.",
}

export default async function DashboardPage({searchParams}: {searchParams: Promise<{page?: string}>}) {
  const currentPage = Number((await searchParams).page) || 1;
  const ITEM_PER_PAGE = 10;
  const skip = (currentPage - 1) * ITEM_PER_PAGE;
  const take = ITEM_PER_PAGE;

  const [blogPosts, total] = await prisma.$transaction([
    prisma.blog.findMany({
      orderBy: {createdAt: "desc"},
      include: {comments: true},
      skip,
      take,
    }),
    prisma.blog.count(),
  ])

  const totalPage = Math.ceil(total / ITEM_PER_PAGE);

  return (
    <main className="p-6 overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="my-2">
          <h1 className="font-bold text-2xl">Manage Blogs</h1>
        </div>
        <SideBar />
      </div>
      <div className="my-6">
       <RecentBlog blogPosts={blogPosts} currentPage={currentPage} totalPage={totalPage} />
      </div>
    </main>
  );
}
