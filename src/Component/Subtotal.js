import React from "react";
import "../Css/Subtotal.css";
import { NumericFormat } from 'react-number-format';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Subtotal = () => {
  const { items, clearCart, total } = useCart();
  
  // Calculate total price from items
  const getTotal = (items) => {
    return items.reduce((amount, item) => {
      // Handle both regular products and subscription items
      const itemPrice = item.totalPrice || item.price || 0;
      return amount + itemPrice;
    }, 0);
  };

  const handleProceed = () => {
    if (items.length > 0) {
      // Clear the cart after proceeding to checkout
      clearCart();
    }
  };

  return (
    <div className="subtotal">
      <NumericFormat
        value={getTotal(items)}
        displayType="text"
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({items?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="checkbox" /> This order contains
              a gift
            </small>
          </>
        )}
      />
      {items.length > 0 ? (
        <Link style={{ textDecoration: "none" }} to="/thanks">
          <button className="proceed" onClick={handleProceed}>
            Proceed to Buy
          </button>
        </Link>
      ) : (
        <button className="proceed" disabled={true}>
          Proceed to Buy
        </button>
      )}
    </div>
  );
};

export default Subtotal;