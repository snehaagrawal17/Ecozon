import React from "react";
import "../Css/Productbutton.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Productbutton({ title, image, id, price, rating, badge_id }) {
  const { addItem } = useCart();
  
  // Extract the alternative_of_id from the id (assuming format "alt-XXXXX")
  const alternativeId = id.startsWith("alt-") ? id.substring(4) : null;

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  const addToBasket = () => {
    addItem({
      id,
      title,
      image,
      price,
      rating,
      badge_id,
    });
  };

  return (
    <div className="productb">
      <div className="product__infob">
        <p>{title}</p>
        <div className="product__priceb">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__ratingb">
          {Array(rating)
            .fill()
            .map((rate, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="normal" onClick={addToBasket}>
        Add to Cart
      </button>
      {alternativeId && (
        <Link to={`/green/product/${alternativeId}`} onClick={handleLinkClick} style={{width: '100%'}}>
          <button className="greenovation">Eco-Friendly Alternative</button>
        </Link>
      )}
    </div>
  );
}

export default Productbutton;