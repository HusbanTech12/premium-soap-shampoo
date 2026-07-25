"use client";

import Image from "next/image";
import { Sparkles, Heart, Leaf, Package } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Sparkles,
    title: "100% Natural",
    description:
      "Every ingredient is sourced from nature. No synthetic additives, parabens, or sulfates. Full INCI transparency on every product.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    imageAlt: "Natural soap ingredients with botanicals",
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description:
      "Small-batch production ensures quality and attention to detail in every single bar and bottle.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    imageAlt: "Artisan handcrafted soap bar",
  },
  {
    icon: Leaf,
    title: "Cruelty-Free",
    description:
      "We never test on animals. Certified cruelty-free and vegan friendly. Kind to your skin and the planet.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&q=80",
    imageAlt: "Cruelty-free organic soap with leaves",
  },
  {
    icon: Package,
    title: "Eco Packaging",
    description:
      "100% biodegradable packaging made from recycled materials. Because what wraps your soap matters too.",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
    imageAlt: "Eco-friendly soap packaging",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Crafted with Care,
            <br />
            Backed by Nature
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-0 border border-border/60 rounded-xl overflow-hidden bg-surface">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={idx * 0.1}
                className={`flex flex-col ${
                  idx < 2 ? "border-b border-border/60" : ""
                } ${idx % 2 === 0 ? "md:border-r md:border-border/60" : ""}`}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-surface-muted">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 space-y-3">
                  <div className="w-9 h-9 rounded-full bg-accent-subtle flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
