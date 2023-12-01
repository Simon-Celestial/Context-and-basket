
import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCart(updatedCart);
        } else {
            removeItem(item.id);
        }
    };

    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateBasketCount = (count) => {
        // Implement your logic for updating the basket count
        console.log('Basket Count Updated:', count);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, handleDecrement, updateBasketCount }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };
