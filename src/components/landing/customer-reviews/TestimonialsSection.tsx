import Image from "next/image";
import { Quote, Sparkles, Star } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

import { testimonials } from "@/data/landing/testimonials";

export default function TestimonialsSection() {
    return (
        <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/testimonials/testimonial-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Overlay */}
            <FadeIn
                delay={0.1}
                duration={0.8}
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#8BB36A]/45 to-white/10"
            >
                <div className="h-full w-full" />
            </FadeIn>

            {/* Decorative Blur */}
            <FadeIn
                delay={0.15}
                className="pointer-events-none absolute left-0 top-20 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[140px]"
            >
                <div className="h-full w-full" />
            </FadeIn>

            <FadeIn
                delay={0.2}
                className="pointer-events-none absolute bottom-0 right-0 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[140px]"
            >
                <div className="h-full w-full" />
            </FadeIn>

            {/* Content */}
            <div className="site-container relative z-20">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <p className="inline-flex items-center rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-semibold text-primary">
                            <Sparkles className="h-4 w-4" />
                            &nbsp;Customer Reviews
                        </p>
                    </FadeIn>

                    <SlideIn
                        direction="bottom"
                        distance={24}
                        delay={0.08}
                    >
                        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                            Loved by Our{" "}
                            <span className="text-primary">
                                Customers
                            </span>
                        </h2>
                    </SlideIn>

                    <FadeIn delay={0.16}>
                        <p className="mt-5 text-lg leading-8 text-foreground">
                            Real experiences from customers who trust
                            Green Blue Nature for their daily beauty
                            and wellness care.
                        </p>
                    </FadeIn>
                </div>

                {/* Testimonial Cards */}
                <StaggerContainer
                    stagger={0.1}
                    delayChildren={0.12}
                    className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
                >
                    {testimonials.map((testimonial) => (
                        <StaggerItem
                            key={testimonial.id}
                            className="h-full"
                        >
                            <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/20 bg-white/20 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition-[transform,background-color,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/25 hover:shadow-[0_22px_50px_rgba(0,0,0,0.15)]">
                                {/* Quote */}
                                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-white transition-transform duration-300 group-hover:rotate-6">
                                    <Quote
                                        size={18}
                                        fill="currentColor"
                                    />
                                </div>

                                {/* Customer */}
                                <div className="flex items-center gap-4 pr-10">
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/30">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-lg font-bold text-primary">
                                            {testimonial.name}
                                        </h3>

                                        <p className="text-sm text-foreground">
                                            {testimonial.city}, Sri Lanka
                                        </p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="mt-6 flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={18}
                                            className={
                                                index < testimonial.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-white/20 text-white/20"
                                            }
                                        />
                                    ))}

                                    <span className="ml-2 text-sm font-semibold text-foreground">
                                        {testimonial.rating}.0
                                    </span>
                                </div>

                                {/* Review */}
                                <p className="mt-5 text-sm font-semibold leading-7 text-foreground">
                                    “{testimonial.review}”
                                </p>
                            </article>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}