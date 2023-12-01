import React from "react";
import { Star } from "@phosphor-icons/react";
import { useCart } from '../../Context/CartContext.jsx';

export const Products = ({ product }) => {
    const { addToCart } = useCart();
    let color = "";

    const ratingColor = () => {
        if (product.rating.rate > 4) {
            color = "green";
        } else if (product.rating.rate < 4 && product.rating.rate >= 3) {
            color = "yellow";
        } else {
            color = "red";
        }
    };

    ratingColor();

    return (
        <div className="product-card">
            <div className="card-rating-box">
                <Star size={25} weight="fill" color={color} />
                <p style={{ color }}>{product.rating.rate}</p>
            </div>
            <div className="card-price-box">
                <p>{product.price} AZN</p>
            </div>
            <div className="card-image">
                <img src={product.image} alt="Product" />
            </div>
            <div className="card-title">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
            <div className="card-manipulation">
                <button type="button" className="buy" onClick={() => addToCart(product)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};
