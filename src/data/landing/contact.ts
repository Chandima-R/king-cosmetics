import type { ContactInfo } from "@/types/landing/contact";

export const contactInfo: ContactInfo = {

    badge:"GET IN TOUCH",
    title:"We are here to Help",
    description:"Have questions about our products or need more information? Feel free to contact us anytime. Our team is always happy to assist you.",
    
    contactItems: [
        {
            id:1,
            title:"Phone",
            value:"+94 71 345 5304",
            href:"tel:+94713455304",
            icon:"phone",
        },
        {
            id:2,
            title:"Email",
            value:"greenbluenaturesl@gmail.com",
            href:"mailto:greenbluenaturesl@gmail.com",
            icon:"email",
        },
        {
            id:3,
            title:"Location",
            value:"udu pussellawa, Badulla, Sri Lanka",
            href:"https://maps.google.com",
            icon:"location",
        },
        {
            id:4,
            title:"Whatsapp",
            value:"+94 71 345 5304",
            href:"https://wa.me/94713455304",
            icon:"whatsapp",
        },

    ]


}