import { Leaf } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/contact/ContactSection";
import SocialMediaSection from "@/components/contact/SocialMediaSection";
import ContactMap from "@/components/contact/ContactMap";
import Image from "next/image";


export default function Page() {
    return (

        <>
            <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
                {/* Background Image */}
                <Image
                    src="/images/background/image.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 z-0 object-cover"
                />

                {/* Light Overlay */}
                <div className="absolute inset-0 z-10 bg-white/70" />

                {/* Decorative Blur */}
                <div className="pointer-events-none absolute -left-28 top-0 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                <div className="pointer-events-none absolute -right-28 bottom-0 z-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                {/* Content */}
                <div className="container relative z-20 mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-sm">
                            <Leaf className="h-4 w-4" />
                            Contact Us
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                            We'd Love to
                            <span className="text-primary">
                                {" "}
                                Hear From You
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            Whether you have questions about our natural beauty products,
                            need expert guidance, or simply want to get in touch, our
                            friendly team is always here to help.
                        </p>

                    </div>
                </div>
            </section>

            <ContactSection />
            <SocialMediaSection />
            <ContactMap />

        </>

    )
}