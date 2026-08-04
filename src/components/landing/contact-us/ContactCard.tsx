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

export default function ContactCard({ item }: ContactCardProps) {
    const Icon = icons[item.icon];

    return (
        <Link
            href={item.href}
            target={
                item.icon === "location" || item.icon === "whatsapp"
                    ? "_blank"
                    : undefined
            }
            className="group flex items-start gap-5 rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
        >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft transition-all duration-300 group-hover:bg-primary">
                <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
            </div>


            <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.title}
                </p>

                <p className="mt-2 text-base font-semibold leading-7 text-foreground break-words">
                    {item.value}
                </p>
            </div>


            <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </Link>
    );
}