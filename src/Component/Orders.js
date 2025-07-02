import "../Css/Orders.css";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import OrderedProduct from "./orderedProduct";
import { orderHistory } from "../Data/orderhistory";
import { useCart } from "../context/CartContext";

function Orders() {
  // Current date for calculating delivery dates
  const currentDate = new Date();
  
  // Mock order history data
 
  // State to track which order is selected for return
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Function to handle return box request
  const handleReturnBoxRequest = (orderId) => {
    setSelectedOrderId(orderId);
  };

  // Calculate return date (5 days from current date)
  const getReturnDate = () => {
    const returnDate = new Date(currentDate);
    returnDate.setDate(returnDate.getDate() + 5);
    return returnDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get selected order details
  const getSelectedOrder = () => {
    return orderHistory.find(order => order.id === selectedOrderId);
  };

  return (
    <div className="orders-container">
      <img className="checkout__ad" src="../images/greenad.png" alt="" />
      
      {selectedOrderId ? (
        <div className="return-box-container">
          <h2>Return Box Details</h2>
          <div className="return-box-info">
            <p><strong>Return Scheduled For:</strong> {getReturnDate()}</p>
            <p><strong>Order ID:</strong> {selectedOrderId}</p>
            
            <div className="return-benefits">
              <h3>Benefits of Returning Your Box</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon"><img src="images/GreenBit.png"  width={40} height={40}/></div>
                  <h4>Green Bits Earned</h4>
                  <p className="benefit-value">{getSelectedOrder().greenBits}</p>
                  <p className="benefit-desc">Green Bits can be redeemed for eco-friendly products or donated to environmental causes</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🌳</div>
                  <h4>Trees Planted</h4>
                  <p className="benefit-value">{getSelectedOrder().treesPlanted}</p>
                  <p className="benefit-desc">We plant trees through our reforestation partners for every box returned</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">♻️</div>
                  <h4>Carbon Saved (kg)</h4>
                  <p className="benefit-value">{getSelectedOrder().carbonSaved}</p>
                  <p className="benefit-desc">Estimated carbon emissions saved by recycling your packaging</p>
                </div>
              </div>
            </div>
            
            <div className="return-instructions">
              <h3>Return Instructions</h3>
              <ul>
                <li>Package your item securely in its original packaging if possible</li>
                <li>Include all accessories and free gifts that came with the item</li>
                <li>Print the return label and attach it to your package</li>
                <li>Our eco-friendly courier will pick up the package on the scheduled date</li>
              </ul>
            </div>
            
            <div className="sustainability-impact">
              <h3>Your Sustainability Impact</h3>
              <p>By returning this box, you're helping us reduce waste and minimize our environmental footprint. 
              Our recycling program ensures that packaging materials are properly processed and reused.</p>
              <p>To date, our customers have helped plant over 50,000 trees and saved more than 500 tons of carbon emissions.</p>
            </div>
            
            <p className="eco-note">♻️ We use sustainable packaging and carbon-neutral shipping for all returns.</p>
            
            <div className="return-actions">
              <button className="print-label-btn">Print Return Label</button>
              <button className="back-btn" onClick={() => setSelectedOrderId(null)}>Back to Orders</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Orders</h2>
          {orderHistory.map((item) => (
            <div key={item.id} className="order-item-container">
              <OrderedProduct
                id={item.id}
                price={item.price}
                rating={item.rating}
                image={item.image}
                title={item.title}
                badge_id={item.badge_id}
              />
              <div className="order-details">
                <p><strong>Order Date:</strong> {item.orderDate}</p>
                <p><strong>Delivery Date:</strong> {item.deliveryDate}</p>
                <button 
                  className="return-box-btn"
                  onClick={() => handleReturnBoxRequest(item.id)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;