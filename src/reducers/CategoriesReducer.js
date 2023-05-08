import { CATEGORIES_ACTION_TYPE } from "../types/CategoriesType";

const InitialState = {
  categoriesMap: {},
};

export const categoriesReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: state.categoriesMap,
      };

    case CATEGORIES_ACTION_TYPE.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};
