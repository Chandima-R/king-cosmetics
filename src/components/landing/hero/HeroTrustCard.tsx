import {
    BadgeCheck,
    Boxes,
    HandHeart,
    ShieldCheck,
    Truck,
} from "lucide-react";

const trustItems = [
    {
        title: "100% Natural",
        description: "Quality Herbal Products",
        icon: ShieldCheck,
    },
    {
        title: "Wide Range",
        description: "Hair, Skin & Body Care",
        icon: Boxes,
    },
    {
        title: "Islandwide",
        description: "Fast Delivery",
        icon: Truck,
    },
    {
        title: "Made with Care",
        description: "Trusted Ingredients",
        icon: HandHeart,
    },
    {
        title: "Quality Assured",
        description: "Carefully Selected",
        icon: BadgeCheck,
    },
];

export default function HeroTrustCard() {
    return (
        <div
            className="
                hero-trust-card
                relative z-30
                mx-auto
                w-full
                rounded-4xl
                border border-border-light
                bg-white/95
                px-4 py-4
                shadow-[0_18px_50px_rgba(49,95,24,0.12)]
                backdrop-blur-xl
                sm:px-6
                lg:px-8
                lg:py-5
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                    lg:grid-cols-5
                    lg:gap-0
                    "
            >
                {trustItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className={`
                                flex items-center gap-3
                                rounded-xl
                                px-3 py-3
                                
                                lg:rounded-none
                                lg:px-5
                                lg:py-1
                                ${index !== trustItems.length - 1
                                    ? "lg:border-r lg:border-border-light"
                                    : ""
                                }
                            `}
                        >
                            <div
                                className="
                                flex size-11 shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-primary-soft
                                text-primary
                                "
                            >
                                <Icon size={21} strokeWidth={1.8} />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-heading">
                                    {item.title}
                                </h3>

                                <p className="mt-0.5 text-xs leading-5 text-muted">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}