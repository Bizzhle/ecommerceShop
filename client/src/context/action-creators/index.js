import { publicRequest } from "../../requestMethods";

export const addProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      id,
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

export const removeCartItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: "remove_cartItem",
      id,
    });
  };
};

export const deleteCartItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete_cartItem",
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

export const getProducts = async (dispatch) => {
  dispatch({
    type: "getProducts",
  });

  try {
    const res = await publicRequest.get("/products");
    dispatch({
      type: "getProductSuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "getProductFailure",
    });
  }
};

export const getProductId = async (dispatch, id) => {
  dispatch({
    type: "getProductId",
  });

  try {
    const res = await publicRequest.get(`/products/find/${id}`);
    dispatch({
      type: "getProductIdSuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "getProductIdFailure",
    });
  }
};

export const getProductCategory = async (dispatch, category) => {
  dispatch({
    type: "getProductCategory",
  });

  try {
    const res = await publicRequest.get(`/products?category=${category}`);
    dispatch({
      type: "getProductCategorySuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "getProductCategoryFailure",
    });
  }
};
