"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const WHATSAPP_NUMBER = "94713455304";

const DEFAULT_MESSAGE =
    "Hello, I would like to know more about your products.";

export default function WhatsAppFloatingButton() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE,
    )}`;

    return (
        <div className="fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.96,
                }}
            >
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="
                        group
                        relative
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#25D366]
                        shadow-[0_12px_30px_rgba(37,211,102,0.30)]
                        sm:h-16
                        sm:w-16
                    "
                >
                    <Image
                        src="/images/social-media-icons/whatsapp.png"
                        alt="WhatsApp"
                        width={40}
                        height={40}
                        className="
                            h-9
                            w-9
                            object-contain
                            sm:h-10
                            sm:w-10
                        "
                    />
                </Link>
            </motion.div>
        </div>
    );
}
