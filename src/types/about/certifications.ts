export interface Certification {
    id: number;
    title: string;
    description: string;
    type: "image" | "pdf";
    thumbnail: string;
    file: string;
}