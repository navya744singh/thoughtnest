import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeHeroSection() {
    return (
        <section className="min-h-[90vh] py-10 lg:py-12 flex items-center justify-center overflow-hidden bg-accent">

            <div className="px-6 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-foreground leading-tight mb-6">Writing That <span className="text-orange-700 italic">Resonate</span></h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">Good stories reflect pure vision and inspire progress while helping people grow and share kindness with strength always.
                        </p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <Button size="lg" className="group cursor-pointer" asChild>
                                <Link href="/blog">
                                    Read the Latest Post <ArrowRight className="ml-5 size-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:block">
                        <div className="relative">
                            <div className="size-80 bg-gradient-to-br from-orange-700/20 to-orange-700/80 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                            <div className="size-96 bg-gradient-to-tl from-orange-700/70 to-orange-700/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}