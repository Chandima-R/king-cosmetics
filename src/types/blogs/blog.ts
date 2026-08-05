export type BlogCategory =
    | "Skin Care"
    | "Hair Care"
    | "Beauty Tips"
    | "Natural Ingredients"
    | "Wellness";

export type BlogAuthor = {
    name: string;
    role?: string;
    image: string;
};

export type BlogContentSection = {
    id: number;
    heading: string;
    paragraphs: string[];
};

export type BlogPost = {
    id: number;

    title: string;
    slug: string;
    excerpt: string;

    category: BlogCategory;

    coverImage: string;
    coverImageAlt: string;

    author: BlogAuthor;

    publishedDate: string;
    readingTime: string;

    introduction: string[];

    sections: BlogContentSection[];

    tipsTitle?: string;
    tips?: string[];

    conclusionTitle?: string;
    conclusion?: string[];
};

export type BlogsPageContent = {
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
};