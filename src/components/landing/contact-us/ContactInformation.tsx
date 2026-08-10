import Link from "next/link";
import {
    MessageCircle,
    Phone,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

import { contactInfo } from "@/data/landing/contact";

import ContactCard from "./ContactCard";

export default function ContactInformation() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Soft background decorations */}
            <FadeIn
                duration={0.9}
                className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-soft/60 blur-[120px]"
            >
                <div className="h-full w-full" />
            </FadeIn>

            <FadeIn
                delay={0.1}
                duration={0.9}
                className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary-light/15 blur-[120px]"
            >
                <div className="h-full w-full" />
            </FadeIn>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-[1fr_0.95fr]">
                    {/* LEFT */}
                    <div className="max-w-xl">
                        <FadeIn>
                            <span className="inline-flex items-center rounded-full bg-primary-soft px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                                {contactInfo.badge}
                            </span>
                        </FadeIn>

                        <SlideIn
                            direction="bottom"
                            distance={24}
                            delay={0.08}
                            duration={0.65}
                        >
                            <h2 className="mt-7 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                                {contactInfo.title}
                            </h2>
                        </SlideIn>

                        <FadeIn delay={0.16}>
                            <p className="mt-7 text-sm leading-6 text-muted-foreground md:text-lg">
                                {contactInfo.description}
                            </p>
                        </FadeIn>

                        {/* Buttons */}
                        <SlideIn
                            direction="bottom"
                            distance={18}
                            delay={0.24}
                            duration={0.6}
                        >
                            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                                {/* Primary */}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/25 md:gap-2 md:px-7 md:py-3.5 md:text-base"
                                >
                                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                                    Contact Us
                                </Link>

                                {/* Secondary */}
                                <Link
                                    href="https://wa.me/94771234567"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/70 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white md:gap-2 md:px-7 md:py-3.5 md:text-base"
                                >
                                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                                    WhatsApp
                                </Link>
                            </div>
                        </SlideIn>
                    </div>

                    {/* RIGHT */}
                    <StaggerContainer
                        stagger={0.1}
                        delayChildren={0.15}
                        className="grid gap-2 md:gap-6"
                    >
                        {contactInfo.contactItems.map((item) => (
                            <StaggerItem
                                key={item.id}
                                className="h-full"
                            >
                                <ContactCard item={item} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}