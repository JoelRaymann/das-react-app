import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSessionToken = createSelector(
  [selectUser],
  (user) => user.token
);

export const selectIsLogin = createSelector(
  [selectUser],
  (user) => user.isLogin
);
