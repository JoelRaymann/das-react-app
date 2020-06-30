import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import UserActionTypes from "./user.types";

import { userSignInSuccess, userSignInFailure } from "./user.actions";
import TeacherUser from "../../classes/teacher-user.class";

function* signInWithUser(action) {
  // get the username and password from the action payload
  const {
    payload: { username, password },
  } = action;
  try {
    // Try to Login
    const {
      data: { token },
    } = yield axios.post("https://das.pythonanywhere.com/api/token/login", {
      username: username,
      password: password,
    });

    // Fetch User data
    const userMetaResponse = yield axios.get(
      `https://das.pythonanywhere.com/api/teachers/${username}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const { email, name, is_verified } = yield userMetaResponse.data;
    const user = new TeacherUser(username, email, name, is_verified);

    // Call a successful sign-in action
    yield put(userSignInSuccess(user, token));
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

export function* userSaga() {
  yield all([call(onUserSignIn)]);
}
