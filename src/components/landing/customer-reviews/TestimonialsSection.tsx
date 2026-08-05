import Image from "next/image";
import { Quote, Sparkles, Star } from "lucide-react";

import { testimonials } from "@/data/landing/testimonials";

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/testimonials/testimonial-background.png"
                    alt="Natural ingredients background"
                    fill
                    priority={false}
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8BB36A]/45 to-white/10" />
            </div>

            {/* Decorative Blur */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-light/20 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary-light/20 blur-[140px]" />

            <div className="site-container relative z-10">
                {/* Heading */}

                <div className="mx-auto max-w-2xl text-center">
                    <p
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border border-white/20
                            bg-white
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-primary
                            
                        "
                    >
                        <Sparkles className="h-4 w-4" />
                        &nbsp;Customer Reviews
                    </p>

                    <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                        Loved by Our{" "}
                        <span className="text-primary">
                            Customers
                        </span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 ">
                        Real experiences from customers who trust
                        Green Blue Nature for their daily beauty
                        and wellness care.
                    </p>
                </div>

                {/* Cards */}

                <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-white/15
                                bg-white/10
                                p-7
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:bg-white/15
                                hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                            "
                        >
                            {/* Quote */}

                            <div
                                className="
                                    absolute
                                    right-6
                                    top-6
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-light
                                    text-white
                                    backdrop-blur-md
                                    transition-transform
                                    duration-300
                                    group-hover:rotate-6
                                "
                            >
                                <Quote
                                    size={18}
                                    fill="currentColor"
                                />
                            </div>

                            {/* Customer */}

                            <div className="flex items-center gap-4 pr-10">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-primary">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-sm ">
                                        {testimonial.city},
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>

                            {/* Stars */}

                            <div className="mt-6 flex items-center gap-1">
                                {Array.from({
                                    length: 5,
                                }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className={
                                            index <
                                                testimonial.rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "fill-white/20 text-white/20"
                                        }
                                    />
                                ))}

                                <span className="ml-2 text-sm font-semibold">
                                    {testimonial.rating}.0
                                </span>
                            </div>

                            {/* Review */}

                            <p className="mt-5 text-sm leading-7 font-semibold">
                                “{testimonial.review}”
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}