"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Check,
    ShoppingCart,
} from "lucide-react";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/products/product";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({
    product,
}: ProductCardProps) {
    const [showAddedState, setShowAddedState] =
        useState(false);

    const {
        addToCart,
        isProductInCart,
    } = useCart();

    const productUrl = `/products/${product.slug}`;

    const formattedPrice = new Intl.NumberFormat(
        "en-LK",
        {
            style: "currency",
            currency: product.currency,
            minimumFractionDigits: 2,
        },
    ).format(product.price);

    const mainImage =
        product.images?.[0]?.src ??
        "/images/products/placeholder.png";

    const mainImageAlt =
        product.images?.[0]?.alt ??
        `${product.name} product image`;

    const isAlreadyInCart = isProductInCart(product.id);

    const handleAddToCart = () => {
        if (!product.inStock) {
            return;
        }

        addToCart({
            productId: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category,
            image: mainImage,
            size: product.size,
            price: product.price,
            currency: product.currency,
            inStock: product.inStock,
        });

        setShowAddedState(true);

        window.setTimeout(() => {
            setShowAddedState(false);
        }, 1400);
    };

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
            {/* Product Image */}
            <Link
                href={productUrl}
                className="relative block aspect-square overflow-hidden"
                aria-label={`View ${product.name}`}
            >
                <Image
                    src={mainImage}
                    alt={mainImageAlt}
                    fill
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw
                    "
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-5 hidden md:block top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
                    {product.category}
                </span>
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

                        {isAlreadyInCart && (
                            <Link
                                href="/cart"
                                className="mt-1 hidden md:inline-flex text-xs font-semibold text-primary hover:underline"
                            >
                                View Cart
                            </Link>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        aria-label={`Add ${product.name} to cart`}
                        className={`
                            flex h-6 w-6 md:h-11 md:w-11 shrink-0
                            items-center justify-center
                            rounded-full text-white
                            shadow-md
                            transition-all duration-300
                            disabled:cursor-not-allowed
                            disabled:bg-muted
                            disabled:text-muted-foreground
                            ${showAddedState
                                ? "bg-primary-hover"
                                : "bg-primary hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"
                            }
                        `}
                    >
                        {showAddedState ? (
                            <Check className="h-3 w-3 md:h-5 md:w-5" />
                        ) : (
                            <ShoppingCart className="h-3 w-3 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110" />
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}