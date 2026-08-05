import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import { cartPageData } from "@/data/cart/cart";

type CartHeaderProps = {
    itemCount: number;
};

export default function CartHeader({
    itemCount,
}: CartHeaderProps) {
    return (
        <section className="mb-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                {/* Left */}

                <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        <ShoppingBag className="h-4 w-4" />

                        Shopping Cart
                    </span>

                    <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground lg:text-4xl">
                        {cartPageData.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                        {cartPageData.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/40 px-4 py-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                            {itemCount}
                        </span>

                        <span className="text-sm font-medium text-foreground">
                            {itemCount === 1
                                ? "1 item in your cart"
                                : `${itemCount} items in your cart`}
                        </span>
                    </div>
                </div>

                {/* Right */}

                <Link
                    href={cartPageData.continueShoppingUrl}
                    className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        self-start
                        rounded-full
                        border
                        border-primary/20
                        bg-background
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-primary
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-primary
                        hover:bg-primary-soft
                    "
                >
                    <ArrowLeft
                        className="
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            group-hover:-translate-x-1
                        "
                    />

                    Continue Shopping
                </Link>
            </div>
        </section>
    );
}