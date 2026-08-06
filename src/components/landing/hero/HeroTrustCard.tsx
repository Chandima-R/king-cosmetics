"use client";

import { useEffect, useState } from "react";
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

const AUTO_SLIDE_INTERVAL = 3000;

type HeroTrustCardProps = {
    variant?: "mobile" | "desktop";
};

export default function HeroTrustCard({
    variant = "mobile",
}: HeroTrustCardProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (variant !== "mobile") {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex(
                (currentIndex) =>
                    (currentIndex + 1) % trustItems.length,
            );
        }, AUTO_SLIDE_INTERVAL);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [variant]);

    if (variant === "mobile") {
        return (
            <div className="mx-auto w-full max-w-md">
                {/* Vertical slider viewport */}
                <div className="h-[64px] overflow-hidden">
                    <div
                        className="transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateY(-${activeIndex * 64
                                }px)`,
                        }}
                    >
                        {trustItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex h-[64px] items-center justify-center"
                                >
                                    <div className="flex w-full items-center justify-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                            <Icon
                                                className="h-[18px] w-[18px]"
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div className="min-w-0 text-left">
                                            <h3 className="text-sm font-bold leading-5 text-heading">
                                                {item.title}
                                            </h3>

                                            <p className="text-[11px] font-medium leading-4 text-muted">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Minimal indicator */}
                <div className="mt-1 flex items-center justify-center gap-1.5">
                    {trustItems.map((item, index) => (
                        <button
                            key={item.title}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Show ${item.title}`}
                            aria-current={
                                activeIndex === index
                                    ? "true"
                                    : undefined
                            }
                            className={
                                activeIndex === index
                                    ? "h-1 w-4 rounded-full bg-primary transition-all duration-300"
                                    : "h-1 w-1 rounded-full bg-primary/20 transition-all duration-300"
                            }
                        />
                    ))}
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