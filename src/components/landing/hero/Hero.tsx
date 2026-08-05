import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <section
            className="
                relative
                isolate
                overflow-hidden
                bg-white
                min-h-[calc(100svh-var(--hero-header-height))]
                lg:min-h-[calc(100svh-var(--hero-header-height))]
            "
        >
            {/* Background image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/hero/hero5.png"
                    alt="Green Blue Nature herbal beauty products"
                    fill
                    priority
                    sizes="100vw"
                    className="
                        object-cover
                        object-[72%_center]
                        sm:object-[70%_center]
                        md:object-[68%_center]
                        lg:object-center
                        xl:object-right
                    "
                />
            </div>

            {/* Mobile and tablet readability overlay */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-gradient-to-b
                    from-white/90
                    via-white/75
                    to-white/45
                    md:bg-gradient-to-r
                    md:from-white/95
                    md:via-white/75
                    md:to-white/10
                    lg:hidden
                "
            />

            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    top-10
                    -z-10
                    h-64
                    w-64
                    rounded-full
                    bg-primary-soft/40
                    blur-[110px]
                    sm:h-72
                    sm:w-72
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    bottom-10
                    -z-10
                    h-72
                    w-72
                    rounded-full
                    bg-primary-light/20
                    blur-[120px]
                    lg:h-80
                    lg:w-80
                "
            />

            {/* Hero content */}
            <div
                className="
                    site-container
                    relative
                    z-10
                    flex
                    min-h-[calc(100svh-var(--hero-header-height))]
                    items-start
                    justify-center
                    pb-8
                    pt-16
                    sm:items-center
                    sm:pb-10
                    sm:pt-14
                    md:justify-start
                    md:pb-12
                    md:pt-12
                    lg:items-center
                    lg:justify-start
                    lg:pb-32
                    lg:pt-10
                "
            >
                <div
                    className="
                        w-full
                        max-w-[520px]
                        text-center
                        sm:max-w-xl
                        md:max-w-2xl
                        md:text-left
                        lg:max-w-2xl
                    "
                >
                    {/* Badge */}
                    <div
                        className="
                            hero-fade-up
                            hero-delay-1
                            mb-4
                            inline-flex
                            max-w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-primary/10
                            bg-white/90
                            px-3.5
                            py-2
                            text-xs
                            font-semibold
                            text-primary
                            shadow-md
                            backdrop-blur-md
                            sm:mb-5
                            sm:px-4
                            sm:text-sm
                        "
                    >
                        <Leaf className="h-4 w-4 shrink-0" />

                        <span className="truncate">
                            100% Natural Herbal Products
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            text-[40px]
                            font-bold
                            leading-[0.98]
                            tracking-[-0.04em]
                            text-heading
                            min-[380px]:text-[46px]
                            sm:text-6xl
                            md:text-[62px]
                            lg:text-[64px]
                            xl:text-7xl
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
                            hero-fade-up
                            hero-delay-5
                            mx-auto
                            mt-5
                            max-w-[440px]
                            text-sm
                            font-medium
                            leading-7
                            text-accent
                            sm:mt-6
                            sm:max-w-lg
                            sm:text-base
                            sm:leading-8
                            md:mx-0
                            lg:max-w-xl
                        "
                    >
                        Discover premium herbal hair care and beauty products
                        made with carefully selected natural ingredients for
                        healthy, beautiful skin and hair.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            hero-fade-up
                            hero-delay-6
                            mx-auto
                            mt-7
                            flex
                            w-full
                            max-w-sm
                            flex-col
                            items-stretch
                            gap-3
                            sm:mt-9
                            sm:max-w-none
                            sm:flex-row
                            sm:items-center
                            sm:justify-center
                            sm:gap-4
                            md:mx-0
                            md:justify-start
                        "
                    >
                        <Link
                            href="/products"
                            className="
                                group
                                inline-flex
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-full
                                bg-primary
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-primary-hover
                                hover:shadow-xl
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-primary
                                focus-visible:ring-offset-2
                                sm:w-auto
                                sm:px-8
                            "
                        >
                            Shop Now

                            <ArrowRight
                                className="
                                    h-4
                                    w-4
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
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-primary/20
                                bg-white/90
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-primary
                                shadow-md
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-primary
                                hover:bg-primary-soft
                                hover:shadow-lg
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-primary
                                focus-visible:ring-offset-2
                                sm:w-auto
                                sm:px-8
                            "
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile and tablet trust card */}
                    <div className="relative z-20 pb-5 lg:hidden">
                        <div className="site-container">
                            <HeroTrustCard />
                        </div>
                    </div>
                </div>
            </div>



            {/* Desktop trust card - existing position */}
            <div
                className="
                    absolute
                    bottom-6
                    left-0
                    right-0
                    z-20
                    hidden
                    lg:block
                "
            >
                <div className="site-container">
                    <HeroTrustCard />
                </div>
            </div>
        </section>
    );
}