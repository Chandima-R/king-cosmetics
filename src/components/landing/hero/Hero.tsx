import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/king-cosmetics-gero-banner2.png"
                    alt="Green Blue Nature"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-right"
                />

                {/* Light Overlay */}


                {/* Bottom Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Decorative Blur */}
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[120px]" />

            <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-primary-light/20 blur-[130px]" />

            {/* Hero Content */}
            <div className="site-container relative z-20">
                <div className="flex min-h-[620px] items-center py-16 lg:min-h-[720px]">

                    <div className="max-w-2xl">

                        {/* Badge */}

                        <p
                            className="
                                hero-fade-up
                                hero-delay-1
                                mb-5
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-primary/10
                                bg-white/90
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-primary
                                shadow-lg
                                backdrop-blur-md
                            "
                        >
                            <span className="mr-2">🌿</span>

                            100% Natural Herbal Products

                        </p>

                        {/* Heading */}

                        <h1
                            className="
                                text-5xl
                                font-bold
                                leading-[1.05]
                                tracking-tight
                                text-heading
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            <span className="hero-heading-line hero-delay-2">
                                Pure.
                            </span>

                            <span className="hero-heading-line hero-delay-3">
                                Natural.
                            </span>

                            <span
                                className="
                                    hero-heading-line
                                    hero-delay-4
                                    text-primary-light
                                "
                            >
                                Made for You.
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                hero-fade-up hero-delay-5
                                mx-auto mt-6 max-w-xl
                                text-base 
                                font-semibold
                                lg:mx-0
                            "
                        >
                            Discover premium herbal hair care and beauty products made
                            with carefully selected natural ingredients for healthy,
                            beautiful skin and hair.
                        </p>

                        {/* Buttons */}

                        <div
                            className="
                                hero-fade-up
                                hero-delay-6
                                mt-10
                                flex
                                flex-wrap
                                gap-4
                            "
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
                                    px-8
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-primary-hover
                                    hover:shadow-xl
                                "
                            >
                                Shop Now

                                <ArrowRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-primary/20
                                    bg-white
                                    px-8
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-primary
                                    shadow-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-primary
                                    hover:bg-primary-soft
                                "
                            >
                                Contact Us
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

            {/* Trust Card */}

            <div className="relative z-30 -mt-10 pb-8 lg:-mt-12">
                <div className="site-container">
                    <HeroTrustCard />
                </div>
            </div>
        </section>
    );
}