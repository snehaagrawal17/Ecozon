import React from "react";
import "../Css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { items } = useCart();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/green">
          <img className=" checkout__ad" src="../images/greenad.png" alt="" />
        </Link>
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {items.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              price={item.price}
              rating={item.rating}
              image={item.image}
              title={item.title}
              badge_id={item.badge_id}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;