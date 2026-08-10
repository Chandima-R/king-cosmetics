import type { FooterData } from "@/types/footer";

export const footerData: FooterData = {
    logo: "/images/logo/logo.png",

    description:
        "We create safe, effective and carefully crafted beauty products inspired by nature. Our goal is to bring purity, quality and gentle care into your everyday beauty routine.",

    informationLinks: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about",
        },
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "Request a Quotation",
            href: "/quotation",
        },
        {
            label: "Contact Us",
            href: "/contact",
        },
    ],

    productLinks: [
        {
            label: "Hair Care",
            href: "/products?category=Hair+Care",
        },
        {
            label: "Skin Care",
            href: "/products?category=Skin+Care",
        },
        {
            label: "Body Care",
            href: "/products?category=Body+Care",
        },
        
        
    ],

    socialLinks: [
        {
            label: "Facebook",
            href: "https://www.facebook.com/greenbluenature",
            icon: "/images/social-media-icons/footer/facebook.png",
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/greenbluenaturesl?igsh=ZmhjMDBlYmRzcHh3",
            icon: "/images/social-media-icons/footer/instagram.png",
        },
        {
            label: "TikTok",
            href: "https://www.tiktok.com/@greenbluenature?_r=1&_t=ZS-98fz7Rq998L",
            icon: "/images/social-media-icons/footer/tiktok.png",
        },
        {
            label: "WhatsApp",
            href: "https://wa.me/94713455304",
            icon: "/images/social-media-icons/footer/whatsapp.png",
        },
    ],

    contactDetails: [
        {
            id: 1,
            type: "address",
            values: [
                "Green Blue Nature SL (Pvt) Ltd",
                "udu pussellawa, Badulla",
                "Sri Lanka",
            ],
        },
        {
            id: 2,
            type: "phone",
            values: [
                "+94 71 345 5304",
                "+94 77 314 5296",
                
            ],
        },
        {
            id: 3,
            type: "email",
            values: ["greenbluenaturesl@gmail.com"],
        },
    ],
};