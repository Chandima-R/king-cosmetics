export type FAQItem = {
    id:number;
    question:string;
    answer:string;
};

export type FAQSectionData = {
    badge:string;
    title:string;
    description:string;
    items:FAQItem[];

}