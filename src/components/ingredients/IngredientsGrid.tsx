import { Leaf } from "lucide-react";

import { ingredients } from "@/data/ingredients/ingredients";

import IngredientCard from "./IngredientCard";

export default function IngredientsGrid() {
    return (
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
            {/* Decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary-soft/60 blur-[130px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-primary-light/15 blur-[130px]"
            />

            <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        <Leaf className="h-4 w-4" />

                        Naturally Selected
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                        The Goodness Behind Our Products
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                        Each ingredient is selected to complement our
                        naturally inspired beauty and personal care
                        formulations.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-8 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                    {ingredients.map((ingredient) => (
                        <IngredientCard
                            key={ingredient.id}
                            ingredient={ingredient}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}