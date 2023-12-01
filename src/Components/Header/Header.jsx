
import React, { useState } from 'react';
import { ShoppingCart } from "@phosphor-icons/react";
import { Cart } from "../Cart/Cart.jsx";
import { CartCounter } from "../Common/CartCounter.jsx";
import "./Header.scss";

export const Header = () => {
    const [basketOpen, setBasketOpen] = useState(false);

    const handleBasketOpen = () => {
        setBasketOpen((prevOpen) => !prevOpen);
    };

    return (
        <header className="app-header">
            <div className="app-header-content">
                <a href="#" className="app-header-logo">
                    <img src="https://i1.sndcdn.com/artworks-000455378244-sppi4u-t500x500.jpg" alt="logo" />
                    <p>EXPRESS UCUZLUQ</p>
                </a>
                <div className="app-header-buttons">
                    <a href="#">HOME</a>
                    <a href="#">NEWS</a>
                    <a href="#">PROJECT</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACTS</a>
                    <div className="app-header-basket" onClick={handleBasketOpen}>
                        <ShoppingCart size={28} weight="fill" />
                        <CartCounter />
                    </div>
                </div>
                <div className={`app-basket-content ${basketOpen ? "app-basket-active" : ""}`}>
                    <Cart />
                </div>
            </div>
        </header>
    );
};
