import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.id),
      };

    case "add_quantity":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem._id === action.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        ),
      };

    case "remove_cartItem":
      return {
        ...state,

        // cartItems: state.cartItems.map((cartItem) =>
        //   cartItem._id === action.id
        //     ? {
        //         ...cartItem,
        //         quantity: cartItem.quantity - 1,
        //       }
        //     : cartItem
        // ),
        cartItems: removeItemFromCart(state.cartItems, action.id),
      };

    case "delete_cartItem":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.id
        ),
      };
    case "clear":
      return {
        ...state,
        cartItems: [],
        quantity: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
