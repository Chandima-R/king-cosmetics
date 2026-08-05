import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Leaf } from "lucide-react";
import { products } from "@/data/products/product";
import ProductsGrid from "@/components/products/ProductGrid";
import { Suspense } from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Products | Green Blue Nature",
    description: "Explore the complete collection of natural skincare, haircare and personal care products from Green Blue Nature"
};

export default function page() {
    return (
        <main>

            <div className="border-b border-border bg-background">
                <div className="container mx-auto px-6 py-5">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">

                        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                            <Home className="h-4 w-4" />
                            Home
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />

                        <span className="font-semibold text-foreground">
                            Products
                        </span>

                    </nav>
                </div>
            </div>

            <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
                {/* Background Image */}
                <Image
                    src="/images/background/image.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 z-0 object-cover"
                />

                {/* Light Overlay */}
                <div className="absolute inset-0 z-10 bg-white/70" />

                {/* Decorative Blur */}
                <div className="pointer-events-none absolute -left-28 top-0 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                <div className="pointer-events-none absolute -right-28 bottom-0 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                {/* Content */}
                <div className="container relative z-20 mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
                            <Leaf className="h-4 w-4" />
                            Our Collection
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                            Natural Care for Your
                            <span className="text-primary">
                                {" "}
                                Everyday Beauty
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            Browse our complete collection of carefully selected skincare,
                            haircare and personal care products created to support your
                            everyday beauty routine.
                        </p>

                    </div>
                </div>
            </section>

            <Suspense fallback={<div>Loading...</div>}>
                <ProductsGrid products={products} />
            </Suspense>

            {/* <ProductsGrid products={products} /> */}

        </main>
    )
}


