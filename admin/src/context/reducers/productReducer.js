import { updateProduct } from "../utils/product.utils";
import { delProduct } from "../utils/product.utils";

const initialState = {
  products: [],
  isFetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  const response = action.payload;

  switch (action.type) {
    case "getProducts":
      return {
        ...state,
        isFetching: (state.isFetching = true),
      };

    case "getproductSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: response,
      };

    case "getProductFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    case "addProduct":
      return {
        ...state,
        isFetching: (state.isFetching = true),
        error: (state.error = true),
      };

    case "addProductSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: response,
      };

    case "addProductFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    case "updateProduct":
      return {
        ...state,
        isFetching: (state.isFetching = true),
        error: (state.error = true),
      };

    case "updateProductSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: updateProduct(state.products, action.payload),
      };

    case "updateProductFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    case "deleteProduct":
      return {
        ...state,
        isFetching: (state.isFetching = true),
        error: (state.error = true),
      };

    case "deleteProductSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: delProduct(state.products, action.payload),
      };

    case "deleteProductFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    default:
      return state;
  }
};

export default reducer;
