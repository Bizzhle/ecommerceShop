import { userRequest, publicRequest } from "../../requestMethods";

export const login = async (dispatch, user) => {
  dispatch({
    type: "login",
  });

  try {
    const res = await publicRequest.post("/users/login", user);
    localStorage.setItem("jwtToken", res.data.token);

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

export const addProduct = async (product, dispatch) => {
  dispatch({
    type: addProduct,
  });

  try {
    const res = await userRequest.post(`products/create/`, product);
    dispatch({
      type: "addProductSuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "addProductFailure",
    });
  }
};

export const updateProduct = async (id, products, dispatch) => {
  dispatch({
    type: "updateProduct",
  });

  try {
    const res = await userRequest.put(`/products/${id}/update`, products);
    dispatch({
      type: "updateProductSuccess",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "updateProductFailure",
    });
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch({
    type: "deleteProduct",
  });

  try {
    const res = await userRequest.delete(`/products/${id}/delete`);
    dispatch({
      type: "deleteProductSuccess",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "deleteProductFailure",
    });
  }
};
