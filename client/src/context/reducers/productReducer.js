const initialState = {
  products: [],
  categories: [],
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

    case "getProductSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: response,
        categories: response,
      };

    case "getProductFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    case "getProductId":
      return {
        ...state,
        isFetching: (state.isFetching = true),
      };

    case "getProductIdSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: response,
      };

    case "getProductIdFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    case "getProductCategory":
      return {
        ...state,
        isFetching: (state.isFetching = true),
      };

    case "getProductCategorySuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        products: response,
      };

    case "getProductCategoryFailure":
      return {
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };

    default:
      return state;
  }
};

export default reducer;
