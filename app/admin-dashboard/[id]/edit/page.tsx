import EditForm from "@/components/dashboard/edit-form";
import SideBar from "@/components/dashboard/sidebar";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Blog – Update and Improve Your Published Posts",
  description: "Edit Blog makes refining content easy. Update articles, fix errors, and refresh your posts to stay relevant and inspire readers.",
}

export async function generateStaticParams(){
  const blogPosts = await prisma.blog.findMany();
  return blogPosts.map((blog) => ({id: blog.id}));
}

export default async function EditBlog({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const blog = await prisma.blog.findUnique({where: {id}})
  if(!blog) return notFound();
  return (
    <div className="p-6 mx-auto mb-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl py-2 dark:text-white">Edit Blog</h1>
        <SideBar />
      </div>
     <EditForm blog={blog} />
    </div>
  );
}
