import {
    Check,
    Leaf,
    Lightbulb,
} from "lucide-react";

import type { BlogPost } from "@/types/blogs/blog";

type BlogArticleContentProps = {
    blog: BlogPost;
};

export default function BlogArticleContent({
    blog,
}: BlogArticleContentProps) {
    return (
        <article className="relative overflow-hidden pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-36 top-1/3 h-72 w-72 rounded-full bg-primary-soft/35 blur-[130px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-36 bottom-1/4 h-72 w-72 rounded-full bg-primary-light/10 blur-[130px]"
            />

            <div className="container relative mx-auto px-5 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    {/* Introduction */}
                    <section className="relative border-l-2 border-primary/60 pl-5 sm:pl-6">
                        <span
                            aria-hidden="true"
                            className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary"
                        />

                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                            Introduction
                        </p>

                        <div className="space-y-4">
                            {blog.introduction.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="text-[15px] leading-8 text-muted-foreground sm:text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Article sections */}
                    <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
                        {blog.sections.map((section, index) => (
                            <section
                                key={section.id}
                                className="relative"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Small section number */}
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-bold leading-7 text-foreground sm:text-2xl">
                                            {section.heading}
                                        </h2>

                                        <div className="mt-4 space-y-4">
                                            {section.paragraphs.map(
                                                (paragraph) => (
                                                    <p
                                                        key={paragraph}
                                                        className="text-[15px] leading-8 text-muted-foreground sm:text-base"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {index !==
                                    blog.sections.length - 1 && (
                                        <div className="mt-10 h-px bg-gradient-to-r from-border via-border/70 to-transparent sm:ml-12" />
                                    )}
                            </section>
                        ))}
                    </div>

                    {/* Tips */}
                    {blog.tipsTitle &&
                        blog.tips &&
                        blog.tips.length > 0 && (
                            <section className="mt-14 overflow-hidden rounded-2xl border border-primary/10 bg-primary-soft/25">
                                <div className="flex items-center gap-3 border-b border-primary/10 px-5 py-4 sm:px-6">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                        <Lightbulb className="h-4 w-4" />
                                    </span>

                                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                                        {blog.tipsTitle}
                                    </h2>
                                </div>

                                <ul className="grid gap-x-6 gap-y-3 px-5 py-5 sm:grid-cols-2 sm:px-6 sm:py-6">
                                    {blog.tips.map((tip) => (
                                        <li
                                            key={tip}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                                                <Check className="h-3 w-3" />
                                            </span>

                                            <span className="text-sm leading-6 text-muted-foreground">
                                                {tip}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                    {/* Conclusion */}
                    {blog.conclusion &&
                        blog.conclusion.length > 0 && (
                            <section className="mt-14 rounded-2xl border border-border/80 bg-background p-5 shadow-[0_12px_32px_rgba(44,86,27,0.05)] sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                        <Leaf className="h-4 w-4" />
                                    </span>

                                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                                        {blog.conclusionTitle ??
                                            "Final Thoughts"}
                                    </h2>
                                </div>

                                <div className="mt-5 space-y-4">
                                    {blog.conclusion.map(
                                        (paragraph) => (
                                            <p
                                                key={paragraph}
                                                className="text-[15px] leading-8 text-muted-foreground sm:text-base"
                                            >
                                                {paragraph}
                                            </p>
                                        ),
                                    )}
                                </div>
                            </section>
                        )}
                </div>
            </div>
        </article>
    );
}