import Link from "next/link";
import Image from "next/image";


const socialLinks = [
    {
        name: "WhatsApp",
        href: "https://wa.me/94771234567",
        icon: "/images/social-media-icons/whatsapp.png",
    },
    {
        name: "Facebook",
        href: "https://facebook.com/",
        icon: "/images/social-media-icons/facebook.png",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/",
        icon: "/images/social-media-icons/instagram.png",
    },
    {
        name: "TikTok",
        href: "https://tiktok.com/",
        icon: "/images/social-media-icons/tiktok.png",
    },
];


export default function SocialMediaSection() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-20">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/40 blur-[120px]" />

            <div className="container relative mx-auto px-6">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-primary-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Stay Connected
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-foreground lg:text-5xl">
                        Follow Our Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
                        Join our community for beauty tips, product updates,
                        exclusive offers, and the latest news from Green Blue
                        Nature. Stay inspired with our natural skincare journey.
                    </p>

                    {/* Social Icons */}

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-6">

                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    aria-label={item.name}
                                    className="group flex flex-col items-center gap-4"
                                >
                                    <div className="flex h-15 w-15 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">

                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={38}
                                            height={38}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />

                                    </div>

                                    <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                                        {item.name}
                                    </span>

                                </Link>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}