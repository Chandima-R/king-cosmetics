import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import { ingredientsCTAContent } from "@/data/ingredients/ingredients";

export default function IngredientsCTA() {
    return (
        <section className="pb-16 sm:pb-20 lg:pb-24">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-5xl overflow-hidden px-6 py-10 text-center  sm:px-10 sm:py-12">
                    {/* Decorative glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary-soft/60 blur-[75px]"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary-light/15 blur-[75px]"
                    />

                    {/* Soft top line */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
                    />

                    <div className="relative mx-auto max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            <Leaf className="h-4 w-4" />

                            {ingredientsCTAContent.badge}
                        </span>

                        <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                            {ingredientsCTAContent.title}
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            {ingredientsCTAContent.description}
                        </p>

                        <Link
                            href={ingredientsCTAContent.buttonHref}
                            className="group mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                        >
                            {ingredientsCTAContent.buttonLabel}

                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}