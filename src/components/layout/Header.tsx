"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    Heart,
    Leaf,
    Menu,
    Phone,
    Search,
    ShoppingCart,
} from "lucide-react";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import { navigationItems } from "@/constants/navigation";
import { useCart } from "@/context/CartContext";

import MobileMenu from "./MobileMenu";

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    const [isScrolled, setIsScrolled] =
        useState(false);

    const [
        isMobileMenuOpen,
        setIsMobileMenuOpen,
    ] = useState(false);

    const { totalItems } = useCart();

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    /*
     * Shrink header after scrolling.
     */
    useEffect(() => {
        let animationFrameId: number | null =
            null;

        const handleScroll = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId =
                window.requestAnimationFrame(() => {
                    const scrollPosition =
                        window.scrollY;

                    setIsScrolled((currentState) => {
                        if (
                            !currentState &&
                            scrollPosition > 90
                        ) {
                            return true;
                        }

                        if (
                            currentState &&
                            scrollPosition < 20
                        ) {
                            return false;
                        }

                        return currentState;
                    });

                    animationFrameId = null;
                });
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            },
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
            );

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(
                    animationFrameId,
                );
            }
        };
    }, []);

    /*
     * Save full header height for Hero.
     */
    useEffect(() => {
        const header = headerRef.current;

        if (!header) {
            return;
        }

        const updateHeroHeaderHeight = () => {
            if (window.scrollY > 20) {
                return;
            }

            const height =
                header.getBoundingClientRect().height;

            document.documentElement.style.setProperty(
                "--hero-header-height",
                `${height}px`,
            );
        };

        const frameId =
            window.requestAnimationFrame(
                updateHeroHeaderHeight,
            );

        window.addEventListener(
            "resize",
            updateHeroHeaderHeight,
        );

        return () => {
            window.cancelAnimationFrame(frameId);

            window.removeEventListener(
                "resize",
                updateHeroHeaderHeight,
            );
        };
    }, []);

    /*
     * Close drawer after route change.
     */
    useEffect(() => {
        closeMobileMenu();
    }, [pathname, closeMobileMenu]);

    return (
        <>
            <header
                ref={headerRef}
                className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${isScrolled
                    ? "bg-white/90 shadow-md backdrop-blur-xl"
                    : "bg-white"
                    }`}
            >
                {/* Top information bar */}
                <div
                    className={`overflow-hidden bg-primary text-white transition-[max-height,opacity] duration-300 ease-in-out ${isScrolled
                        ? "max-h-0 opacity-0"
                        : "max-h-12 opacity-100"
                        }`}
                >
                    <div className="site-container flex min-h-8 items-center justify-center py-1.5 lg:justify-between">
                        <div className="flex min-w-0 items-center justify-center gap-2 text-[8px] font-semibold sm:gap-3 sm:text-[9px] md:gap-5 md:text-[11px] lg:gap-6 lg:text-xs">
                            <div className="flex shrink-0 items-center gap-1">
                                <Leaf
                                    className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3"
                                    aria-hidden="true"
                                />

                                <span className="whitespace-nowrap">
                                    Natural Ingredients
                                </span>
                            </div>

                            <div className="flex shrink-0 items-center gap-1">
                                <Heart
                                    className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3"
                                    aria-hidden="true"
                                />

                                <span className="whitespace-nowrap">
                                    Cruelty Free
                                </span>
                            </div>

                            <div className="flex shrink-0 items-center gap-1">
                                <Leaf
                                    className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3"
                                    aria-hidden="true"
                                />

                                <span className="whitespace-nowrap">
                                    Made in Sri Lanka
                                </span>
                            </div>
                        </div>

                        <p className="hidden shrink-0 whitespace-nowrap text-xs font-semibold lg:block">
                            Free Delivery for Orders
                            Over Rs. 3,000
                        </p>
                    </div>
                </div>

                {/* Main navbar */}
                <div
                    className={`relative border-b border-border-light transition-colors duration-300 ${isScrolled
                        ? "bg-white/85 backdrop-blur-xl"
                        : "bg-white"
                        }`}
                >
                    <div
                        className={`site-container flex items-center justify-between transition-[height] duration-300 ease-in-out ${isScrolled
                            ? "h-[70px]"
                            : "h-[82px]"
                            }`}
                    >
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="Green Blue Nature home"
                            className="relative z-10 shrink-0"
                        >
                            <Image
                                src="/images/logo/logo.png"
                                alt="Green Blue Nature"
                                width={190}
                                height={78}
                                priority
                                className={`h-auto object-contain transition-[width] duration-300 ease-in-out ${isScrolled
                                    ? "w-[125px] sm:w-[145px]"
                                    : "w-[135px] sm:w-[165px]"
                                    }`}
                            />
                        </Link>

                        {/* Desktop navigation */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden lg:block"
                        >
                            <ul className="flex items-center gap-7 xl:gap-9">
                                {navigationItems.map(
                                    (item) => {
                                        const hasChildren =
                                            Boolean(
                                                item
                                                    .children
                                                    ?.length,
                                            );

                                        const isActive =
                                            pathname ===
                                            item.href ||
                                            (item.href !==
                                                "/" &&
                                                pathname.startsWith(
                                                    item.href,
                                                ));

                                        return (
                                            <li
                                                key={
                                                    item.label
                                                }
                                                className="group relative"
                                            >
                                                <Link
                                                    href={
                                                        item.href
                                                    }
                                                    className={`relative flex items-center gap-1 py-7 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${isActive
                                                        ? "text-primary"
                                                        : "text-body hover:text-primary"
                                                        }`}
                                                >
                                                    <span>
                                                        {
                                                            item.label
                                                        }
                                                    </span>

                                                    {hasChildren && (
                                                        <ChevronDown
                                                            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                                                            aria-hidden="true"
                                                        />
                                                    )}

                                                    <span
                                                        aria-hidden="true"
                                                        className={`absolute bottom-5 left-0 h-0.5 bg-primary transition-all duration-200 ${isActive
                                                            ? "w-full"
                                                            : "w-0 group-hover:w-full"
                                                            }`}
                                                    />
                                                </Link>

                                                {hasChildren && (
                                                    <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-3 rounded-2xl border border-border-light bg-white/95 p-2 opacity-0 shadow-[0_18px_45px_rgba(33,62,23,0.12)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                                        {item.children?.map(
                                                            (
                                                                child,
                                                            ) => (
                                                                <Link
                                                                    key={
                                                                        child.href
                                                                    }
                                                                    href={
                                                                        child.href
                                                                    }
                                                                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-body transition-colors duration-200 hover:bg-primary-soft hover:text-primary"
                                                                >
                                                                    {
                                                                        child.label
                                                                    }
                                                                </Link>
                                                            ),
                                                        )}
                                                    </div>
                                                )}
                                            </li>
                                        );
                                    },
                                )}
                            </ul>
                        </nav>

                        {/* Desktop actions */}
                        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
                            <a
                                href="tel:+94771234567"
                                className="mr-1 flex items-center gap-2 border-r border-border pr-4 text-body transition-colors hover:text-primary xl:pr-5"
                            >
                                <Phone
                                    className="h-[18px] w-[18px]"
                                    aria-hidden="true"
                                />

                                <span className="hidden xl:block">
                                    <span className="block text-[10px] text-muted">
                                        Need Help?
                                    </span>

                                    <span className="block text-xs font-bold">
                                        +94 77 123 4567
                                    </span>
                                </span>
                            </a>

                            <Link
                                href="/products"
                                aria-label="Search products"
                                className="flex size-10 items-center justify-center rounded-full text-body transition-colors hover:bg-primary-soft hover:text-primary"
                            >
                                <Search className="h-[19px] w-[19px]" />
                            </Link>

                            <a
                                href="https://wa.me/94713455304"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact on WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-soft"
                            >
                                <Image
                                    src="/images/social-media-icons/whatsapp-header.png"
                                    alt="WhatsApp"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 object-contain"
                                />
                            </a>

                            <Link
                                href="/cart"
                                aria-label={`View cart with ${totalItems} items`}
                                className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                            >
                                <ShoppingCart className="h-5 w-5" />

                                {totalItems > 0 && (
                                    <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                                        {totalItems > 99
                                            ? "99+"
                                            : totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile actions */}
                        <div className="flex items-center gap-1 lg:hidden">
                            <Link
                                href="/cart"
                                aria-label={`View cart with ${totalItems} items`}
                                className="relative mx-2 flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary-soft hover:text-primary md:mx-0"
                            >
                                <ShoppingCart className="h-5 w-5" />

                                {totalItems > 0 && (
                                    <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                                        {totalItems > 99
                                            ? "99+"
                                            : totalItems}
                                    </span>
                                )}
                            </Link>

                            <button
                                type="button"
                                aria-label={
                                    isMobileMenuOpen
                                        ? "Close navigation menu"
                                        : "Open navigation menu"
                                }
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-navigation"
                                onClick={() => {
                                    setIsMobileMenuOpen(true);
                                }}
                                className="flex size-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                <Menu className="h-[22px] w-[22px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sheet */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                }}
            />
        </>
    );
}