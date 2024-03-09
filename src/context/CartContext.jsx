/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../data/products";
import { toast } from "react-toastify";

const initialCartState = {
  items: [],
  total: 0,
};

export const CartContext = createContext(initialCartState);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const DELIVERY_CHARGES = 30;

  /**
   * retrieve items from local storage and set to context state
   */
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setItems(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  /**
   * Whenever items update, update local storage as well, calculate total
   */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    getTotalPrice();
  }, [items]);

  const addItemToCart = (id) => {
    if (itemExists(id)) {
      increaseQty(id)
      return
    }
    const item = products.filter((item) => item.id === id)[0];
    const newItems = [...items, { ...item, qty: 1 }];
    setItems(newItems);
    toast.success("Item successfully added to cart");
  };

  const itemExists = (id) =>{
    return items.find((item)=> item.id === id);
  }

  const getCartItemsCount = () =>{
    return items.length
  }
  /**
   * clearing cart
   */
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cart");
    toast.success("Cart cleared");
  };

  const increaseQty = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const decreaseQty = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id && item.qty > 0) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const removeItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      let newItems = [...items];
      newItems = newItems.splice(itemIndex, 1);
      console.log(newItems);
      setItems(newItems);
    }
  };

  const getTotalPrice = () => {
    let sum = 0;
    if (items.length > 0) {
      items.map((item) => {
        sum += item.price * item.qty;
      });

      sum += DELIVERY_CHARGES;
      sum = +parseFloat(sum).toFixed(2);
    }
    setTotal(sum);
  };

  const contextValue = {
    items,
    total,
    addItemToCart,
    clearCart,
    increaseQty,
    decreaseQty,
    removeItem,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
