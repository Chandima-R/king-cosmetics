"use client";

import { faqSectionData } from "@/data/landing/faq";
import { HelpCircle } from "lucide-react";
import { useState } from "react";



export default function FAQSection() {

    const [activeId, setActiveId] = useState<number | null>(
        faqSectionData.items[0]?.id ?? null,
    );

    const handleToggle = (id: number) => {
        setActiveId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section className="relative overflow-hidden ">

            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />

            <div className="container relative mx-auto px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        <HelpCircle className="h-4 w-4" />
                        {faqSectionData.badge}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-4xl">
                        {faqSectionData.title}
                    </h2>

                    <p className="mx-auto mt-5 text-sm text-muted-foreground sm:text-base">
                        {faqSectionData.description}
                    </p>

                </div>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">

                    {faqSectionData.items.map((item, index) => {
                        const isActive = activeId === item.id;
                        const contentId = `faq-answer-${item.id}`;

                        return (

                            <article
                                key={item.id}
                                className={`overflow-hidden rounded-2xl border bg-background transition-all duration-300 ${isActive
                                    ? "border-primary/25 shadow-[0_18px_45px_-30px_rgba(15,61,46,0.45)]"
                                    : "border-border/70 hover:border-primary/20"}`}
                            >

                                <button
                                    type="button"
                                    aria-expanded={isActive}
                                    aria-controls={contentId}
                                    onClick={() => handleToggle(item.id)}
                                    className="flex w-full items-center justify-between gap-5 pz-5 py-5 text-left sm:px-6"
                                >

                                    <div className="flex items-center gap-4">
                                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary transition-all duration-300 ${isActive
                                            ? "bg-primary-soft"
                                            : "bg-primary-soft/50"
                                            }`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                </button>

                            </article>

                        )

                    })}

                </div>



            </div>




        </section>
    )

}