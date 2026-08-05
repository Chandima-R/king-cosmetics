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

const AUTO_SLIDE_INTERVAL = 3500;

export default function HeroTrustCard() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex(
                (currentIndex) =>
                    (currentIndex + 1) % trustItems.length,
            );
        }, AUTO_SLIDE_INTERVAL);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-primary/10 px-3 py-3 shadow-[0_18px_45px_rgba(44,86,27,0.13)] sm:max-w-xl sm:bg-transparent sm:px-4 sm:py-4 md:max-w-2xl md:bg-white/75 md:backdrop-blur-xl lg:max-w-none lg:rounded-4xl lg:border-0 lg:bg-white/50 lg:px-5 lg:py-2">
            {/* Soft top highlight */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
            />

            {/* Mobile and tablet slider */}
            <div className="overflow-hidden lg:hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {trustItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex w-full shrink-0 justify-center px-1"
                            >
                                <div className="group flex w-full max-w-md items-center justify-center gap-4 rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 text-center transition-all duration-300 hover:border-primary/20 hover:bg-primary-soft/30 sm:py-5">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary-soft text-primary shadow-[0_6px_16px_rgba(52,101,31,0.08)] transition-transform duration-300 group-hover:scale-105">
                                        <Icon
                                            className="h-5 w-5"
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div className="text-left">
                                        <h3 className="text-sm font-bold leading-5 text-heading sm:text-base">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium leading-5 text-muted">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Slider dots */}
                <div className="mt-4 flex items-center justify-center gap-2">
                    {trustItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${item.title}`}
                                aria-current={isActive ? "true" : undefined}
                                className={
                                    isActive
                                        ? "h-2 w-6 rounded-full bg-primary transition-all duration-300"
                                        : "h-2 w-2 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/40"
                                }
                            />
                        );
                    })}
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-5 lg:gap-0">
                {trustItems.map((item, index) => {
                    const Icon = item.icon;
                    const hasDivider =
                        index !== trustItems.length - 1;

                    return (
                        <div
                            key={item.title}
                            className={`group relative flex min-h-[74px] min-w-0 items-center gap-3 px-4 py-2 xl:px-5 ${hasDivider
                                ? "after:absolute after:right-0 after:top-1/2 after:h-9 after:w-px after:-translate-y-1/2 after:bg-primary/10"
                                : ""
                                }`}
                        >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary-soft text-primary shadow-[0_6px_16px_rgba(52,101,31,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20 xl:size-11">
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