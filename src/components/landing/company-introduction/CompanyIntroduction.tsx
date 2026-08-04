// import Image from "next/image";
// import Link from "next/link";
// import {
//     ArrowRight,
//     CheckCircle2,
//     Leaf,
// } from "lucide-react";

// const highlights = [
//     "100% Natural Ingredients",
//     "Premium Quality Products",
//     "Safe Herbal Formulations",
// ];

// export default function CompanyIntroduction() {
//     return (
//         <section className="relative overflow-hidden">
//             {/* Soft background decoration */}

//             <div className="relative">
//                 <div className="overflow-hidden">
//                     <div className="grid lg:grid-cols-5">
//                         {/* Left image */}
//                         <div className=" group relative overflow-hidden col-span-3">
//                             {/* <Image
//                                 src="/images/hero/about-banner.png"
//                                 alt="Green Blue Nature herbal products and natural ingredients"
//                                 fill
//                                 sizes=""
//                                 className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                             /> */}



//                             {/* Subtle image overlay */}
//                             {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5" /> */}

//                             {/* Small image badge */}
//                             {/* <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-md">
//                                 <Leaf className="h-4 w-4" />
//                                 Inspired by Nature
//                             </div> */}
//                         </div>

//                         {/* Right content */}
//                         <div className="relative col-span-2 flex items-center bg-primary px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
//                             {/* Decorative leaf */}
//                             <Leaf
//                                 aria-hidden="true"
//                                 className="pointer-events-none absolute right-8 top-8 h-20 w-20 rotate-12 text-primary/5"
//                             />

//                             <div className="relative">
//                                 <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-primary">
//                                     <Leaf className="h-4 w-4" />
//                                     About Green Blue Nature
//                                 </span>

//                                 <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-secondary-soft sm:text-4xl lg:text-[42px]">
//                                     Nature&apos;s Goodness,
//                                     <span className="block text-primary">
//                                         Crafted for Everyday Beauty
//                                     </span>
//                                 </h2>

//                                 <p className="mt-5 text-sm leading-7 text-accent-soft sm:leading-8">
//                                     Green Blue Nature creates naturally inspired
//                                     cosmetic products using carefully selected
//                                     herbal ingredients. Every formula is crafted
//                                     with quality, care and a commitment to helping
//                                     you enjoy healthier-looking skin and hair.
//                                 </p>

//                                 {/* Highlights */}
//                                 <div className="mt-7 space-y-3">
//                                     {highlights.map((item) => (
//                                         <div
//                                             key={item}
//                                             className="flex items-center gap-3"
//                                         >
//                                             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
//                                                 <CheckCircle2 className="h-4 w-4" />
//                                             </span>

//                                             <span className="text-sm font-semibold text-accent-soft">
//                                                 {item}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <Link
//                                     href="/about-us"
//                                     className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(63,116,28,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
//                                 >
//                                     Learn More

//                                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";

const highlights = [
    "100% Natural Ingredients",
    "Premium Quality Products",
    "Safe Herbal Formulations",
];

export default function CompanyIntroduction() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="grid lg:h-[50vh] lg:min-h-[460px] lg:grid-cols-5">
                {/* Image */}
                <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-3 lg:min-h-0">
                    <Image
                        src="/images/hero/about-banner.png"
                        alt="Green Blue Nature herbal products and natural ingredients"
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary/10" />
                </div>

                {/* Content */}
                <div className="relative flex items-center overflow-hidden bg-primary px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:col-span-2 lg:h-full lg:px-9 lg:py-6 xl:px-12">
                    <Leaf
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-6 top-4 h-28 w-28 rotate-12 text-white/5"
                    />

                    <Leaf
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 -rotate-12 text-white/5"
                    />

                    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs">
                            <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            About Green Blue Nature
                        </span>

                        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-secondary-soft sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl">
                            Nature&apos;s Goodness,
                            <span className="mt-1 block text-primary">
                                Crafted for Everyday Beauty
                            </span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-accent-soft sm:text-base sm:leading-8 lg:text-sm lg:leading-6 xl:leading-7">
                            Green Blue Nature creates naturally inspired cosmetic
                            products using carefully selected herbal ingredients.
                            Every formula is crafted with quality, care and a
                            commitment to helping you enjoy healthier-looking skin
                            and hair.
                        </p>

                        <div className="mt-5 space-y-2.5 lg:mt-4">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>

                                    <span className="text-sm font-semibold text-accent-soft">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about-us"
                            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2.5 text-xs font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                        >
                            Learn More
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}