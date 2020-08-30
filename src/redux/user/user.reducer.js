import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  // Handling Login
  isLogin: false,
  currentUser: null,
  token: null,
  loginError: null,

  // Handling Register
  isRegistering: false,
  registerError: null,
};

/**
 * The Action Object for redux reducers
 *
 * @typedef {Object} ActionObject
 * @property {String} action.type - The type of user action.
 * @property {Object} action.payload - The payload for user action.
 */

/**
 * Reducer Function to handle the user authentication and
 * registration process with redux.
 *
 * @param {Object} state - The state of the user reducer.
 * @param {ActionObject} action - The user action object
 */
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle a successful user authentication
    case UserActionTypes.SIGN_IN_START:
      return {
        ...state,
        isLogin: true,
        currentUser: null,
        token: null,
        loginError: null,
      };

    // Handle a successful user login process
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLogin: false,
        currentUser: action.payload.user,
        token: action.payload.token,
        loginError: null,
      };

    // Handle a failed user login process
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLogin: false,
        currentUser: null,
        token: null,
        loginError: action.payload,
      };

    case UserActionTypes.REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        registerError: null,
      };

    // Handle a successful registration process
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        registerError: null,
      };

    // Handle a failed register
    case UserActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        registerError: action.payload,
      };

    // Handle a successful sign-out process
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        token: null,
        error: null,
      };

    // Handle a failed sign-out process
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        token: null,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
