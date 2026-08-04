import Image from "next/image";
import {
    BadgeCheck,
    HeartHandshake,
    Leaf,
    ShieldCheck,
    Sparkles,
    Truck,
} from "lucide-react";
import { whyChooseUsItems } from "@/data/landing/why-choose-us";


export default function WhyChooseUsSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background decorations */}
            {/* <div
                aria-hidden="true"
                className="
                    absolute -left-28 top-24
                    h-80 w-80
                    rounded-full
                    bg-primary-light/10
                    blur-3xl
                    "
            /> */}

            {/* <div
                aria-hidden="true"
                className="
                    absolute -right-24 bottom-10
                    h-96 w-96
                    rounded-full
                    bg-primary/8
                    blur-3xl
                    "
            /> */}

            <div className="site-container relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    {/* Left visual area */}
                    <div className="relative mx-auto w-full max-w-145">
                        {/* Soft background card */}
                        <div
                            className="
                                relative
                                min-h-120
                                overflow-hidden
                                rounded-4xl
                                border border-border-light
                                bg-secondary-soft
                                shadow-[0_24px_70px_rgba(49,95,24,0.10)]
                                sm:min-h-140
                            "
                        >
                            {/* Decorative gradient */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute inset-0
                                    bg-[radial-gradient(circle_at_50%_40%,rgba(127,174,69,0.18),transparent_58%)]
                                    "
                            />

                            {/* Small badge */}
                            <div
                                className="
                                    absolute left-5 top-5 z-20
                                    inline-flex items-center gap-2
                                    rounded-full
                                    border border-white/70
                                    bg-white/85
                                    px-4 py-2
                                    text-sm font-semibold
                                    text-primary
                                    shadow-sm
                                    backdrop-blur-xl
                                    sm:left-7 sm:top-7
                                    "
                            >
                                <Leaf size={17} />
                                Naturally Better
                            </div>

                            {/* Main image */}
                            <Image
                                src="/images/about/why-choose-us.jpeg"
                                alt="Green Blue Nature herbal beauty products"
                                width={800}
                                height={850}
                                className="
                                    absolute bottom-0 left-1/2
                                    z-10
                                    h-auto w-full
                                    -translate-x-1/2
                                    object-cover
                                    drop-shadow-2xl
                                    "
                            />

                            {/* Floating quality card */}
                            <div
                                className="
                                    absolute bottom-5 left-5 right-5 z-20
                                    rounded-2xl
                                    border border-white/70
                                    bg-white/88
                                    p-4
                                    shadow-[0_18px_50px_rgba(49,95,24,0.13)]
                                    backdrop-blur-xl
                                    sm:bottom-7 sm:left-7 sm:right-auto sm:w-70
                                    sm:p-5
                                    "
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
                                            flex size-12 shrink-0 items-center justify-center
                                            rounded-xl
                                            bg-primary
                                            text-white
                                            "
                                    >
                                        <ShieldCheck size={23} />
                                    </div>

                                    <div>
                                        <p className="font-bold text-heading">
                                            Trusted Natural Care
                                        </p>

                                        <p className="mt-1 text-sm leading-5 text-muted">
                                            Quality ingredients selected with care.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative outlined shape */}
                        <div
                            aria-hidden="true"
                            className="
                                absolute -bottom-5 -right-5 -z-10
                                h-full w-full
                                rounded-4xl
                                border border-primary-light/25
                            "
                        />
                    </div>

                    {/* Right content */}
                    <div>
                        <div className="max-w-2xl">
                            <p
                                className="
                                    inline-flex items-center gap-2
                                    rounded-full
                                    bg-primary-soft
                                    px-4 py-2
                                    text-sm font-semibold
                                    text-primary
                                    "
                            >
                                <Sparkles size={16} />
                                Why Choose Us
                            </p>

                            <h2
                                className="
                                    mt-5
                                    text-3xl font-bold leading-tight
                                    text-heading
                                    sm:text-xl
                                    lg:text-4xl
                                    "
                            >
                                Natural Care You Can
                                <span className="block text-primary-light">
                                    Feel Good About
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-base text-muted sm:text-base">
                                Green Blue Nature brings together trusted ingredients,
                                thoughtful formulas, and reliable service to give you a
                                simple and satisfying beauty and wellness experience.
                            </p>
                        </div>

                        {/* Features grid */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 pb-10">
                            {whyChooseUsItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.id}
                                        className="
                                            group
                                            rounded-2xl
                                            border border-border-light
                                            bg-white
                                            p-5
                                            shadow-[0_10px_35px_rgba(49,95,24,0.06)]
                                            transition-all duration-300
                                            hover:-translate-y-1
                                            hover:border-primary-light/40
                                            hover:shadow-[0_18px_45px_rgba(49,95,24,0.12)]
                                        "
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="
                                                    flex size-12 shrink-0 items-center justify-center
                                                    rounded-xl
                                                    bg-primary-soft
                                                    text-primary
                                                    transition-all duration-300
                                                    group-hover:bg-primary
                                                    group-hover:text-white
                                                "
                                            >
                                                <Icon size={22} />
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-bold text-heading">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-6 text-muted">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Bottom trust line */}

                    </div>
                </div>
            </div>
        </section>
    );
}