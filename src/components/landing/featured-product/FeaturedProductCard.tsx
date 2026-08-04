import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { FeaturedProduct } from "@/types/landing/featured-product";

type ProductCardProps = {
    product: FeaturedProduct;
};

export default function FeaturedProductCard({ product }: ProductCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden">
            {/* Product Image */}
            <Link
                href={`/products/${product.slug}`}
                className="relative block aspect-[4/4.3] overflow-hidden "
                aria-label={`View ${product.name}`}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
                    {product.category}
                </span>
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col px-6">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold leading-snug text-foreground transition-colors duration-300 hover:text-primary">
                        {product.name}
                    </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {product.shortDescription}
                </p>

                <Link
                    href={`/products/${product.slug}`}
                    className="group/button mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
                >
                    View Details

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}