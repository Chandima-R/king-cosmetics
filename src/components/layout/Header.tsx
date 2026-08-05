"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    Heart,
    Leaf,
    Menu,
    MessageCircle,
    Phone,
    Search,
    ShoppingBag,
    ShoppingCart,
    UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/constants/navigation";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { totalItems } = useCart();

    /*
     * Shrink the header after scrolling down.
     * Separate thresholds prevent flickering near one boundary.
     */
    useEffect(() => {
        let animationFrameId: number | null = null;

        const handleScroll = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId = window.requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;

                setIsScrolled((currentState) => {
                    if (!currentState && scrollPosition > 90) {
                        return true;
                    }

                    if (currentState && scrollPosition < 20) {
                        return false;
                    }

                    return currentState;
                });

                animationFrameId = null;
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    /*
     * Save the initial full header height for the Hero section.
     * It does not update when the header shrinks during scrolling.
     */
    useEffect(() => {
        const header = headerRef.current;

        if (!header) {
            return;
        }

        const updateHeroHeaderHeight = () => {
            const previousScrolledState = window.scrollY > 20;

            /*
             * Resize events normally occur independently from scrolling.
             * Avoid measuring the collapsed header when the page is already
             * scrolled down.
             */
            if (previousScrolledState) {
                return;
            }

            const height = header.getBoundingClientRect().height;

            document.documentElement.style.setProperty(
                "--hero-header-height",
                `${height}px`,
            );
        };

        const frameId = window.requestAnimationFrame(updateHeroHeaderHeight);

        window.addEventListener("resize", updateHeroHeaderHeight);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("resize", updateHeroHeaderHeight);
        };
    }, []);

    /*
     * Close the mobile menu after route changes.
     */
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
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
                <div className="site-container flex min-h-8 items-center justify-between gap-4 py-1.5 text-[10px] font-semibold sm:text-xs">
                    <div className="flex items-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-1.5">
                            <Leaf
                                className="h-3 w-3 shrink-0"
                                aria-hidden="true"
                            />

                            <span>Natural Ingredients</span>
                        </div>

                        <div className="hidden items-center gap-1.5 sm:flex">
                            <Heart
                                className="h-3 w-3 shrink-0"
                                aria-hidden="true"
                            />

                            <span>Cruelty Free</span>
                        </div>

                        <div className="hidden items-center gap-1.5 md:flex">
                            <Leaf
                                className="h-3 w-3 shrink-0"
                                aria-hidden="true"
                            />

                            <span>Made in Sri Lanka</span>
                        </div>
                    </div>

                    <p className="hidden whitespace-nowrap sm:block">
                        Free Delivery for Orders Over Rs. 3,000
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
                    className={`site-container flex items-center justify-between transition-[height] duration-300 ease-in-out ${isScrolled ? "h-[70px]" : "h-[82px]"
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
                            {navigationItems.map((item) => {
                                const hasChildren = Boolean(
                                    item.children?.length,
                                );

                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" &&
                                        pathname.startsWith(item.href));

                                return (
                                    <li
                                        key={item.label}
                                        className="group relative"
                                    >
                                        <Link
                                            href={item.href}
                                            className={`relative flex items-center gap-1 py-7 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${isActive
                                                ? "text-primary"
                                                : "text-body hover:text-primary"
                                                }`}
                                        >
                                            <span>{item.label}</span>

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
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-body transition-colors duration-200 hover:bg-primary-soft hover:text-primary"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
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

                        <button
                            type="button"
                            aria-label="Search"
                            className="flex size-10 items-center justify-center rounded-full text-body transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <Search className="h-[19px] w-[19px]" />
                        </button>

                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact using WhatsApp"
                            className="flex size-10 items-center justify-center rounded-full text-whatsapp transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </a>

                        {/* <button
                            type="button"
                            aria-label="User account"
                            className="flex size-10 items-center justify-center rounded-full text-body transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </button> */}

                        <Link
                            href="/cart"
                            aria-label={`View cart with ${totalItems} items`}
                            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                        >
                            <ShoppingBag className="h-5 w-5" />

                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                                    {totalItems > 99 ? "99+" : totalItems}
                                </span>
                            )}
                        </Link>

                    </div>

                    {/* Mobile actions */}
                    <div className="flex items-center gap-1 lg:hidden">
                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact using WhatsApp"
                            className="flex size-10 items-center justify-center rounded-full text-whatsapp transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </a>

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
                                setIsMobileMenuOpen((current) => !current);
                            }}
                            className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            <Menu className="h-[22px] w-[22px]" />
                        </button>
                    </div>
                </div>

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => {
                        setIsMobileMenuOpen(false);
                    }}
                />
            </div>
        </header>
    );
}