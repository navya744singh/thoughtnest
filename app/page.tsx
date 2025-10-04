import HomeHeroSection from "@/components/header/home-hero-section";
import CategoriesSection from "@/components/home/categories-section";
import LatestBlog from "@/components/home/latest-blog";
import QuotesSectopn from "@/components/home/quotes-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thought Nest – Inspiring Blogs, Stories & Ideas Daily",
  description: "Thought Nest shares blogs on fitness, mindfulness, home ideas, and trends. Stay inspired with stories that spark creativity and innovation.",
}

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <LatestBlog />
      <CategoriesSection />
      <QuotesSectopn />
    </main>
  );
}
