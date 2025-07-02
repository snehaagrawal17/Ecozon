import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Homegreen.css";
import Product from "./Productgreen";
import ImageSliderGreen from "./Imageslidegreen";
import greenProductsData from "../Data/GreenProducts.json";

function Homegreen() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({
    featured: [],
    kitchen: [],
    personal: [],
    home: [],
    trending: []
  });

  useEffect(() => {
    // Load products from JSON file
    setProducts(greenProductsData);
    
    // Categorize products
    const featured = greenProductsData.filter(product => product.topBrand).slice(0, 6);
    
    const kitchenItems = greenProductsData.filter(p => 
      p.title.toLowerCase().includes("kitchen") || 
      p.title.toLowerCase().includes("cutlery") || 
      p.title.toLowerCase().includes("straw") ||
      p.title.toLowerCase().includes("bottle"));
    
    const personalItems = greenProductsData.filter(p => 
      p.title.toLowerCase().includes("bag") || 
      p.title.toLowerCase().includes("brush") || 
      p.title.toLowerCase().includes("pads"));
    
    const homeItems = greenProductsData.filter(p => 
      p.title.toLowerCase().includes("chair") || 
      p.title.toLowerCase().includes("vase") || 
      p.title.toLowerCase().includes("frame"));
    
    // Get trending items (items with highest discount)
    const trending = [...greenProductsData].sort((a, b) => 
      (b.price.original - b.price.discounted) - (a.price.original - a.price.discounted)
    ).slice(0, 6);
    
    setCategories({
      featured,
      kitchen: kitchenItems.slice(0, 6),
      personal: personalItems.slice(0, 6),
      home: homeItems.slice(0, 6),
      trending
    });
  }, []);

  // Function to render a horizontal scrollable product row
  const renderProductRow = (products, showViewAll = true) => (
    <div className="product-row-container">
      <div className="product-row">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              price={product.price.discounted}
              carbon_red={Math.floor(Math.random() * 30) + 50} // Random between 50-80%
              rating={Math.floor(Math.random() * 2) + 4} // Generate rating between 4-5
              image={product.images[0]}
              badge_id={product.badge_id}
            />
          </div>
        ))}
      </div>
      {showViewAll && (
        <Link to="/green/all" className="view-all-link">
          <button className="view-all-btn">View All</button>
        </Link>
      )}
    </div>
  );

  return (
    <div className="eco-store-container">
      {/* Image Slider */}
      <div className="slider-section">
        <ImageSliderGreen />
      </div>

      {/* Eco Impact Banner */}
      <div className="eco-impact-banner">
        <div className="impact-item">
          <img src="../images/leaf-icon.png" alt="Sustainable" className="impact-icon" />
          <span>Sustainable Materials</span>
        </div>
        <div className="impact-item">
          <img src="../images/recycle-icon.png" alt="Recyclable" className="impact-icon" />
          <span>Recyclable Packaging</span>
        </div>
        <div className="impact-item">
          <img src="../images/carbon-icon.png" alt="Carbon Neutral" className="impact-icon" />
          <span>Carbon Neutral</span>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Handpicked eco-friendly essentials</p>
        </div>
        {renderProductRow(categories.featured)}
      </section>

      {/* Trending Now Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p>Popular eco-friendly products</p>
        </div>
        {renderProductRow(categories.trending)}
      </section>

      {/* Eco Badge Banner */}
      <div className="eco-badge-banner">
        <img src="../images/badgebanner.png" alt="Eco Badge Banner" />
      </div>

      {/* Kitchen Essentials Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Kitchen Essentials</h2>
          <p>Sustainable solutions for your kitchen</p>
        </div>
        {renderProductRow(categories.kitchen)}
      </section>

      {/* Home Decor Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Home Decor</h2>
          <p>Beautify your space sustainably</p>
        </div>
        {renderProductRow(categories.home)}
      </section>

      {/* Personal Care Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Personal Care</h2>
          <p>Eco-friendly personal essentials</p>
        </div>
        {renderProductRow(categories.personal)}
      </section>

      {/* Sustainability Commitment */}
      <section className="sustainability-section">
        <h2>Our Commitment to Sustainability</h2>
        <div className="commitment-content">
          <div className="commitment-text">
            <p>We believe in a greener future through sustainable products that reduce environmental impact.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="eco-stats">
            <div className="stat-item">
              <span className="stat-number">75%</span>
              <span className="stat-label">Less Carbon</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Recyclable</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Eco Products</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homegreen;