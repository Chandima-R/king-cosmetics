export type CartItem = {
    id:number;
    productId:number;

    name:string;
    slug:string;
    category:string;

    image:string;

    size:string;

    price:number;
    currency:string;

    quantity:number;
    inStock:boolean;
}

export type CartSummary = {
    itemCount: number;
    subtotal: number;
    deliveryFee: number;
    total: number;
};

export type CartPageData = {
    title: string;
    description: string;
    continueShoppingUrl: string;
};

export type WhatsAppOrder = {
    customerName?: string;
    phone?: string;
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
};

export type AddToCartProduct = Omit<
    CartItem,
    "id" | "quantity"
>;