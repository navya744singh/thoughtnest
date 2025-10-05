import SideBar from "@/components/dashboard/sidebar";
import { Metadata } from "next";
import BlogTable from "@/components/dashboard/blog-table";
import { Suspense } from "react";
import BlogTableSkeleton from "@/components/dashboard/blog-table-skeleton";

export const metadata: Metadata = {
  title: "Dashboard – Create Blogs and Manage Content",
  description: "Dashboard gives you tools to create blogs, edit content, and manage posts. Control your writing journey in one simple hub.",
}

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const currentPage = Number((await searchParams).page) || 1;

  return (
    <main className="p-6 overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="my-2">
          <h1 className="font-bold text-2xl">Manage Blogs</h1>
        </div>
        <SideBar />
      </div>
      <Suspense fallback={<BlogTableSkeleton />}>
        <BlogTable currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
