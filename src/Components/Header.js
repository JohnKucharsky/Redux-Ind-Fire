import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./../Features/cartSlice";
import { authActions } from "./../Features/authSlice";

export default function Header() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div className="flex bg-white sticky top-0  items-center justify-between p-3 border shadow mb-3">
      <h1 className="hidden sm:block text-3xl font-bold">Redux Shopping App</h1>
      <div
        onClick={() => dispatch(cartActions.setShowCart())}
        className="border cursor-pointer py-1 px-3 rounded-xl hover:scale-95 hover:shadow"
      >
        Cart: {quantity}
      </div>
      <button
        onClick={() => dispatch(authActions.logout())}
        className="bg-gray-800 text-white py-1 px-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
