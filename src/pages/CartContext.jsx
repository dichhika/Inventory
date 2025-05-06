import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.info(`Increased quantity of "${product.title}"`, {
        autoClose: 2000,
      });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`Added "${product.title}" to cart`, { autoClose: 2000 });
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
