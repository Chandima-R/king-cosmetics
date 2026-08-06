export type IngredientBenefit = {
    id: number;
    label: string;
};

export type Ingredient = {
    id: number;
    name: string;
    scientificName?: string;
    slug: string;
    image: string;
    imageAlt: string;
    description: string;
    benefits: IngredientBenefit[];
};

export type IngredientsHeroContent = {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    backgroundImage: string;
};

export type TransparencyStat = {
    id: number;
    value: string;
    label: string;
    description?: string;
    icon: "search" | "flask" | "heart";
};

export type TransparencyContent = {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    image: string;
    imageAlt: string;
    stats: TransparencyStat[];
};

export type IngredientsCTAContent = {
    badge: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
};