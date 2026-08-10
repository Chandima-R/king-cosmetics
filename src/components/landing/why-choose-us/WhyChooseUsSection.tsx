import Image from "next/image";
import {
    Leaf,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SideIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

import { whyChooseUsItems } from "@/data/landing/why-choose-us";

export default function WhyChooseUsSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="site-container relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    {/* Left visual */}
                    <SlideIn
                        direction="left"
                        distance={40}
                        duration={0.8}
                        className="relative mx-auto w-full max-w-145"
                    >
                        <div className="relative min-h-120 overflow-hidden rounded-4xl border border-border-light bg-secondary-soft shadow-[0_24px_70px_rgba(49,95,24,0.10)] sm:min-h-140">
                            {/* Decorative gradient */}
                            <FadeIn
                                duration={0.8}
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(127,174,69,0.18),transparent_58%)]"
                            >
                                <div />
                            </FadeIn>

                            {/* Small badge */}
                            <FadeIn
                                delay={0.15}
                                duration={0.55}
                                className="absolute left-5 top-5 z-20 sm:left-7 sm:top-7"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-xl">
                                    <Leaf size={17} />
                                    Naturally Better
                                </div>
                            </FadeIn>

                            {/* Main image */}
                            <Image
                                src="/images/about/why-choose-us.jpeg"
                                alt="Green Blue Nature herbal beauty products"
                                width={800}
                                height={850}
                                className="absolute bottom-0 left-1/2 z-10 h-auto w-full -translate-x-1/2 object-cover drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                            />

                            {/* Floating quality card */}
                            <SlideIn
                                direction="bottom"
                                distance={25}
                                delay={0.35}
                                duration={0.65}
                                className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-7 sm:left-7 sm:right-auto sm:w-70"
                            >
                                <div className="rounded-2xl border border-white/70 bg-white/88 p-4 shadow-[0_18px_50px_rgba(49,95,24,0.13)] backdrop-blur-xl sm:p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
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
                            </SlideIn>
                        </div>

                        {/* Decorative outline */}
                        <FadeIn
                            delay={0.3}
                            className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-4xl border border-primary-light/25"
                        >
                            <div />
                        </FadeIn>
                    </SlideIn>

                    {/* Right content */}
                    <div>
                        <div className="max-w-2xl">
                            <FadeIn>
                                <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary">
                                    <Sparkles size={16} />
                                    Why Choose Us
                                </p>
                            </FadeIn>

                            <SlideIn
                                direction="bottom"
                                distance={25}
                                delay={0.08}
                                duration={0.65}
                            >
                                <h2 className="mt-5 text-3xl font-bold leading-tight text-heading sm:text-xl lg:text-4xl">
                                    Natural Care You Can
                                    <span className="block text-primary-light">
                                        Feel Good About
                                    </span>
                                </h2>
                            </SlideIn>

                            <FadeIn delay={0.16}>
                                <p className="mt-5 max-w-xl text-base text-muted sm:text-base">
                                    Green Blue Nature brings together trusted
                                    ingredients, thoughtful formulas, and reliable
                                    service to give you a simple and satisfying beauty
                                    and wellness experience.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Features */}
                        <StaggerContainer
                            stagger={0.08}
                            delayChildren={0.12}
                            className="mt-10 grid gap-4 pb-10 sm:grid-cols-2"
                        >
                            {whyChooseUsItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <StaggerItem key={item.id}>
                                        <article className="group h-full rounded-2xl border border-border-light bg-white p-5 shadow-[0_10px_35px_rgba(49,95,24,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/40 hover:shadow-[0_18px_45px_rgba(49,95,24,0.12)]">
                                            <div className="flex items-start gap-4">
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}