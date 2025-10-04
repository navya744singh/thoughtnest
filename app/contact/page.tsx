import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/header/hero-section";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Share Feedback, Questions or Ideas Today",
  description: "Contact us today to share suggestions, request support, or explore collaboration opportunities. Your message helps shape future stories.",
}

export default function Contact() {
    return (
        <main>
            <HeroSection title="Contact" subtitle="Reach out and let’s connect today." />

            {/* Contact Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Have questions or ideas? We are just a message away.
                        Reach out to us and we will connect with you soon.
                        Your feedback and suggestions mean the world to us.
                    </p>

                    <div className="space-y-4">
                        <p className="text-lg">
                            📍 <span className="text-muted-foreground">250 Market St, San Francisco, CA 94105</span>
                        </p>
                        <p className="text-lg">
                            📧 <a href="mailto:tnblogconnect@gmail.com" className="underline hover:text-orange-600">
                                tnblogconnect@gmail.com
                            </a>
                        </p>
                        <p className="text-lg">
                            📞 <a href="tel:+14155554376" className="underline hover:text-orange-600">
                                +1 (415) 555-4376
                            </a>
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-white/20"
                >
                    <ContactForm/>
                </motion.div>

            </section>
        </main>
    )
}