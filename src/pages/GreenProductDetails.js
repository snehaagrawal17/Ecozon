// Don't forget to import the CSS file to ensure carousel styling is consistent
import "../Css/pages/GreenProductDetails.css";

// Add import for carousel icons
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Cloudinary3DViewer from "../Component/3dView";
import greenProductsData from "../Data/GreenProducts.json";
import { useCart } from "../context/CartContext";

const GreenProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showingModel, setShowingModel] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Find the product from the JSON data
    const foundProduct = greenProductsData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/green'); // Redirect if product not found
    }
  }, [productId, navigate]);

  // Reset states when product changes
  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0);
      setShowingModel(false);
      setQuantity(1);
      setAddedToCart(false);
    }
  }, [product]);

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  const nextImage = () => {
    if (showingModel) {
      setShowingModel(false);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (showingModel) {
      setShowingModel(false);
      setCurrentImageIndex(product.images.length - 1);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    }
  };

  const showModel = () => {
    if (product.model3d) {
      setShowingModel(true);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      image: product.images[0],
      price: product.price.discounted,
      quantity: quantity,
      badge_id: product.badge_id
    });

    setAddedToCart(true);

    // Reset added to cart status after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  // Calculate savings
  const savings = product.price.original - product.price.discounted;
  const savingsPercentage = Math.round((savings / product.price.original) * 100);

  return (
    <div className="green-product-details">
      <div className="product-container">
        {/* Carousel - Implemented exactly like in FarmSubscriptionPage */}
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevImage}>
            <ChevronLeft size={24} />
          </button>
          <div className="carousel-content">
            {showingModel ? (
              <Cloudinary3DViewer model3d={product.model3d} />
            ) : (
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
              />
            )}
            <div className="carousel-indicators">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex && !showingModel ? 'active' : ''}`}
                  onClick={() => {
                    setShowingModel(false);
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
              {product.model3d && (
                <button
                  className={`indicator model-indicator ${showingModel ? 'active' : ''}`}
                  onClick={showModel}
                >3D</button>
              )}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextImage}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Right side - Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-meta">
            <div className="product-id">Product ID: {product.id}</div>
            {product.topBrand && <div className="top-brand-badge">Top Brand</div>}
          </div>

          <div className="product-price">
            <div className="current-price">${product.price.discounted}</div>
            <div className="original-price">${product.price.original}</div>
            <div className="savings">Save ${savings.toFixed(2)} ({savingsPercentage}%)</div>
          </div>

          <div className="eco-badges">
            <div className="eco-badge">
              <img src="../images/badge1.png" alt="Carbon Reduction" />
              <span>Reduces Carbon Footprint</span>
            </div>
            <div className="eco-badge">
              <img src= "images/badge5.png" alt="Eco Badge" />
              <span>Eco-Friendly Certified</span>
            </div>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.cashOnDelivery && <li>Cash on Delivery Available</li>}
              {product.oneDayDelivery && <li>One-Day Delivery Available</li>}
              {product.warranty > 0 && <li>{product.warranty} Year Warranty</li>}
              <li>Eco-Friendly Product</li>
              <li>Sustainable Materials</li>
            </ul>
          </div>

          <div className="purchase-options">
            <div className="quantity-selector">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>

            <button
              className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      <div className="sustainability-section">
        <h2>Sustainability Impact</h2>
        <div className="impact-stats">
          <div className="impact-stat">
            <div className="stat-value">75%</div>
            <div className="stat-label">Less Carbon</div>
          </div>
          <div className="impact-stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Recyclable</div>
          </div>
          <div className="impact-stat">
            <div className="stat-value">0</div>
            <div className="stat-label">Plastic Waste</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenProductDetails;