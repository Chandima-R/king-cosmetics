import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticleContent from "@/components/blogs/BlogArticleContent";
import BlogArticleHeader from "@/components/blogs/BlogArticleHeader";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import {
    blogs,
    getBlogBySlug,
} from "@/data/blogs/blog";

type SingleBlogPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({
    params,
}: SingleBlogPageProps): Promise<Metadata> {
    const { slug } = await params;

    const blog = getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: `${blog.title} | Green Blue Nature`,

        description: blog.excerpt,

        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [
                {
                    url: blog.coverImage,
                    alt: blog.coverImageAlt,
                },
            ],
            type: "article",
        },
    };
}

export default async function SingleBlogPage({
    params,
}: SingleBlogPageProps) {
    const { slug } = await params;

    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <main>
            <BlogArticleHeader blog={blog} />

            <BlogArticleContent blog={blog} />

            <RelatedBlogs
                currentBlogId={blog.id}
                category={blog.category}
            />
        </main>
    );
}