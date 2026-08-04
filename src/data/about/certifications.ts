import type { Certification } from "@/types/about/certifications";

export const certifications: Certification[] = [
    {
        id: 1,
        title: "ISO 9001 Certification",
        description:
            "Recognition of our commitment to consistent quality management standards.",
        type: "image",
        thumbnail: "/images/certificates/test1.jpg",
        file: "/images/certificates/iso-9001.jpg",
    },
    {
        id: 2,
        title: "GMP Certification",
        description:
            "Certified good manufacturing practices for safe and reliable production.",
        type: "pdf",
        thumbnail: "/images/certificates/test1.jpg",
        file: "/certificates/gmp-certificate.pdf",
    },
    {
        id: 3,
        title: "Natural Product Standard",
        description:
            "Recognition for carefully selected naturally inspired ingredients.",
        type: "image",
        thumbnail: "/images/certificates/test1.jpg",
        file: "/images/certificates/natural-standard.jpg",
    },
    {
        id: 4,
        title: "Quality Assurance",
        description:
            "Independent verification of product quality and safety procedures.",
        type: "pdf",
        thumbnail: "/images/certificates/test1.jpg",
        file: "/certificates/quality-assurance.pdf",
    },
    {
        id: 5,
        title: "Eco Responsible Standard",
        description:
            "Recognition of responsible practices and environmental awareness.",
        type: "image",
        thumbnail: "/images/certificates/test1.jpg",
        file: "/images/certificates/eco-standard.jpg",
    },
];