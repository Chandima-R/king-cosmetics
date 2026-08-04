import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Leaf } from "lucide-react";
import CompanyProfile from "@/components/about/CompanyProfile";
import VisionMission from "@/components/about/VisionAndMission";
import Certifications from "@/components/about/Certifications";

export const metadata: Metadata = {
    title: "About Us | Green Blue Nature",
    description:
        "Learn more about Green Blue Nature, our vision, mission, certifications and the passionate team behind our natural beauty products.",
};

export default function AboutUsPage() {
    return (
        <main>

            <div className="border-b border-border bg-background">

                <div className="container mx-auto px-6 py-5">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </Link>

                        <ChevronRight className="h-4 w-4 text-muted-foreground/40" />

                        <span className="font-semibold text-foreground">
                            About Us
                        </span>
                    </nav>
                </div>

            </div>


            <section className="relative overflow-hidden bg-primary-soft/50 py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-primary-light/20 blur-[100px]" />

                <div className="container relative mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                            <Leaf className="h-4 w-4" />
                            About Green Blue Nature
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                            Inspired by Nature,
                            <span className="text-primary"> Crafted with Care.</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            Discover our journey, our values and the passionate people
                            behind Green Blue Nature. We are committed to creating
                            premium-quality natural personal care products that promote
                            confidence, wellness and everyday beauty.
                        </p>

                    </div>
                </div>

            </section>


            <CompanyProfile />
            <VisionMission />
            <Certifications />

        </main>
    )
}