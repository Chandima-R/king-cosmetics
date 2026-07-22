import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { testimonials } from "@/data/landing/testimonials";

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden pb-28">
            {/* Decorative background glows */}
            <div
                aria-hidden="true"
                className="bsolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className=" absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="site-container relative z-10">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p
                        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
                    >
                        Customer Reviews
                    </p>

                    <h2 className="mt-5 text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
                        Loved by Our Customers
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                        Real experiences from customers who trust Green Blue Nature
                        for their daily beauty and wellness care.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="
                group
                relative
                flex h-full flex-col
                rounded-3xl
                border border-border-light
                bg-white/95
                p-6
                shadow-[0_16px_45px_rgba(49,95,24,0.08)]
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-primary-light/40
                hover:shadow-[0_22px_55px_rgba(49,95,24,0.14)]
                sm:p-7
              "
                        >
                            {/* Quote icon */}
                            <div
                                className="
                  absolute right-6 top-6
                  flex size-11 items-center justify-center
                  rounded-full
                  bg-primary-soft
                  text-primary
                  transition-transform duration-300
                  group-hover:rotate-6
                "
                            >
                                <Quote size={20} fill="currentColor" />
                            </div>

                            {/* Customer information */}
                            <div className="flex items-center gap-4 pr-12">
                                <div
                                    className="
                    relative size-16 shrink-0
                    overflow-hidden
                    rounded-full
                    border-4 border-primary-soft
                  "
                                >
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-heading">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-muted">
                                        {testimonial.city}, Sri Lanka
                                    </p>
                                </div>
                            </div>

                            {/* Stars */}
                            <div
                                className="mt-6 flex items-center gap-1"
                                aria-label={`${testimonial.rating} out of 5 stars`}
                            >
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className={
                                            index < testimonial.rating
                                                ? "fill-gold text-gold"
                                                : "fill-border-light text-border-light"
                                        }
                                    />
                                ))}

                                <span className="ml-2 text-sm font-semibold text-body">
                                    {testimonial.rating}.0
                                </span>
                            </div>

                            {/* Review */}
                            <p className="mt-5 flex-1 text-[15px] leading-7 text-body">
                                “{testimonial.review}”
                            </p>

                            {/* Verified label */}
                            <div
                                className="
                  mt-6 flex items-center gap-2
                  border-t border-border-light
                  pt-5
                  text-sm font-semibold
                  text-primary
                "
                            >
                                <span
                                    className="
                    flex size-5 items-center justify-center
                    rounded-full
                    bg-primary
                    text-[11px] text-white
                  "
                                >
                                    ✓
                                </span>

                                Verified Customer
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}