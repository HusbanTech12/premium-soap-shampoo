"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { useAnimations } from "@/lib/animations";
import PriceDisplay from "./PriceDisplay";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const { scaleIn } = useAnimations();

  const firstIngredient = product.ingredients[0];

  return (
    <motion.article
      {...scaleIn}
      className="group relative"
      onMouseEnter={() => product.images.length > 1 && setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface mb-5 shadow-[0_4px_24px_-4px_rgba(43,33,24,0.08)] group-hover:shadow-[0_12px_40px_-8px_rgba(43,33,24,0.14)] transition-shadow duration-500">
          <Image
            src={product.images[imgIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {product.badge && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-surface/95 backdrop-blur-md rounded-full text-[10px] font-medium tracking-[0.15em] uppercase text-foreground shadow-sm">
              {product.badge}
            </div>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <span className="px-5 py-2.5 bg-surface rounded-full text-[11px] font-medium tracking-[0.15em] uppercase text-foreground-muted shadow-sm">
                Sold Out
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <div className="bg-surface/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-wider uppercase text-foreground-muted">
                  {product.category}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent hover:bg-accent-strong text-white rounded-lg text-xs font-medium transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-lg text-foreground leading-snug group-hover:text-accent-strong transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <button
            onClick={() => setWishlisted(!wishlisted)}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="p-1.5 mt-0.5 shrink-0 text-foreground-muted hover:text-destructive transition-colors duration-200"
          >
            <Heart
              className={`w-4 h-4 transition-all duration-200 ${wishlisted ? "fill-destructive text-destructive scale-110" : ""}`}
            />
          </button>
        </div>

        <p className="text-[11px] tracking-[0.12em] uppercase text-foreground-muted/70 mb-3 font-medium">
          {firstIngredient}
        </p>

        <div className="flex items-center justify-between">
          <PriceDisplay
            priceCents={product.priceCents}
            compareAtCents={product.compareAtPriceCents}
            className="text-base"
          />
          {product.collection && (
            <span className="text-[10px] tracking-wider uppercase text-accent/70 font-medium">
              {product.collection}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
