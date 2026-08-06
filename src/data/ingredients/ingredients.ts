import type {
    Ingredient,
    IngredientsCTAContent,
    IngredientsHeroContent,
    TransparencyContent,
} from "@/types/ingredients/ingredients";

export const ingredientsHeroContent: IngredientsHeroContent = {
    badge: "Our Key Ingredients",

    title: "The Natural Goodness",

    highlightedTitle: "Behind Our Products",

    description:
        "Discover the carefully selected botanical ingredients used in our skincare, hair care and personal care products.",

    backgroundImage: "/images/background/image.png",
};

export const ingredients: Ingredient[] = [
    {
        id: 1,

        name: "Aloe Vera",

        scientificName: "Aloe barbadensis",

        slug: "aloe-vera",

        image: "/images/ingredients/Aloe.png",

        imageAlt:
            "Fresh aloe vera leaves and aloe vera gel",

        description:
            "A refreshing botanical ingredient commonly used in skincare and hair care products to support hydration and a soft, comfortable feel.",

        benefits: [
            {
                id: 1,
                label: "Hydrating",
            },
            {
                id: 2,
                label: "Refreshing",
            },
        ],
    },

    {
        id: 2,

        name: "Turmeric",

        scientificName: "Curcuma longa",

        slug: "turmeric",

        image: "/images/ingredients/Turmeric.png",

        imageAlt:
            "Fresh turmeric roots and turmeric powder",

        description:
            "Turmeric is a traditional botanical ingredient included in many naturally inspired beauty formulations.",

        benefits: [
            {
                id: 1,
                label: "Brightening",
            },
            {
                id: 2,
                label: "Antioxidant",
            },
        ],
    },

    {
        id: 3,

        name: "Coconut",

        scientificName: "Cocos nucifera",

        slug: "coconut",

        image: "/images/ingredients/Coconut.png",

        imageAlt:
            "Fresh coconut halves with green leaves",

        description:
            "Coconut-derived ingredients are widely used in personal care products designed to support nourishment, softness and moisture.",

        benefits: [
            {
                id: 1,
                label: "Nourishing",
            },
            {
                id: 2,
                label: "Moisturising",
            },
        ],
    },

    {
        id: 4,

        name: "Nelli (Amla)",

        scientificName: "Phyllanthus emblica",

        slug: "nelli-amla",

        image: "/images/ingredients/Nelli.png",

        imageAlt:
            "Fresh green nelli amla fruits with leaves",

        description:
            "Nelli is a traditional botanical ingredient commonly included in hair care and beauty products.",

        benefits: [
            {
                id: 1,
                label: "Revitalising",
            },
            {
                id: 2,
                label: "Hair Care",
            },
        ],
    },

    {
        id: 5,

        name: "Sesame Oil",

        scientificName: "Sesamum indicum",

        slug: "sesame-oil",

        image: "/images/ingredients/Sesami oil.png",

        imageAlt:
            "Natural sesame oil with sesame seeds",

        description:
            "Sesame oil is included in selected formulations designed to support softness, nourishment and conditioning.",

        benefits: [
            {
                id: 1,
                label: "Conditioning",
            },
            {
                id: 2,
                label: "Protective",
            },
        ],
    },

    {
        id: 6,

        name: "Moringa Leaves",

        scientificName: "Moringa oleifera",

        slug: "moringa-leaves",

        image: "/images/ingredients/Moring leaves.png",

        imageAlt:
            "Fresh moringa leaves arranged in a bowl",

        description:
            "Moringa leaves are used in naturally inspired formulations containing plant-based ingredients.",

        benefits: [
            {
                id: 1,
                label: "Purifying",
            },
            {
                id: 2,
                label: "Botanical Care",
            },
        ],
    },

    {
        id: 7,

        name: "Neem",

        scientificName: "Azadirachta indica",

        slug: "neem",

        image: "/images/ingredients/Venivelgata.png",

        imageAlt:
            "Fresh green neem leaves and small white flowers",

        description:
            "Neem is a traditional herbal ingredient widely recognised in skincare and hair care routines.",

        benefits: [
            {
                id: 1,
                label: "Purifying",
            },
            {
                id: 2,
                label: "Refreshing",
            },
        ],
    },

    {
        id: 8,

        name: "Vitamin E",

        slug: "vitamin-e",

        image: "/images/ingredients/Vitamin E.png",

        imageAlt:
            "Golden vitamin E capsules on a light background",

        description:
            "Vitamin E is commonly included in personal care products as an antioxidant and skin-conditioning ingredient.",

        benefits: [
            {
                id: 1,
                label: "Antioxidant",
            },
            {
                id: 2,
                label: "Conditioning",
            },
        ],
    },
];

export const transparencyContent: TransparencyContent = {
    badge: "Why It Matters",

    title: "Transparency in",

    highlightedTitle: "Every Drop",

    description:
        "We believe you deserve to understand what goes into the products you use. That is why we carefully select our ingredients and clearly communicate how they support each formulation.",

    image: "/images/background/ingredients-bg.png",

    imageAlt:
        "Natural oil, green leaves and botanical ingredients",

    stats: [
        {
            id: 1,
            value: "100%",
            label: "Ingredient Transparency",
            description:
                "Clear information about our selected ingredients.",
            icon: "search",
        },
        {
            id: 2,
            value: "0%",
            label: "Hidden Ingredients",
            description:
                "No unnecessary ingredient information is concealed.",
            icon: "flask",
        },
        {
            id: 3,
            value: "100%",
            label: "Committed to You",
            description:
                "Created with customer confidence and care in mind.",
            icon: "heart",
        },
    ],
};

export const ingredientsCTAContent: IngredientsCTAContent = {
    badge: "Discover Our Collection",

    title:
        "Explore Products Created with Naturally Inspired Ingredients",

    description:
        "Browse our skincare, hair care and personal care collection and find products suitable for your everyday beauty routine.",

    buttonLabel: "Explore Our Products",

    buttonHref: "/products",
};