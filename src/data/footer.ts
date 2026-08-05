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
            href: "https://facebook.com/",
            icon: "/images/social-media-icons/footer/facebook.png",
        },
        {
            label: "Instagram",
            href: "https://instagram.com/",
            icon: "/images/social-media-icons/footer/instagram.png",
        },
        {
            label: "TikTok",
            href: "https://tiktok.com/",
            icon: "/images/social-media-icons/footer/tiktok.png",
        },
        {
            label: "WhatsApp",
            href: "https://wa.me/94771234567",
            icon: "/images/social-media-icons/footer/whatsapp.png",
        },
    ],

    contactDetails: [
        {
            id: 1,
            type: "address",
            values: [
                "Green Blue Nature (Pvt) Ltd",
                "No. 123, Galle Road",
                "Colombo 03, Sri Lanka",
            ],
        },
        {
            id: 2,
            type: "phone",
            values: [
                "+94 77 123 4567",
                "+94 11 234 5678",
            ],
        },
        {
            id: 3,
            type: "email",
            values: ["info@greenbluenature.lk"],
        },
    ],
};