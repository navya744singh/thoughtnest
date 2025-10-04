"use client"
import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { deleteBlog } from "@/action/server";
import toast from "react-hot-toast";

export default function DeleteBlog({ blogId }: { blogId: string }) {
    const [isPending, startTransition] = useTransition();
    return (
        <form action={() => {
            startTransition(async () => {
                try {
                    await deleteBlog(blogId);
                    toast.success("Blog deleted successfully ✅"); // ✅ Success toast
                } catch {
                    toast.error("Failed to delete blog ❌"); // ❌ Error toast
                }
            })
        }}>
            <Button type="submit" className="cursor-pointer" variant={"destructive"} disabled={isPending}>
                {isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" /> // ✅ loading animation
                ) : (
                    <Trash2 className="h-4 w-4" />
                )}
            </Button>
        </form>
    )
}