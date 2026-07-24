import type { ContactInfo } from "@/types/landing/contact";

export const contactInfo: ContactInfo = {

    badge:"GET IN TOUCH",
    title:"We are here to Help",
    description:"Have questions about our products or need more information? Feel free to contact us anytime. Our team is always happy to assist you.",
    
    contactItems: [
        {
            id:1,
            title:"Phone",
            value:"+94 77 556 6565",
            href:"tel:+94775566565",
            icon:"phone",
        },
        {
            id:2,
            title:"Email",
            value:"info@greenbluenature.lk",
            href:"mailto:info@greenbluenature.lk",
            icon:"email",
        },
        {
            id:3,
            title:"Location",
            value:"Bandarawela, Sri Lanka",
            href:"https://maps.google.com",
            icon:"location",
        },
        {
            id:4,
            title:"Whatsapp",
            value:"+94 77 556 6565",
            href:"https://wa.me/94771234567",
            icon:"whatsapp",
        },

    ]


}