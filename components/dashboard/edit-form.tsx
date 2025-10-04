"use client"
import { handleEdit } from "@/action/server";
import { Button } from "@/components/ui/button";
import type { Blog } from "@prisma/client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { FormEvent, startTransition, useActionState, useState } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type EditFormProps = {
    blog: Blog
}

export default function EditForm({ blog }: EditFormProps) {
    const [description, setDescription] = useState(blog.description);

    const [state, action, isPending] = useActionState(handleEdit.bind(null, blog.id), { errors: {} });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("description", description);
        startTransition(() => {
            action(formData);
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white dark:bg-gray-900 shadow-lg border p-6 rounded-xl"
            encType="multipart/form-data"
        >
            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Title  <span className="text-red-500">*</span>
                </label>
                <input
                    type="text" name="title" defaultValue={blog.title}
                    className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {state.errors?.title && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.title}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Description <span className="text-red-500">*</span>
                </label>
                <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    className="custom-quill bg-white dark:bg-gray-800 dark:text-white rounded-lg min-h-[200px]"
                />
                {state.errors?.description && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.description}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Category <span className="text-red-500">*</span>
                </label>
                <input
                    type="text" name="category" defaultValue={blog.category}
                    className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {state.errors?.category && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.category}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Upload Image <span className="text-red-500">*</span>
                </label>
                <input
                    type="file" name="image"
                    accept="image/*"
                    className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none"
                />

                {
                    blog.image && (
                        <div className="w-36 h-24 relative mt-2">
                            <Image src={`/upload/${blog.image}`} fill alt={blog.title} className="object-cover rounded border-3 border-border" />
                        </div>
                    )
                }

            </div>

            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Slug
                </label>
                <input
                    type="text" name="slug" defaultValue={blog.slug}
                    className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-200">
                    Author <span className="text-red-500">*</span>
                </label>
                <input
                    type="text" name="author" defaultValue={blog.author}
                    className="w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {state.errors?.author && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.author}</p>}
            </div>
            <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto cursor-pointer mt-2" disabled={isPending}>
                    {isPending ? "Loading" : "Update Blog"}
                </Button>
            </div>
            {state.errors?.formError && <p className="text-sm text-red-600 mt-2 font-semibold bg-red-200 border-red-500 p-3 rounded-md">{state.errors?.formError}</p>}
        </form>
    )
}