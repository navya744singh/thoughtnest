"use client"
import * as motion from "motion/react-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Comment } from "@prisma/client";

type CommentListProps = {
    comments: Comment[]
}
export default function CommentList({comments}: CommentListProps){

    return(
        // Comments List
            
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-md backdrop-blur-sm"
            >
              <Avatar>
                <AvatarImage src="" alt={comment.name} />
                <AvatarFallback>
                  {comment.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {comment.name}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {comment.body}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                  {comment.createdAt.toLocaleDateString("en-us", {day: "numeric", month: "long", year: "numeric"})}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
    )
}