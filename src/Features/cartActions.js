import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-fire-277c2-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(uiActions.loadingStatus(true));

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-fire-277c2-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      dispatch(uiActions.loadingStatus(false));
    };
    sendRequest();
  };
};
