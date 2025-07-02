import "../Css/CheckoutProduct.css";

import React from "react";
import { useCart } from "../context/CartContext";

function CheckoutProduct({ id, image, title, price, rating, badge_id, type, farmName, plan, addOns, totalPrice }) {
  const { removeItem } = useCart();

  const removeFromBasket = () => {
    removeItem(id);
  };

  // Handle different item types (regular product vs farm subscription)
  const isSubscription = type === 'subscription';

  // For eco-friendly badge
  let eco_friendly = "";
  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  return (
    <div className="checkoutProduct">
      {/* Display the image if available */}
      {image && <img src={image} alt="" className="checkoutProduct__image" />}
      
      <div className="checkoutProduct__info">
        {isSubscription ? (
          // Farm subscription display
          <>
            <p className="checkoutProduct__title">{farmName} - {plan?.name} Subscription</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{totalPrice}</strong>
            </p>
            {addOns && addOns.length > 0 && (
              <div className="checkoutProduct__addons">
                <p><strong>Add-ons:</strong></p>
                <ul>
                  {addOns.map((addon, index) => (
                    <li key={index}>
                      {addon.name} × {addon.quantity} (${addon.price * addon.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="ecofriendly">Farm Subscription</p>
          </>
        ) : (
          // Regular product display
          <>
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            {rating && (
              <p className="checkoutProduct__rating">
                {Array(rating)
                  .fill()
                  .map((_, index) => (
                    <p key={index}>⭐</p>
                  ))}
              </p>
            )}
            <p className="ecofriendly">{eco_friendly}</p>
          </>
        )}
        
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;