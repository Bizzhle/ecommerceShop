import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        quantity: (state.quantity += 1),
        // products: [...state.products, action.payload],
        products: addItemToCart(state.products, action.payload),
      };
    case "remove_product":
      return {
        ...state,
        quantity: (state.quantity -= 1),
        products: removeItemFromCart(state.products, action.payload),
      };

    case "delete_product":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };
    case "clear":
      return {
        ...state,
        products: [],
        quantity: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
