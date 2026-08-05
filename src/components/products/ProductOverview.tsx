"use client";

import Link from "next/link";
import { useState } from "react";
import {
    BadgeCheck,
    Check,
    MessageCircle,
    Minus,
    Plus,
    ShoppingCart,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/products/product";

type ProductOverviewProps = {
    product: Product;
};

export default function ProductOverview({
    product,
}: ProductOverviewProps) {
    const [quantity, setQuantity] = useState(1);
    const [showAddedState, setShowAddedState] = useState(false);

    const {
        addToCart,
        getProductQuantity,
    } = useCart();

    const whatsappNumber = "94771234567";

    const whatsappMessage = encodeURIComponent(
        `Hello, I would like to order ${product.name} (${product.size}).

Quantity: ${quantity}`,
    );

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const formattedPrice = new Intl.NumberFormat("en-LK", {
        style: "currency",
        currency: product.currency,
        minimumFractionDigits: 2,
    }).format(product.price);

    const productQuantityInCart = getProductQuantity(product.id);

    const mainImage =
        product.images?.[0]?.src ??
        "/images/products/placeholder.png";

    const increaseQuantity = () => {
        setQuantity((currentQuantity) => currentQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((currentQuantity) =>
            Math.max(1, currentQuantity - 1),
        );
    };

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
            quantity,
        );

        setShowAddedState(true);

        window.setTimeout(() => {
            setShowAddedState(false);
        }, 1500);
    };

    return (
        <div className="flex h-full flex-col lg:pl-6">
            {/* Top content */}
            <div>
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

                <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                    {product.name}
                </h1>

                <p className="mt-4 text-base text-muted-foreground">
                    {product.shortDescription}
                </p>

                {/* Price and size */}
                <div className="mt-7 flex flex-wrap items-end gap-x-8 gap-y-2 border-y border-border py-3">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Price
                        </p>

                        <p className="mt-1 text-lg font-bold text-primary">
                            {formattedPrice}
                        </p>
                    </div>

                    <div className="hidden h-12 w-px bg-border sm:block" />

                    <div>
                        <p className="text-sm font-medium text-muted-foreground">
                            Size / Volume
                        </p>

                        <p className="mt-1 text-lg font-bold text-foreground">
                            {product.size}
                        </p>
                    </div>
                </div>

                {/* Quantity */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            Quantity
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Select the number of items you need.
                        </p>
                    </div>

                    <div className="flex items-center overflow-hidden rounded-full border border-border bg-background">
                        <button
                            type="button"
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Minus className="h-4 w-4" />
                        </button>

                        <span className="flex h-11 min-w-12 items-center justify-center border-x border-border px-3 text-sm font-bold text-foreground">
                            {quantity}
                        </span>

                        <button
                            type="button"
                            onClick={increaseQuantity}
                            aria-label="Increase quantity"
                            className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Existing cart information */}
                {productQuantityInCart > 0 && (
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-primary-soft/50 px-4 py-3">
                        <p className="text-xs font-medium text-foreground">
                            {productQuantityInCart}{" "}
                            {productQuantityInCart === 1
                                ? "item"
                                : "items"}{" "}
                            currently in your cart.
                        </p>

                        <Link
                            href="/cart"
                            className="text-xs font-semibold text-primary transition hover:underline"
                        >
                            View Cart
                        </Link>
                    </div>
                )}
            </div>

            {/* Bottom actions */}
            <div className="mt-8 lg:mt-auto lg:pt-8">
                <div className="grid gap-3 sm:grid-cols-2">
                    {/* Add to cart */}
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className={`
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            border
                            px-6
                            py-4
                            text-sm
                            font-bold
                            transition-all
                            duration-300
                            ${product.inStock
                                ? showAddedState
                                    ? "border-primary bg-primary-soft text-primary"
                                    : "border-primary bg-background text-primary hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-lg"
                                : "cursor-not-allowed border-border bg-muted text-muted-foreground"
                            }
                        `}
                    >
                        {showAddedState ? (
                            <>
                                <Check className="h-5 w-5" />
                                Added to Cart
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="h-5 w-5" />
                                Add to Cart
                            </>
                        )}
                    </button>

                    {/* WhatsApp */}
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={!product.inStock}
                        className={`
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            px-6
                            py-4
                            text-sm
                            font-bold
                            transition-all
                            duration-300
                            ${product.inStock
                                ? "bg-primary text-white hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl"
                                : "pointer-events-none bg-muted text-muted-foreground"
                            }
                        `}
                    >
                        <MessageCircle className="h-5 w-5" />

                        {product.inStock
                            ? "Order via WhatsApp"
                            : "Currently Unavailable"}
                    </Link>
                </div>

                <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                    Add the product to your cart or place a direct order
                    through WhatsApp.
                </p>
            </div>
        </div>
    );
}