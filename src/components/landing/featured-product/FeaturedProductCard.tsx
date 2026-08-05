"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/products/product";

type ProductCardProps = {
    product: Product;
};

export default function FeaturedProductCard({
    product,
}: ProductCardProps) {
    const [isAdded, setIsAdded] = useState(false);

    const {
        addToCart,
        getProductQuantity,
    } = useCart();

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

    const quantityInCart = getProductQuantity(product.id);

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

        window.setTimeout(() => {
            setIsAdded(false);
        }, 1200);
    };

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
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
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw
                    "
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
                    {product.category}
                </span>

                {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/65 backdrop-blur-[2px]">
                        <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 shadow-sm">
                            Currently Unavailable
                        </span>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col px-6 pb-5 pt-4">
                <Link href={productUrl}>
                    <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-foreground transition-colors duration-300 hover:text-primary">
                        {product.name}
                    </h3>
                </Link>

                <p className="mt-3 line-clamp-3 min-h-[3.75rem] text-sm leading-5 text-muted-foreground">
                    {product.shortDescription}
                </p>

                {/* Bottom row */}
                <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <Link
                        href={productUrl}
                        className="text-base font-bold text-foreground transition-colors hover:text-primary"
                    >
                        {formattedPrice}
                    </Link>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        aria-label={`Add ${product.name} to cart`}
                        className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            shadow-md
                            transition-all
                            duration-300
                            ${!product.inStock
                                ? "cursor-not-allowed bg-muted text-muted-foreground"
                                : isAdded
                                    ? "bg-primary-soft text-primary"
                                    : "bg-primary text-white hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg"
                            }
                        `}
                    >
                        {isAdded ? (
                            <Check className="h-5 w-5" />
                        ) : (
                            <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}