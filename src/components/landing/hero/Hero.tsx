import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <>
            {/* <section className="relative isolate h-[560px] w-full overflow-hidden bg-white sm:h-[590px] md:h-[560px] lg:h-auto lg:min-h-[calc(100svh-var(--hero-header-height))]"> */}

            <section
                className="
                    relative
                    isolate
                    w-full
                    overflow-hidden
                    bg-white

                    h-auto
                    min-h-fit
                    md:py-16

                    lg:min-h-[calc(100svh-var(--hero-header-height))]
                    lg:py-0
                "
            >
                <div className="absolute inset-0 -z-20">

                    {/* Mobile and small-screen image */}
                    <Image
                        src="/images/hero/hero-mobile.png"
                        alt="Green Blue Nature herbal beauty products"
                        fill
                        priority
                        sizes="(max-width: 767px) 100vw, 0px"
                        className="object-cover object-center md:hidden"
                    />

                    {/* Medium and desktop image */}
                    <Image
                        src="/images/hero/hero5.png"
                        alt="Green Blue Nature herbal beauty products"
                        fill
                        priority
                        sizes="(min-width: 768px) 100vw, 0px"
                        className="hidden object-cover md:block md:object-[62%_center] lg:object-center xl:object-right"
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
                        bg-gradient-to-r
                        from-[#F8F3EA]/70
                        via-[#F3EBDD]/100
                        to-transparent
                        lg:hidden
                    "
                />

                {/* Hero content */}
                <div className="site-container relative z-10 flex h-full w-full items-center py-8 sm:py-10 md:py-12 lg:min-h-[calc(100svh-var(--hero-header-height))] lg:pb-32 lg:pt-10">
                    <div className="w-full max-w-[285px] text-left min-[380px]:max-w-[310px] sm:max-w-[360px] md:max-w-[470px] lg:max-w-2xl">
                        {/* Badge */}
                        <div className="hero-fade-up hero-delay-1 mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/10 bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-primary shadow-md backdrop-blur-md sm:mb-4 sm:px-4 sm:py-2 sm:text-xs md:text-sm lg:mb-5">
                            <Leaf className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

                            <span>100% Natural Herbal Products</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[31px] font-bold leading-[0.98] tracking-[-0.04em] text-heading min-[380px]:text-[35px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-7xl">
                            <span className="hero-heading-line hero-delay-2">
                                Pure.
                            </span>

                            <span className="hero-heading-line hero-delay-3">
                                Natural.
                            </span>

                            <span className="hero-heading-line hero-delay-4 text-primary-light">
                                Made for You.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="hero-fade-up hero-delay-5 mt-4 max-w-[270px] text-[11px] leading-5 font-bold md:font-semibold min-[380px]:text-xs min-[380px]:leading-6 sm:mt-5 sm:max-w-[330px] sm:text-[13px] sm:leading-6 md:max-w-[440px] md:text-[15px] md:leading-8 lg:mt-6 lg:max-w-xl lg:text-base">
                            Discover premium herbal hair care and beauty
                            products made with carefully selected natural
                            ingredients for healthy, beautiful skin and hair.
                        </p>

                        {/* Buttons */}
                        <div className="hero-fade-up hero-delay-6 mt-5 flex flex-wrap items-center justify-start gap-2.5 sm:mt-6 sm:justify-start sm:gap-3 md:mt-7 lg:mt-9 lg:gap-4">
                            <Link
                                href="/products"
                                className="group inline-flex min-h-8 w-fit items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl sm:px-6 sm:text-sm lg:min-h-11 lg:px-8 lg:py-3"
                            >
                                Shop Now

                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex min-h-8 w-fit items-center justify-center rounded-full border border-primary/20 bg-white/90 px-4 text-xs font-semibold text-primary shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-soft hover:shadow-lg sm:px-6 sm:text-sm lg:min-h-11 lg:px-8 lg:py-3"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop trust card */}
                <div className="absolute inset-x-0 bottom-6 z-20 hidden lg:block">
                    <div className="site-container">
                        <HeroTrustCard variant="desktop" />
                    </div>
                </div>
            </section>

            {/* Mobile and tablet trust ticker */}
            <section className="overflow-hidden border-y border-primary/10 bg-white py-3 shadow-[0_8px_25px_rgba(44,86,27,0.06)] lg:hidden">
                <HeroTrustCard variant="mobile" />
            </section>

        </>
    );
}