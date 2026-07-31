import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function ContactMap() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-20">
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/50 blur-[130px]" />

            <div className="container relative mx-auto px-6">
                {/* Section header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        <MapPin className="h-4 w-4" />
                        Find Us
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                        Visit Green Blue Nature
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-muted-foreground">
                        Visit our location to explore our natural beauty
                        products and receive friendly assistance from our team.
                    </p>
                </div>

                {/* Map container */}
                <div className="mt-12 overflow-hidden">
                    <div className="relative overflow-hidden">
                        <iframe
                            title="Green Blue Nature Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241478.31483321477!2d79.77591582509275!3d7.165142887756436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f75cc1aac5d3%3A0xfc0b5dc7efb13adb!2sGREEN%20NATURE%20pvt%20ltd!5e1!3m2!1sen!2slk!4v1785412297857!5m2!1sen!2slk"
                            width="100%"
                            height="520"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block min-h-[380px] w-full border-0 sm:min-h-[450px] lg:min-h-[520px]"
                            allowFullScreen
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}