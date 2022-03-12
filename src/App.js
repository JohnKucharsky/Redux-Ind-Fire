import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, sendCartData } from "./Features/cartActions";

import Layout from "./Layout";
import Login from "./Login";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [dispatch, cart]);

  return <div>{isLoggedIn ? <Layout /> : <Login />}</div>;
}

export default App;
