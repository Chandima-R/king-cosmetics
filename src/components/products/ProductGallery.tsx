"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Expand,
    Minus,
    Plus,
    X,
} from "lucide-react";

import type { ProductImage } from "@/types/products/product";

type ProductGalleryProps = {
    images: ProductImage[];
    productName: string;
};

export default function ProductGallery({
    images,
    productName,
}: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [zoom, setZoom] = useState(1);

    const selectedImage = images[selectedIndex];

    const selectImage = (index: number) => {
        setSelectedIndex(index);
        setZoom(1);
    };

    const showPreviousImage = () => {
        setSelectedIndex((currentIndex) =>
            currentIndex === 0
                ? images.length - 1
                : currentIndex - 1,
        );

        setZoom(1);
    };

    const showNextImage = () => {
        setSelectedIndex((currentIndex) =>
            currentIndex === images.length - 1
                ? 0
                : currentIndex + 1,
        );

        setZoom(1);
    };

    const openPreview = () => {
        setZoom(1);
        setIsPreviewOpen(true);
    };

    const closePreview = () => {
        setZoom(1);
        setIsPreviewOpen(false);
    };

    const zoomIn = () => {
        setZoom((currentZoom) =>
            Math.min(currentZoom + 0.25, 2.5),
        );
    };

    const zoomOut = () => {
        setZoom((currentZoom) =>
            Math.max(currentZoom - 0.25, 1),
        );
    };

    useEffect(() => {
        if (!isPreviewOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closePreview();
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }
        };

        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [isPreviewOpen, images.length]);

    if (images.length === 0 || !selectedImage) {
        return (
            <div className="flex aspect-square items-center justify-center rounded-[28px] border border-border bg-primary-soft/30 px-6 text-center text-sm text-muted-foreground">
                Product image not available
            </div>
        );
    }

    return (
        <>
            <div className="grid gap-3 sm:grid-cols-[76px_minmax(0,1fr)] sm:items-stretch lg:grid-cols-[82px_minmax(0,1fr)]">
                {/* Desktop thumbnails */}
                {/* Desktop thumbnails */}
                {images.length > 1 && (
                    <div className="order-2 hidden h-full min-h-0 sm:order-1 sm:flex sm:items-center">
                        <div className="flex w-full flex-col gap-3">
                            {images.slice(0, 4).map((image, index) => {
                                const isSelected = index === selectedIndex;

                                return (
                                    <button
                                        key={image.id}
                                        type="button"
                                        onClick={() => selectImage(index)}
                                        aria-label={`View ${productName} image ${index + 1}`}
                                        aria-current={isSelected ? "true" : undefined}
                                        className={`
                            group/thumb
                            relative
                            aspect-square
                            w-full
                            shrink-0
                            overflow-hidden
                            rounded-xl
                            border
                            bg-primary-soft/20
                            transition-all
                            duration-300
                            ${isSelected
                                                ? "border-primary shadow-[0_6px_18px_rgba(63,116,28,0.12)] ring-2 ring-primary/15"
                                                : "border-border/70 hover:border-primary/40"
                                            }
                        `}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="76px"
                                            className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                                        />

                                        {isSelected && (
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Main image */}
                <div className="order-1 min-w-0 sm:order-2">
                    <div className="group relative aspect-square overflow-hidden rounded-[26px] border border-primary/10 bg-primary-soft/20 shadow-[0_14px_40px_rgba(42,82,24,0.07)]">   <button
                        type="button"
                        onClick={openPreview}
                        aria-label={`Open enlarged image of ${productName}`}
                        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                    >
                        <Expand className="h-4 w-4" />
                    </button>

                        <button
                            type="button"
                            onClick={openPreview}
                            className="relative block h-full w-full cursor-zoom-in"
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 46vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                            />
                        </button>

                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={showPreviousImage}
                                    aria-label="View previous image"
                                    className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                <button
                                    type="button"
                                    onClick={showNextImage}
                                    aria-label="View next image"
                                    className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </>
                        )}

                        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Mobile thumbnails */}
                    {images.length > 1 && (
                        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:hidden">
                            {images.map((image, index) => {
                                const isSelected =
                                    selectedIndex === index;

                                return (
                                    <button
                                        key={image.id}
                                        type="button"
                                        onClick={() =>
                                            selectImage(index)
                                        }
                                        aria-label={`View ${productName} image ${index + 1
                                            }`}
                                        className={`
                                            relative
                                            h-20
                                            w-20
                                            shrink-0
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            transition-all
                                            duration-300
                                            ${isSelected
                                                ? "border-primary ring-2 ring-primary/15"
                                                : "border-border/70"
                                            }
                                        `}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Full-screen preview */}
            {isPreviewOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${productName} image preview`}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                >
                    <button
                        type="button"
                        onClick={closePreview}
                        aria-label="Close image preview"
                        className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {/* Zoom controls */}
                    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/55 p-2 backdrop-blur-md">
                        <button
                            type="button"
                            onClick={zoomOut}
                            disabled={zoom <= 1}
                            aria-label="Zoom out"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Minus className="h-4 w-4" />
                        </button>

                        <span className="min-w-16 text-center text-sm font-semibold text-white">
                            {Math.round(zoom * 100)}%
                        </span>

                        <button
                            type="button"
                            onClick={zoomIn}
                            disabled={zoom >= 2.5}
                            aria-label="Zoom in"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Preview navigation */}
                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={showPreviousImage}
                                aria-label="View previous image"
                                className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:left-8"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={showNextImage}
                                aria-label="View next image"
                                className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:right-8"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {/* Enlarged image */}
                    <div className="relative h-[78vh] w-[86vw] overflow-auto rounded-2xl">
                        <div
                            className="relative h-full min-h-full w-full origin-center transition-transform duration-300"
                            style={{
                                transform: `scale(${zoom})`,
                            }}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                sizes="90vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}