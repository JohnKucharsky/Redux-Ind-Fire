import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./Features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div className="grid h-screen place-content-center">
      <form
        onSubmit={() => dispatch(authActions.login())}
        className="flex flex-col items-center gap-5  bg-purple-700 p-10"
      >
        <h2 className="text-4xl text-white">Login</h2>
        <div className="flex flex-col gap-1 text-white">
          <label>Name:</label>
          <input className="text-xl p-1 rounded" type="text" />
        </div>
        <div className="flex flex-col gap-1 text-white">
          <label>Password:</label>
          <input className="text-xl p-1 rounded" type="text" />
        </div>
        <button className="text-2xl text-white py-1 px-10 border-2 border-white hover:scale-95">
          Login
        </button>
      </form>
    </div>
  );
}
