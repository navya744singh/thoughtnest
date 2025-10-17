import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import BlogPosts from "@/components/blog/blog-posts";
import NoSearchResult from "@/components/blog/no-search-result";

export default async function BlogSection({ search, currentPage }: { search: string; currentPage: number }) {

    const ITEMS_PER_PAGE = 3;
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;
    const take = ITEMS_PER_PAGE;

    const [blogPosts, total] = await prisma.$transaction([
        prisma.blog.findMany({
            orderBy: { createdAt: "desc" },
            skip,
            take,
            where: search ? {
                OR: [
                    { title: { contains: search } },
                    { category: { contains: search } },
                ]
            } : undefined
        }),
        prisma.blog.count({
            where: search ? {
                OR: [
                    { title: { contains: search } },
                    { category: { contains: search } },
                ]
            } : undefined
        }),
    ]);

    const totalPage = Math.ceil(total / ITEMS_PER_PAGE);

    return (
        <>
            {
                blogPosts.length > 0 ? (
                    <>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                            {blogPosts.map((post, index) => (
                                <BlogPosts key={post.id} post={post} index={index} />
                            ))}
                        </div>

                        { /* Pagination Placeholder */}
                        <div className="mt-16 flex justify-center gap-2">

                            {
                                currentPage > 1 ? (
                                    <Link href={`?search=${search}&page=${currentPage - 1}`} passHref>
                                        <Button disabled={currentPage === 1} variant={"outline"} size={"sm"} className="cursor-pointer">Prev</Button>
                                    </Link>
                                ) : (
                                    <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Prev</Button>
                                )
                            }


                            {
                                Array.from({ length: totalPage }).map((_, index) => (
                                    <Link key={index} href={`?search=${search}&page=${index + 1}`}>
                                        <Button variant={"outline"} size={"sm"} className={`cursor-pointer ${currentPage === index + 1 ? "text-white hover:text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-700 dark:hover:bg-orange-800" : ""}`}>{index + 1}</Button>
                                    </Link>
                                ))
                            }

                            {
                                currentPage < totalPage ? (
                                    <Link href={`?search=${search}&page=${currentPage + 1}`} passHref>
                                        <Button disabled={currentPage === totalPage} variant={"outline"} size={"sm"} className="cursor-pointer">Next</Button>
                                    </Link>
                                ) : (
                                    <Button disabled variant={"outline"} size={"sm"} className="cursor-not-allowed">Next</Button>
                                )
                            }

                        </div>
                    </>
                ) : (
                    <NoSearchResult />
                )
            }

        </>
    )
}