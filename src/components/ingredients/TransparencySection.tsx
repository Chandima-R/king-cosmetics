import Image from "next/image";
import {
    FlaskConical,
    HeartHandshake,
    SearchCheck,
} from "lucide-react";

import { transparencyContent } from "@/data/ingredients/ingredients";
import type { TransparencyStat } from "@/types/ingredients/ingredients";

function getStatIcon(icon: TransparencyStat["icon"]) {
    const iconClassName = "h-5 w-5";

    switch (icon) {
        case "search":
            return <SearchCheck className={iconClassName} />;

        case "flask":
            return <FlaskConical className={iconClassName} />;

        case "heart":
            return <HeartHandshake className={iconClassName} />;

        default:
            return null;
    }
}

export default function TransparencySection() {
    return (
        <section className="pb-14 sm:pb-16 lg:pb-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                <div className="mx-auto  overflow-hidden rounded-[28px] border border-primary/10 bg-primary-soft/35 shadow-[0_20px_55px_rgba(44,86,27,0.08)] sm:rounded-[34px]">
                    <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                        {/* Image */}
                        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[430px]">
                            <Image
                                src={transparencyContent.image}
                                alt={transparencyContent.imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 46vw"
                                className="object-cover"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex items-center p-6 sm:p-8 lg:p-10">
                            <div className="w-full">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    {transparencyContent.badge}
                                </p>

                                <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground">
                                    {transparencyContent.title}

                                    <span className="text-primary">
                                        {" "}
                                        {transparencyContent.highlightedTitle}
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                                    {transparencyContent.description}
                                </p>

                                {/* Stats */}
                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    {transparencyContent.stats.map(
                                        (stat) => (
                                            <div
                                                key={stat.id}
                                                className="border-primary/10 sm:border-r sm:pr-4 sm:last:border-r-0"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                                                        {getStatIcon(
                                                            stat.icon,
                                                        )}
                                                    </div>

                                                    <p className="text-xl font-bold text-primary">
                                                        {stat.value}
                                                    </p>
                                                </div>

                                                <p className="mt-3 text-xs font-bold text-foreground">
                                                    {stat.label}
                                                </p>

                                                {stat.description && (
                                                    <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                                                        {
                                                            stat.description
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}