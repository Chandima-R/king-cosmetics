export type FooterLink = {
    label: string;
    href: string;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: string;
};

export type ContactDetail = {
    id: number;
    type: "address" | "phone" | "email" | "hours";
    values: string[];
};

export type FooterData = {
    description: string;
    logo: string;
    informationLinks: FooterLink[];
    socialLinks: SocialLink[];
    contactDetails: ContactDetail[];
};