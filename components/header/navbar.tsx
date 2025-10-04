"use client"
import Link from "next/link";
import SearchBar from "./search-bar";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import SearchBarSkeleton from "./search-bar-skeleton";

export default function NavBar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-background/90">

            <div className="border-b border-border/80">
                <div className="flex justify-between items-center px-6 max-w-6xl mx-auto py-3 md:py-4 lg:py-5">
                    {/* Logo */}
                    <h2>
                        <Link href="/" className="text-xl md:text-2xl text-foreground font-semibold">Thought <span className="text-orange-700">Nest</span></Link>
                    </h2>

                    {/* Search */}
                    <div className="hidden md:block lg:w-sm xl:w-md">
                        <Suspense fallback={<SearchBarSkeleton />}>
                            <SearchBar />
                        </Suspense>
                    </div>

                    {/* Desktop menu */}
                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex items-center gap-5 text-muted-foreground transition-colors duration-200">
                            <Link href="/" className={`hover:text-foreground ${pathname === "/" && "text-orange-700"}`}>Home</Link>
                            <Link href="/about" className={`hover:text-foreground ${pathname === "/about" && "text-orange-700"}`}>About</Link>
                            <Link href="/blog" className={`hover:text-foreground ${pathname === "/blog" && "text-orange-700"}`}>Blog</Link>
                            <Link href="/contact" className={`hover:text-foreground ${pathname === "/contact" && "text-orange-700"}`}>Contact</Link>
                        </div>
                        <ModeToggle />
                        <Button variant={"outline"} size={"icon"} className="md:hidden text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {
                isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-b border-border/80">
                        <div className="py-4 mx-8">
                            <Suspense fallback={<SearchBarSkeleton />}>
                                <SearchBar />
                            </Suspense>
                        </div>
                        <div className="flex flex-col items-center gap-5 text-muted-foreground transition-colors duration-200 p-4">
                            <Link href="/" className={`hover:text-foreground ${pathname === "/" && "text-orange-700"}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            <Link href="/about" className={`hover:text-foreground ${pathname === "/about" && "text-orange-700"}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link href="/blog" className={`hover:text-foreground ${pathname === "/blog" && "text-orange-700"}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                            <Link href="/contact" className={`hover:text-foreground ${pathname === "/contact" && "text-orange-700"}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}