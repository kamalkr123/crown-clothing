import { createSelector } from "reselect";

const UserReducer = (reduxStore) => reduxStore.user;

export const loggedInUser = createSelector(
  [UserReducer],
  (userSlice) => userSlice.currentUser
);

export const isLoading = createSelector(
  [UserReducer],
  (userSlice) => userSlice.isLoading
);
