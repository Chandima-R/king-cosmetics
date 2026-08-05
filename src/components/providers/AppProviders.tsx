"use client";

import { CartProvider } from "@/context/CartContext";

type AppProvidersProps = {
    children: React.ReactNode;
};

export default function AppProviders({
    children,
}: AppProvidersProps) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}