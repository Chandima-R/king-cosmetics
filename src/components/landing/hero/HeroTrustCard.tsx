"use client";

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

type HeroTrustCardProps = {
    variant?: "mobile" | "desktop";
};

export default function HeroTrustCard({
    variant = "mobile",
}: HeroTrustCardProps) {
    if (variant === "mobile") {
        const loopItems = [...trustItems, ...trustItems];

        return (
            <div className="w-full overflow-hidden">
                <div className="hero-trust-marquee flex w-max items-center">
                    {loopItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`${item.title}-${index}`}
                                className="flex shrink-0 items-center gap-3 px-5 sm:px-6"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary sm:h-10 sm:w-10">
                                    <Icon
                                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="min-w-0 whitespace-nowrap">
                                    <h3 className="text-xs font-bold leading-4 text-heading sm:text-sm sm:leading-5">
                                        {item.title}
                                    </h3>

                                    <p className="mt-0.5 text-[9px] font-medium leading-3 text-muted sm:text-[10px] sm:leading-4">
                                        {item.description}
                                    </p>
                                </div>

                                <span
                                    aria-hidden="true"
                                    className="ml-2 h-7 w-px shrink-0 bg-primary/10"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="relative mx-auto w-full overflow-hidden rounded-[30px] border border-white/50 bg-white/55 px-5 py-2 shadow-[0_18px_45px_rgba(44,86,27,0.13)] backdrop-blur-xl">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
            />

            <div className="grid grid-cols-5">
                {trustItems.map((item, index) => {
                    const Icon = item.icon;

                    const hasDivider =
                        index !== trustItems.length - 1;

                    return (
                        <div
                            key={item.title}
                            className={`group relative flex min-h-[72px] min-w-0 items-center gap-3 px-4 py-2 xl:px-5 ${hasDivider
                                ? "after:absolute after:right-0 after:top-1/2 after:h-9 after:w-px after:-translate-y-1/2 after:bg-primary/10"
                                : ""
                                }`}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary-soft text-primary shadow-[0_6px_16px_rgba(52,101,31,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20 xl:h-11 xl:w-11">
                                <Icon
                                    className="h-[18px] w-[18px] xl:h-5 xl:w-5"
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-[12px] font-bold leading-5 tracking-[-0.01em] text-heading xl:text-[13px]">
                                    {item.title}
                                </h3>

                                <p className="mt-0.5 text-[9px] font-medium leading-4 text-muted xl:text-[10px]">
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