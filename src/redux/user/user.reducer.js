import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  token: null,
  error: null,
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
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    // Handle a failed user authentication
    case UserActionTypes.SIGN_IN_FAILURE:
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
