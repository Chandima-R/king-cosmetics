import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    Clock3,
} from "lucide-react";

import type { BlogPost } from "@/types/blogs/blog";

type BlogCardProps = {
    blog: BlogPost;
};

export default function BlogCard({
    blog,
}: BlogCardProps) {
    const blogUrl = `/blogs/${blog.slug}`;

    return (
        <article
            className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border/70
                bg-background
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_16px_38px_rgba(44,86,27,0.09)]
                sm:flex-row
            "
        >
            {/* Square cover image */}
            <Link
                href={blogUrl}
                aria-label={`Read ${blog.title}`}
                className="
                    relative
                    block
                    aspect-square
                    w-full
                    shrink-0
                    overflow-hidden
                    bg-primary-soft/20
                    sm:w-[180px]
                    md:w-[190px]
                    lg:w-[200px]
                "
            >
                <Image
                    src={blog.coverImage}
                    alt={blog.coverImageAlt}
                    fill
                    sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1024px) 190px,
                        200px
                    "
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                <span
                    className="
                        absolute
                        left-3
                        top-3
                        rounded-full
                        border
                        border-white/60
                        bg-white/90
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-primary
                        shadow-sm
                        backdrop-blur-md
                    "
                >
                    {blog.category}
                </span>
            </Link>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                {/* Meta details */}
                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-1.5
                        text-[10px]
                        text-muted-foreground
                    "
                >
                    <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-primary" />
                        {blog.publishedDate}
                    </span>

                </div>

                {/* Title */}
                <Link href={blogUrl}>
                    <h2
                        className="
                            mt-3
                            line-clamp-2
                            min-h-12
                            text-base
                            font-bold
                            leading-6
                            text-foreground
                            transition-colors
                            duration-300
                            group-hover:text-primary
                            lg:text-lg
                        "
                    >
                        {blog.title}
                    </h2>
                </Link>

                {/* Excerpt */}
                <p
                    className="
                        mt-2
                        line-clamp-2
                        text-xs
                        leading-5
                        text-muted-foreground
                        lg:text-sm
                    "
                >
                    {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <div className="flex min-w-0 items-center gap-2">
                        <div
                            className="
                                relative
                                h-8
                                w-8
                                shrink-0
                                overflow-hidden
                                rounded-full
                                border
                                border-primary/10
                                bg-white
                            "
                        >
                            <Image
                                src={blog.author.image}
                                alt={blog.author.name}
                                fill
                                sizes="32px"
                                className="object-contain p-1"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-[11px] font-semibold text-foreground">
                                {blog.author.name}
                            </p>

                            {blog.author.role && (
                                <p className="mt-0.5 truncate text-[9px] text-muted-foreground">
                                    {blog.author.role}
                                </p>
                            )}
                        </div>
                    </div>

                    <Link
                        href={blogUrl}
                        aria-label={`Read ${blog.title}`}
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-primary-soft
                            text-primary
                            transition-all
                            duration-300
                            group-hover:bg-primary
                            group-hover:text-white
                        "
                    >
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}