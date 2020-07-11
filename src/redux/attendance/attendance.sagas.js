import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

import AttendanceActionTypes from "./attendance.types";

import {
  getAttendanceCipherTextSuccess,
  getAttendanceCipherTextFailure,
} from "./attendance.actions";

function* fetchAttendanceCipherText(action) {
  try {
    const {
      payload: { course, username, sessionToken, numCipherTexts },
    } = action;

    const { courseCode, courseSlot } = course;

    const cipherResponse = yield axios.post(
      "https://das.pythonanywhere.com/api/roomcreate",
      {
        courseID: courseCode,
        slot: courseSlot,
        teacher_username: username,
        num_cipher: numCipherTexts,
      },
      {
        headers: {
          Authorization: `Token ${sessionToken}`,
        },
      }
    );
    const { cipherlist } = yield cipherResponse.data;
    yield put(getAttendanceCipherTextSuccess(cipherlist));
  } catch (error) {
    alert(`[ERROR]: Fetching of Cipher Text ${error}`);
    yield put(getAttendanceCipherTextFailure(error));
  }
}

/**
 * Redux Saga to listen and handle the fetching process for the ciphertexts to proceed
 * with the attendance session.
 */
export function* onFetchAttendanceCipherText() {
  yield takeLatest(
    AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_START,
    fetchAttendanceCipherText
  );
}

export function* attendanceSaga() {
  yield all([call(onFetchAttendanceCipherText)]);
}
