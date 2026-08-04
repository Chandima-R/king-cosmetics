"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart } from "lucide-react";

import type { Product } from "@/types/products/product";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({
    product,
}: ProductCardProps) {
    const productUrl = `/products/${product.slug}`;

    const formattedPrice = new Intl.NumberFormat("en-LK", {
        style: "currency",
        currency: product.currency,
        minimumFractionDigits: 2,
    }).format(product.price);

    const mainImage =
        product.images?.[0]?.src ?? "/images/products/placeholder.png";

    const mainImageAlt =
        product.images?.[0]?.alt ?? `${product.name} product image`;

    return (
        <article className="group rounded-3xl border border-border">
            <Link
                href={productUrl}
                aria-label={`View details of ${product.name}`}
                className="block"
            >
                {/* Product image area */}
                <div className="relative aspect-[4/5] overflow-hidden ">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/20 blur-3xl" />

                    {/* Category badge */}
                    <span className="absolute left-4 top-4 z-20 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur-md">
                        {product.category}
                    </span>

                    <button
                        type="button"
                        aria-label="Add to cart"
                        className="
                            absolute right-4 top-4 z-20
                            group
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-primary
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-primary-hover
                            hover:shadow-lg
                        "
                    >
                        <ShoppingCart
                            size={20}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </button>



                    <Image
                        src={mainImage}
                        alt={mainImageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />


                </div>

                {/* Product information */}
                <div className="px-6 py-3 pt-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">

                            <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                                {product.name}
                            </h3>
                        </div>

                    </div>

                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                        {product.shortDescription}
                    </p>

                    <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
                        <div>

                            <p className="mt-1 text-lg font-bold text-primary">
                                {formattedPrice}
                            </p>
                        </div>

                        <div className="text-right">

                            <p className="mt-1 text-sm font-bold text-foreground">
                                {product.size}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}