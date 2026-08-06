
"use client";

import Image from "next/image";
import { Eye, Leaf, Target } from "lucide-react";

import { visionMission } from "@/data/about/visionAndMission";

export default function VisionMission() {
    return (
        <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
            {/* Decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-44 top-0 h-72 w-72 rounded-full bg-primary-light/15 blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-44 bottom-0 h-72 w-72 rounded-full bg-primary-soft blur-[120px]"
            />

            <Image
                src="/images/background/bg3.png"
                alt=""
                width={260}
                height={260}
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-6
                    -top-6
                    hidden
                    rotate-3
                    select-none
                    opacity-[0.3]
                    blur-[0.3px]
                    sm:block
                    lg:w-64
                    xl:w-72
                "
            />

            <Image
                src="/images/background/bg3.png"
                alt=""
                width={220}
                height={220}
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-10
                    bottom-0
                    hidden
                    -rotate-[170deg]
                    opacity-[0.3]
                    sm:block
                    lg:w-52
                "
            />

            <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:px-5 sm:text-xs">
                        <Leaf className="h-4 w-4" />
                        {visionMission.badge}
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[38px]">
                        {visionMission.title}
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                        {visionMission.subtitle}
                    </p>
                </div>

                {/* Main vision and mission container */}
                <div className="mx-auto mt-8  overflow-hidden bg-primary-soft sm:mt-10 sm:rounded-[60px]">
                    {/* Vision row */}
                    <div className="grid md:grid-cols-[0.82fr_1.18fr]">
                        {/* Vision image */}
                        <div className="group relative min-h-[230px] overflow-hidden rounded-b-full bg-primary-light sm:min-h-[260px] md:min-h-[290px] md:rounded-b-none md:rounded-r-full">
                            <Image
                                src={visionMission.vision.image}
                                alt={visionMission.vision.title}
                                fill
                                sizes="(max-width: 767px) 100vw, 42vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10"
                            />
                        </div>

                        {/* Vision content */}
                        <div className="flex items-center p-5 sm:p-6 lg:p-8">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                                    <Eye className="h-4 w-4" />
                                    Our Vision
                                </div>

                                <h3 className="mt-4 text-xl font-bold leading-tight text-foreground sm:text-2xl">
                                    {visionMission.vision.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {visionMission.vision.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-2 w-full bg-white" />

                    {/* Mission row */}
                    <div className="grid md:grid-cols-[1.18fr_0.82fr]">
                        {/* Mission content */}
                        <div className="order-2 flex items-center p-5 sm:p-6 md:order-1 lg:p-8">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                                    <Target className="h-4 w-4" />
                                    Our Mission
                                </div>

                                <h3 className="mt-4 text-xl font-bold leading-tight text-foreground sm:text-2xl">
                                    {visionMission.mission.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {visionMission.mission.description}
                                </p>
                            </div>
                        </div>

                        {/* Mission image */}
                        <div className="group relative order-1 min-h-[230px] overflow-hidden rounded-b-full bg-primary-light sm:min-h-[260px] md:order-2 md:min-h-[290px] md:rounded-b-none md:rounded-l-full">
                            <Image
                                src={visionMission.mission.image}
                                alt={visionMission.mission.title}
                                fill
                                sizes="(max-width: 767px) 100vw, 42vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"
                            />
                        </div>
                    </div>
                </div>

                {/* Quote strip */}
                <div className="mx-auto mt-6 max-w-4xl sm:mt-8">
                    <div className="relative overflow-hidden rounded-full bg-primary px-5 py-3 text-center shadow-[0_10px_24px_rgba(44,86,27,0.16)] sm:px-8">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-r from-primary-hover via-primary to-primary-hover opacity-80"
                        />

                        <p className="relative text-xs font-semibold tracking-wide text-white sm:text-sm">
                            {visionMission.quote}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}