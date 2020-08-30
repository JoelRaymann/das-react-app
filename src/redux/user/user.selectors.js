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

export const selectIsRegistering = createSelector(
  [selectUser],
  (user) => user.isRegistering
);

export const selectRegisterError = createSelector(
  [selectUser],
  (user) => user.registerError
);
