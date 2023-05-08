import { createSelector } from "reselect";

const CategoriesReducer = (reduxStore) => reduxStore.category;

export const categoryMapSelector = createSelector(
  [CategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoriesMap
);
