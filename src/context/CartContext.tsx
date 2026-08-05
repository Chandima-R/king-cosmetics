"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type {
    AddToCartProduct,
    CartItem,
} from "@/types/cart/cart";

const CART_STORAGE_KEY = "king-cosmetics-cart";

type CartContextValue = {
    cartItems: CartItem[];
    totalItems: number;
    subtotal: number;
    isCartReady: boolean;

    addToCart: (
        product: AddToCartProduct,
        quantity?: number,
    ) => void;

    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    isProductInCart: (productId: number) => boolean;
    getProductQuantity: (productId: number) => number;
};

const CartContext = createContext<CartContextValue | null>(
    null,
);

type CartProviderProps = {
    children: ReactNode;
};

function isValidCartItem(value: unknown): value is CartItem {
    if (
        typeof value !== "object" ||
        value === null
    ) {
        return false;
    }

    const item = value as Partial<CartItem>;

    return (
        typeof item.id === "number" &&
        typeof item.productId === "number" &&
        typeof item.name === "string" &&
        typeof item.slug === "string" &&
        typeof item.category === "string" &&
        typeof item.image === "string" &&
        typeof item.size === "string" &&
        typeof item.price === "number" &&
        typeof item.currency === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0 &&
        typeof item.inStock === "boolean"
    );
}

function readStoredCart(): CartItem[] {
    try {
        const storedValue =
            window.localStorage.getItem(CART_STORAGE_KEY);

        if (!storedValue) {
            return [];
        }

        const parsedValue: unknown =
            JSON.parse(storedValue);

        if (!Array.isArray(parsedValue)) {
            return [];
        }

        return parsedValue.filter(isValidCartItem);
    } catch (error) {
        console.error(
            "Unable to read cart from localStorage:",
            error,
        );

        return [];
    }
}

function saveCart(items: CartItem[]) {
    try {
        window.localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(items),
        );
    } catch (error) {
        console.error(
            "Unable to save cart to localStorage:",
            error,
        );
    }
}

export function CartProvider({
    children,
}: CartProviderProps) {
    /*
     * Keep the server and first client render identical.
     * localStorage is loaded after the component mounts.
     */
    const [cartItems, setCartItems] =
        useState<CartItem[]>([]);

    const [isCartReady, setIsCartReady] =
        useState(false);

    /*
     * Restore saved cart after mounting in the browser.
     */
    useEffect(() => {
        const storedCart = readStoredCart();

        setCartItems(storedCart);
        setIsCartReady(true);
    }, []);

    /*
     * Save every cart update after the initial
     * localStorage restoration has completed.
     */
    useEffect(() => {
        if (!isCartReady) {
            return;
        }

        saveCart(cartItems);
    }, [cartItems, isCartReady]);

    /*
     * Optional:
     * Synchronize the cart when another tab changes it.
     */
    useEffect(() => {
        const handleStorageChange = (
            event: StorageEvent,
        ) => {
            if (
                event.key !== CART_STORAGE_KEY ||
                event.storageArea !== window.localStorage
            ) {
                return;
            }

            if (!event.newValue) {
                setCartItems([]);
                return;
            }

            try {
                const parsedValue: unknown =
                    JSON.parse(event.newValue);

                if (Array.isArray(parsedValue)) {
                    setCartItems(
                        parsedValue.filter(isValidCartItem),
                    );
                }
            } catch (error) {
                console.error(
                    "Unable to synchronize cart:",
                    error,
                );
            }
        };

        window.addEventListener(
            "storage",
            handleStorageChange,
        );

        return () => {
            window.removeEventListener(
                "storage",
                handleStorageChange,
            );
        };
    }, []);

    const addToCart = useCallback(
        (
            product: AddToCartProduct,
            quantity = 1,
        ) => {
            const safeQuantity = Math.max(
                1,
                Math.floor(quantity),
            );

            setCartItems((currentItems) => {
                const existingItem =
                    currentItems.find(
                        (item) =>
                            item.productId ===
                            product.productId,
                    );

                if (existingItem) {
                    return currentItems.map((item) =>
                        item.productId ===
                            product.productId
                            ? {
                                ...item,
                                quantity:
                                    item.quantity +
                                    safeQuantity,
                            }
                            : item,
                    );
                }

                const newItem: CartItem = {
                    ...product,
                    id: product.productId,
                    quantity: safeQuantity,
                };

                return [...currentItems, newItem];
            });
        },
        [],
    );

    const increaseQuantity = useCallback(
        (id: number) => {
            setCartItems((currentItems) =>
                currentItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity:
                                item.quantity + 1,
                        }
                        : item,
                ),
            );
        },
        [],
    );

    const decreaseQuantity = useCallback(
        (id: number) => {
            setCartItems((currentItems) =>
                currentItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: Math.max(
                                1,
                                item.quantity - 1,
                            ),
                        }
                        : item,
                ),
            );
        },
        [],
    );

    const removeFromCart = useCallback(
        (id: number) => {
            setCartItems((currentItems) =>
                currentItems.filter(
                    (item) => item.id !== id,
                ),
            );
        },
        [],
    );

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const isProductInCart = useCallback(
        (productId: number) =>
            cartItems.some(
                (item) =>
                    item.productId === productId,
            ),
        [cartItems],
    );

    const getProductQuantity = useCallback(
        (productId: number) =>
            cartItems.find(
                (item) =>
                    item.productId === productId,
            )?.quantity ?? 0,
        [cartItems],
    );

    const totalItems = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total + item.quantity,
                0,
            ),
        [cartItems],
    );

    const subtotal = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total +
                    item.price * item.quantity,
                0,
            ),
        [cartItems],
    );

    const contextValue =
        useMemo<CartContextValue>(
            () => ({
                cartItems,
                totalItems,
                subtotal,
                isCartReady,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                isProductInCart,
                getProductQuantity,
            }),
            [
                cartItems,
                totalItems,
                subtotal,
                isCartReady,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                isProductInCart,
                getProductQuantity,
            ],
        );

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider.",
        );
    }

    return context;
}