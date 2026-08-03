import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { ProductDetailPoint } from "@/types/products/product";

type ProductDetailSectionProps = {
    title: string;
    description?: string;
    points: ProductDetailPoint[];
    icon: LucideIcon;
    variant?: "default" | "warning";
};

export default function ProductDetailSection({
    title,
    description,
    points,
    icon: Icon,
    variant = "default",
}: ProductDetailSectionProps) {
    if (points.length === 0) return null;

    const isWarning = variant === "warning";

    return (
        <section
            className={`rounded-[2rem] p-6 sm:p-8 ${isWarning
                ? "bg-amber-50/70"
                : "bg-primary-soft/50"
                }`}
        >
            <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isWarning
                    ? "bg-amber-100 text-amber-700"
                    : "bg-primary text-white"
                    }`}
            >
                <Icon className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-foreground">
                {title}
            </h2>

            {description && (
                <p className="mt-3 text-sm text-muted-foreground">
                    {description}
                </p>
            )}

            <ul className="mt-6 space-y-4">
                {points.map((point) => (
                    <li
                        key={point.id}
                        className="flex items-start gap-3 text-sm text-foreground sm:text-sm"
                    >
                        <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isWarning
                                ? "bg-amber-100 text-amber-700"
                                : "bg-background text-primary"
                                }`}
                        >
                            <Check className="h-3.5 w-3.5" />
                        </span>

                        <span>{point.text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}