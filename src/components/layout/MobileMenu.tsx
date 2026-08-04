"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/constants/navigation"

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({
    isOpen,
    onClose,
}: MobileMenuProps) {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        onClose();
        setOpenDropdown(null);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {/* Background overlay */}
            <button
                type="button"
                aria-label="Close mobile menu"
                onClick={onClose}
                className="
          fixed inset-0 z-40
          bg-black/30
          backdrop-blur-[2px]
          lg:hidden
        "
            />

            {/* Dropdown panel */}
            <div
                className="
          absolute left-0 right-0 top-full z-50
          border-t border-border-light
          bg-white/95
          shadow-lg
          backdrop-blur-xl
          lg:hidden
        "
            >
                <div className="site-container py-4">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="font-bold text-heading">Menu</p>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close menu"
                            className="
                flex size-9 items-center justify-center
                rounded-full
                text-body
                hover:bg-primary-soft
                hover:text-primary
              "
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav aria-label="Mobile navigation">
                        <ul className="space-y-1">
                            {navigationItems.map((item) => {
                                const hasChildren =
                                    item.children && item.children.length > 0;

                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" &&
                                        pathname.startsWith(item.href));

                                const isDropdownOpen = openDropdown === item.label;

                                return (
                                    <li key={item.label}>
                                        <div className="flex items-center">
                                            <Link
                                                href={item.href}
                                                className={`
                          flex-1 rounded-lg px-4 py-3
                          text-sm font-semibold
                          ${isActive
                                                        ? "bg-primary-soft text-primary"
                                                        : "text-body hover:bg-surface hover:text-primary"
                                                    }
                        `}
                                            >
                                                {item.label}
                                            </Link>

                                            {hasChildren && (
                                                <button
                                                    type="button"
                                                    aria-label={`Open ${item.label} submenu`}
                                                    aria-expanded={isDropdownOpen}
                                                    onClick={() =>
                                                        setOpenDropdown((current) =>
                                                            current === item.label ? null : item.label
                                                        )
                                                    }
                                                    className="
                            ml-1 flex size-11 items-center justify-center
                            rounded-lg
                            text-muted
                            hover:bg-primary-soft
                            hover:text-primary
                          "
                                                >
                                                    <ChevronDown
                                                        size={18}
                                                        className={`
                              transition-transform duration-200
                              ${isDropdownOpen ? "rotate-180" : ""}
                            `}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {hasChildren && isDropdownOpen && (
                                            <ul
                                                className="
                          mt-1 space-y-1
                          border-l-2 border-primary-soft
                          py-1 pl-4
                        "
                                            >
                                                {item.children?.map((child) => {
                                                    const isChildActive = pathname === child.href;

                                                    return (
                                                        <li key={child.href}>
                                                            <Link
                                                                href={child.href}
                                                                className={`
                                                                                block rounded-lg px-4 py-2.5
                                                                                text-sm font-medium
                                                                                ${isChildActive
                                                                        ? "bg-primary-soft text-primary"
                                                                        : "text-muted hover:bg-surface hover:text-primary"
                                                                    }
                                `}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="mt-5 grid gap-3 border-t border-border-light pt-5">
                        <a
                            href="tel:+94771234567"
                            className="
                                    flex items-center gap-3
                                    rounded-xl
                                    bg-surface
                                    px-4 py-3
                                    text-sm font-semibold text-body
                                    hover:bg-primary-soft
                                    hover:text-primary
                                "
                        >
                            <Phone size={18} />

                            <span>
                                Need Help?
                                <span className="ml-1 text-primary">
                                    +94 77 123 4567
                                </span>
                            </span>
                        </a>

                        <a
                            href="https://wa.me/94771234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    flex items-center justify-center gap-2
                                    rounded-full
                                    bg-whatsapp
                                    px-5 py-3
                                    text-sm font-bold text-white
                                    hover:bg-whatsapp-hover
                                "
                        >
                            <MessageCircle size={18} />
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}