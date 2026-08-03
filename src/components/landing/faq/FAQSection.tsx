"use client";

import { faqSectionData } from "@/data/landing/faq";
import { useState } from "react";



export default function FAQSection() {

    const [activeId, setActiveId] = useState<number | null>(
        faqSectionData.items[0]?.id ?? null,
    );

    const handleToggle = (id: number) => {
        setActiveId((currentId) => (currentId === id ? null : id));
    };

    return (
        <section className="relative overflow-hidden py-16 lg:py-20">

            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-primary-soft/40 blur-[130px]" />



        </section>
    )

}