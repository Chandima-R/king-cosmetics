"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "@/types/cart/cart";

type CartItemProps = {
    item: CartItemType;
    onIncrease?: (id: number) => void;
    onDecrease?: (id: number) => void;
    onRemove?: (id: number) => void;
};

export default function CartItem({
    item,
    onIncrease,
    onDecrease,
    onRemove,
}: CartItemProps) {
    const subtotal = item.price * item.quantity;

    const formatPrice = (value: number) =>
        new Intl.NumberFormat("en-LK", {
            style: "currency",
            currency: item.currency,
            minimumFractionDigits: 2,
        }).format(value);

    return (
        <article className="rounded-2xl border border-border/80 bg-background p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Image */}
                <Link
                    href={`/products/${item.slug}`}
                    className="flex h-24 w-full shrink-0 items-center justify-center rounded-xl bg-primary-soft/30 sm:h-24 sm:w-24"
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={130}
                        height={130}
                        className="h-20 w-20 object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            {item.category}
                        </span>

                        <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${item.inStock
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-600"
                                }`}
                        >
                            {item.inStock ? "In Stock" : "Unavailable"}
                        </span>
                    </div>

                    <Link
                        href={`/products/${item.slug}`}
                        className="mt-2 block line-clamp-1 text-base font-bold text-foreground transition-colors hover:text-primary"
                    >
                        {item.name}
                    </Link>

                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span>{item.size}</span>

                        <span className="font-semibold text-primary">
                            {formatPrice(item.price)}
                        </span>
                    </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between gap-4 sm:justify-start">
                    <div className="flex items-center overflow-hidden rounded-full border border-border">
                        <button
                            type="button"
                            onClick={() => onDecrease?.(item.id)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-primary-soft"
                        >
                            <Minus className="h-3.5 w-3.5" />
                        </button>

                        <span className="flex h-8 min-w-9 items-center justify-center border-x border-border px-2 text-xs font-semibold">
                            {item.quantity}
                        </span>

                        <button
                            type="button"
                            onClick={() => onIncrease?.(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-primary-soft"
                        >
                            <Plus className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    {/* Subtotal */}
                    <div className="min-w-28 text-right">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            Subtotal
                        </p>

                        <p className="mt-1 text-sm font-bold text-primary">
                            {formatPrice(subtotal)}
                        </p>
                    </div>

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={() => onRemove?.(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-100 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </article>
    );
}