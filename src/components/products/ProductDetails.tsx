import {
    AlertTriangle,
    Beaker,
    CircleCheckBig,
    Droplets,
    HandHeart,
    Leaf,
    PackageOpen,
    ShieldAlert,
    Sparkles,
} from "lucide-react";

import type { Product } from "@/types/products/product";

import ProductDetailSection from "./ProductDetailsSection";

type ProductDetailsProps = {
    product: Product;
};

export default function ProductDetails({
    product,
}: ProductDetailsProps) {
    return (
        <section className="pb-20 sm:pb-24 mt-5">
            <div className="container mx-auto px-6">
                {/* Full description */}
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex rounded-full bg-primary-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Product Information
                    </span>

                    <h2 className="mt-5 text-xl font-bold text-foreground sm:text-2xl">
                        Everything You Need to Know
                    </h2>

                    <div className="mt-7 space-y-4">
                        {product.fullDescription.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-sm text-muted-foreground sm:text-base"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Main details */}
                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    <ProductDetailSection
                        title="Main Benefits"
                        description="Key benefits you can expect from regular and correct use."
                        points={product.benefits}
                        icon={Sparkles}
                    />

                    <ProductDetailSection
                        title="Ingredients"
                        description="The main ingredients used in this product formulation."
                        points={product.ingredients}
                        icon={Leaf}
                    />

                    <ProductDetailSection
                        title="How to Use"
                        description="Follow these simple steps for the best experience."
                        points={product.howToUse}
                        icon={Droplets}
                    />
                </div>

                {/* Usage and safety details */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <ProductDetailSection
                        title="Suitable For"
                        points={product.suitableFor}
                        icon={HandHeart}
                    />

                    <ProductDetailSection
                        title="Storage Instructions"
                        points={product.storageInstructions}
                        icon={PackageOpen}
                    />

                    <ProductDetailSection
                        title="Precautions"
                        points={product.precautions}
                        icon={AlertTriangle}
                        variant="warning"
                    />

                    <ProductDetailSection
                        title="Allergy Warning"
                        points={product.allergyWarnings}
                        icon={ShieldAlert}
                        variant="warning"
                    />
                </div>

                {/* Small quality strip */}
                {/* <div className="mt-10 grid gap-4 rounded-[2rem] border border-primary/10 bg-background p-6 sm:grid-cols-3 sm:p-8">
                    <div className="flex items-center gap-3">
                        <CircleCheckBig className="h-6 w-6 text-primary" />

                        <p className="font-semibold text-foreground">
                            Carefully formulated
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Beaker className="h-6 w-6 text-primary" />

                        <p className="font-semibold text-foreground">
                            Selected ingredients
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <HandHeart className="h-6 w-6 text-primary" />

                        <p className="font-semibold text-foreground">
                            Made with care
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}