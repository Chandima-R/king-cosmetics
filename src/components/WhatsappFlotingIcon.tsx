import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "94713455304";

const DEFAULT_MESSAGE =
    "Hello, I would like to know more about your products.";

export default function WhatsAppFloatingButton() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE,
    )}`;

    return (
        <div className="fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group
                    animate-whatsapp-float
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#25D366]
                    shadow-[0_12px_30px_rgba(37,211,102,0.30)]
                    transition-transform
                    duration-300
                    hover:scale-110
                    sm:h-16
                    sm:w-16
                "
            >
                <Image
                    src="/images/social-media-icons/whatsapp.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="h-10 w-10"
                />
            </Link>
        </div>
    );
}

