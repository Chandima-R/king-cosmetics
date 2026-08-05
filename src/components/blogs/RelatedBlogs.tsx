import { getRelatedBlogs } from "@/data/blogs/blog";
import type {
    BlogCategory,
} from "@/types/blogs/blog";

import BlogCard from "./BlogCard";

type RelatedBlogsProps = {
    currentBlogId: number;
    category: BlogCategory;
};

export default function RelatedBlogs({
    currentBlogId,
    category,
}: RelatedBlogsProps) {
    const relatedBlogs = getRelatedBlogs(
        currentBlogId,
        category,
        3,
    );

    if (relatedBlogs.length === 0) {
        return null;
    }

    return (
        <section className="border-t border-border bg-primary-soft/15 py-16 lg:py-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        Continue Reading
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                        Related Articles
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        Explore more useful beauty tips and personal care
                        guides from our journal.
                    </p>
                </div>

                <div className="mt-10 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-2">
                    {relatedBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}