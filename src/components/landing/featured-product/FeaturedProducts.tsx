import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FeaturedProductCard from "./FeaturedProductCard";
import { products } from "@/data/products/product";
import Image from "next/image";

export default function FeaturedProducts() {
    const featuredProducts = products
        .filter((product) => product.featured === true)
        .slice(0, 4);

    return (
        <section className="relative overflow-hidden">

            <div className="relative -mt-24 flex h-fit items-end justify-center sm:-mt-28 lg:-mt-4">

                {/* Image */}
                <Image
                    src="/images/background/bg1.png"
                    alt="Natural Aloe Vera"
                    width={600}
                    height={600}
                    className="
                            relative
                            z-10
                            -translate-y-4
                            h-80
                            w-auto
                            object-contain
                            drop-shadow-[0_20px_35px_rgba(58,112,33,0.18)]
                            transition-transform
                            duration-500
                            hover:scale-105
                            lg:h-70
            "
                />
            </div>

            <div className="container relative mx-auto -mt-4 px-5 sm:px-6 lg:px-8">

                {/* Decorative leaves */}

                <div className="absolute left-0 top-0 h-full w-56 bg-gradient-to-r from-primary-soft/70 to-transparent" />

                <div className="absolute right-0 top-0 h-full w-56 bg-gradient-to-l from-primary-soft/70 to-transparent" />
            </div>

            <div className="container relative mx-auto -mt-4 px-5 sm:px-6 lg:px-8">


                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        <Sparkles className="h-4 w-4" />
                        Featured Products
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                        Discover Our Most Loved

                        <span className="mt-2 block text-primary">
                            Natural Products
                        </span>
                    </h2>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-primary/30" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                        Explore a selection of our featured beauty and personal care
                        products, thoughtfully chosen to support your everyday routine.
                    </p>
                </div>

                {/* Product Grid */}
                {featuredProducts.length > 0 ? (
                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 xl:grid-cols-4">
                        {featuredProducts.map((product) => (
                            <FeaturedProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
                        <p className="text-muted-foreground">
                            Featured products are currently unavailable.
                        </p>
                    </div>
                )}

                {/* View All Button */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                    >
                        View All Products

                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}