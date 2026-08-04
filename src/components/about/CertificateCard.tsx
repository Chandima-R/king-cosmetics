import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Award,
    ExternalLink,
    FileText,
} from "lucide-react";

import type { Certification } from "@/types/about/certifications";

type CertificateCardProps = {
    certificate: Certification;
};

export default function CertificateCard({
    certificate,
}: CertificateCardProps) {
    const isPdf = certificate.type === "pdf";

    return (
        <Link
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certificate.title}`}
            className="group flex h-full flex-col overflow-hidden bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 "
        >
            {/* Certificate preview */}
            <div className="relative h-52 overflow-hidden bg-primary-soft/40">
                <Image
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    fill
                    sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1023px) 50vw,
                        (max-width: 1279px) 33vw,
                        25vw
                    "
                    className=" transition-transform duration-500 group-hover:scale-105"
                />

                {/* File type */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-md">
                    {isPdf ? (
                        <FileText className="h-3.5 w-3.5" />
                    ) : (
                        <Award className="h-3.5 w-3.5" />
                    )}

                    {isPdf ? "PDF" : "Image"}
                </div>

                {/* Hover preview icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                </div>
            </div>

            {/* Certificate details */}
            <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Certified Standard
                </p>

                <h3 className="mt-2 text-lg font-bold leading-snug text-foreground">
                    {certificate.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-xs leading-6 text-muted-foreground">
                    {certificate.description}
                </p>

                <div className="mt-auto pt-5">
                    <div className="h-px bg-border/80" />

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                            View Certificate
                        </span>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}