import '../Css/navbargreen.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const AmazonNavigationBarg = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    const { items } = useCart();
   
     const handleLinkClick = () => {
       // Scroll to the top of the page when the link is clicked
       window.scrollTo(0, 0, { behavior: "instant" });
     };
  return (
    <nav className="amazon-nav eco-nav">
      <div className="amazon-nav-container">
        <ul className="amazon-nav-list">
          <Link to="/green">
            <li className="nav-item" onMouseEnter={() => handleCategoryHover('home')} onMouseLeave={handleCategoryLeave}>
              <a href="#" className="active-link">Home</a>
              {activeCategory === 'home' && <div className="nav-indicator"></div>}
            </li>
          </Link>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('deals')} onMouseLeave={handleCategoryLeave}>
            <a href="#">Today's Deals</a>
            {activeCategory === 'deals' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('pay')} onMouseLeave={handleCategoryLeave}>
            <a href="#">Amazon Pay</a>
            {activeCategory === 'pay' && <div className="nav-indicator"></div>}
          </li>
         
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('bamboo')} onMouseLeave={handleCategoryLeave}>
            <a href="#">Bamboo</a>
            {activeCategory === 'bamboo' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('home-kitchen')} onMouseLeave={handleCategoryLeave}>
            <a href="#">Home & Kitchen</a>
            {activeCategory === 'home-kitchen' && <div className="nav-indicator"></div>}
          </li>
          <li className="nav-item" onMouseEnter={() => handleCategoryHover('gift')} onMouseLeave={handleCategoryLeave}>
            <a href="#">Gift cards</a>
            {activeCategory === 'gift' && <div className="nav-indicator"></div>}
          </li>
          
          <Link to="/seller">
            <li className="nav-item" onMouseEnter={() => handleCategoryHover('seller')} onMouseLeave={handleCategoryLeave}>
              <a href="#" className="active-link">Seller</a>
              {activeCategory === 'seller' && <div className="nav-indicator"></div>}
            </li>
          </Link>
          
          <Link to="/education">
            <li className="nav-item" onMouseEnter={() => handleCategoryHover('education')} onMouseLeave={handleCategoryLeave}>
              <a href="#" className="active-link">Educational Section</a>
              {activeCategory === 'education' && <div className="nav-indicator"></div>}
            </li>
          </Link>
          
          <Link to="/sustainability">
            <li className="nav-item" onMouseEnter={() => handleCategoryHover('sustainability')} onMouseLeave={handleCategoryLeave}>
              <a href="#" className="active-link">Sustainability Reports</a>
              {activeCategory === 'sustainability' && <div className="nav-indicator"></div>}
            </li>
          </Link>
          
          <Link to="/consumersupportedagriculture">
            <li className="nav-item" onMouseEnter={() => handleCategoryHover('farm')} onMouseLeave={handleCategoryLeave}>
              <a href="#" className="active-link">Buy From Farm</a>
              {activeCategory === 'farm' && <div className="nav-indicator"></div>}
            </li>
          </Link>
          
          <li className="nav-item dropdown" onMouseEnter={() => handleCategoryHover('more')} onMouseLeave={handleCategoryLeave}>
            <a href="#" onClick={toggleDropdown}>More</a>
            {activeCategory === 'more' && <div className="nav-indicator"></div>}
            {showDropdown && (
              <div className="dropdown-menu">
                <a href="#">Eco-friendly Products</a>
                <a href="#">Recycling Programs</a>
                <a href="#">Carbon Footprint</a>
                <a href="#">Community Initiatives</a>
              </div>
            )}
          </li>
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
                    className="header__cartIcong"
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

export default AmazonNavigationBarg;