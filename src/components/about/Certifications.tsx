"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { certifications } from "@/data/about/certifications";
import CertificateCard from "./CertificateCard";

import "swiper/css";

export default function Certifications() {
    const swiperRef = useRef<SwiperType | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateNavigation = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className="relative overflow-hidden py-16 lg:py-20">

            {/* Background */}

            <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-primary-light/20 blur-[120px]" />

            <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-primary-soft/70 blur-[120px]" />

            <div className="container relative mx-auto px-6">

                {/* Header */}

                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-2xl">

                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">

                            <Leaf className="h-4 w-4" />

                            Certifications

                        </span>

                        <h2 className="mt-5 font-bold leading-tight text-3xl lg:text-4xl">

                            Quality You Can Trust

                        </h2>

                        <p className="mt-5 text-base leading-7 text-muted-foreground">

                            Every certification reflects our dedication to
                            quality, safety and naturally inspired beauty.

                        </p>

                    </div>

                    {/* Navigation */}

                    {certifications.length > 4 && (
                        <div className="flex items-center gap-3">

                            <button
                                onClick={() =>
                                    swiperRef.current?.slidePrev()
                                }
                                disabled={isBeginning}
                                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300
                                    
                                    ${isBeginning
                                        ? "pointer-events-none opacity-0"
                                        : "border-border bg-background hover:border-primary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>

                            <button
                                onClick={() =>
                                    swiperRef.current?.slideNext()
                                }
                                disabled={isEnd}
                                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300
                                    
                                    ${isEnd
                                        ? "pointer-events-none opacity-0"
                                        : "border-border bg-background hover:border-primary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>

                        </div>
                    )}

                </div>

                {/* Slider */}

                <div className="mt-12 overflow-hidden">

                    <Swiper
                        modules={[A11y]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        spaceBetween={22}
                        loop={false}
                        centeredSlides={false}
                        centerInsufficientSlides={false}
                        watchOverflow
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            updateNavigation(swiper);
                        }}
                        onSlideChange={(swiper) =>
                            updateNavigation(swiper)
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 3,
                            },

                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {certifications.map((certificate) => (

                            <SwiperSlide
                                key={certificate.id}
                                className="h-auto"
                            >

                                <CertificateCard
                                    certificate={certificate}
                                />

                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>

            </div>
        </section>
    );
}