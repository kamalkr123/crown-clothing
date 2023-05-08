import { CATEGORIES_ACTION_TYPE } from "../types/CategoriesType";
import { createAction } from "../Utils/reducer";

export const getCategories = () =>
  createAction(CATEGORIES_ACTION_TYPE.CATEGORIES_MAP);

export const getCategoriesSucces = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.GET_CATEGORIES_SUCCESS, categoriesMap);
