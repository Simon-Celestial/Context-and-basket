
import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext.jsx";

export const CartCounter = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-product-counter">
            {cart ? cart.length : 0}
        </div>
    );
};
