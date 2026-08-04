import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

import type { FeaturedProduct } from "@/types/landing/featured-product";

type ProductCardProps = {
    product: FeaturedProduct;
};

export default function FeaturedProductCard({ product }: ProductCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border">
            {/* Product Image */}
            <Link
                href={`/products/${product.slug}`}
                className="relative block aspect-4/4 overflow-hidden "
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
            <div className="flex flex-1 flex-col px-6 py-3">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-lg font-bold leading-snug text-foreground transition-colors duration-300 hover:text-primary">
                        {product.name}
                    </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                    {product.shortDescription}
                </p>

                <div className="flex justify-between">

                    <Link
                        href={`/products/${product.slug}`}
                        className="group/button mt-6 inline-flex w-fit items-center gap-2 text-base font-bold"
                    >
                        {product.price}

                    </Link>

                    <button
                        type="button"
                        aria-label="Add to cart"
                        className="
                            group
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-primary
                            text-white
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-primary-hover
                            hover:shadow-lg
                        "
                    >
                        <ShoppingCart
                            size={20}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </button>


                </div>


            </div>
        </article>
    );
}