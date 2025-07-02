import "../Css/Home.css";

import { ExternalLink, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Product from "./Product";
import greenAlternatives from "../Css/GreenAlternatives.json";
import nonGreenProducts from "../Data/NonGreenProducts.json";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({
    featured: [],
    kitchen: [],
    personal: [],
    home: [],
    trending: []
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [alternatives, setAlternatives] = useState([]);
  // Hardcoded API key

  const [loadingAlternatives, setLoadingAlternatives] = useState(false);

  useEffect(() => {
    // Load products from JSON file
    setProducts(nonGreenProducts);
    
    // Categorize products
    const featured = nonGreenProducts.slice(0, 6);
    
    const kitchenItems = nonGreenProducts.filter(p => 
      p.title.toLowerCase().includes("kitchen") || 
      p.title.toLowerCase().includes("bowl") || 
      p.title.toLowerCase().includes("straw"));
    
    const personalItems = nonGreenProducts.filter(p => 
      p.title.toLowerCase().includes("bag") || 
      p.title.toLowerCase().includes("tote") || 
      p.title.toLowerCase().includes("pads"));
    
    const homeItems = nonGreenProducts.filter(p => 
      p.title.toLowerCase().includes("desk") || 
      p.title.toLowerCase().includes("vase") || 
      p.title.toLowerCase().includes("closet"));
    
    // Get trending items (items with highest discount)
    const trending = [...nonGreenProducts].sort((a, b) => 
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

  // Function to get eco-friendly alternatives using local data or Gemini API
  const getAlternatives = async (product) => {
    setSelectedProduct(product);
    setLoadingAlternatives(true);
    setShowAlternatives(true);
    
    // First check if we have a local alternative
    const localAlternative = greenAlternatives.find(alt => 
      alt.alternative_of_id === product.id
    );
    
    console.log("Product ID:", product.id);
    console.log("Found alternative:", localAlternative);
    
    if (localAlternative) {
      // Use local alternative data
      setAlternatives([{
        title: localAlternative.title,
        description: "This eco-friendly alternative is made with sustainable materials and production methods.",
        materials: "Sustainable materials",
        amazonUrl: "https://www.amazon.com/s?k=" + encodeURIComponent(localAlternative.title),
        productLink: localAlternative.link,
        productId: localAlternative.id
      }]);
      setLoadingAlternatives(false);
      return;
    }
    
    try {
      // Prepare the prompt for Gemini API
      const prompt = `I need eco-friendly alternative for this product: "${product.title}". 
      The product description is: "${product.description}".
      
      Please provide 1 eco-friendly alternative in JSON format:
      [
        {
          "title": "Eco-friendly alternative product name",
          "description": "Brief description of why this is more eco-friendly",
          "materials": "Main eco-friendly materials used",
          "amazonUrl": "A generic Amazon search URL for this type of eco-friendly product"
        }      
      ]
      
      Return only the JSON array, no additional text.`;

      // Call Gemini API
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAusQ5wkAoBLlTJIK7vRvpFu4jKitNMe4E', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Parse the response to extract alternatives
      const responseText = data.candidates[0].content.parts[0].text;
      
      // Extract JSON from the response
      let jsonStr = responseText;
      if (responseText.includes('```json')) {
        jsonStr = responseText.split('```json')[1].split('```')[0].trim();
      } else if (responseText.includes('```')) {
        jsonStr = responseText.split('```')[1].split('```')[0].trim();
      }
      
      let parsedAlternatives = [];
      try {
        parsedAlternatives = JSON.parse(jsonStr);
        setAlternatives(parsedAlternatives);
      } catch (error) {
        console.error("Error parsing alternatives:", error);
        setAlternatives([]);
      }
    } catch (error) {
      console.error("Error fetching alternatives:", error);
      setAlternatives([]);
    } finally {
      setLoadingAlternatives(false);
    }
  };



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
              rating={Math.floor(Math.random() * 2) + 4} // Generate rating between 4-5
              image={product.images[0]}
              badge_id={0}
            />
            <div className="product-actions">
              <button 
                className="eco-alternative-btn"
                onClick={() => getAlternatives(product)}
              >
                <ShoppingBag size={16} />
                Eco-Friendly Alternatives
              </button>
            </div>
          </div>
        ))}
      </div>
      {showViewAll && (
        <Link to="/all" className="view-all-link">
          <button className="view-all-btn">View All</button>
        </Link>
      )}
    </div>
  );

  return (
    <div className="store-container">
      {/* Static Header Image */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Sustainable Living Starts Here</h1>
          <p>Discover eco-friendly products for a greener lifestyle</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Handpicked essentials for you</p>
        </div>
        {renderProductRow(categories.featured)}
      </section>

      {/* Trending Now Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p>Popular products</p>
        </div>
        {renderProductRow(categories.trending)}
      </section>

      {/* Kitchen Essentials Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Kitchen Essentials</h2>
          <p>Everything you need for your kitchen</p>
        </div>
        {renderProductRow(categories.kitchen)}
      </section>

      {/* Home Decor Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Home Decor</h2>
          <p>Beautify your space</p>
        </div>
        {renderProductRow(categories.home)}
      </section>

      {/* Personal Care Section */}
      <section className="product-section">
        <div className="section-header">
          <h2>Personal Care</h2>
          <p>Personal essentials</p>
        </div>
        {renderProductRow(categories.personal)}
      </section>

undefined

      {/* Alternatives Modal */}
      {showAlternatives && (
        <div className="modal-overlay">
          <div className="alternatives-modal">
            <button className="close-modal" onClick={() => setShowAlternatives(false)}>×</button>
            
            {loadingAlternatives ? (
              <div className="loading-alternatives">
                <div className="spinner"></div>
                <p>Finding eco-friendly alternatives...</p>
              </div>
            ) : (
              <>
                <h2>Eco-Friendly Alternatives</h2>
                <div className="selected-product">
                  <h3>Selected Product:</h3>
                  <p>{selectedProduct?.title}</p>
                </div>
                
                {alternatives.length > 0 ? (
                  <div className="alternatives-list">
                    {alternatives.map((alt, index) => (
                      <div key={index} className="alternative-item">
                        <h3>{alt.title}</h3>
                        <p>{alt.description}</p>
                        <p className="materials"><strong>Materials:</strong> {alt.materials}</p>
                        <div className="alternative-actions">
                          <Link 
                            to={alt.productLink} 
                            className="our-store-btn"
                          >
                            <ShoppingBag size={16} />
                            Best Alternative
                          </Link>
                          <a 
                            href={alt.amazonUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="amazon-btn"
                          >
                            <ExternalLink size={16} />
                            Find on Amazon
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-alternatives">
                    <p>No alternatives found. Please try again.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
