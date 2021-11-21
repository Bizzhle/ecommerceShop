// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.quantity += 1;
//       state.products.push(action.payload);
//       state.total += action.payload.price * action.payload.quantity;
//     },
//     // addProductQuantity: (state, action) => {
//     //   state.products.quantity += 1;
//     // },
//     removeProduct: (state, action) => {
//       state.quantity -= 1;
//       state.products.push(action.payload);
//       state.total -= action.payload.price;
//     },
//   },
// });

// export const { addProduct, addProductQuantity } = cartSlice.actions;
// export const { removeProduct } = cartSlice.actions;

// export default cartSlice.reducer;

// // reducers: {
// //     addProduct: (state, action) => {
// //       switch (action.type) {
// //         case "addProduct":
// //           return (state.quantity += 1);
// //         case "removeProduct":
// //           return (state.quantity -= 1);
// //         case "total":
// //           return (state.total += action.payload.price);
// //         case "products":
// //           return state.products.push(action.payload);

// //         default:
// //           return state;
// //       }

// //       //   state.products.push(action.payload);
// //       //   state.total += action.payload.price;
// //     },
// //   },
