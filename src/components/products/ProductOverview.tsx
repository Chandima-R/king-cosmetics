import Link from "next/link";
import {
    BadgeCheck,
    Box,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
} from "lucide-react";

import type { Product } from "@/types/products/product";

type ProductOverviewProps = {
    product: Product;
};

export default function ProductOverview({
    product,
}: ProductOverviewProps) {
    const whatsappNumber = "94771234567";

    const whatsappMessage = encodeURIComponent(
        `Hello, I would like to order ${product.name} (${product.size}).`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const formattedPrice = new Intl.NumberFormat("en-LK", {
        style: "currency",
        currency: product.currency,
        minimumFractionDigits: 2,
    }).format(product.price);

    return (
        <div className="lg:pl-6">
            <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {product.category}
                </span>

                {product.inStock ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
                        <BadgeCheck className="h-4 w-4" />
                        Available
                    </span>
                ) : (
                    <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-600">
                        Currently unavailable
                    </span>
                )}
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {product.name}
            </h1>

            <p className="mt-5 text-base text-muted-foreground sm:text-base">
                {product.shortDescription}
            </p>

            <div className="mt-7 flex flex-wrap items-end gap-x-8 gap-y-4 border-y border-border py-6">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Price
                    </p>

                    <p className="mt-1 text-lg font-bold text-primary">
                        {formattedPrice}
                    </p>
                </div>

                <div className="h-12 w-px bg-border" />

                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Size / Volume
                    </p>

                    <p className="mt-1 text-lg font-bold text-foreground">
                        {product.size}
                    </p>
                </div>
            </div>

            {/* <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-4">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-semibold text-foreground">
                        Quality Assured
                    </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-4">
                    <PackageCheck className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-semibold text-foreground">
                        Secure Packaging
                    </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-4">
                    <Box className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-semibold text-foreground">
                        Islandwide Delivery
                    </span>
                </div>
            </div> */}

            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold transition-all duration-300 ${product.inStock
                    ? "bg-primary text-white hover:-translate-y-0.5 hover:shadow-xl"
                    : "pointer-events-none bg-muted text-muted-foreground"
                    }`}
            >
                <MessageCircle className="h-5 w-5" />

                {product.inStock ? "Order via WhatsApp" : "Currently Unavailable"}
            </Link>

            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                Clicking this button will open WhatsApp with the selected product
                details.
            </p>
        </div>
    );
}