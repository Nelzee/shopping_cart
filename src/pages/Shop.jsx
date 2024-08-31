import React, { useEffect, useState } from "react";
import { Form, useOutletContext } from "react-router-dom";
import "./shop.css";

export async function action() {
  const cartItem = await createCartItem();
  return { cartItem };
}

const Shop = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [shopItems, setShopItems] = useState([]);
  const [selectedShopItems, setSelectedShopItems] = useState([]);

  useEffect(() => {
    const getShopItems = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=17/categories"
        );
        const shopItems = await response.json();
        setShopItems(shopItems);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        return { cartItems: [] };
      }
    };
    getShopItems();
  }, []);

  const handleClick = (item, e) => {
    if (cartItems.filter((cartItem) => cartItem.id === item.id).length === 0) {
      setCartItems((cartItems) => {
        return [...cartItems, item];
      });
    } else {
      return [...cartItems];
    }
  };

  return (
    <div className="shop_items_container">
      {shopItems.map((shopItem) => {
        return (
          <div className="shop_item_container" key={shopItem.id}>
            <img src={shopItem.image} alt="" />
            <h3>{shopItem.title}</h3>
            <button
              disabled={
                cartItems.filter((cartItem) => cartItem.id === shopItem.id)
                  .length === 1
                  ? `disabled`
                  : ``
              }
              onClick={(e) => handleClick(shopItem, e)}
            >
              {cartItems.filter((cartItem) => cartItem.id === shopItem.id)
                .length === 1
                ? `item added`
                : `add item`}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
