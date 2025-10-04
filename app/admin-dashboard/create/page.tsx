import CreateForm from "@/components/dashboard/create-form";
import SideBar from "@/components/dashboard/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog – Start Writing Stories That Inspire",
  description: "Create Blog offers simple tools to write, format, and schedule posts. Start crafting stories today and publish them with confidence.",
}

export default function CreateBlog() {

  return (
    <div className="p-6 mx-auto mb-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl py-2 dark:text-white">Create Blog</h1>
        <SideBar />
      </div>
      <CreateForm/>
    </div>
  );
}
