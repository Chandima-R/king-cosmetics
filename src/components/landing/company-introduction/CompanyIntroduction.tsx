import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Leaf,
} from "lucide-react";

const highlights = [
    "100% Natural Ingredients",
    "Premium Quality Products",
    "Safe Herbal Formulations",
];

export default function CompanyIntroduction() {
    return (
        <section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
            {/* Soft background decoration */}

            <div className="relative">
                <div className="overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        {/* Left image */}
                        <div className=" group relative overflow-hidden ">
                            <Image
                                src="/images/hero/hero4.png"
                                alt="Green Blue Nature herbal products and natural ingredients"
                                fill
                                sizes=""
                                className="h-[200px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                            {/* Subtle image overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5" /> */}

                            {/* Small image badge */}
                            {/* <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-md">
                                <Leaf className="h-4 w-4" />
                                Inspired by Nature
                            </div> */}
                        </div>

                        {/* Right content */}
                        <div className="relative flex items-center bg-gradient-to-br from-background via-background to-primary-soft/30 px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
                            {/* Decorative leaf */}
                            <Leaf
                                aria-hidden="true"
                                className="pointer-events-none absolute right-8 top-8 h-20 w-20 rotate-12 text-primary/5"
                            />

                            <div className="relative max-w-xl">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-primary">
                                    <Leaf className="h-4 w-4" />
                                    About Green Blue Nature
                                </span>

                                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                                    Nature&apos;s Goodness,
                                    <span className="block text-primary">
                                        Crafted for Everyday Beauty
                                    </span>
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:leading-8">
                                    Green Blue Nature creates naturally inspired
                                    cosmetic products using carefully selected
                                    herbal ingredients. Every formula is crafted
                                    with quality, care and a commitment to helping
                                    you enjoy healthier-looking skin and hair.
                                </p>

                                {/* Highlights */}
                                <div className="mt-7 space-y-3">
                                    {highlights.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </span>

                                            <span className="text-sm font-semibold text-foreground ">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/about-us"
                                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(63,116,28,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                                >
                                    Learn More

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}