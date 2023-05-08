import { USER_ACTION_TYPES } from "../types/UserTypes";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true,
  isAuthenticated: false,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SET_USER_FAILED:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case USER_ACTION_TYPES.LOGIN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
