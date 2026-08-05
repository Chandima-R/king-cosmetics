// "use client";

// import { useState } from "react";

// import CartHeader from "@/components/cart/CartHeader";
// import CartItems from "@/components/cart/CartItems";
// import OrderSummary from "@/components/cart/OrderSummary";

// import { sampleCartItems } from "@/data/cart/cart";

// export default function CartPage() {
//     const [cartItems, setCartItems] =
//         useState(sampleCartItems);

//     const increaseQuantity = (id: number) => {
//         setCartItems((items) =>
//             items.map((item) =>
//                 item.id === id
//                     ? {
//                         ...item,
//                         quantity: item.quantity + 1,
//                     }
//                     : item,
//             ),
//         );
//     };

//     const decreaseQuantity = (id: number) => {
//         setCartItems((items) =>
//             items.map((item) =>
//                 item.id === id && item.quantity > 1
//                     ? {
//                         ...item,
//                         quantity: item.quantity - 1,
//                     }
//                     : item,
//             ),
//         );
//     };

//     const removeItem = (id: number) => {
//         setCartItems((items) =>
//             items.filter((item) => item.id !== id),
//         );
//     };

//     const totalItems = cartItems.reduce(
//         (total, item) => total + item.quantity,
//         0,
//     );

//     return (
//         <main className="py-16 lg:py-20">
//             <div className="site-container">
//                 <CartHeader itemCount={totalItems} />

//                 <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
//                     {/* Cart Items */}

//                     <CartItems
//                         items={cartItems}
//                         onIncrease={increaseQuantity}
//                         onDecrease={decreaseQuantity}
//                         onRemove={removeItem}
//                     />

//                     {/* Summary */}

//                     <OrderSummary
//                         items={cartItems}
//                         whatsappNumber="94771234567"
//                     />
//                 </div>
//             </div>
//         </main>
//     );
// }

"use client";

import CartHeader from "@/components/cart/CartHeader";
import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const {
        cartItems,
        totalItems,
        isCartReady,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    if (!isCartReady) {
        return (
            <main className="py-10 lg:py-12">
                <div className="site-container">
                    <div className="min-h-[420px] animate-pulse rounded-3xl bg-primary-soft/30" />
                </div>
            </main>
        );
    }

    return (
        <main className="py-10 lg:py-12">
            <div className="site-container">
                <CartHeader itemCount={totalItems} />

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
                    <CartItems
                        items={cartItems}
                        itemsPerPage={4}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                        onRemove={removeFromCart}
                    />

                    <OrderSummary
                        items={cartItems}
                        whatsappNumber="94771234567"
                    />
                </div>
            </div>
        </main>
    );
}