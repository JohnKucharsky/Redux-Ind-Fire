import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Features/cartSlice";

export default function CartItem(item) {
  const dispatch = useDispatch();
  const { id, price, quantity, totalPrice, name } = item.item;
  return (
    <div className="flex items-center p-2 justify-between border">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="flex justify-center gap-8 text-3xl">
        <button
          onClick={() =>
            dispatch(
              cartActions.addToCart({
                name,
                price,
                id,
              })
            )
          }
          className="px-1 hover:shadow rounded-lg"
        >
          +
        </button>
        <button
          onClick={() => dispatch(cartActions.removeFromCart(id))}
          className="px-1 hover:shadow rounded-lg"
        >
          -
        </button>
      </div>
      <div className="flex gap-10">
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
        <p className="text-xl">Total Price: {totalPrice}</p>
      </div>
    </div>
  );
}
