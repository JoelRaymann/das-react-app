import UserActionTypes from "./user.types";
import TeacherUser from "../../classes/teacher-user.class";

/**
 * Redux Action Function to start the User Signing in process.
 *
 * @param {String} username - The username given for authentication.
 * @param {String} password - The password given for authentication.
 */
export function userSignInStart(username, password) {
  return {
    type: UserActionTypes.SIGN_IN_START,
    payload: {
      username: username,
      password: password,
    },
  };
}

/**
 * Redux Action Function to handle a successful login authentication.
 *
 * @param {TeacherUser} user - The current authenticated teacher user.
 * @param {String} token - The JWT token for the session.
 */
export function userSignInSuccess(user, token) {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: {
      user: user,
      token: token,
    },
  };
}

/**
 * Redux Action Function to handle a failed login authentication.
 *
 * @param {String} error - The error message for the failed authentication.
 */
export function userSignInFailure(error) {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
}
