import "../Css/Product.css";

import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext";

function Product({ title, image, id, price, rating, badge_id }) {
  const { addItem } = useCart();
  
  // Extract the alternative_of_id from the id (assuming format "alt-XXXXX")
  const alternativeId = id.startsWith("alt-") ? id.substring(4) : null;

  const addToCart = () => {
    addItem({
      id,
      name: title,
      image,
      price,
      rating,
      badge_id,
      type: "product",
    });
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="product">
      {/* Bestseller tag */}
      <div className="product__bestseller">BESTSELLER</div>
      
      {/* Product info */}
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
        </div>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
      </div>
      
      {/* Product image */}
      <div className="product__image-container">
        <img src={image} alt={title} />
      </div>
      
      {/* Buttons */}
      <div className="product__buttons">
        <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
        
        {alternativeId && (
          <Link to={`/green-product/${alternativeId}`} onClick={handleLinkClick} className="eco-link">
            <button className="greenovation">Eco-Friendly Alternative</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;