
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteBlog from "./delete-blog";
import type { Prisma } from "@prisma/client";

type RecentBlogProps = {
    blogPosts: Prisma.BlogGetPayload<{
        include: { comments: true }
    }>[];
    currentPage: number;
    totalPage: number;
}

export default async function RecentBlog({ blogPosts, currentPage, totalPage }: RecentBlogProps) {

    return (
        <>
            <Card className="overflow-hidden border border-orange-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <Table className="w-full border-collapse min-w-[700px]">
                        <TableHeader className="bg-orange-100/50 dark:bg-gray-800/50">
                            <TableRow>
                                <TableHead className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200">Title</TableHead>
                                <TableHead className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200">Category</TableHead>
                                <TableHead className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200">Comments</TableHead>
                                <TableHead className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200">Date</TableHead>
                                <TableHead className="text-left p-4 font-semibold text-gray-700 dark:text-gray-200">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                blogPosts.map((post) => (
                                    <TableRow key={post.id} className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors">
                                        <TableCell className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors">{post.title.length > 65 ? post.title.slice(0, 65) + "..." : post.title}</TableCell>
                                        <TableCell className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors"><Badge className="px-2 py-1 text-xs font-medium bg-orange-200 text-orange-900 dark:bg-orange-900 dark:text-orange-300">{post.category}</Badge></TableCell>
                                        <TableCell className="border-t text-center border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors">{post.comments.length}</TableCell>
                                        <TableCell className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors">{post.createdAt.toLocaleDateString("en-us", { day: "numeric", month: "short", year: "numeric" })}</TableCell>
                                        <TableCell className="border-t border-orange-200/50 dark:border-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-800/40 transition-colors space-x-2 flex">

                                            <Link href={`/admin-dashboard/${post.id}/edit`}>
                                                <Button className="cursor-pointer"><Pencil /></Button>
                                            </Link>
                                            <DeleteBlog blogId={post.id} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </div>
            </Card>

            {/* Pagination */}

            <div className="flex justify-center items-center mt-6 gap-2">

                {
                    currentPage > 1 ? (
                        <Link href={`?page=${currentPage - 1}`} passHref>
                            <Button variant={"outline"} size={"sm"} className="cursor-pointer">Prev</Button>
                        </Link>
                    ) : (
                        <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Prev</Button>
                    )
                }

                <span className="px-4 text-foreground/70 text-sm font-medium">Page {currentPage} of {totalPage}</span>

                {
                    currentPage < totalPage ? (
                        <Link href={`?page=${currentPage + 1}`} passHref>
                            <Button variant={"outline"} size={"sm"} className="cursor-pointer">Next</Button>
                        </Link>
                    ) : (
                        <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Next</Button>
                    )
                }

            </div>
        </>
    )
}