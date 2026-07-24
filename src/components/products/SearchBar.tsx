"use client";

import { Search, X } from "lucide-react";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    resultCount?: number;
};

export default function SearchBar({
    value,
    onChange,
    resultCount,
}: SearchBarProps) {
    return (
        <div className="w-full">
            <label
                htmlFor="product-search"
                className="sr-only"
            >
                Search products
            </label>

            <div className="group relative">
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

                <input
                    id="product-search"
                    type="search"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="Search by product name, category or ingredient..."
                    autoComplete="off"
                    className="h-14 w-full rounded-full border border-border bg-background pl-14 pr-14 text-base text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                />

                {value.length > 0 && (
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        aria-label="Clear product search"
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>

            {typeof resultCount === "number" && value.trim() !== "" && (
                <p
                    aria-live="polite"
                    className="mt-3 px-2 text-sm text-muted-foreground"
                >
                    {resultCount === 1
                        ? "1 product found"
                        : `${resultCount} products found`}
                </p>
            )}
        </div>
    );
}