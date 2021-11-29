import { publicRequest } from "../../requestMethods";

export const addProduct = (products) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: products,
    });
  };
};
export const addQuantity = (id) => {
  return (dispatch) => {
    dispatch({
      type: "add_quantity",
      id,
    });
  };
};

export const removeProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: "remove_product",
      id,
    });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete_product",
      id,
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
