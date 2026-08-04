import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import type { Product } from "@/types/products/product";

type ProductOrderCTAProps = {
    product: Product;
};

export default function ProductOrderCTA({
    product,
}: ProductOrderCTAProps) {
    const whatsappNumber = "94771234567";

    const message = encodeURIComponent(
        `Hello, I would like to order ${product.name} (${product.size}). Please provide me with more information.`,
    );

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-center text-white sm:px-12 sm:py-16">
                    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl">
                        <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                            Ready to Order?
                        </span>

                        <h2 className="mt-6 text-3xl font-bold sm:text-4xl text-primary-light">
                            Interested in {product.name}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
                            Contact our team through WhatsApp to confirm availability,
                            delivery charges and order information.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-primary transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Order on WhatsApp
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-primary"
                            >
                                Contact Our Team
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}