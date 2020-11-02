import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {

  const [{basket, user},dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase2/Phase2_Bank_PC_1500x140.jpg"
          alt=""
        />

        <div>
        <h3>Hello, {user && user.email} </h3>{/*{user?.email} is also correct*/}
          <h2 className="checkout__title">Your 
          Shopping Basket</h2>
          {/*Basket*/}
          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              rating={item.rating}
              image={item.image}
              price={item.price}
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
