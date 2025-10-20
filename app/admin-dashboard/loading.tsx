import BlogTableSkeleton from "@/components/dashboard/blog-table-skeleton";
import SideBar from "@/components/dashboard/sidebar";


export default function Loading() {
  

  return (
    <main className="p-6 overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="my-2">
          <h1 className="font-bold text-2xl">Manage Blogs</h1>
        </div>
        <SideBar />
      </div>
      <BlogTableSkeleton />
    </main>
  );
}