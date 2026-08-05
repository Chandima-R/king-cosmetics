"use client";

import Link from "next/link";
import {
    CheckCircle2,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
} from "lucide-react";

import type { CartItem } from "@/types/cart/cart";

type OrderSummaryProps = {
    items: CartItem[];
    whatsappNumber?: string;
    deliveryFee?: number;
};

export default function OrderSummary({
    items,
    whatsappNumber = "94771234567",
    deliveryFee = 0,
}: OrderSummaryProps) {
    const currency = items[0]?.currency ?? "LKR";

    const itemCount = items.reduce(
        (total, item) => total + item.quantity,
        0,
    );

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    const total = subtotal + deliveryFee;

    const formatPrice = (value: number) =>
        new Intl.NumberFormat("en-LK", {
            style: "currency",
            currency,
            minimumFractionDigits: 2,
        }).format(value);

    const productLines = items
        .map(
            (item, index) =>
                `${index + 1}. ${item.name}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ${formatPrice(item.price)}
Subtotal: ${formatPrice(item.price * item.quantity)}`,
        )
        .join("\n\n");

    const whatsappMessage = encodeURIComponent(
        `Hello, I would like to place an order.

Order Details

${productLines}

-------------------------
Total Items: ${itemCount}
Subtotal: ${formatPrice(subtotal)}
Delivery Fee: ${deliveryFee === 0
            ? "To be confirmed"
            : formatPrice(deliveryFee)
        }
Total: ${formatPrice(total)}

Please confirm product availability, delivery charges, and payment details.`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const isCartEmpty = items.length === 0;

    return (
        <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-background shadow-[0_18px_50px_rgba(26,72,39,0.08)]">
                {/* Header */}
                <div className="bg-primary-soft/50 px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                            <PackageCheck className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                Your Order
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-foreground">
                                Order Summary
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="p-6">
                    <div className="space-y-4">
                        <SummaryRow
                            label={`Items (${itemCount})`}
                            value={formatPrice(subtotal)}
                        />

                        <SummaryRow
                            label="Subtotal"
                            value={formatPrice(subtotal)}
                        />

                        <SummaryRow
                            label="Delivery Fee"
                            value={
                                deliveryFee === 0
                                    ? "To be confirmed"
                                    : formatPrice(deliveryFee)
                            }
                        />
                    </div>

                    <div className="my-6 h-px bg-border" />

                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Estimated Total
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                Final delivery charges will be confirmed via
                                WhatsApp.
                            </p>
                        </div>

                        <p className="shrink-0 text-2xl font-bold text-primary">
                            {formatPrice(total)}
                        </p>
                    </div>

                    {/* WhatsApp checkout */}
                    {isCartEmpty ? (
                        <button
                            type="button"
                            disabled
                            className="mt-7 inline-flex h-14 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-muted px-6 text-sm font-semibold text-muted-foreground"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Cart is Empty
                        </button>
                    ) : (
                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(63,116,28,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Proceed via WhatsApp
                        </Link>
                    )}

                    {/* Information */}
                    <div className="mt-6 space-y-3 rounded-2xl bg-primary-soft/40 p-4">
                        <InfoItem text="Your selected products will be included automatically." />
                        <InfoItem text="Availability and delivery charges will be confirmed by our team." />
                        <InfoItem text="No online payment is required on this website." />
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        Secure WhatsApp order inquiry
                    </div>
                </div>
            </div>
        </aside>
    );
}

type SummaryRowProps = {
    label: string;
    value: string;
};

function SummaryRow({
    label,
    value,
}: SummaryRowProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
                {label}
            </span>

            <span className="text-sm font-semibold text-foreground">
                {value}
            </span>
        </div>
    );
}

type InfoItemProps = {
    text: string;
};

function InfoItem({ text }: InfoItemProps) {
    return (
        <div className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

            <p className="text-xs leading-5 text-muted-foreground">
                {text}
            </p>
        </div>
    );
}