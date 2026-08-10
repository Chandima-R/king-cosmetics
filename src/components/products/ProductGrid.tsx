"use client";

import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import {
    ChevronLeft,
    ChevronRight,
    PackageSearch,
    RotateCcw,
} from "lucide-react";

import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";
import type { Product } from "@/types/products/product";

import ProductCard from "./ProductCard";

type ProductsGridProps = {
    products: Product[];
};

const ALL_CATEGORY = "All";
const PRODUCTS_PER_PAGE = 8;

export default function ProductsGrid({
    products,
}: ProductsGridProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchFromUrl =
        searchParams.get("search") ?? "";

    const categoryFromUrl =
        searchParams.get("category") ?? ALL_CATEGORY;

    const [searchQuery, setSearchQuery] =
        useState(searchFromUrl);

    const [
        selectedCategory,
        setSelectedCategory,
    ] = useState(categoryFromUrl);

    const [currentPage, setCurrentPage] =
        useState(1);

    const categories = useMemo(() => {
        const productCategories = products
            .map((product) =>
                product.category.trim(),
            )
            .filter(Boolean);

        return [
            ALL_CATEGORY,
            ...Array.from(
                new Set(productCategories),
            ).sort((a, b) =>
                a.localeCompare(b),
            ),
        ];
    }, [products]);

    useEffect(() => {
        setSearchQuery(searchFromUrl);

        setSelectedCategory(
            categories.includes(categoryFromUrl)
                ? categoryFromUrl
                : ALL_CATEGORY,
        );
    }, [
        searchFromUrl,
        categoryFromUrl,
        categories,
    ]);

    const updateUrl = useCallback(
        (
            search: string,
            category: string,
        ) => {
            const params = new URLSearchParams(
                searchParams.toString(),
            );

            if (search.trim()) {
                params.set("search", search);
            } else {
                params.delete("search");
            }

            if (category !== ALL_CATEGORY) {
                params.set("category", category);
            } else {
                params.delete("category");
            }

            const queryString = params.toString();

            router.replace(
                queryString
                    ? `${pathname}?${queryString}`
                    : pathname,
                {
                    scroll: false,
                },
            );
        },
        [
            pathname,
            router,
            searchParams,
        ],
    );

    const handleSearchChange = (
        value: string,
    ) => {
        setSearchQuery(value);
        setCurrentPage(1);

        updateUrl(
            value,
            selectedCategory,
        );
    };

    const handleCategoryChange = (
        category: string,
    ) => {
        setSelectedCategory(category);
        setCurrentPage(1);

        updateUrl(
            searchQuery,
            category,
        );
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory(ALL_CATEGORY);
        setCurrentPage(1);

        router.replace(pathname, {
            scroll: false,
        });
    };

    const filteredProducts = useMemo(() => {
        const normalizedSearch = searchQuery
            .trim()
            .toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                selectedCategory ===
                ALL_CATEGORY ||
                product.category ===
                selectedCategory;

            if (!matchesCategory) {
                return false;
            }

            if (!normalizedSearch) {
                return true;
            }

            const ingredientText =
                product.ingredients
                    ?.map(
                        (ingredient) =>
                            ingredient.text,
                    )
                    .join(" ")
                    .toLowerCase() ?? "";

            const searchableContent = [
                product.name,
                product.category,
                product.shortDescription,
                ingredientText,
                product.size,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableContent.includes(
                normalizedSearch,
            );
        });
    }, [
        products,
        searchQuery,
        selectedCategory,
    ]);

    const totalPages = Math.ceil(
        filteredProducts.length /
        PRODUCTS_PER_PAGE,
    );

    const paginatedProducts = useMemo(() => {
        const startIndex =
            (currentPage - 1) *
            PRODUCTS_PER_PAGE;

        const endIndex =
            startIndex + PRODUCTS_PER_PAGE;

        return filteredProducts.slice(
            startIndex,
            endIndex,
        );
    }, [
        filteredProducts,
        currentPage,
    ]);

    /*
     * If filtering reduces the number of pages,
     * keep currentPage inside the valid range.
     */
    useEffect(() => {
        if (
            totalPages > 0 &&
            currentPage > totalPages
        ) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const hasActiveFilters =
        searchQuery.trim() !== "" ||
        selectedCategory !== ALL_CATEGORY;

    const handlePageChange = (
        page: number,
    ) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        setCurrentPage(page);

        /*
         * Scroll back to product collection
         * instead of the top of the whole page.
         */
        window.requestAnimationFrame(() => {
            document
                .getElementById(
                    "product-collection",
                )
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        });
    };

    const firstVisibleProduct =
        filteredProducts.length === 0
            ? 0
            : (currentPage - 1) *
            PRODUCTS_PER_PAGE +
            1;

    const lastVisibleProduct = Math.min(
        currentPage * PRODUCTS_PER_PAGE,
        filteredProducts.length,
    );

    return (
        <section
            id="product-collection"
            className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto px-6">
                {/* Search and categories */}
                <div className="rounded-[2rem] border border-border bg-background p-5 sm:p-7 lg:p-8">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm font-semibold text-foreground">
                                Find a product
                            </p>

                            <SearchBar
                                value={searchQuery}
                                onChange={
                                    handleSearchChange
                                }
                                resultCount={
                                    filteredProducts.length
                                }
                            />
                        </div>

                        {hasActiveFilters && (
                            <button
                                type="button"
                                onClick={
                                    clearFilters
                                }
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                            >
                                <RotateCcw className="h-4 w-4" />
                                Clear Filters
                            </button>
                        )}
                    </div>

                    <div className="mt-8 border-t border-border pt-7">
                        <CategoryFilter
                            categories={
                                categories
                            }
                            selectedCategory={
                                selectedCategory
                            }
                            onCategoryChange={
                                handleCategoryChange
                            }
                        />
                    </div>
                </div>

                {/* Products header */}
                <div className="mt-12 flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                            Product Collection
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                            {selectedCategory ===
                                ALL_CATEGORY
                                ? "All Products"
                                : selectedCategory}
                        </h2>
                    </div>

                    <p
                        aria-live="polite"
                        className="text-sm font-medium text-muted-foreground"
                    >
                        {filteredProducts.length >
                            0 ? (
                            <>
                                Showing{" "}
                                <span className="font-bold text-foreground">
                                    {
                                        firstVisibleProduct
                                    }
                                    –
                                    {
                                        lastVisibleProduct
                                    }
                                </span>{" "}
                                of{" "}
                                <span className="font-bold text-foreground">
                                    {
                                        filteredProducts.length
                                    }
                                </span>{" "}
                                products
                            </>
                        ) : (
                            "No products"
                        )}
                    </p>
                </div>

                {/* Product grid */}
                {filteredProducts.length >
                    0 ? (
                    <>
                        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 xl:grid-cols-4">
                            {paginatedProducts.map(
                                (product) => (
                                    <ProductCard
                                        key={
                                            product.id
                                        }
                                        product={
                                            product
                                        }
                                    />
                                ),
                            )}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                                {/* Previous */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handlePageChange(
                                            currentPage -
                                            1,
                                        )
                                    }
                                    disabled={
                                        currentPage === 1
                                    }
                                    aria-label="Previous page"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>

                                {/* Page numbers */}
                                {Array.from(
                                    {
                                        length: totalPages,
                                    },
                                    (_, index) =>
                                        index + 1,
                                ).map((page) => (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() =>
                                            handlePageChange(
                                                page,
                                            )
                                        }
                                        aria-label={`Go to page ${page}`}
                                        aria-current={
                                            currentPage ===
                                                page
                                                ? "page"
                                                : undefined
                                        }
                                        className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition-all duration-300 ${currentPage ===
                                            page
                                            ? "bg-primary text-white shadow-md"
                                            : "border border-border bg-background text-muted-foreground hover:border-primary hover:bg-primary-soft hover:text-primary"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                {/* Next */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handlePageChange(
                                            currentPage +
                                            1,
                                        )
                                    }
                                    disabled={
                                        currentPage ===
                                        totalPages
                                    }
                                    aria-label="Next page"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="mt-10 flex min-h-[380px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-border bg-primary-soft/30 px-6 py-16 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                            <PackageSearch className="h-8 w-8" />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-foreground">
                            No products found
                        </h3>

                        <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                            We could not find a
                            product matching your
                            current search and
                            category. Try another
                            keyword or clear the
                            filters.
                        </p>

                        <button
                            type="button"
                            onClick={
                                clearFilters
                            }
                            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <RotateCcw className="h-4 w-4" />
                            View All Products
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}