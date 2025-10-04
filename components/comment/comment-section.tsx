"use client";
import { useActionState } from "react";
import * as motion from "motion/react-client";
import { handleComment } from "@/action/server";

export default function CommentSection({ blogId, slug }: { blogId: string; slug: string }) {

  const [state, action, isPending] = useActionState(handleComment.bind(null, blogId, slug), { errors: {} })

  return (
    <>
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Leave a Comment
        </motion.h3>

        {/* Comment Form */}
        <motion.form
          // onSubmit={handleSubmit}
          action={action} noValidate
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-50 dark:from-gray-800 dark:to-gray-900 shadow-lg mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <input
              type="text" name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {state.errors?.name && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.name}</p>}
            </div>
            <div>
              <input
              type="email" name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {state.errors?.email && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.email}</p>}
            </div>
          </div>
          <div className="mb-4">
            <textarea
            rows={4} name="body"
            placeholder="Write your comment..."
            className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {state.errors?.body && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.body}</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-orange-700 hover:bg-orange-800 text-white font-semibold shadow-md transition cursor-pointer disabled:bg-red-700/50 disabled:cursor-not-allowed" disabled={isPending}
          >
            {isPending ? "Loading..." : "Post Comment"}
          </button>
          {state.errors?.formError && <p className="text-sm text-red-600 mt-2 font-semibold bg-red-200 border-red-500 p-3 rounded-md">{state.errors?.formError}</p>}
        </motion.form>
</>
  );
}
