import type {
    BlogPost,
    BlogsPageContent,
} from "@/types/blogs/blog";

export const blogsPageContent: BlogsPageContent = {
    badge: "Beauty Journal",

    title: "Beauty Tips, Care Guides &",

    highlightedTitle: "Natural Inspiration",

    description:
        "Explore simple skincare routines, hair care advice and naturally inspired beauty tips created to support your everyday personal care journey.",
};

export const blogs: BlogPost[] = [
    {
        id: 1,

        title:
            "How to Build the Perfect Skincare Routine for Healthy, Glowing Skin",

        slug:
            "how-to-build-the-perfect-skincare-routine",

        excerpt:
            "Learn the essential steps of a simple and effective skincare routine designed to support healthy, fresh and glowing-looking skin.",

        category: "Skin Care",

        coverImage:
            "/images/blogs/image.png",

        coverImageAlt:
            "Natural skincare products arranged for a daily skincare routine",

        author: {
            name: "Green Blue Nature",
            role: "Beauty & Wellness Team",
            image: "/images/logo/logo.png",
        },

        publishedDate: "August 05, 2026",

        readingTime: "6 min read",

        introduction: [
            "Healthy, radiant-looking skin is not achieved overnight. It begins with a consistent skincare routine tailored to your skin's individual needs.",

            "Whether you are a beginner or looking to improve your current routine, following the right steps can help you maintain fresh, healthy-looking skin every day.",
        ],

        sections: [
            {
                id: 1,

                heading: "Step 1: Cleanse Your Skin",

                paragraphs: [
                    "Cleansing removes dirt, excess surface oil, makeup and impurities that may accumulate throughout the day.",

                    "Use a gentle cleanser suitable for your skin type. Cleansing once in the morning and again before bedtime can help keep your skin feeling clean and refreshed.",
                ],
            },
            {
                id: 2,

                heading: "Step 2: Apply a Toner",

                paragraphs: [
                    "A toner can help refresh the skin and prepare it for the products applied afterwards.",

                    "Choose a gentle formulation suitable for your skin and avoid products that leave your skin feeling excessively dry or uncomfortable.",
                ],
            },
            {
                id: 3,

                heading: "Step 3: Use a Serum",

                paragraphs: [
                    "Serums contain concentrated ingredients designed to support specific skincare goals such as hydration, dull-looking skin or uneven-looking tone.",

                    "Select a serum according to your skincare needs and follow the recommended usage instructions.",
                ],
            },
            {
                id: 4,

                heading: "Step 4: Moisturize Daily",

                paragraphs: [
                    "Moisturizing is an important step for every skin type, including oily skin.",

                    "A suitable moisturizer can help maintain hydration, support the skin barrier and leave the skin feeling soft and comfortable.",
                ],
            },
            {
                id: 5,

                heading: "Step 5: Never Skip Sunscreen",

                paragraphs: [
                    "Sun protection is one of the most important parts of a morning skincare routine.",

                    "Apply a suitable broad-spectrum sunscreen before sun exposure and follow the product instructions regarding application and reapplication.",
                ],
            },
        ],

        tipsTitle: "Tips for Better-Looking Skin",

        tips: [
            "Drink enough water throughout the day.",
            "Remove makeup before going to sleep.",
            "Avoid touching your face unnecessarily.",
            "Maintain a balanced diet with fruits and vegetables.",
            "Get enough sleep as part of your regular self-care routine.",
            "Introduce new skincare products gradually.",
        ],

        conclusionTitle: "Final Thoughts",

        conclusion: [
            "A good skincare routine does not need to be complicated. Start with the essential steps and choose products that suit your skin type and lifestyle.",

            "Consistency, gentle application and correct product use are often more important than using many different products at once.",
        ],
    },

    {
    id: 2,

    title:
        "Choosing the Right Cosmetics for Your Skin Type",

    slug:
        "choosing-the-right-cosmetics-for-your-skin-type",

    excerpt:
        "Learn how to choose cosmetics and skincare products that suit dry, oily, combination and sensitive skin types.",

    category: "Beauty Tips",

    coverImage:
        "/images/blogs/blog2.png",

    coverImageAlt:
        "Cosmetic and skincare products selected for different skin types",

    author: {
        name: "Green Blue Nature",
        role: "Beauty & Wellness Team",
        image: "/images/logo/logo.png",
    },

    publishedDate: "August 03, 2026",

    readingTime: "5 min read",

    introduction: [
        "Selecting the right cosmetics can enhance your natural beauty while helping you maintain healthy-looking skin.",

        "Understanding your skin type is the first step toward creating a makeup and skincare collection that works well for your individual needs.",
    ],

    sections: [
        {
            id: 1,

            heading: "For Dry Skin",

            paragraphs: [
                "Dry skin often benefits from products designed to provide hydration and nourishment.",

                "Consider cream-based foundations, moisturising primers and hydrating skincare products containing ingredients such as hyaluronic acid, glycerin and ceramides.",
            ],
        },

        {
            id: 2,

            heading: "For Oily Skin",

            paragraphs: [
                "If your skin tends to produce excess oil, choose lightweight, oil-free and non-comedogenic products.",

                "Matte foundations, setting powders and gel-based moisturisers may help control visible shine while maintaining a fresh appearance.",
            ],
        },

        {
            id: 3,

            heading: "For Combination Skin",

            paragraphs: [
                "Combination skin requires a balanced approach because some areas may feel dry while others appear oily.",

                "Lightweight moisturisers and buildable foundations can help hydrate dry areas without making oily areas feel excessively greasy.",
            ],
        },

        {
            id: 4,

            heading: "For Sensitive Skin",

            paragraphs: [
                "Sensitive skin generally benefits from gentle formulations with fewer potentially irritating ingredients.",

                "Choose products without harsh fragrances or excessive alcohol, and perform a patch test before introducing a new product into your routine.",
            ],
        },

        {
            id: 5,

            heading: "Essential Makeup Products",

            paragraphs: [
                "A simple and well-rounded cosmetics collection can include products that prepare the skin, even out the complexion and complete the overall look.",
            ],
        },

        {
            id: 6,

            heading: "Why Quality Matters",

            paragraphs: [
                "Quality cosmetics are generally designed with carefully selected ingredients and more reliable formulations.",

                "Choosing trusted beauty products may improve application, comfort and overall performance while reducing the chance of unnecessary skin irritation.",
            ],
        },
    ],

    tipsTitle: "Essential Makeup Products",

    tips: [
        "Primer for a smooth and prepared base.",
        "Foundation or BB cream suited to your skin tone and skin type.",
        "Concealer for blemishes and the appearance of dark circles.",
        "Setting powder or setting spray for longer-lasting wear.",
        "Blush and highlighter for a fresh-looking finish.",
        "Eyeshadow, eyeliner and mascara to define the eyes.",
        "Lipstick or lip gloss to complete the look.",
    ],

    conclusionTitle: "Final Thoughts",

    conclusion: [
        "The best cosmetics are products that suit your skin type, tone and personal preferences.",

        "Focus on gentle formulations, trusted ingredients and products that feel comfortable on your skin rather than following every beauty trend.",
    ],
}

];

export function getBlogBySlug(
    slug: string,
): BlogPost | undefined {
    return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(
    currentBlogId: number,
    category: BlogPost["category"],
    limit = 3,
): BlogPost[] {
    const sameCategoryBlogs = blogs.filter(
        (blog) =>
            blog.id !== currentBlogId &&
            blog.category === category,
    );

    if (sameCategoryBlogs.length >= limit) {
        return sameCategoryBlogs.slice(0, limit);
    }

    const additionalBlogs = blogs.filter(
        (blog) =>
            blog.id !== currentBlogId &&
            blog.category !== category &&
            !sameCategoryBlogs.some(
                (relatedBlog) =>
                    relatedBlog.id === blog.id,
            ),
    );

    return [
        ...sameCategoryBlogs,
        ...additionalBlogs,
    ].slice(0, limit);
}