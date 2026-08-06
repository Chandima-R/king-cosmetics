import Image from "next/image";

import type { Ingredient } from "@/types/ingredients/ingredients";

type IngredientCardProps = {
    ingredient: Ingredient;
};

export default function IngredientCard({
    ingredient,
}: IngredientCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_36px_rgba(44,86,27,0.08)] sm:rounded-[20px] lg:rounded-[24px]">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-soft/30 sm:aspect-[5/4] lg:aspect-[4/3]">
                <Image
                    src={ingredient.image}
                    alt={ingredient.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 to-transparent sm:h-14"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 sm:p-4 lg:p-5">
                <div className="text-center">
                    <h2 className="text-base font-bold text-primary sm:text-[15px] lg:text-lg">
                        {ingredient.name}
                    </h2>

                    {ingredient.scientificName && (
                        <p className="mt-1 line-clamp-1 text-[10px] italic text-muted-foreground lg:text-[11px]">
                            {ingredient.scientificName}
                        </p>
                    )}
                </div>

                <p className="mt-3 line-clamp-3 text-center text-[12px] leading-5 text-muted-foreground sm:text-[11px] sm:leading-[1.15rem] lg:mt-4 lg:text-sm lg:leading-6">
                    {ingredient.description}
                </p>

                <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-4 sm:gap-1.5 lg:gap-2 lg:pt-5">
                    {ingredient.benefits.map((benefit) => (
                        <span
                            key={benefit.id}
                            className="rounded-full bg-primary-soft px-2.5 py-1 text-[9px] font-semibold text-primary sm:px-2 sm:text-[8px] lg:px-3 lg:py-1.5 lg:text-[10px]"
                        >
                            {benefit.label}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}