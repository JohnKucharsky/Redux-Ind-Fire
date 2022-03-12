import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../Features/cartSlice";

export default function Product({ item }) {
  const dispatch = useDispatch();

  const { img, name, price, id } = item;
  return (
    <div className="max-w-xs p-3 shadow rounded">
      <img src={img} alt="" />
      <div className="flex justify-between items-end  p-1">
        <div className="text-xl">
          <h1>{name}</h1>
          <h2>{price}$</h2>
        </div>
        <button
          onClick={() => dispatch(cartActions.addToCart({ name, price, id }))}
          className="bg-gray-700 px-4 py-2 text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
