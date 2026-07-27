"use client";

import Image from "next/image";
import { Award, CheckCircle2, Leaf, PackageCheck, Users } from "lucide-react";

import { companyProfile } from "@/data/about/CompanyProfile";

export default function CompanyProfile() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-20">
            {/* Background Decoration */}

            <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[120px]" />

            <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-primary-light/20 blur-[120px]" />

            <div className="container relative mx-auto px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <div className="relative">

                        <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-primary-soft">

                            <Image
                                src={companyProfile.image}
                                alt="Company Profile"
                                fill
                                className="object-cover"
                            />

                        </div>

                        {/* Floating Card */}

                        <div className="absolute left-6 top-6 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">

                            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">

                                100% Natural

                            </span>

                        </div>

                    </div>

                    {/* Right */}

                    <div>

                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">

                            <Leaf className="h-4 w-4" />

                            {companyProfile.badge}

                        </span>

                        <h2 className="mt-6 font-bold leading-tight text-3xl lg:text-4xl">

                            {companyProfile.title}

                        </h2>

                        <div className="mt-8 space-y-5">

                            {companyProfile.description.map((paragraph) => (

                                <p
                                    key={paragraph}
                                    className="text-base leading-7 text-muted-foreground"
                                >
                                    {paragraph}
                                </p>

                            ))}

                        </div>


                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                            {companyProfile.highlights.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-primary" />

                                    <span className="font-medium text-sm">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>



            </div>
        </section>
    );
}