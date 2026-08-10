import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Leaf,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

const highlights = [
    "100% Natural Ingredients",
    "Premium Quality Products",
    "Safe Herbal Formulations",
];

export default function CompanyIntroduction() {
    return (
        <section className="overflow-hidden bg-background">
            <div className="grid lg:grid-cols-5">

                <div className="relative min-h-[360px] overflow-hidden sm:min-h-[430px] md:min-h-[500px] lg:col-span-3 lg:min-h-[575px]">

                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src="/images/hero/about-banner.png"
                            alt="Green Blue Nature herbal products and natural ingredients"
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Image overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary/10" />
                    </div>

                </div>


                <div className="relative flex items-center overflow-hidden bg-primary px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:col-span-2 lg:h-full lg:px-9 lg:py-6 xl:px-12">
                    {/* Decorative leaf - top */}
                    <FadeIn
                        delay={0.5}
                        className="pointer-events-none absolute -right-6 top-4"
                    >
                        <Leaf
                            aria-hidden="true"
                            className="h-28 w-28 rotate-12 text-white/5"
                        />
                    </FadeIn>

                    {/* Decorative leaf - bottom */}
                    <FadeIn
                        delay={0.65}
                        className="pointer-events-none absolute -bottom-10 -left-8"
                    >
                        <Leaf
                            aria-hidden="true"
                            className="h-32 w-32 -rotate-12 text-white/5"
                        />
                    </FadeIn>

                    <SlideIn
                        direction="right"
                        className="relative mx-auto w-full max-w-xl lg:mx-0"
                    >
                        {/* Badge */}
                        <FadeIn delay={0.1}>
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs">
                                <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                About Green Blue Nature
                            </span>
                        </FadeIn>

                        {/* Heading */}
                        <FadeIn delay={0.2}>
                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-secondary-soft sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">
                                Nature&apos;s Goodness,

                                <span className="mt-1 block text-primary-light">
                                    Crafted for Everyday Beauty
                                </span>
                            </h2>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn delay={0.3}>
                            <p className="mt-4 text-sm leading-7 text-accent-soft sm:text-base sm:leading-8 lg:text-sm lg:leading-6 xl:leading-7">
                                Green Blue Nature creates naturally
                                inspired cosmetic products using
                                carefully selected herbal ingredients.
                                Every formula is crafted with quality,
                                care and a commitment to helping you
                                enjoy healthier-looking skin and hair.
                            </p>
                        </FadeIn>


                        <StaggerContainer
                            className="mt-5 space-y-2.5 lg:mt-4"
                            staggerDelay={0.1}
                        >
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>

                                    <span className="text-sm font-semibold text-accent-soft">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </StaggerContainer>

                        {/* Button */}
                        <FadeIn delay={0.55}>
                            <Link
                                href="/about-us"
                                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2.5 text-xs font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                            >
                                Learn More

                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </FadeIn>
                    </SlideIn>
                </div>
            </div>
        </section>
    );
}