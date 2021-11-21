export const addItemToCart = (products, productToAdd) => {
  const existingProduct = products.find(
    (product) => product.id === productToAdd.id
  );

  if (existingProduct) {
    return products.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...productToAdd, quantity: 1 }];
};

export const removeItemFromCart = (products, productToRemove) => {
  const existingProduct = products.find(
    (product) => product.id === productToRemove.id
  );

  if (existingProduct.quantity === 1) {
    return products.filter((product) => product.id !== productToRemove.id);
  }

  return products.map((product) =>
    product.id === productToRemove.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};
