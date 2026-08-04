import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import { footerData } from "@/data/footer";
import type {
    ContactDetail,
    FooterLink as FooterLinkType,
} from "@/types/footer";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-primary/10 bg-primary/20">
            {/* Background glow effects */}
            <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary-soft/35 blur-[120px]" />

            <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-primary-soft/30 blur-[120px]" />

            <div className="relative mx-auto px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
                <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
                    {/* Brand section */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            aria-label="Green Blue Nature home"
                            className="inline-block"
                        >
                            <Image
                                src={footerData.logo}
                                alt="Green Blue Nature"
                                width={220}
                                height={90}
                                className="h-auto w-40 object-contain sm:w-44"
                            />
                        </Link>

                        <p className="mt-4 max-w-sm text-xs leading-4 text-muted-foreground">
                            {footerData.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2.5">
                            {footerData.socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.label}
                                        width={20}
                                        height={20}
                                        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Information section */}
                    <div>
                        <FooterHeading>QUICK LINKS</FooterHeading>

                        <ul className="mt-5 space-y-3">
                            {footerData.informationLinks.map((link) => (
                                <li key={link.label}>
                                    <FooterNavigationLink link={link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <FooterHeading>OUR PRODUCTS</FooterHeading>

                        <ul className="mt-5 space-y-3">
                            {footerData.productLinks.map((link) => (
                                <li key={link.label}>
                                    <FooterNavigationLink link={link} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div>
                        <FooterHeading>CONTACT US</FooterHeading>

                        <div className="mt-5 space-y-4">
                            {footerData.contactDetails.map((detail) => (
                                <ContactItem
                                    key={detail.id}
                                    detail={detail}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="relative border-t border-primary/10 bg-primary">
                <div className="mx-auto flex max-w-7xl flex-col text-white items-center justify-between gap-3 px-6 py-4 text-center text-xs text-muted-foreground sm:px-8 lg:flex-row lg:px-10 lg:text-left">
                    <p>
                        © {currentYear} Green Blue Nature (Pvt) Ltd. All Rights
                        Reserved.
                    </p>

                    <p>
                        Designed &amp; Developed by{" "}
                        <Link
                            href="https://alphamedia.lk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold transition-opacity duration-300 hover:opacity-70"
                        >
                            Alpha Media
                        </Link>
                        .
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors duration-300 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>

                        <span className="hidden h-3 w-px bg-border sm:block" />

                        <Link
                            href="/terms-and-conditions"
                            className="transition-colors duration-300 hover:text-primary"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterHeadingProps = {
    children: ReactNode;
};

function FooterHeading({ children }: FooterHeadingProps) {
    return (
        <div>
            <h3 className="font-bold text-muted-foreground">
                {children}
            </h3>
        </div>
    );
}

type FooterNavigationLinkProps = {
    link: FooterLinkType;
};

function FooterNavigationLink({
    link,
}: FooterNavigationLinkProps) {
    return (
        <Link
            href={link.href}
            className="group inline-flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary text-xs"
        >


            {link.label}
        </Link>
    );
}

type ContactItemProps = {
    detail: ContactDetail;
};

function ContactItem({ detail }: ContactItemProps) {
    const icon = getContactIcon(detail.type);

    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                {icon}
            </div>

            <div className="text-xs leading-6  text-muted-foreground">
                {detail.values.map((value, index) => (
                    <ContactValue
                        key={`${detail.id}-${value}`}
                        type={detail.type}
                        value={value}
                        showBreak={index < detail.values.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}

type ContactValueProps = {
    type: ContactDetail["type"];
    value: string;
    showBreak: boolean;
};

function ContactValue({
    type,
    value,
    showBreak,
}: ContactValueProps) {
    let content: ReactNode = value;

    if (type === "phone") {
        const phoneNumber = value.replace(/\s/g, "");

        content = (
            <Link
                href={`tel:${phoneNumber}`}
                className="transition-colors duration-300 text-xs hover:text-primary"
            >
                {value}
            </Link>
        );
    }

    if (type === "email") {
        content = (
            <Link
                href={`mailto:${value}`}
                className="break-all text-xs transition-colors duration-300 hover:text-primary"
            >
                {value}
            </Link>
        );
    }

    return (
        <>
            {content}
            {showBreak && <br />}
        </>
    );
}

function getContactIcon(
    type: ContactDetail["type"],
): ReactNode {
    const iconClassName = "h-4 w-4";

    switch (type) {
        case "address":
            return <MapPin className={iconClassName} />;

        case "phone":
            return <Phone className={iconClassName} />;

        case "email":
            return <Mail className={iconClassName} />;

        case "hours":
            return <Clock3 className={iconClassName} />;

        default:
            return null;
    }
}