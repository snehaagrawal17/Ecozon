// FarmSubscriptionPage.js
import '../Css/pages/FarmSubscriptionPage.css';

import { Check, ChevronLeft, ChevronRight, ChefHat } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Cloudinary3DViewer from '../Component/3dView';
import { farms } from '../Data/Farms';
import { useCart } from '../context/CartContext';

const FarmSubscriptionPage = () => {
  const { farmId } = useParams();
  const navigate = useNavigate();

  const [farmData, setFarmData] = useState(null);
  const { addItem } = useCart();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [addOnsSelected, setAddOnsSelected] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showingModel, setShowingModel] = useState(false);

  useEffect(() => {
    if (farmData) {
      let price = selectedPlan ? selectedPlan.price : 0;

      Object.entries(addOnsSelected).forEach(([addOnId, quantity]) => {
        const addOn = farmData.addOns.find(a => a.id === addOnId);
        if (addOn) {
          price += addOn.price * quantity;
        }
      });

      setTotalPrice(price);
    }
  }, [selectedPlan, addOnsSelected, farmData]);

  useEffect(() => {
    const farm = farms.find(farm => farm.farmId === farmId);
    if (farm) {
      setFarmData(farm);
    } else {
      navigate('/farms');
    }
  }, [farmId, navigate]);

  
  useEffect(() => {
    if (farmData) {
      setCurrentImageIndex(0);
      setSelectedPlan(null);
      setAddOnsSelected({});
      setTotalPrice(0);
      setAddedToCart(false);
      setShowingModel(false);
    }
  }, [farmData]);
  


  if (!farmData) {
    return <div className="loading">Loading farm details...</div>;
  }

  const nextImage = () => {
    if (showingModel) {
      setShowingModel(false);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === farmData.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (showingModel) {
      setShowingModel(false);
      setCurrentImageIndex(farmData.images.length - 1);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? farmData.images.length - 1 : prevIndex - 1
      );
    }
  };

  const showModel = () => {
    if (farmData.model3d) {
      setShowingModel(true);
    }
  };

  const handlePlanSelect = (planId) => {
    const plan = farmData.plans.find(p => p.id === planId);
    setSelectedPlan(plan);
    setAddedToCart(false);
  };

  const toggleAddOn = (addOnId) => {
    setAddOnsSelected(prev => {
      const newSelected = { ...prev };
      if (newSelected[addOnId]) {
        newSelected[addOnId] += 1;
      } else {
        newSelected[addOnId] = 1;
      }
      return newSelected;
    });
    setAddedToCart(false);
  };

  const decrementAddOn = (addOnId) => {
    setAddOnsSelected(prev => {
      const newSelected = { ...prev };
      if (newSelected[addOnId] > 1) {
        newSelected[addOnId] -= 1;
      } else {
        delete newSelected[addOnId];
      }
      return newSelected;
    });
    setAddedToCart(false);
  };

  const handleAddToCart = () => {
    if (!selectedPlan) return;

    const selectedAddOns = Object.entries(addOnsSelected).map(([addOnId, quantity]) => {
      const addOn = farmData.addOns.find(a => a.id === addOnId);
      return {
        ...addOn,
        quantity
      };
    });

    
    const subscriptionItem = {
      id: `farm-sub-${farmData.farmId}-${selectedPlan.id}-${Date.now()}`,
      type: 'subscription',
      farmId: farmData.farmId,
      farmName: farmData.name,
      plan: selectedPlan,
      addOns: selectedAddOns,
      totalPrice: totalPrice,
      image: farmData.images[0].url,
      title: `${farmData.name} - ${selectedPlan.name} Subscription`
    };

    addItem(subscriptionItem);
    setAddedToCart(true);
  };

  return (
    <div className="farm-subscription-page">
      {/* Header */}
      <div className="farm-header">
        <h1>{farmData.name}</h1>
        <div className="farm-tags">
          {farmData.ecoFriendly && <span className="tag eco-friendly">Eco-Friendly</span>}
          {farmData.certifications.map((cert, index) => (
            <span key={index} className="tag certification">{cert}</span>
          ))}
          <span className="tag acreage">{farmData.acres} Acres</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevImage}>
          <ChevronLeft size={24} />
        </button>
        <div className="carousel-content">
          {showingModel ? (
            <Cloudinary3DViewer model3d={farmData.model3d} />
          ) : (
            <img
              src={farmData.images[currentImageIndex].url}
              alt={farmData.images[currentImageIndex].caption || `${farmData.name} - Image ${currentImageIndex + 1}`}
            />
          )}
          <div className="carousel-indicators">
            {farmData.images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex && !showingModel ? 'active' : ''}`}
                onClick={() => {
                  setShowingModel(false);
                  setCurrentImageIndex(index);
                }}
              />
            ))}
            {farmData.model3d && (
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

      {/* Description */}
      <div className="farm-description">
        <h2>About This Farm</h2>
        <p>{farmData.description}</p>
      </div>

      {/* Subscription Plan */}
      <div className="subscription-section">
        <h2>Choose Your Subscription Plan</h2>
        <div className="plans-container">
          {farmData.plans.map(plan => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <h3>{plan.name}</h3>
              <div className="plan-price">${plan.price} <span>/ {plan.frequency}</span></div>
              <p>{plan.description}</p>
              {selectedPlan?.id === plan.id &&
                <div className="selected-indicator">
                  <Check size={20} />
                </div>
              }
            </div>
          ))}
        </div>
      </div>

      {/* Add-Ons */}
      <div className="add-ons-section">
        <h2>Customize Your Box</h2>
        <p>Enhance your subscription with these fresh add-ons:</p>

        <div className="add-ons-grid">
          {farmData.addOns.map(addOn => {
            const quantity = addOnsSelected[addOn.id] || 0;
            return (
              <div key={addOn.id} className="add-on-item">
                <div className="add-on-info">
                  <h4>{addOn.name}</h4>
                  <p>${addOn.price} per {addOn.unit}</p>
                </div>
                <div className="add-on-controls">
                  {quantity > 0 ? (
                    <>
                      <button className="quantity-btn" onClick={() => decrementAddOn(addOn.id)}>-</button>
                      <span className="quantity">{quantity}</span>
                      <button className="quantity-btn" onClick={() => toggleAddOn(addOn.id)}>+</button>
                    </>
                  ) : (
                    <button className="add-btn" onClick={() => toggleAddOn(addOn.id)}>Add</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Location */}
      <div className="location-section">
        <h2>Farm Location</h2>
        <p>{farmData.location.address}</p>
        <div className="map-placeholder">
          <p>📍 Map preview is not available</p>
        </div>
      </div>

      {/* Order Summary */}
      {selectedPlan && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>{selectedPlan.name}</span>
            <span>${selectedPlan.price}</span>
          </div>

          {Object.entries(addOnsSelected).map(([addOnId, quantity]) => {
            const addOn = farmData.addOns.find(a => a.id === addOnId);
            return (
              addOn && (
                <div key={addOnId} className="summary-item">
                  <span>{addOn.name} × {quantity}</span>
                  <span>${addOn.price * quantity}</span>
                </div>
              )
            );
          })}

          <div className="summary-total">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button
            className={`subscribe-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          
          {addedToCart && (
            <button
              className="recipe-btn"
              onClick={() => navigate('/recipes')}
            >
              <ChefHat size={20} />
              View Recipe Suggestions
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FarmSubscriptionPage;