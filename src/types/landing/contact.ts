export interface ContactItem{
    id:number;
    title:string;
    value:string;
    href:string;
    icon: "phone" | "email" | "location" | "whatsapp"
}

export interface ContactInfo {
    badge:string;
    title:string;
    description:string;
    contactItems:ContactItem[];
}
