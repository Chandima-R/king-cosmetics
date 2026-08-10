"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerContainer";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <>
            {/* Hero */}
            <section
                className="
                    relative
                    isolate
                    h-auto
                    min-h-fit
                    w-full
                    overflow-hidden
                    bg-white
                    md:py-16
                    lg:min-h-[calc(100svh-var(--hero-header-height))]
                    lg:py-0
                "
            >
                {/* Background */}
                <FadeIn
                    duration={1}
                    className="absolute inset-0 -z-20"
                >
                    {/* Mobile image */}
                    <Image
                        src="/images/hero/hero-mobile.png"
                        alt="Green Blue Nature herbal beauty products"
                        fill
                        priority
                        sizes="(max-width: 767px) 100vw, 0px"
                        className="
                            object-cover
                            object-center
                            md:hidden
                        "
                    />

                    {/* Tablet / Desktop image */}
                    <Image
                        src="/images/hero/hero5.png"
                        alt="Green Blue Nature herbal beauty products"
                        fill
                        priority
                        sizes="(min-width: 768px) 100vw, 0px"
                        className="
                            hidden
                            object-cover
                            md:block
                            md:object-[62%_center]
                            lg:object-center
                            xl:object-right
                        "
                    />
                </FadeIn>

                {/* Mobile / Tablet overlay */}
                <FadeIn
                    delay={0.1}
                    duration={0.8}
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        bg-gradient-to-r
                        from-[#F8F3EA]/70
                        via-[#F3EBDD]
                        to-transparent
                        lg:hidden
                    "
                >
                    <div />
                </FadeIn>

                {/* Hero content */}
                <div
                    className="
                        site-container
                        relative
                        z-10
                        flex
                        h-full
                        w-full
                        items-center
                        py-8
                        sm:py-10
                        md:py-12
                        lg:min-h-[calc(100svh-var(--hero-header-height))]
                        lg:pb-32
                        lg:pt-10
                    "
                >
                    <div
                        className="
                            w-full
                            max-w-[285px]
                            text-left
                            min-[380px]:max-w-[310px]
                            sm:max-w-[360px]
                            md:max-w-[470px]
                            lg:max-w-2xl
                        "
                    >
                        {/* Badge */}
                        <FadeIn
                            delay={0.1}
                            duration={0.55}
                        >
                            <div
                                className="
                                    mb-3
                                    inline-flex
                                    max-w-full
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-primary/10
                                    bg-white/90
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-semibold
                                    text-primary
                                    shadow-md
                                    backdrop-blur-md
                                    sm:mb-4
                                    sm:px-4
                                    sm:py-2
                                    sm:text-xs
                                    md:text-sm
                                    lg:mb-5
                                "
                            >
                                <Leaf className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

                                <span>
                                    100% Natural Herbal Products
                                </span>
                            </div>
                        </FadeIn>

                        {/* Heading */}
                        <h1
                            className="
                                text-[31px]
                                font-bold
                                leading-[0.98]
                                tracking-[-0.04em]
                                text-heading
                                min-[380px]:text-[35px]
                                sm:text-[40px]
                                md:text-[52px]
                                lg:text-[64px]
                                xl:text-7xl
                            "
                        >
                            <SlideIn
                                direction="bottom"
                                distance={28}
                                delay={0.2}
                                duration={0.6}
                            >
                                <span className="block">
                                    Pure.
                                </span>
                            </SlideIn>

                            <SlideIn
                                direction="bottom"
                                distance={28}
                                delay={0.3}
                                duration={0.6}
                            >
                                <span className="block">
                                    Natural.
                                </span>
                            </SlideIn>

                            <SlideIn
                                direction="bottom"
                                distance={28}
                                delay={0.4}
                                duration={0.6}
                            >
                                <span className="block text-primary-light">
                                    Made for You.
                                </span>
                            </SlideIn>
                        </h1>

                        {/* Description */}
                        <FadeIn
                            delay={0.5}
                            duration={0.6}
                        >
                            <p
                                className="
                                    mt-4
                                    max-w-[270px]
                                    text-[11px]
                                    font-bold
                                    leading-5
                                    min-[380px]:text-xs
                                    min-[380px]:leading-6
                                    sm:mt-5
                                    sm:max-w-[330px]
                                    sm:text-[13px]
                                    sm:leading-6
                                    md:max-w-[440px]
                                    md:text-[15px]
                                    md:font-semibold
                                    md:leading-8
                                    lg:mt-6
                                    lg:max-w-xl
                                    lg:text-base
                                "
                            >
                                Discover premium herbal hair care and beauty
                                products made with carefully selected natural
                                ingredients for healthy, beautiful skin and
                                hair.
                            </p>
                        </FadeIn>

                        {/* Buttons */}
                        <SlideIn
                            direction="bottom"
                            distance={22}
                            delay={0.6}
                            duration={0.6}
                        >
                            <div
                                className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    items-center
                                    justify-start
                                    gap-2.5
                                    sm:mt-6
                                    sm:gap-3
                                    md:mt-7
                                    lg:mt-9
                                    lg:gap-4
                                "
                            >
                                <Link
                                    href="/products"
                                    className="
                                        group
                                        inline-flex
                                        min-h-8
                                        w-fit
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        bg-primary
                                        px-4
                                        text-xs
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-primary-hover
                                        hover:shadow-xl
                                        sm:px-6
                                        sm:text-sm
                                        lg:min-h-11
                                        lg:px-8
                                        lg:py-3
                                    "
                                >
                                    Shop Now

                                    <ArrowRight
                                        className="
                                            h-3.5
                                            w-3.5
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            sm:h-4
                                            sm:w-4
                                        "
                                    />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="
                                        inline-flex
                                        min-h-8
                                        w-fit
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-primary/20
                                        bg-white/90
                                        px-4
                                        text-xs
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
                                        sm:px-6
                                        sm:text-sm
                                        lg:min-h-11
                                        lg:px-8
                                        lg:py-3
                                    "
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </SlideIn>
                    </div>
                </div>

                {/* Desktop trust card */}
                <SlideIn
                    direction="bottom"
                    distance={30}
                    delay={0.75}
                    duration={0.7}
                    className="
                        absolute
                        inset-x-0
                        bottom-6
                        z-20
                        hidden
                        lg:block
                    "
                >
                    <div className="site-container">
                        <HeroTrustCard variant="desktop" />
                    </div>
                </SlideIn>
            </section>

            {/* Mobile / Tablet trust ticker */}
            <FadeIn
                delay={0.7}
                duration={0.6}
                className="lg:hidden"
            >
                <section
                    className="
                        overflow-hidden
                        border-y
                        border-primary/10
                        bg-white
                        py-3
                        shadow-[0_8px_25px_rgba(44,86,27,0.06)]
                    "
                >
                    <HeroTrustCard variant="mobile" />
                </section>
            </FadeIn>
        </>
    );
}