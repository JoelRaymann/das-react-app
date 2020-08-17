import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import BASEURL from "../network.env";

import AttendanceActionTypes from "./attendance.types";

import {
  getAttendanceCipherTextSuccess,
  getAttendanceCipherTextFailure,
  getDateListSuccess,
  getDateListFailure,
} from "./attendance.actions";

function* fetchAttendanceCipherText(action) {
  try {
    const {
      payload: { course, username, sessionToken, numCipherTexts },
    } = action;

    const { courseCode, courseSlot } = course;

    const cipherResponse = yield axios.post(
      `${BASEURL}/createqr`,
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

function* fetchDateList(action) {
  try {
    const {
      payload: { course, username, sessionToken },
    } = action;
    const { courseCode, courseSlot } = course;

    const dateListResponse = yield axios.get(
      `${BASEURL}/attendance/course/${courseCode}/${courseSlot}/${username}/valid_dates`,
      {
        headers: {
          Authorization: `Token ${sessionToken}`,
        },
      }
    );
    const { dates } = yield dateListResponse.data;
    yield put(getDateListSuccess(dates));
  } catch (error) {
    alert(`[ERROR]: Error in fetching datelist: ${error}`);
    yield put(getDateListFailure(error));
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

export function* onFetchDateList() {
  yield takeLatest(AttendanceActionTypes.GET_DATELIST_START, fetchDateList);
}

export function* attendanceSaga() {
  yield all([call(onFetchAttendanceCipherText), call(onFetchDateList)]);
}
