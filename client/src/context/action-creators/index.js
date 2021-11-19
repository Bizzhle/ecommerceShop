import { publicRequest } from "../../requestMethods";

export const addProduct = (products, quantity) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: products,
      quantity,
    });
  };
};

export const removeProduct = (products, quantity) => {
  return (dispatch) => {
    dispatch({
      type: "remove_product",
      payload: products,
      quantity,
    });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete_product",
    });
  };
};

export const emptyCart = () => {
  return (dispatch) => {
    dispatch({
      type: "clear",
    });
  };
};

export const login = async (dispatch, user) => {
  dispatch({
    type: "login",
  });

  try {
    const res = await publicRequest.post("/users/login", user);
    dispatch({
      type: "loginSuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "loginFailure",
    });
  }
};

export const LOGOUT = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
    });
  };
};
