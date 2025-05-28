const productListSelector = (state) => state.products.productList;
const productListStatusSelector = (state) => state.products.status;
const productListErrorSelector = (state) => state.products.error;

const productInCartListSelector = (state) => state.cart.items;
const totalQuantityInCartSelector = (state) => state.cart.totalQuantity;
const totalPriceInCartSelector = (state) => state.cart.totalPrice;

export {
  productListErrorSelector,
  productListSelector,
  productListStatusSelector,
  productInCartListSelector,
  totalPriceInCartSelector,
  totalQuantityInCartSelector,
};
