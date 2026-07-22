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
    UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/constants/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/85 shadow-md backdrop-blur-xl"
                : "bg-white"
                }`}
        >
            {/* Top green information bar */}
            <div
                className={`overflow-hidden bg-primary text-white transition-all duration-300 ${isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
                    }`}
            >
                <div className="site-container flex min-h-8 items-center justify-between gap-4 py-1.5 text-[10px] font-semibold sm:text-xs">
                    <div className="flex items-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-1.5">
                            <Leaf size={12} />
                            <span>Natural Ingredients</span>
                        </div>

                        <div className="hidden items-center gap-1.5 sm:flex">
                            <Heart size={12} />
                            <span>Cruelty Free</span>
                        </div>

                        <div className="hidden items-center gap-1.5 md:flex">
                            <Leaf size={12} />
                            <span>Made in Sri Lanka</span>
                        </div>
                    </div>

                    <p className="hidden sm:block">
                        Free Delivery for Orders Over Rs. 3,000
                    </p>
                </div>
            </div>

            {/* Main white navbar */}
            <div
                className={`relative border-b border-border-light transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl" : "bg-white"
                    }`}
            >
                <div
                    className={`site-container flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-[70px]" : "h-[82px]"
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
                            className={`h-fit object-contain transition-all duration-300 ${isScrolled
                                ? "w-[125px] sm:w-[145px]"
                                : "w-[135px] sm:w-[165px]"
                                }`}
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <nav aria-label="Main navigation" className="hidden lg:block">
                        <ul className="flex items-center gap-7 xl:gap-9">
                            {navigationItems.map((item) => {
                                const hasChildren =
                                    item.children && item.children.length > 0;

                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" && pathname.startsWith(item.href));

                                return (
                                    <li key={item.label} className="group relative">
                                        <Link
                                            href={item.href}
                                            className={`relative flex items-center gap-1 py-7 text-xs font-bold uppercase tracking-wide transition-colors ${isActive
                                                ? "text-primary"
                                                : "text-body hover:text-primary"
                                                }`}
                                        >
                                            {item.label}

                                            {hasChildren && (
                                                <ChevronDown
                                                    size={14}
                                                    className="transition-transform duration-200 group-hover:rotate-180"
                                                />
                                            )}

                                            <span
                                                className={`absolute bottom-5 left-0 h-0.5 bg-primary transition-all duration-200 ${isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                    }`}
                                            />
                                        </Link>

                                        {/* Desktop Shop dropdown */}
                                        {hasChildren && (
                                            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-xl border border-border-light bg-white/95 p-2 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block rounded-lg px-4 py-3 text-sm font-semibold text-body hover:bg-primary-soft hover:text-primary"
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

                    {/* Desktop right section */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <a
                            href="tel:+94771234567"
                            className="flex items-center gap-2 border-r border-border pr-5 text-body hover:text-primary"
                        >
                            <Phone size={18} />

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
                            className="flex size-10 items-center justify-center rounded-full text-body hover:bg-primary-soft hover:text-primary"
                        >
                            <Search size={19} />
                        </button>

                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact using WhatsApp"
                            className="flex size-10 items-center justify-center rounded-full text-whatsapp hover:bg-primary-soft"
                        >
                            <MessageCircle size={20} />
                        </a>

                        <button
                            type="button"
                            aria-label="User account"
                            className="flex size-10 items-center justify-center rounded-full text-body hover:bg-primary-soft hover:text-primary"
                        >
                            <UserRound size={20} />
                        </button>

                        <Link
                            href="/products"
                            aria-label="View products"
                            className="relative flex size-10 items-center justify-center rounded-full text-body hover:bg-primary-soft hover:text-primary"
                        >
                            <ShoppingBag size={20} />

                            <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                                0
                            </span>
                        </Link>
                    </div>

                    {/* Mobile right section */}
                    <div className="flex items-center gap-1 lg:hidden">
                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact using WhatsApp"
                            className="flex size-10 items-center justify-center rounded-full text-whatsapp hover:bg-primary-soft"
                        >
                            <MessageCircle size={20} />
                        </a>

                        <button
                            type="button"
                            aria-label={
                                isMobileMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => {
                                setIsMobileMenuOpen((current) => !current);
                            }}
                            className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary hover:bg-primary hover:text-white"
                        >
                            <Menu size={22} />
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