import "../Css/orderedProduct.css";
import 'react-toastify/dist/ReactToastify.css';

import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";
import { ReturnBoxContext } from "../context/ReturnContext";

function OrderedProduct({ id, image, title, price, rating, badge_id, greenBits, treesPlanted, carbonSaved }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { addReturnBox, returnBoxCount } = useContext(ReturnBoxContext);

  let eco_friendly = "";

  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  const handleReturnButtonClick = () => {
    // Create product object with all details
    const product = {
      id,
      title,
      image,
      price,
      greenBits: greenBits || 25, // Default values if not provided
      treesPlanted: treesPlanted || 0.05,
      carbonSaved: carbonSaved || 0.8
    };

    // Add to return box count and check if pickup should be scheduled
    const isPickupScheduled = addReturnBox(product);

    // Disable the button after it's clicked
    setButtonDisabled(true);
  };

  return (
    <div className="orderedProduct">
      <img src={image} alt="" className="orderedProduct__image" />
      <div className="orderedProduct__info">
        <p className="orderedProduct__title">{title}</p>
        <p className="orderedProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="orderedProduct__rating">
          {Array(rating)
            .fill()
            .map((rate, index) => (
              <p key={index}>⭐</p>
            ))}
        </p>
        <p className="ecofriendly">{eco_friendly}</p>
      </div>
      <div className="orderedProduct__buttons">
        <button className="nor">Return or Replace items</button>
        <button className="nor">Write a product review</button>
        {badge_id > 0 && (
          <Link to="/feedback">
            <button className="grn_feedback">Feedback</button>
          </Link>
        )}
        <button
          className={`grn ${isButtonDisabled ? "disabled" : ""}`}
          onClick={handleReturnButtonClick}
          disabled={isButtonDisabled} // Set the button disabled attribute
        >
          Return the Box
        </button>
        {isButtonDisabled && (
          <div className="threshold_text">
            <p className="ok-text">
              {returnBoxCount < 5 ? 
                `${5 - returnBoxCount} more boxes needed to schedule pickup.` :
                "Pickup scheduled! Our courier will collect your boxes in 3 days."
              }
            </p>
            <Link to="/education" onClick={() => window.scrollTo(0, 0)}>
              <p className="learn_more">Learn more.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderedProduct;