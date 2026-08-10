import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Sparkles,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

import FeaturedProductCard from "./FeaturedProductCard";

import { products } from "@/data/products/product";

export default function FeaturedProducts() {
    const featuredProducts = products
        .filter((product) => product.featured === true)
        .slice(0, 4);

    return (
        <section className="relative overflow-hidden">
            {/* Aloe decoration */}
            <SlideIn
                direction="bottom"
                distance={35}
                duration={0.8}
                className="relative -mt-24 flex h-fit items-end justify-center sm:-mt-28 lg:-mt-4"
            >
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
            </SlideIn>

            {/* Background decoration */}
            <div className="container relative mx-auto -mt-4 px-5 sm:px-6 lg:px-8">
                <FadeIn
                    duration={0.8}
                    className="pointer-events-none absolute left-0 top-0 h-full w-56 bg-gradient-to-r from-primary-soft/70 to-transparent"
                >
                    <div />
                </FadeIn>

                <FadeIn
                    duration={0.8}
                    className="pointer-events-none absolute right-0 top-0 h-full w-56 bg-gradient-to-l from-primary-soft/70 to-transparent"
                >
                    <div />
                </FadeIn>
            </div>

            <div className="container relative mx-auto -mt-4 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                            <Sparkles className="h-4 w-4" />

                            Featured Products
                        </span>
                    </FadeIn>

                    <SlideIn
                        direction="bottom"
                        distance={25}
                        delay={0.08}
                    >
                        <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                            Discover Our Most Loved

                            <span className="mt-2 block text-primary">
                                Natural Products
                            </span>
                        </h2>
                    </SlideIn>

                    <FadeIn delay={0.15}>
                        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-primary/30" />
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                            Explore a selection of our featured beauty and
                            personal care products, thoughtfully chosen to
                            support your everyday routine.
                        </p>
                    </FadeIn>
                </div>

                {/* Product Grid */}
                {featuredProducts.length > 0 ? (
                    <StaggerContainer
                        stagger={0.1}
                        delayChildren={0.1}
                        className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 xl:grid-cols-4"
                    >
                        {featuredProducts.map((product) => (
                            <StaggerItem
                                key={product.id}
                                className="h-full"
                            >
                                <FeaturedProductCard
                                    product={product}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <FadeIn>
                        <div className="mt-12 rounded-3xl border border-dashed border-border bg-card p-10 text-center">
                            <p className="text-muted-foreground">
                                Featured products are currently unavailable.
                            </p>
                        </div>
                    </FadeIn>
                )}

                {/* View All */}
                <FadeIn
                    delay={0.15}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        href="/products"
                        className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-primary
                            px-7
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-primary-hover
                            hover:shadow-lg
                        "
                    >
                        View All Products

                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}