"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useAnimations } from "@/lib/animations";
import ProductGrid from "@/components/ProductGrid";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

type Tab = "best-sellers" | "new-arrivals";

interface FeaturedProductsClientProps {
  featured: Product[];
  newArrivals: Product[];
}

const tabs: { key: Tab; label: string }[] = [
  { key: "best-sellers", label: "Best Sellers" },
  { key: "new-arrivals", label: "New Arrivals" },
];

export default function FeaturedProductsClient({
  featured,
  newArrivals,
}: FeaturedProductsClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>("best-sellers");
  const { fadeUp } = useAnimations();

  const products = activeTab === "best-sellers" ? featured : newArrivals;

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-subtle/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-accent/30" />
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium">
              Curated Collection
            </span>
            <Leaf className="w-4 h-4 text-accent" />
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-5 leading-tight">
            Our Favorites
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-base leading-relaxed">
            Handpicked soaps and shampoos our community can&apos;t stop raving
            about. Crafted with intention, made with love.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="flex justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-7 py-2.5 rounded-full text-sm tracking-wide font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                  : "text-foreground-muted hover:text-foreground hover:bg-surface-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <ProductGrid>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </ProductGrid>

        <motion.div {...fadeUp} className="text-center mt-16">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 px-8 py-3.5 border border-accent/30 hover:border-accent hover:bg-accent/5 rounded-full text-sm tracking-wide text-foreground transition-all duration-300"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
