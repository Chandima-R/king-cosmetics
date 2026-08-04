import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

import { getProductBySlug, products } from "@/data/products/product";

import ProductGallery from "@/components/products/ProductGallery";
import ProductOverview from "@/components/products/ProductOverview";
import ProductDetails from "@/components/products/ProductDetails";
import DeliveryInformation from "@/components/products/DeliveryInformation";
import ProductOrderCTA from "@/components/products/ProductOrderCTA";

type ProductPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} | Green Blue Nature`,
        description: product.shortDescription,
    };
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main>
            {/* Breadcrumb */}
            <div className="border-b border-border bg-background">
                <div className="container mx-auto px-6 py-5">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex flex-wrap items-center gap-2 text-sm"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />

                        <Link
                            href="/products"
                            className="text-muted-foreground transition hover:text-primary"
                        >
                            Products
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />

                        <span className="font-semibold text-foreground">
                            {product.name}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Product overview */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-6">
                    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                        <ProductGallery
                            images={product.images}
                            productName={product.name}
                        />

                        <ProductOverview product={product} />
                    </div>
                </div>
            </section>

            <ProductDetails product={product} />

            <DeliveryInformation />

            <ProductOrderCTA product={product} />
        </main>
    );
}