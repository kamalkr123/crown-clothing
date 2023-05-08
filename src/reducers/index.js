import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { CartReducer } from "./CartReducer";
import { categoriesReducer } from "./CategoriesReducer";

export const reducers = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  category: categoriesReducer,
});
