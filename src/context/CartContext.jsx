import { createContext, useEffect, useState } from "react";
import Products from "../data/ProductsData";

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
    if (items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items));
      getTotalPrice()
    }
  }, [items]);

  const addItemToCart = (id) => {
    const item = Products.filter((item) => item.id === id)[0];
    const newItems = [...items, { ...item, qty: 1 }];
    setItems(newItems);
  };

  /**
   * clearing cart
   */
  const clearCart = () => {
    setItems([]);
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
        const newItems = [...items];
        newItems.splice(itemIndex, 1);
        setItems(newItems);
    }
};

  const getTotalPrice = () => {
    let sum = 0;
    items.map((item) =>{
       sum += item.price * item.qty;
    }) 

    sum += DELIVERY_CHARGES

    setTotal(Math.ceil(sum))
  }

  const contextValue = {
    items,
    total,
    addItemToCart,
    clearCart,
    increaseQty,
    decreaseQty,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
