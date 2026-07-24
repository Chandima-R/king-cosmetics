"use client";

type CategoryFilterProps = {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,

}: CategoryFilterProps) {
    return (

        <div>

            <p className="mb-4 text-sm font-semibold text-foreground">
                Filter by category
            </p>

            <div role="group" aria-label="product categories" className="flex flex-wrap gap-3">

                {categories.map((category) => {
                    const isActive = selectedCategory === category;

                    return (

                        <button key={category} type="button" onClick={() => onCategoryChange(category)} aria-pressed={isActive}
                            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive
                                ? "border-primary bg-primary text-white shadow-md shadow-primary/15"
                                : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                                }`}
                        >

                            {category}

                        </button>

                    )
                })}

            </div>

        </div>

    )
}

