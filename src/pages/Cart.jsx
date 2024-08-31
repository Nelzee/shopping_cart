import React from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();

  const handleClick = (itemId) => {
    setCartItems((cartItems) => {
      return cartItems.filter((cartItem) => cartItem.id !== itemId);
    });
  };
  return (
    <div className="shop_items_container">
      {cartItems.map((cartItem) => {
        return (
          <div className="shop_item_container" key={cartItem.id}>
            <img src={cartItem.image} alt="" />
            <h3>{cartItem.title}</h3>
            <button onClick={(e) => handleClick(cartItem.id, e)}>
              remove item
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
