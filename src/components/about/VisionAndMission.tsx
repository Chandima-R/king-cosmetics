"use client";

import Image from "next/image";
import { ArrowRight, Eye, Leaf, Target } from "lucide-react";

import { visionMission } from "@/data/about/visionAndMission";

export default function VisionMission() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-24">

            {/* Background */}
            <div className="absolute -left-44 top-0 h-80 w-80 rounded-full bg-primary-light/20 blur-[120px]" />
            <div className="absolute -right-44 bottom-0 h-80 w-80 rounded-full bg-primary-soft blur-[120px]" />

            <div className="container relative mx-auto px-6">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">

                        <Leaf className="h-4 w-4" />

                        {visionMission.badge}

                    </span>

                    <h2 className="mt-6 font-bold leading-tight text-3xl lg:text-4xl">

                        {visionMission.title}

                    </h2>

                    <p className="mt-5 text-base leading-7 text-muted-foreground">

                        {visionMission.subtitle}

                    </p>

                </div>

                {/* Vision */}

                <div className="grid items-center lg:grid-cols-2 mt-14 gap-10 lg:gap-12">

                    {/* Image */}

                    <div className="group relative overflow-hidden">

                        <Image
                            src={visionMission.vision.image}
                            alt="Vision"
                            width={700}
                            height={850}
                            className=" w-[70%] object-cover transition duration-700 group-hover:scale-105"
                        />

                    </div>

                    {/* Content */}

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary">

                                <Eye className="h-4 w-4" />

                            </div>

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">

                                Our Vision

                            </span>

                        </div>

                        <h3 className="mt-7 text-2xl lg:text-3xl font-bold leading-tight">

                            {visionMission.vision.title}

                        </h3>

                        <p className="mt-6 text-sm text-muted-foreground">

                            {visionMission.vision.description}

                        </p>


                    </div>

                </div>

                {/* Mission */}

                <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

                    {/* Content */}

                    <div className="order-2 lg:order-1">

                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary">

                                <Target className="h-4 w-4" />

                            </div>

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">

                                Our Mission

                            </span>

                        </div>

                        <h3 className="mt-7 text-2xl lg:text-3xl  font-bold leading-tight">

                            {visionMission.mission.title}

                        </h3>

                        <p className="mt-6 text-sm text-muted-foreground">

                            {visionMission.mission.description}

                        </p>


                    </div>

                    {/* Image */}

                    <div className="group relative order-1 overflow-hidden lg:order-2 flex justify-end">

                        <Image
                            src={visionMission.mission.image}
                            alt="Mission"
                            width={700}
                            height={850}
                            className=" w-[70%] object-cover transition duration-700 group-hover:scale-105"
                        />

                    </div>

                </div>

                {/* Quote */}

                <div className="mx-auto mt-24 max-w-4xl text-center">

                    <Leaf className="mx-auto h-10 w-10 text-primary" />

                    <h3 className="mt-6 text-xl font-semibold leading-relaxed">

                        "{visionMission.quote}"

                    </h3>

                </div>

            </div>

        </section>
    );
}