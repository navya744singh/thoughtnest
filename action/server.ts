"use server"
import path from "node:path";
import fs from "node:fs/promises";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


type ContactFormError = {
    name?: string;
    email?: string;
    message?: string;
    formError?: string;
}

export type ContactFormState = {
    errors: ContactFormError;
    success?: string;
}

export const handleContact = async (prev: ContactFormState, formData: FormData): Promise<ContactFormState> => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const errors: ContactFormError = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) return { errors };

    return {
        errors: {},
        success: "Your message has been sent successfully!",
    }
}


// Create Form

type CreateFormError = {
    title?: string;
    description?: string;
    category?: string;
    image?: string;
    // slug?: string;
    author?: string;
    formError?: string;
}

type CreateFormState = {
    errors: CreateFormError;
    success?: string;
}

const toSlug = (str: string): string => {
    return str
        .toLocaleLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") // remove special characters
        .replace(/\s+/g, "-")         // replace spaces with -
        .replace(/-+/g, "-");         // collapse multiple dashes
}

export const handleCreate = async (prev: CreateFormState, formData: FormData): Promise<CreateFormState> => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;
    const slugInput = formData.get("slug") as string | null;
    const author = formData.get("author") as string;

    const errors: CreateFormError = {};

    if (!title) errors.title = "Title is required";
    if (!description || description.trim() === "" || description === "<p><br></p>") errors.description = "Description is required";
    if (!category) errors.category = "Category is required";
    if (!author) errors.author = "Author is required";
    if (!image || image.name === "undefined") errors.image = "Image is required";

    if (Object.keys(errors).length > 0) return { errors };

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
    if (!allowedTypes.includes(image.type)) {
        return {
            errors: { image: "Unsupported file type. Please upload an image (PNG, JPG, GIF, WebP.)" }
        }
    }

    if (image.size > 5 * 1024 * 1024) errors.image = "File is too large. Max size is 5MB.";
    const timestamp = Date.now();
    const ext = path.extname(image.name);
    const safeFilename = `upload-${timestamp}${ext}`;
    const filePath = path.join(process.cwd(), "public", "upload", safeFilename);
    const fileData = Buffer.from(await image.arrayBuffer());
    await fs.writeFile(filePath, fileData);



    // ✅ Slug logic
    let slug: string;
    if (slugInput && slugInput.trim().length > 0) {
        slug = toSlug(slugInput); // slug field filled → convert it
    } else {
        slug = toSlug(title);     // slug field empty → generate from title
    }

    try {
        await prisma.blog.create({ data: { title, description, category, image: safeFilename, slug, author } });
    } catch (err: unknown) {
        return {
            errors: { formError: err instanceof Error ? err.message : "Some internal error occured" }
        }
    }

    revalidatePath("/admin-dashboard");
    redirect("/admin-dashboard");

    return {
        errors: {},
        success: "Your blog has been created successfully.",
    }

}

// Create Form End

// Edit Form

type EditFormError = {
    title?: string;
    description?: string;
    category?: string;
    image?: string;
    author?: string;
    formError?: string;
}

type EditFormState = {
    errors: EditFormError;
    success?: string;
}

// const toSlug = (str: string): string => {
//     return str
//         .toLocaleLowerCase()
//         .trim()
//         .replace(/[^a-z0-9\s-]/g, "") // remove special characters
//         .replace(/\s+/g, "-")         // replace spaces with -
//         .replace(/-+/g, "-");         // collapse multiple dashes
// }

