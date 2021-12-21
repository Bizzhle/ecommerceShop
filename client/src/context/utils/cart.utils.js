export const addItemToCart = (products, productToAdd) => {
  const existingProduct = products.find(
    (product) => product._id === productToAdd._id
  );
  console.log(existingProduct);

  if (existingProduct) {
    return products.map((product) =>
      product._id === productToAdd._id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...productToAdd, quantity: 1 }];
};

export const removeItemFromCart = (products, productToRemove) => {
  const existingProduct = products.find(
    (product) => product._id === productToRemove
  );

  if (existingProduct.quantity === 1) {
    return products.filter((product) => product._id !== productToRemove);
  }

  return products.map((product) =>
    product._id === productToRemove
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

// export const addQuantityToCart = (products, productToAdd) => {
//   const existingProduct = products.findIndex(
//     (product) => product.id === productToAdd.id
//   );

//   if (existingProduct) {
//     return products.map((product) =>
//       product.id === productToAdd.id
//         ? { ...product, quantity: product.quantity + 1 }
//         : product
//     );
//   }

//   return {
//     ...products,
//     products: [...products, productToAdd],
//   };
// };

// export const deleteItemFromCart = (products, productToRemove) => {
//   const existingProduct = products.find(
//     (product) => product.id === productToRemove.id
//   );

//   if (existingProduct) {
//     return products.filter((product) => product.id !== productToRemove.id);
//   }

//   return products.map((product) =>
//     product.id === productToRemove.id ? { ...product, quantity: 1 } : products
//   );
// };
