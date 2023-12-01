
import React, { useEffect, useContext } from 'react';
import { CartContext } from "../../Context/CartContext.jsx";
import "./Cart.scss"

export const Cart = () => {
    const { cart, addToCart, removeItem, clearCart, handleDecrement, updateBasketCount } = useContext(CartContext);

    const handleIncrement = (item) => {
        addToCart({ ...item, quantity: item.quantity + 1 });
    };

    useEffect(() => {
        const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
        updateBasketCount(totalCount);
    }, [cart, updateBasketCount]);

    return (
        <div className="cart-content">
            {cart.map((item) => (
                <div className="cart-product-card" key={item.id}>
                    <div className="cart-product-image">
                        <img src={item.image} alt="Product" />
                    </div>
                    <div className="cart-product-title">
                        <p>
                            {item.title} - {item.price} AZN - Quantity: {item.quantity}
                        </p>
                    </div>
                    <div className="quantity-controls">
                        <button onClick={() => handleDecrement(item)} className="quantity-button">
                            -
                        </button>
                        <button onClick={() => handleIncrement(item)} className="quantity-button">
                            +
                        </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="remove-from-basket">
                        X
                    </button>
                </div>
            ))}
            <button onClick={clearCart} className="clear-cart">
                Clear Cart
            </button>
        </div>
    );
};
