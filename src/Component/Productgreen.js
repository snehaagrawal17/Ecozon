import "../Css/Productgreen.css";

import React, { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Product({ title, image, id, price, rating, carbon_red, badge_id }) {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [isBadgePopoverVisible, setBadgePopoverVisible] = useState(false);
  const [showInfoPopover, setInfoShowPopover] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Badge mapping
  const badgeMap = {
    1: { photo: "../images/badge1.png", popover: "../images/badge1_popover.png" },
    2: { photo: "../images/badge2.png", popover: "../images/badge2_popover.png" },
    3: { photo: "../images/badge3.png", popover: "../images/badge3_popover.png" },
    4: { photo: "../images/badge4.png", popover: "../images/badge4_popover.png" },
    5: { photo: "../images/badge5.png", popover: "../images/badge5_popover.png" }
  };

  const badge = badgeMap[badge_id] || { photo: "", popover: "" };

  const addToBasket = (e) => {
    e.stopPropagation(); // Prevent card click event
    addItem({
      id,
      title,
      image,
      price,
      rating,
      badge_id,
    });
  };

  const handleCardClick = () => {
    navigate(`/green-product/${id}`);
  };

  const toggleBadgePopover = (isVisible, e) => {
    if (e) e.stopPropagation(); // Prevent card click event
    if (isVisible) setDontShowAgain(true);
    setBadgePopoverVisible(isVisible);
  };

  const closeInfoPopover = (e) => {
    e.stopPropagation(); // Prevent card click event
    setDontShowAgain(true);
    setInfoShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById(`badge-${id}`);
    if (!item) return;

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      setInfoShowPopover(
        itemRect.top < 650 && itemRect.bottom > 200 && !dontShowAgain
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, dontShowAgain]);

  return (
    <div className="productg" onClick={handleCardClick}>
      {/* Bestseller tag */}
      <div className="product__tag">BESTSELLER</div>
      
      {/* Product info */}
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <div className="product__rating">
          {Array(rating).fill().map((_, index) => (
            <span key={index} className="star">⭐</span>
          ))}
        </div>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
      </div>
      
      {/* Product image */}
      <div className="product__image-container">
        <img src={image} alt={title} className="product__image" />
      </div>
      
      {/* Eco details */}
      <div className="eco_details">
        <div className="eco_detail_item carbon_details">
          <div className="eco_icon">
            <img src="../images/co2badge.png" alt="Carbon reduction" />
          </div>
          <p className="eco_text">{carbon_red}% Less Carbon Emission</p>
        </div>
        
        {badge.photo && (
          <div className="eco_detail_item badge_details">
            <div className="eco_icon popover_trigger">
              <img
                id={`badge-${id}`}
                src={badge.photo}
                alt="Eco badge"
                onMouseEnter={(e) => toggleBadgePopover(true, e)}
                onMouseLeave={(e) => toggleBadgePopover(false, e)}
              />
              
              {isBadgePopoverVisible && (
                <div className="popover_content" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={badge.popover}
                    className="popover_content_image"
                    alt="Badge details"
                    style={{ width: '250px', height: '250px'}}

                  />
                </div>
              )}
              
              {showInfoPopover && id === "875615" && (
                <div className="badge_info_popover" onClick={(e) => e.stopPropagation()}>
                  <div className="badge_info_triangle"></div>
                  <p>Try hovering over the badge to see further details.</p>
                  <button onClick={closeInfoPopover} className="got_it">
                    Got It
                  </button>
                </div>
              )}
            </div>
            <p className="eco_text">Eco-Friendly Badge</p>
          </div>
        )}
      </div>
      
      {/* Add to cart button */}
      <button className="add_to_cart_btn" onClick={addToBasket}>
        <span className="cart_icon">🛒</span>
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default Product;