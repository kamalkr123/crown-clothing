import { createSelector } from "reselect";

const CartReducer = (reduxStore) => reduxStore.cart;

export const isCartOpenSelector = createSelector(
  [CartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const cartItemsSelector = createSelector(
  [CartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => cartItems.length
);

export const cartTotalSelector = createSelector([CartReducer], (cartSlice) =>
  cartSlice.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
