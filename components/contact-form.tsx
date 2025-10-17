"use client"
import { ContactFormState, handleContact } from "@/action/server"
import { useActionState } from "react"
import Form from 'next/form'


export default function ContactForm() {
    const initialState: ContactFormState = {
        errors: {},
        success: "",
    }
    const [state, action, isPending] = useActionState(handleContact, initialState)
    return (
        <>
            <Form action={action} className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text" name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border border-gray-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {state.errors?.name && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email" name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border border-gray-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {state.errors?.email && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.email}</p>}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">Message <span className="text-red-500">*</span></label>
                    <textarea
                        rows={4} name="message"
                        placeholder="Write your message..."
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border border-gray-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {state.errors?.message && <p className="text-sm text-red-600 mt-2 font-semibold">{state.errors?.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-orange-700 hover:bg-orange-800 transition text-white font-semibold shadow-lg cursor-pointer" disabled={isPending}
                    >
                        Send Message
                    </button>
                    {state.errors?.formError && <p className="text-sm text-red-600 mt-2 font-semibold bg-red-200 border-red-500 p-3 rounded-md">{state.errors?.formError}</p>}
                    {state.success && <p className="text-sm text-green-600 mt-2 font-semibold bg-green-200 border-green-500 p-3 rounded-md">{state.success}</p>}
                </div>
            </Form>
        </>
    )
}