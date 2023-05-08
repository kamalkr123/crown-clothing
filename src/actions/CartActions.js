import { CART_ACTION_TYPES } from "../types/CartTypes";
import { createAction } from "../Utils/reducer";

const addCartItem = (cartItems, prodToAdd) => {
  // check if item is exist or not
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === prodToAdd.id
  );

  // if item is exist then increase the quantity and return the  brand new array
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === prodToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...prodToAdd, quantity: 1 }];
};

export const addToCartItem = (cartItems, newItem) =>
  createAction(
    CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    addCartItem(cartItems, newItem)
  );

const removeCartItem = (cartItems, prodToRemove) => {
  // find the cart item to remove
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === prodToRemove.id
  );
  // check if the quantity is one, if it is then remove the item from cart
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== prodToRemove.id);
    // return cartItems.map((cartItem) =>
    //   cartItem.id !== prodToRemove.id
    //     ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //     : cartItem
    // );
  }

  // return back the cartitem with reduce quantity
  return cartItems.map((cartItem) =>
    cartItem.id === prodToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeFromCartItem = (cartItems, item) =>
  createAction(
    CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    removeCartItem(cartItems, item)
  );

const clearCartItem = (cartItems, prodToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== prodToClear.id);
};

export const clearFromCartItem = (cartItems, item) =>
  createAction(
    CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    clearCartItem(cartItems, item)
  );

export const toggleCartDropdown = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN);
