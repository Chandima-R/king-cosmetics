import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import type { ContactItem } from "@/types/landing/contact";

type ContactCardProps = {
    item: ContactItem;
};

const icons = {
    phone: Phone,
    email: Mail,
    location: MapPin,
    whatsapp: MessageCircle,
};

export default function ContactCard({
    item,
}: ContactCardProps) {
    const Icon = icons[item.icon];

    return (
        <Link
            href={item.href}
            target={
                item.icon === "location" ||
                    item.icon === "whatsapp"
                    ? "_blank"
                    : undefined
            }
            className="
                group
                flex
                items-start
                gap-3
                rounded-2xl
                bg-white
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                sm:gap-4
                sm:p-5
                md:gap-5
                md:rounded-3xl
                md:p-6
            "
        >
            {/* Icon */}
            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary-soft
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    sm:h-12
                    sm:w-12
                    md:h-14
                    md:w-14
                    md:rounded-2xl
                "
            >
                <Icon
                    className="
                        h-5
                        w-5
                        text-primary
                        transition-colors
                        duration-300
                        group-hover:text-white
                        md:h-6
                        md:w-6
                    "
                />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
                <p
                    className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-primary
                        sm:text-[11px]
                        md:text-xs
                        md:tracking-[0.16em]
                    "
                >
                    {item.title}
                </p>

                <p
                    className="
                        mt-1
                        break-words
                        text-sm
                        font-semibold
                        leading-6
                        text-foreground
                        sm:text-[15px]
                        md:mt-2
                        md:text-base
                        md:leading-7
                    "
                >
                    {item.value}
                </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
                className="
                    mt-1
                    h-4
                    w-4
                    shrink-0
                    text-muted-foreground
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-primary
                    md:h-5
                    md:w-5
                "
            />
        </Link>
    );
}