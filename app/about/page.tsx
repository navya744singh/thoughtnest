import HeroSection from "@/components/header/hero-section";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About – Discover Our Story, Mission and Values",
  description: "Find out about our journey, from a simple dream to a space where ideas connect, stories inspire, and learning never stops.",
}

export default function About() {
    return (
        <main>
            <HeroSection title="About" subtitle="Discover our mission and values." />

            {/* About Content */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
                {/* Our Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Every blog starts with a dream and ours was simple. We wanted
                            to create a place where ideas flow freely. We wanted to share
                            thoughts that matter and connect with people through words.
                            Over time this blog grew into a voice for inspiration and
                            learning.
                        </p>
                    </div>
                    <div className="bg-gradient-to-tr from-orange-500/30 to-orange-700/40 rounded-2xl h-80 lg:h-80 shadow-xl relative">
                        <Image src="/about.webp" alt="Post" fill className="p-6 object-cover" />
                    </div>
                </motion.div>

                {/* Mission & Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-700/40 to-orange-900/30 rounded-2xl h-80 lg:h-80 shadow-xl"></div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Mission & Values
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe in honesty and creativity. Every article is written
                            with passion and clarity. We value curiosity and knowledge
                            because these drive us to explore more. Our mission is simple.
                            Inspire people. Share stories. Build connections.
                        </p>
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        There are thousands of blogs online. However what makes us
                        different is our dedication to simplicity. We write in a way
                        that connects. Our content is not just information. It is
                        inspiration. If you are looking for ideas that stay with you
                        then this is your place.
                    </p>
                </motion.div>
            </section>
        </main>
    )
}