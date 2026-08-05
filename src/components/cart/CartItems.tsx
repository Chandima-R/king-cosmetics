"use client";

import { useEffect, useMemo, useState } from "react";

import Pagination from "@/components/layout/Pagination";
import type { CartItem as CartItemType } from "@/types/cart/cart";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

type CartItemsProps = {
    items: CartItemType[];
    itemsPerPage?: number;

    onIncrease?: (id: number) => void;
    onDecrease?: (id: number) => void;
    onRemove?: (id: number) => void;
};

export default function CartItems({
    items,
    itemsPerPage = 4,
    onIncrease,
    onDecrease,
    onRemove,
}: CartItemsProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        items.length / itemsPerPage,
    );

    /*
     * Item remove කරලා current page එක invalid වුණොත්,
     * available last page එකට automatically move කරනවා.
     */
    useEffect(() => {
        if (totalPages === 0) {
            setCurrentPage(1);
            return;
        }

        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const visibleItems = useMemo(() => {
        const startIndex =
            (currentPage - 1) * itemsPerPage;

        const endIndex = startIndex + itemsPerPage;

        return items.slice(startIndex, endIndex);
    }, [currentPage, items, itemsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        /*
         * Cart list එකේ top එකට smooth scroll කරනවා.
         * Header fixed නම් scrollMarginTop class එක useful.
         */
        document
            .getElementById("cart-items-list")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    if (items.length === 0) {
        return <EmptyCart />;
    }

    const firstVisibleItem =
        (currentPage - 1) * itemsPerPage + 1;

    const lastVisibleItem = Math.min(
        currentPage * itemsPerPage,
        items.length,
    );

    return (
        <section
            id="cart-items-list"
            className="scroll-mt-28"
        >
            {/* List header */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-foreground">
                        Cart Items
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Showing {firstVisibleItem}–
                        {lastVisibleItem} of {items.length} items
                    </p>
                </div>

                {totalPages > 1 && (
                    <p className="text-sm font-medium text-muted-foreground">
                        Page{" "}
                        <span className="font-semibold text-foreground">
                            {currentPage}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-foreground">
                            {totalPages}
                        </span>
                    </p>
                )}
            </div>

            {/* Cart items */}
            <div className="space-y-3">
                {visibleItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        onRemove={onRemove}
                    />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    className="mt-7"
                />
            )}
        </section>
    );
}