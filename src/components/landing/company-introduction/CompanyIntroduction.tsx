import Link from "next/link";
import {
    Leaf,
    Sparkles,
    HeartHandshake,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

const highlights = [
    {
        icon: Leaf,
        title: "100% Natural",
    },
    {
        icon: Sparkles,
        title: "Premium Quality",
    },
    {
        icon: HeartHandshake,
        title: "Made with Care",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Products",
    },
];

export default function CompanyIntroduction() {
    return (
        <section className="relative overflow-hidden bg-background py-24">
            {/* Decorative Blur */}
            <div className="absolute left-1/2 top-24 h-60 w-60 -translate-x-1/2 rounded-full bg-primary-light/20 blur-3xl" />

            {/* Decorative Leaves */}
            <Leaf className="absolute left-10 top-16 h-20 w-20 rotate-[-20deg] text-primary/10" />
            <Leaf className="absolute bottom-16 right-10 h-24 w-24 rotate-[20deg] text-primary/10" />

            <div className="container relative mx-auto max-w-4xl px-6 text-center">

                {/* Badge */}

                <span className="inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
                    About Green Blue Nature
                </span>

                {/* Heading */}

                <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                    Nature's Goodness,
                    <br />
                    Crafted for Everyday Beauty
                </h2>

                {/* Description */}

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    Green Blue Nature is dedicated to creating natural cosmetic
                    products using carefully selected ingredients that nourish your
                    skin and enhance your natural beauty. Every product is crafted
                    with quality, care, and a commitment to bringing you the best
                    nature has to offer.
                </p>

                {/* Divider */}

                <div className="mx-auto mt-10 h-px w-28 bg-primary/20" />

                {/* Highlights */}

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                <item.icon className="h-7 w-7 text-primary" />
                            </div>

                            <h3 className="mt-4 text-sm font-semibold text-foreground">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Button */}

                <Link
                    href="/about"
                    className="group mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-hover"
                >
                    Learn More

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}