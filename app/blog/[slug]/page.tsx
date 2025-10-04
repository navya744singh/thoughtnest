import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/comment/comment-section";
import { Suspense } from "react";
import BlogDetailsSkeleton from "@/components/blog/blog-details-skeleton";
import { prisma } from "@/lib/prisma"
import CommentList from "@/components/comment/comment-list";
import { Metadata } from "next";


type BlogDetailsProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogDetailsProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blog.findUnique({ where: { slug } });
  const cleanDescription = post?.description.replace(/<[^>]+>/g, ""); // Remove HTML tags

  return {
    title: post?.title ?? "404 – Page Not Found, Let’s Get You Back Home",
    description: cleanDescription
      ? cleanDescription.slice(0, 145) +
      (cleanDescription.length > 145 ? "..." : "")
      : "404 Page Not Found. Wrong turn? Head back home or explore trending blogs filled with health, lifestyle, and creative insights.",
  }
}


export async function generateStaticParams() {
  const blogPosts = await prisma.blog.findMany()
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = await params;
  const post = await prisma.blog.findUnique({ where: { slug } });
  const comments = await prisma.comment.findMany({ where: { blogId: post?.id }, orderBy: { createdAt: "desc" } });

  if (!post) return notFound();

  return (
    <>
      <Suspense fallback={<BlogDetailsSkeleton />}>
        <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm mb-6 text-gray-600 dark:text-gray-400"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>{" "}
              / <span className="font-semibold">{post.title}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900 dark:text-white leading-tight mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-12"
            >
              <span className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt={post.author} />
                  <AvatarFallback>
                    {post.author.substring(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {post.author}
                  </span>
                  <span>{post.createdAt.toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric", })}</span>
                </div>
              </span>
              <span className="px-2 py-1 font-medium bg-orange-100 dark:bg-orange-800/40 text-orange-600 dark:text-orange-300 text-xs rounded-full">
                {post.category}
              </span>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-14"
            >
              <div className="w-full h-82 md:h-[36rem] bg-gradient-to-tr from-orange-200 to-orange-500 dark:from-orange-800 dark:to-orange-600 rounded-xl shadow-lg overflow-hidden relative">
                <Image
                  src={`/upload/${post.image}`}
                  alt={post.title || "Blog cover image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose max-w-none prose-orange dark:prose-invert"

            >

              <div className="" dangerouslySetInnerHTML={{ __html: post.description }} />

            </motion.article>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">

            <CommentSection blogId={post.id} slug={post.slug} />
            <CommentList comments={comments} />

          </div>
        </section>

      </Suspense>
    </>
  );
}
