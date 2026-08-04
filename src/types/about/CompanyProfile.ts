export interface CompanyStat {
    id: number;
    value: string;
    label: string;
}

export interface CompanyProfile{
    badge: string;
    title: string;
    description: string[];
    highlights: string[];
    image: string;
    stats: CompanyStat[];
}