import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroTrustCard from "./HeroTrustCard";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background natural-gradient">
            <div className="site-container pb-6 pt-12 sm:pt-16 lg:pb-0 lg:pt-10">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-4">
                    {/* Left */}
                    <div className="relative z-20 text-center lg:text-left">
                        <p
                            className="
                hero-fade-up hero-delay-1
                mb-4 inline-flex items-center
                rounded-full
                bg-primary-soft
                px-4 py-2
                text-sm font-semibold
                text-primary
              "
                        >
                            <span className="mr-2">🌿</span>
                            100% Natural Herbal Products
                        </p>

                        <h1
                            className="
                text-5xl font-bold
                leading-[1.05]
                text-heading
                sm:text-6xl
                lg:text-7xl
              "
                        >
                            <span className="hero-heading-line hero-delay-2">
                                Pure.
                            </span>

                            <span className="hero-heading-line hero-delay-3">
                                Natural.
                            </span>

                            <span
                                className="
                  hero-heading-line hero-delay-4
                  text-primary-light
                "
                            >
                                Made for You.
                            </span>
                        </h1>

                        <p
                            className="
                hero-fade-up hero-delay-5
                mx-auto mt-6 max-w-xl
                text-base leading-8
                text-muted
                sm:text-lg
                lg:mx-0
              "
                        >
                            Discover premium herbal hair care and beauty products made
                            with carefully selected natural ingredients for healthy,
                            beautiful skin and hair.
                        </p>

                        <div
                            className="
                hero-fade-up hero-delay-6
                mt-8 flex flex-wrap
                justify-center gap-4
                lg:justify-start
              "
                        >
                            <Link
                                href="/products"
                                className="
                  group
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  bg-primary
                  px-7 py-2
                  font-semibold text-white
                  shadow-[0_10px_30px_rgba(63,116,28,0.20)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-primary-hover
                  text-sm
                "
                            >
                                Shop Now

                                <ArrowRight
                                    size={18}
                                    className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-primary
                  bg-white
                  px-7 py-2
                  font-semibold text-primary
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-primary-soft
                  text-sm
                "
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className="
              hero-image-enter
              relative flex
              min-h-[360px]
              items-center justify-center
              sm:min-h-[480px]
              lg:min-h-[590px]
            "
                    >
                        <div
                            aria-hidden="true"
                            className="
                hero-gradient-glow
                absolute
                h-[360px] w-[360px]
                rounded-full
                sm:h-[500px] sm:w-[500px]
                lg:h-[620px] lg:w-[620px]
              "
                        />

                        <div className="relative z-10 w-full">
                            <Image
                                src="/images/hero/hero3.png"
                                alt="Green Blue Nature herbal products"
                                width={1000}
                                height={1000}
                                priority
                                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 80vw,
                  50vw
                "
                                className="
                  mx-auto
                  h-auto w-full
                  max-w-[650px]
                  object-contain
                  drop-shadow-2xl
                  lg:max-w-[1000px]
                "
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-10">

                <HeroTrustCard />

            </div>


        </section>
    );
}