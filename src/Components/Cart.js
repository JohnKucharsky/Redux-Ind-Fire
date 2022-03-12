import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  let itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto">
      {cartItems.map((item) => (
        <div className="mb-2 mx-auto max-w-3xl" key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      <p className="text-right m-3 text-3xl">Total: {itemsPrice}</p>
    </div>
  );
}
