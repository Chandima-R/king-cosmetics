"use client";

import { useMemo, useState } from "react";
import { Newspaper } from "lucide-react";

import BlogCard from "./BlogCard";


import { blogs } from "@/data/blogs/blog";

const ALL_CATEGORY = "All";

export default function BlogsGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState(ALL_CATEGORY);

    const categories = useMemo(() => {
        const blogCategories = blogs.map(
            (blog) => blog.category,
        );

        return [
            ALL_CATEGORY,
            ...Array.from(new Set(blogCategories)),
        ];
    }, []);

    const filteredBlogs = useMemo(() => {
        const normalizedSearch =
            searchQuery.trim().toLowerCase();

        return blogs.filter((blog) => {
            const matchesCategory =
                selectedCategory === ALL_CATEGORY ||
                blog.category === selectedCategory;

            if (!matchesCategory) {
                return false;
            }

            if (!normalizedSearch) {
                return true;
            }

            const searchableContent = [
                blog.title,
                blog.excerpt,
                blog.category,
                blog.author.name,
            ]
                .join(" ")
                .toLowerCase();

            return searchableContent.includes(
                normalizedSearch,
            );
        });
    }, [searchQuery, selectedCategory]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory(ALL_CATEGORY);
    };

    return (
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary-soft/50 blur-[130px]" />

            <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-primary-light/15 blur-[130px]" />

            <div className="container relative mx-auto px-6">


                {/* Result heading */}
                <div className="mt-10 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                            Latest Articles
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                            {selectedCategory === ALL_CATEGORY
                                ? "Explore Our Journal"
                                : selectedCategory}
                        </h2>
                    </div>

                    <p
                        aria-live="polite"
                        className="text-sm text-muted-foreground"
                    >
                        Showing{" "}
                        <span className="font-bold text-foreground">
                            {filteredBlogs.length}
                        </span>{" "}
                        {filteredBlogs.length === 1
                            ? "article"
                            : "articles"}
                    </p>
                </div>

                {/* Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-2">
                        {filteredBlogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-9 flex min-h-[360px] flex-col items-center justify-center rounded-[28px] border border-dashed border-border bg-primary-soft/20 px-6 py-14 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                            <Newspaper className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-foreground">
                            No Articles Found
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                            We could not find an article matching
                            your current search and category.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                        >
                            View All Articles
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}