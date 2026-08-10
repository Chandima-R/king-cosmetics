"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/products/product";

type ProductCardProps = {
    product: Product;
};

export default function FeaturedProductCard({
    product,
}: ProductCardProps) {
    const [isAdded, setIsAdded] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const { addToCart } = useCart();

    const productUrl = `/products/${product.slug}`;

    const mainImage =
        product.images?.[0]?.src ??
        "/images/products/placeholder.png";

    const mainImageAlt =
        product.images?.[0]?.alt ??
        `${product.name} product image`;

    const formattedPrice = new Intl.NumberFormat("en-LK", {
        style: "currency",
        currency: product.currency,
        minimumFractionDigits: 2,
    }).format(product.price);

    const handleAddToCart = () => {
        if (!product.inStock) {
            return;
        }

        addToCart(
            {
                productId: product.id,
                name: product.name,
                slug: product.slug,
                category: product.category,
                image: mainImage,
                size: product.size,
                price: product.price,
                currency: product.currency,
                inStock: product.inStock,
            },
            1,
        );

        setIsAdded(true);

        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setIsAdded(false);
        }, 1200);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const buttonClassName = !product.inStock
        ? "flex shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-muted text-muted-foreground shadow-md h-9 w-9 md:h-11 md:w-11"
        : isAdded
            ? "flex shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary shadow-md transition-all duration-300 h-9 w-9 md:h-11 md:w-11"
            : "flex shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg h-9 w-9 md:h-11 md:w-11";

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:border-primary/20 hover:shadow-lg sm:rounded-2xl md:rounded-3xl">
            {/* Product image */}
            <Link
                href={productUrl}
                aria-label={`View ${product.name}`}
                className="relative block aspect-square overflow-hidden"
            >
                <Image
                    src={mainImage}
                    alt={mainImageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category badge */}
                <span className="absolute left-5 top-5 hidden md:block rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur-md sm:left-3 sm:top-3 sm:px-2.5 sm:py-1.5 sm:text-[9px] md:left-5 md:top-5 md:px-4 md:py-2 md:text-xs">
                    {product.category}
                </span>

                {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/65 backdrop-blur-[2px]">
                        <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 shadow-sm sm:px-2.5 sm:py-1.5 sm:text-[9px] md:px-4 md:py-2 md:text-xs">
                            Currently Unavailable
                        </span>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col px-2 md:px-6 py-4">
                <Link href={productUrl}>
                    <h3 className="text-xs md:text-lg font-bold leading-snug text-foreground transition-colors duration-300 hover:text-primary">
                        {product.name}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-2 min-h-10 hidden md:block text-xs leading-5 text-muted-foreground sm:text-sm">
                    {product.shortDescription}
                </p>

                <div className="mt-auto flex items-end justify-between gap-4 md:pt-5">
                    <div>
                        <span className="hidden md:inline-flex rounded-full bg-primary-soft px-2.5 py-1 text-[9px] md:text-xs font-bold text-primary">
                            {product.size}
                        </span>

                        <p className="mt-2 text-[10px] md:text-base font-bold text-foreground">
                            {formattedPrice}
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        aria-label={
                            product.inStock
                                ? `Add ${product.name} to cart`
                                : `${product.name} is unavailable`
                        }
                        className={buttonClassName}
                    >
                        {isAdded ? (
                            <Check className=":h-4 w-4 md:h-5 md:w-5" />
                        ) : (
                            <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                        )}
                    </button>
                </div>
            </div>

        </article>
    );
}