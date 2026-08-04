import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { contactInfo } from "@/data/landing/contact";
import ContactCard from "./ContactCard";

export default function ContactInformation() {
    return (
        <section className="relative overflow-hidden">

            <div className="container relative mx-auto px-6">

                <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

                    {/* LEFT */}

                    <div className="max-w-xl">

                        <span className="inline-flex items-center rounded-full bg-primary-soft px-5 py-2 text-sm font-semibold tracking-[0.15em] uppercase text-primary">
                            {contactInfo.badge}
                        </span>

                        <h2 className="mt-7 text-5xl font-bold leading-[1.1] tracking-tight">
                            {contactInfo.title}
                        </h2>

                        <p className="mt-7 text-lg leading-8 text-muted-foreground">
                            {contactInfo.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            {/* Primary */}

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/25"
                            >
                                <Phone className="h-5 w-5" />
                                Contact Us
                            </Link>

                            {/* Secondary */}

                            <Link
                                href="https://wa.me/94771234567"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-7 py-3.5 font-semibold text-primary backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="grid gap-6">


                        {contactInfo.contactItems.map((item) => (
                            <ContactCard
                                key={item.id}
                                item={item}
                            />
                        ))}


                    </div>

                </div>

            </div>
        </section>
    );
}