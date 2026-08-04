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
                relative
                mx-auto
                w-full
                
                overflow-hidden
                rounded-4xl
                bg-white/50
                px-3
                py-3
                shadow-[0_18px_45px_rgba(44,86,27,0.13)]
                backdrop-blur-xl
                sm:px-4
                sm:py-4
                lg:px-5
                lg:py-2
            "
        >
            {/* Soft top highlight */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-x-10
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-primary/25
                    to-transparent
                "
            />

            <div
                className="
                    grid
                    grid-cols-1
                    gap-2
                    sm:grid-cols-2
                    sm:gap-3
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
                                group
                                relative
                                flex
                                min-w-0
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-primary/5
                                bg-white/70
                                px-3.5
                                py-3
                                transition-all
                                duration-300
                                hover:border-primary/15
                                hover:bg-primary-soft/30
                                sm:px-4
                                sm:py-3.5
                                lg:min-h-[74px]
                                lg:rounded-none
                                lg:border-0
                                lg:bg-transparent
                                lg:px-4
                                lg:py-2
                                lg:hover:bg-transparent
                                xl:px-5
                                ${index !== trustItems.length - 1
                                    ? `
                                            lg:after:absolute
                                            lg:after:right-0
                                            lg:after:top-1/2
                                            lg:after:h-9
                                            lg:after:w-px
                                            lg:after:-translate-y-1/2
                                            lg:after:bg-primary/10
                                        `
                                    : ""
                                }
                            `}
                        >
                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    size-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-primary/10
                                    bg-primary-soft
                                    text-primary
                                    shadow-[0_6px_16px_rgba(52,101,31,0.08)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-105
                                    group-hover:border-primary/20
                                    sm:size-11
                                    lg:size-10
                                    xl:size-11
                                "
                            >
                                <Icon
                                    className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                                    strokeWidth={1.8}
                                />
                            </div>

                            {/* Text */}
                            <div className="min-w-0">
                                <h3
                                    className="
                                        text-[13px]
                                        font-bold
                                        leading-5
                                        tracking-[-0.01em]
                                        text-heading
                                        sm:text-sm
                                        lg:text-[12px]
                                        xl:text-[13px]
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        font-medium
                                        leading-4
                                        text-muted
                                        sm:text-[11px]
                                        lg:text-[9px]
                                        xl:text-[10px]
                                    "
                                >
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