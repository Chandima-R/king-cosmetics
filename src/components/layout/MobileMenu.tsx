"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    MessageCircle,
    Phone,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/constants/navigation";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({
    isOpen,
    onClose,
}: MobileMenuProps) {
    const pathname = usePathname();

    const [openDropdown, setOpenDropdown] = useState<string | null>(
        null,
    );

    useEffect(() => {
        setOpenDropdown(null);
        onClose();
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleDropdownToggle = (label: string) => {
        setOpenDropdown((current) =>
            current === label ? null : label,
        );
    };

    return (
        <>
            {/* Overlay */}
            <button
                type="button"
                aria-label="Close mobile navigation"
                onClick={onClose}
                className={`
                    fixed
                    inset-0
                    z-[60]
                    bg-black/35
                    backdrop-blur-[2px]
                    transition-opacity
                    duration-300
                    lg:hidden
                    ${isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                `}
            />

            {/* Sidebar */}
            <aside
                id="mobile-navigation"
                aria-hidden={!isOpen}
                className={`
                    fixed
                    right-0
                    top-0
                    z-[70]
                    flex
                    h-dvh
                    w-[86%]
                    max-w-[360px]
                    flex-col
                    bg-white
                    shadow-[-16px_0_40px_rgba(28,64,23,0.16)]
                    transition-transform
                    duration-300
                    ease-out
                    lg:hidden
                    ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
                    <div>
                        <p className="text-base font-bold text-heading">
                            Menu
                        </p>

                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                            Explore Green Blue Nature
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                    <nav aria-label="Mobile navigation">
                        <ul className="space-y-1">
                            {navigationItems.map((item) => {
                                const hasChildren = Boolean(
                                    item.children?.length,
                                );

                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" &&
                                        pathname.startsWith(item.href));

                                const isDropdownOpen =
                                    openDropdown === item.label;

                                return (
                                    <li key={item.label}>
                                        <div className="flex items-center gap-1">
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className={`
                                                    flex-1
                                                    rounded-xl
                                                    px-4
                                                    py-3
                                                    text-sm
                                                    font-semibold
                                                    transition-colors
                                                    duration-200
                                                    ${isActive
                                                        ? "bg-primary-soft text-primary"
                                                        : "text-body hover:bg-primary-soft/50 hover:text-primary"
                                                    }
                                                `}
                                            >
                                                {item.label}
                                            </Link>

                                            {hasChildren && (
                                                <button
                                                    type="button"
                                                    aria-label={`Toggle ${item.label} submenu`}
                                                    aria-expanded={
                                                        isDropdownOpen
                                                    }
                                                    onClick={() =>
                                                        handleDropdownToggle(
                                                            item.label,
                                                        )
                                                    }
                                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-colors duration-200 hover:bg-primary-soft hover:text-primary"
                                                >
                                                    <ChevronDown
                                                        className={`
                                                            h-4
                                                            w-4
                                                            transition-transform
                                                            duration-300
                                                            ${isDropdownOpen
                                                                ? "rotate-180"
                                                                : ""
                                                            }
                                                        `}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Submenu */}
                                        {hasChildren && (
                                            <div
                                                className={`
                                                    grid
                                                    transition-[grid-template-rows,opacity]
                                                    duration-300
                                                    ease-in-out
                                                    ${isDropdownOpen
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                    }
                                                `}
                                            >
                                                <div className="overflow-hidden">
                                                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary-soft py-1 pl-3">
                                                        {item.children?.map(
                                                            (child) => {
                                                                const isChildActive =
                                                                    pathname ===
                                                                    child.href;

                                                                return (
                                                                    <li
                                                                        key={
                                                                            child.href
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                child.href
                                                                            }
                                                                            onClick={
                                                                                onClose
                                                                            }
                                                                            className={`
                                                                                block
                                                                                rounded-lg
                                                                                px-3
                                                                                py-2.5
                                                                                text-sm
                                                                                font-medium
                                                                                transition-colors
                                                                                ${isChildActive
                                                                                    ? "bg-primary-soft text-primary"
                                                                                    : "text-muted-foreground hover:bg-primary-soft/50 hover:text-primary"
                                                                                }
                                                                            `}
                                                                        >
                                                                            {
                                                                                child.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Bottom contact area */}
                <div className="border-t border-border-light bg-white px-4 py-4">
                    <div className="space-y-3">
                        <a
                            href="tel:+94771234567"
                            className="flex items-center gap-3 rounded-xl bg-primary-soft/40 px-4 py-3 text-sm font-semibold text-body transition-colors duration-200 hover:bg-primary-soft hover:text-primary"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                                <Phone className="h-4 w-4" />
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-muted-foreground">
                                    Need Help?
                                </p>

                                <p className="text-xs font-bold text-primary">
                                    +94 77 123 4567
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-hover"
                        >
                            <MessageCircle className="h-[18px] w-[18px]" />
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}