export const updateProduct = (products, productToUpdate) => {
  const existingProduct = products.find(
    (product) => product.id === productToUpdate.id
  );

  if (existingProduct) {
    return [...products, { ...productToUpdate }];
  }
};

export const delProduct = (products, productToRemove) => {
  return products.splice(
    products.findIndex((item) => item._id === productToRemove),
    1
  );
};
