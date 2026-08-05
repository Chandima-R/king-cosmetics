import BlogsGrid from "@/components/blogs/BlogGrid";
import BlogHero from "@/components/blogs/BlogHero";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="border-b border-border bg-background">

                <div className="container mx-auto px-6 py-5">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/40" />

                        <span className="font-semibold text-foreground">
                            Blogs
                        </span>
                    </nav>
                </div>

                <BlogHero />
                <BlogsGrid />


            </div>
        </main>
    )
}