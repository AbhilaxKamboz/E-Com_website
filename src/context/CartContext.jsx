import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // load cart
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart"));
        if (saved) setCart(saved);
    }, []);

    // save cart
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existing = cart.find(i => i.id === product.id);
        if (existing) {
            setCart(cart.map(i =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            ));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
        Swal.fire("Product added to cart");

    };

    const removeFromCart = (id) =>
        setCart(cart.filter(i => i.id !== id));

    const increaseQty = (id) =>
        setCart(cart.map(i =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
        ));

    const decreaseQty = (id) =>
        setCart(
            cart
                .map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
                .filter(i => i.qty > 0)
        );

    const clearCart = () => setCart([]);

    const removeAll = () => {
        setCart([]);
        Swal.fire({
            title: "Success",
            text: "All items removed from cart",
            icon: "success",
        });
    };


    const cartCount = cart.reduce((s, i) => s + i.qty, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            increaseQty,
            decreaseQty,
            clearCart,
            removeAll,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
