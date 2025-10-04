import * as motion from "motion/react-client"
import { Card } from "../ui/card"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import Link from "next/link"
import type { Blog } from "@prisma/client"

type BlogPostsProps = {
    post: Blog;
    index: number;
}

export default function BlogPosts({ post, index }: BlogPostsProps) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>

                <Card className="group pt-0 overflow-hidden">
                    <div className="relative w-full h-50 overflow-hidden">
                        <Image src={`/upload/${post.image}`} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <div className="px-5">
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>{post.author.substring(0, 1).toLocaleUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-semibold text-foreground my-2">{post.author}</span>
                        </div>
                        <div className="my-3">
                            {/* <span className="text-foreground text-sm font-semibold">Technology</span> */}
                            <Badge className="py-1.5">{post.category}</Badge>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                            <h3 className="text-lg font-bold my-2 line-clamp-1">{post.title}</h3>
                        </Link>
                        <p className="line-clamp-2 text-muted-foreground text-sm">
                            {post.description.replace(/<[^>]+>/g, "")}
                        </p>
                        <div className="mt-3 mb-5 italic">
                            <span className="text-sm text-muted-foreground">{post.createdAt.toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}</span>
                        </div>
                        <div className="mt-3">
                            <Link href={`/blog/${post.slug}`} className="text-orange-700 dark:text-orange-400 font-semibold hover:underline">Read More →</Link>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </>
    )
}