import { USER_ACTION_TYPES } from "../types/UserTypes";
import { createAction } from "../Utils/reducer";

export const emailSignInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SET_USER_SUCCESS, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const setLoading = (val) =>
  createAction(USER_ACTION_TYPES.SET_IS_LOADING, val);

export const startLoginWithGoogle = (val) =>
  createAction(USER_ACTION_TYPES.LOGIN_WITH_GOOGLE);

export const loginFromGoogleSuccess = (user) =>
  createAction(USER_ACTION_TYPES.LOGIN_WITH_GOOGLE_SUCCESS, user);
