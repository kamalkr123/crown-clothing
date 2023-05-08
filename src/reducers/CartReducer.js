import { CART_ACTION_TYPES } from "../types/CartTypes";

const InitialState = {
  isCartOpen: false,
  cartItems: [],
};

export const CartReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return { ...state, cartItems: payload };

    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return { ...state, cartItems: payload };

    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: payload };

    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
