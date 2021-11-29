import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectProducts = createSelector(
  [selectCart],
  (cart) => cart.products
);

export const selectProductsCount = createSelector(
  [selectProducts],
  (products) =>
    products.reduce(
      (accumalatedQuantity, product) => accumalatedQuantity + product.quantity,
      0
    )
);
