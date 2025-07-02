import '../Css/navbar.css';

import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const AmazonNavigationBar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById('itemToTrack');

    const handleScroll = () => {
      if (item) {
        const itemRect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (itemRect.top < windowHeight && itemRect.bottom > 70) {
          setShowPopover(true);
        } else {
          setShowPopover(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };
   const { items } = useCart();
  
    const handleLinkClick = () => {
      // Scroll to the top of the page when the link is clicked
      window.scrollTo(0, 0, { behavior: "instant" });
    };

  return (
    <nav className="amazon-nav">
      <div className="amazon-nav-container">
        <ul className="amazon-nav-list">
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('all')} onMouseLeave={handleCategoryLeave}>
            <a href="/">All</a>
            {activeCategory === 'all' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('fresh')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Fresh</a>
            {activeCategory === 'fresh' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('deals')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Today's Deals</a>
            {activeCategory === 'deals' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('buyAgain')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Buy Again</a>
            {activeCategory === 'buyAgain' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('electronics')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Electronics</a>
            {activeCategory === 'electronics' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('pay')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Amazon Pay</a>
            {activeCategory === 'pay' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('home')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Home & Kitchen</a>
            {activeCategory === 'home' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('miniTV')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Amazon miniTV</a>
            {activeCategory === 'miniTV' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('sell')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Sell</a>
            {activeCategory === 'sell' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('gift')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Gift cards</a>
            {activeCategory === 'gift' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('health')} onMouseLeave={handleCategoryLeave}>
            <a href="/">Health & Personal Care</a>
            {activeCategory === 'health' && <div className="nav-indicator"></div>}
          </li>
          
          <div className='popover_trigger_nav'>
            <Link to="/green">
              <button id='itemToTrack' className="green-button">
                <span className="leaf-icon">🍃</span>
                <span>Greenovation Zone</span>
              </button>
            </Link>
            {showPopover && !dontShowAgain && (
              <div className='popover_content_nav'>
                <div className='triangle'></div>
                <p>Introducing our brand new section<br></br>Greenovation Zone</p>
                <button onClick={closePopover} className='got_it'>Got It</button>
              </div>
            )}
          </div>
        </ul>

      </div>
      <Link
        style={{ textDecoration: "none" }}
        to="/checkout"
        onClick={handleLinkClick}
      >
        <div className="header__optionBasket">
          <img
            src="../images/cart_icon.png"
            className="header__cartIcon"
            alt="cart"
          />
          <span className="header__optionLineTwo header__basketCount">
            {items?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default AmazonNavigationBar;