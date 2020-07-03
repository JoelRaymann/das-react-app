import UserActionTypes from "./user.types";

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

/**
 * Redux Action Function to start the registration process for the given
 * new user credentials.
 *
 * @param {String} username - The username for the new user.
 * @param {String} password - The password for the new user.
 * @param {String} name - The given name for the new user.
 * @param {String} email - The valid email address for the given user.
 */
export function userRegistrationStart(username, password, name, email) {
  return {
    type: UserActionTypes.REGISTER_START,
    payload: {
      username: username,
      password: password,
      name: name,
      email: email,
      cat: "teacher",
    },
  };
}

/**
 * Redux Action Function to handle a successful new user registration.
 */
export function userRegistrationSuccess() {
  return {
    type: UserActionTypes.REGISTER_SUCCESS,
  };
}

/**
 * Redux Action Function to handle a failed user registration.
 *
 * @param {String} error - The error message.
 */
export function userRegistrationFailure(error) {
  return {
    type: UserActionTypes.REGISTER_FAILURE,
    payload: error,
  };
}

/**
 * Redux Action function to start the logout process.
 *
 * @param {String} token - The session token for logout.
 */
export function userSignOutStart(token) {
  return {
    type: UserActionTypes.SIGN_OUT_START,
    payload: token,
  };
}

/**
 * Redux Action Function to handle a successful logout process.
 */
export function userSignOutSuccess() {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
}

/**
 * Redux Action Function to handle a failed user logout.
 *
 * @param {String} error - The error message.
 */
export function userSignOutFailure(error) {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
}
