import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import BASEURL from "../network.env";

import UserActionTypes from "./user.types";

import {
  userSignInSuccess,
  userSignInFailure,
  userRegistrationSuccess,
  userRegistrationFailure,
  userSignOutSuccess,
  userSignOutFailure,
} from "./user.actions";
import {
  resetCourseReducer,
  getCourseListStart,
} from "../course/course.actions";
import TeacherUser from "../../classes/teacher-user.class";

// HANDLING SIGN IN PROCESSES
function* signInWithUser(action) {
  // get the username and password from the action payload
  const {
    payload: { username, password },
  } = action;
  try {
    // Try to Login
    const {
      data: { token },
    } = yield axios.post(`${BASEURL}/token/login`, {
      username: username,
      password: password,
    });

    // Fetch User data
    const userMetaResponse = yield axios.get(
      `${BASEURL}/teachers/${username}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const { email, name, is_verified } = yield userMetaResponse.data;
    const user = new TeacherUser(username, email, name, is_verified);

    // Call a successful sign-in action
    yield all([
      put(userSignInSuccess(user, token)),
      put(getCourseListStart(user, token)),
    ]);
  } catch (error) {
    alert(`[ERROR]: Facing a user login error: ${error}`);
    yield put(userSignInFailure(error));
  }
}

/**
 * User Saga Listening Function to process the sign-in authentication for the
 * given standard username and password.
 */
export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithUser);
}

// HANDLING REGISTRATION PROCESS
function* registerNewUser(action) {
  try {
    const { payload } = action;

    const registerHeader = {
      header: {
        "Content-Type": "application/json",
      },
    };

    // Launch an axios api call for registration
    const registerResponse = yield axios.post(
      `${BASEURL}/register`,
      payload,
      registerHeader
    );
    console.log(registerResponse);
    // Handle a successful registration process
    yield put(userRegistrationSuccess());
  } catch (error) {
    // Handle a failed registration process
    alert(`[ERROR]: Facing a Registration process error: ${error}`);
    yield put(userRegistrationFailure(error));
  }
}

/**
 * User Saga Listening Function to process the registration process for
 * new users.
 */
export function* onUserRegistration() {
  yield takeLatest(UserActionTypes.REGISTER_START, registerNewUser);
}

function* signOutWithUser(action) {
  try {
    const token = action.payload;

    // Do logout process
    const logoutResponse = yield axios.post(`${BASEURL}/token/logout`, null, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log(logoutResponse);
    yield put(resetCourseReducer());
    yield put(userSignOutSuccess());
  } catch (error) {
    alert(`[ERROR]: Facing a logout error: ${error}`);
    yield put(userSignOutFailure(error));
  }
}

/**
 * User Saga Listening Function to process the logout request
 */
export function* onUserLogout() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutWithUser);
}

export function* userSaga() {
  yield all([call(onUserSignIn), call(onUserRegistration), call(onUserLogout)]);
}
