export interface ProductImage{
    id:number;
    src:string;
    alt:string;
}

export interface ProductDetailPoint {
    id:number;
    text:string;
}

export interface Product {
    id:number;
    name:string;
    slug:string;
    category:string;
    price:number;
    currency:string;

    images:ProductImage[];

    size:string;
    shortDescription: string;
    fullDescription:string[];

    benefits: ProductDetailPoint[];
    ingredients: ProductDetailPoint[];
    howToUse: ProductDetailPoint[];
    suitableFor: ProductDetailPoint[];
    precautions: ProductDetailPoint[];
    allergyWarnings: ProductDetailPoint[];
    storageInstructions: ProductDetailPoint[];

    featured :boolean;
    inStock:boolean;
}