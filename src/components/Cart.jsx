import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="border p-3 rounded shadow-sm flex">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 object-cover "
              />
              <div className="font-semibold pl-2">
                {item.title}
                <p className="text-sm font-semibold mb-1 text-green-700">
                  Price: ${item.price}
                </p>
                <p className="text-sm font-semibold mb-1 text-green-700">
                  Quantity: {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
