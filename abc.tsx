"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import { faqSectionData } from "@/data/faq";

export default function FAQSection() {
    const [activeId, setActiveId] = useState<number | null>(
        faqSectionData.items[0]?.id ?? null,
    );

    const handleToggle = (id: number) => {
        setActiveId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section className="relative overflow-hidden py-16 lg:py-20">
            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-soft/35 blur-[130px]" />

            <div className="container relative mx-auto px-6">
                {/* Section header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        <HelpCircle className="h-4 w-4" />

                        {faqSectionData.badge}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        {faqSectionData.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {faqSectionData.description}
                    </p>
                </div>

                {/* FAQ accordion */}
                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {faqSectionData.items.map((item, index) => {
                        const isActive = activeId === item.id;
                        const contentId = `faq-answer-${item.id}`;

                        return (
                            <article
                                key={item.id}
                                className={`overflow-hidden rounded-2xl border bg-background transition-all duration-300 ${isActive
                                    ? "border-primary/25 shadow-[0_18px_45px_-30px_rgba(15,61,46,0.45)]"
                                    : "border-border/70 hover:border-primary/20"
                                    }`}
                            >
                                <button
                                    type="button"
                                    aria-expanded={isActive}
                                    aria-controls={contentId}
                                    onClick={() => handleToggle(item.id)}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <span
                                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${isActive
                                                ? "bg-primary text-white"
                                                : "bg-primary-soft text-primary"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3
                                            className={`pt-1 text-base font-semibold leading-6 transition-colors duration-300 sm:text-lg ${isActive
                                                ? "text-primary"
                                                : "text-foreground"
                                                }`}
                                        >
                                            {item.question}
                                        </h3>
                                    </div>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                                            ? "rotate-180 border-primary bg-primary text-white"
                                            : "border-primary/15 bg-primary-soft text-primary"
                                            }`}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </button>

                                <div
                                    id={contentId}
                                    className={`grid transition-all duration-300 ease-in-out ${isActive
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-primary/10 px-5 pb-6 pt-5 sm:px-6 sm:pl-[76px]">
                                            <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background natural-gradient">
            <div className="site-container pb-6 pt-12 sm:pt-16 lg:pb-0 lg:pt-10">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-4">
                    {/* Left */}
                    <div className="relative z-20 text-center lg:text-left">
                        <p
                            className="
                                hero-fade-up hero-delay-1
                                mb-4 inline-flex items-center
                                rounded-full
                                bg-primary-soft
                                px-4 py-2
                                text-sm font-semibold
                                text-primary
                            "
                        >
                            <span className="mr-2">🌿</span>
                            100% Natural Herbal Products
                        </p>

                        <h1
                            className="
                                text-5xl font-bold
                                leading-[1.05]
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
                                    hero-heading-line hero-delay-4
                                    text-primary-light
                                    "
                            >
                                Made for You.
                            </span>
                        </h1>

                        <p
                            className="
                                hero-fade-up hero-delay-5
                                mx-auto mt-6 max-w-xl
                                text-base leading-8
                                text-muted
                                sm:text-lg
                                lg:mx-0
                            "
                        >
                            Discover premium herbal hair care and beauty products made
                            with carefully selected natural ingredients for healthy,
                            beautiful skin and hair.
                        </p>

                        <div
                            className="
                                hero-fade-up hero-delay-6
                                mt-8 flex flex-wrap
                                justify-center gap-4
                                lg:justify-start
                            "
                        >
                            <Link
                                href="/products"
                                className="
                                    group
                                    inline-flex items-center justify-center gap-2
                                    rounded-full
                                    bg-primary
                                    px-7 py-2
                                    font-semibold text-white
                                    shadow-[0_10px_30px_rgba(63,116,28,0.20)]
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:bg-primary-hover
                                    text-sm
                                    "
                            >
                                Shop Now

                                <ArrowRight
                                    size={18}
                                    className="
                                        transition-transform duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    border border-primary
                                    bg-white
                                    px-7 py-2
                                    font-semibold text-primary
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:bg-primary-soft
                                    text-sm
                                    "
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className="
                            hero-image-enter
                            relative flex
                            min-h-[360px]
                            items-center justify-center
                            sm:min-h-[480px]
                            lg:min-h-[590px]
                        "
                    >
                        <div
                            aria-hidden="true"
                            className="
                                hero-gradient-glow
                                absolute
                                h-[360px] w-[360px]
                                rounded-full
                                sm:h-[500px] sm:w-[500px]
                                lg:h-[620px] lg:w-[620px]
                            "
                        />

                        <div className="relative z-10 w-full">
                            <Image
                                src="/images/hero/hero3.png"
                                alt="Green Blue Nature herbal products"
                                width={1000}
                                height={1000}
                                priority
                                sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 80vw,
                                50vw
                                "
                                className="
                                    mx-auto
                                    h-auto w-full
                                    max-w-[650px]
                                    object-contain
                                    drop-shadow-2xl
                                    lg:max-w-[1000px]
                                    "
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-10">

                <HeroTrustCard />

            </div>


        </section>
    );
}