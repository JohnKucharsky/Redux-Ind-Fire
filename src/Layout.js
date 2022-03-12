import React from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { useSelector } from "react-redux";

export default function Layout() {
  const loading = useSelector((state) => state.ui.loading);

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <div>
      {loading && (
        <div className=" bg-white text-4xl transition-all text-black font-bold opacity-50 fixed h-screen w-screen z-10 grid place-content-center">
          Loading...
        </div>
      )}
      <Header />
      {showCart && <Cart />}
      <Products />
    </div>
  );
}
