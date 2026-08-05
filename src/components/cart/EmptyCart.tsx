import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function EmptyCart() {
    return (
        <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-primary/20 bg-primary-soft/20 px-6 py-16 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-soft/40">
                <ShoppingCart className="h-11 w-11 text-primary-light" />
            </div>

            <h2 className="mt-8 text-xl font-bold text-foreground">
                Your Cart is Empty
            </h2>

            <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Looks like you haven't added any products yet.
                Explore our natural beauty collection and find
                the perfect products for your daily routine.
            </p>

            <Link
                href="/products"
                className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-7
                    py-2
                    font-semibold
                    text-xs
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-primary-hover
                    hover:shadow-lg
                "
            >
                Browse Products

                <ArrowRight
                    className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
            </Link>
        </div>
    );
}