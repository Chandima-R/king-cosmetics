import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    ChevronRight,
    Home,
} from "lucide-react";

import type { BlogPost } from "@/types/blogs/blog";

type BlogArticleHeaderProps = {
    blog: BlogPost;
};

export default function BlogArticleHeader({
    blog,
}: BlogArticleHeaderProps) {
    return (
        <>
            {/* Breadcrumb */}
            <div className="border-b border-border/80 bg-background">
                <div className="container mx-auto px-5 py-4 sm:px-6">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex min-w-0 items-center gap-2 overflow-hidden text-xs sm:text-sm"
                    >
                        <Link
                            href="/"
                            className="inline-flex shrink-0 items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Home className="h-3.5 w-3.5" />
                            Home
                        </Link>

                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />

                        <Link
                            href="/blogs"
                            className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                        >
                            Blogs
                        </Link>

                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />

                        <span className="truncate font-medium text-foreground">
                            {blog.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Article header */}
            <header className="relative overflow-hidden py-10 sm:py-12 lg:py-14">
                {/* Decorations */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary-soft/55 blur-[120px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-light/15 blur-[120px]"
                />

                <div className="container relative mx-auto px-5 sm:px-6">
                    <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-background shadow-[0_18px_55px_rgba(44,86,27,0.08)]">
                        <div className="grid items-stretch md:grid-cols-[0.68fr_1.32fr] lg:grid-cols-[0.82fr_1.18fr]">
                            {/* Square cover image */}
                            <div className="relative aspect-square overflow-hidden md:self-center mx-0 md:mx-3 lg:mx-0">
                                <Image
                                    src={blog.coverImage}
                                    alt={blog.coverImageAlt}
                                    fill
                                    priority
                                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 34vw, 45vw"
                                    className="object-cover rounded-none md:rounded-2xl lg:rounded-none"
                                />



                                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur-md md:left-3 md:top-3 md:px-3 md:py-1.5 md:text-[9px] lg:left-4 lg:top-4 lg:px-3.5 lg:py-2 lg:text-[10px]">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex items-center bg-gradient-to-br from-background via-background to-primary-soft/20 px-6 py-8 sm:px-8 sm:py-10 md:px-6 md:py-6 lg:px-10 lg:py-0">
                                <div className="w-full">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary md:text-[10px] lg:text-xs">
                                        Beauty Journal
                                    </p>

                                    <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl md:mt-3 md:text-[26px] md:leading-[1.15] lg:mt-4 lg:text-[42px]">
                                        {blog.title}
                                    </h1>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:mt-3 md:text-[13px] md:leading-6 lg:mt-5 lg:text-base lg:leading-7">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-6 flex items-center justify-end gap-x-5 gap-y-3 border-y border-border/80 py-4 text-xs text-muted-foreground sm:text-sm md:mt-4 md:py-3 md:text-[11px] lg:mt-6 lg:py-4 lg:text-sm">
                                        <span className="inline-flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4 text-primary md:h-3.5 md:w-3.5 lg:h-4 lg:w-4" />
                                            {blog.publishedDate}
                                        </span>
                                    </div>

                                    <div className="mt-5 flex items-center gap-3 md:mt-4 md:gap-2.5 lg:mt-5 lg:gap-3">
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-primary/10 bg-white md:h-9 md:w-9 lg:h-10 lg:w-10">
                                            <Image
                                                src={blog.author.image}
                                                alt={blog.author.name}
                                                fill
                                                sizes="40px"
                                                className="object-contain p-1"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-bold text-foreground md:text-xs lg:text-sm">
                                                {blog.author.name}
                                            </p>

                                            {blog.author.role && (
                                                <p className="mt-0.5 text-xs text-muted-foreground md:text-[10px] lg:text-xs">
                                                    {blog.author.role}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}