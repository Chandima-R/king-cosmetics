import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Leaf } from "lucide-react";
import Image from "next/image";
import IngredientsGrid from "@/components/ingredients/IngredientsGrid";
import TransparencySection from "@/components/ingredients/TransparencySection";
import IngredientsCTA from "@/components/ingredients/IngredientsCTA";

export const metadata: Metadata = {
    title: "About Us | Green Blue Nature",
    description:
        "Learn more about Green Blue Nature, our vision, mission, certifications and the passionate team behind our natural beauty products.",
};

export default function Page() {
    return (
        <main>

            <div className="border-b border-border bg-background">

                <div className="container mx-auto px-6 py-5">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/40" />

                        <span className="font-semibold text-foreground">
                            Ingredients
                        </span>
                    </nav>
                </div>

            </div>


            <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
                {/* Background image */}
                <Image
                    src="/images/background/image.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 z-0 object-cover"
                />


                {/* Content */}
                <div className="container relative z-20 mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
                            <Leaf className="h-4 w-4" />
                            Pure Ingredients, Real Benefits
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                            Nature's Finest,
                            <span className="text-primary">
                                {" "}
                                Carefully Chosen.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            We believe in the power of nature. Every ingredient in our products is thoughtfully selected for its purity, potency, and proven benefits to your skin and well-being.
                        </p>
                    </div>
                </div>
            </section>

            <IngredientsGrid />
            <TransparencySection />
            <IngredientsCTA />




        </main>
    )
}