export const handleEdit = async (blogId: string, prev: EditFormState, formData: FormData): Promise<EditFormState> => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File | null;
    const slugInput = formData.get("slug") as string;
    const author = formData.get("author") as string;

    const errors: EditFormError = {};

    if (!title) errors.title = "Title is required";
    if (!description || description.trim() === "" || description === "<p><br></p>") errors.description = "Description is required";
    if (!category) errors.category = "Category is required";
    if (!author) errors.author = "Author is required";
    // if (!image || image.name === "undefined") errors.image = "Image is required";

    if (Object.keys(errors).length > 0) return { errors };

    const existingBlog = await prisma.blog.findUnique({ where: { id: blogId } });
    if (!existingBlog) return { errors: { formError: "Blog not found" } };

    let finalImage = existingBlog.image;

    if (image && image.size > 0) {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
        if (!allowedTypes.includes(image.type)) {
            return {
                errors: { image: "Unsupported file type. Please upload an image (PNG, JPG, GIF, WebP.)" }
            }
        }

        if (image.size > 5 * 1024 * 1024) {
            return {
                errors: { image: "File is too large. Max size is 5MB." }
            }
        }
        const timestamp = Date.now();
        const ext = path.extname(image.name);
        const safeFilename = `upload-${timestamp}${ext}`;
        const filePath = path.join(process.cwd(), "public", "upload", safeFilename);
        const fileData = Buffer.from(await image.arrayBuffer());
        await fs.writeFile(filePath, fileData);

        // ✅ delete old file if exists
        if (existingBlog.image) {
            const oldPath = path.join(process.cwd(), "public", "upload", existingBlog.image);
            try {
                await fs.unlink(oldPath);
            } catch {
                console.warn("Old image not found or already deleted", oldPath);
            }
        }
        finalImage = safeFilename;
    }



    // ✅ Slug logic
    let slug: string;
    if (slugInput && slugInput.trim().length > 0) {
        slug = toSlug(slugInput); // slug field filled → convert it
    } else {
        slug = toSlug(title);     // slug field empty → generate from title
    }

    try {
        await prisma.blog.update({ where: { id: blogId }, data: { title, description, category, image: finalImage, slug, author } });
    } catch (err: unknown) {
        return {
            errors: { formError: err instanceof Error ? err.message : "Some internal error occured" }
        }
    }

    revalidatePath("/admin-dashboard");
    redirect("/admin-dashboard");

    return {
        errors: {},
        success: "Your blog has been updated successfully.",
    }

}

// Edit Form End

// Delete Blog End
export const deleteBlog = async (blogId: string) => {
    const existingBlog = await prisma.blog.findUnique({ where: { id: blogId } });
    if (existingBlog?.image) {
        const oldPath = path.join(process.cwd(), "public", "upload", existingBlog.image);
        try {
            await fs.unlink(oldPath);
        } catch {
            console.warn("Old image not found or already deleted", oldPath);
        }
    }
    await prisma.blog.delete({ where: { id: blogId } });
    revalidatePath("/admin-dashboard");
}
// Delete Blog End


// Comment Start

type CommentFormError = {
    name?: string;
    email?: string;
    body?: string;
    formError?: string;
}

type CommentFormState = {
    errors: CommentFormError;
}

export const handleComment = async (blogId: string, slug: string, prev: CommentFormState, formData: FormData): Promise<CommentFormState> => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const body = formData.get("body") as string;
    const errors: CommentFormError = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) errors.name = "Name is required";

    if (!email) {
        errors.email = "Email is required";
    }else if(!emailRegex.test(email)){
        errors.email = "Please enter a valid email address";
    }

    if (!body) errors.body = "Comment is required";

    if(Object.keys(errors).length > 0) return {errors};

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) return {errors: {email: "Please enter a valid email address"}};

    try {
        await prisma.comment.create({data: {name, email, body, blogId}});
    } catch (err: unknown) {
        return {
            errors: {formError: err instanceof Error ? err.message : "Failed to submit comment. Please try again."}
        }
    }

    revalidatePath(`/blog/${slug}`)

    return { errors: {} };
}

// Comment End


//  Search Start

export const handleSearch = async (formData: FormData) => {
    const searchText = formData.get("search") as string;
    if(searchText && searchText.trim().length > 0){
        redirect(`/blog?search=${searchText}`);
    }
}

//  Search End
