import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer>
            <div className="bg-background border-t border-border/50">
                <div className="px-6 max-w-6xl mx-auto py-12 grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Thought <span className="text-orange-700">Nest</span></h3>
                        <p className="text-muted-foreground mb-4">Write that blog with the curiou minds of the digital age. Exploring the intersection of technology, design, and creativity.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300"><Twitter className="size-5" /><span className="sr-only">X</span></Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300"><Github className="size-5" /><span className="sr-only">Github</span></Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300"><Linkedin className="size-5" /><span className="sr-only">LinkedIn</span></Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300"><Instagram className="size-5" /><span className="sr-only">Instagram</span></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-1">
                            <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">About</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Blog</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Stay Updated</h4>
                        <p className="text-muted-foreground mb-4">Subscribe to get the latest posts delivered to your inbox.</p>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Input type="email" placeholder="Your email" />
                            <Button className="bg-orange-700 hover:bg-orange-900 cursor-pointer text-white dark:white">Subscribe</Button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyrigh */}
            <div className="py-3 border-t border-border/50 text-center text-sm text-muted-foreground bg-background" >
                <p>&copy; {new Date().getFullYear()} Thought Nest. All rights reserved.</p>
            </div>
        </footer>
    )
}