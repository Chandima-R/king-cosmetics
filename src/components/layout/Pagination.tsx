"use client";

import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    className?: string;
};

type PaginationItem = number | "ellipsis-left" | "ellipsis-right";

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    className = "",
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const paginationItems = createPaginationItems(
        currentPage,
        totalPages,
        siblingCount,
    );

    const goToPage = (page: number) => {
        const safePage = Math.min(Math.max(page, 1), totalPages);

        if (safePage !== currentPage) {
            onPageChange(safePage);
        }
    };

    return (
        <nav
            aria-label="Pagination"
            className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
        >
            {/* Previous button */}
            <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
                className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-border
                    bg-background text-foreground
                    transition-all duration-300
                    hover:border-primary/40
                    hover:bg-primary-soft
                    hover:text-primary
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-border
                    disabled:hover:bg-background
                    disabled:hover:text-foreground
                "
            >
                <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page numbers */}
            {paginationItems.map((item) => {
                if (
                    item === "ellipsis-left" ||
                    item === "ellipsis-right"
                ) {
                    return (
                        <span
                            key={item}
                            aria-hidden="true"
                            className="flex h-10 w-8 items-center justify-center text-muted-foreground"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </span>
                    );
                }

                const isActive = currentPage === item;

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => goToPage(item)}
                        aria-label={`Go to page ${item}`}
                        aria-current={isActive ? "page" : undefined}
                        className={`
                            flex h-10 min-w-10 items-center justify-center
                            rounded-full border px-3
                            text-sm font-semibold
                            transition-all duration-300
                            ${isActive
                                ? "border-primary bg-primary text-white shadow-sm"
                                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                            }
                        `}
                    >
                        {item}
                    </button>
                );
            })}

            {/* Next button */}
            <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
                className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-border
                    bg-background text-foreground
                    transition-all duration-300
                    hover:border-primary/40
                    hover:bg-primary-soft
                    hover:text-primary
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-border
                    disabled:hover:bg-background
                    disabled:hover:text-foreground
                "
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </nav>
    );
}

function createPaginationItems(
    currentPage: number,
    totalPages: number,
    siblingCount: number,
): PaginationItem[] {
    /*
     * Pages 7ක් හෝ ඊට අඩු නම්:
     * 1 2 3 4 5 6 7
     */
    const totalVisiblePages = siblingCount * 2 + 5;

    if (totalPages <= totalVisiblePages) {
        return Array.from(
            { length: totalPages },
            (_, index) => index + 1,
        );
    }

    const leftSibling = Math.max(
        currentPage - siblingCount,
        2,
    );

    const rightSibling = Math.min(
        currentPage + siblingCount,
        totalPages - 1,
    );

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    const items: PaginationItem[] = [1];

    if (showLeftEllipsis) {
        items.push("ellipsis-left");
    }

    for (
        let page = leftSibling;
        page <= rightSibling;
        page += 1
    ) {
        items.push(page);
    }

    if (showRightEllipsis) {
        items.push("ellipsis-right");
    }

    items.push(totalPages);

    return items;
}