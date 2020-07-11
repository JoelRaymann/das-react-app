import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

import StudentActionTypes from "./student.types";
import {
  getStudentListSuccess,
  getStudentListFailure,
  getStudentAttendanceListSuccess,
  getStudentAttendanceListFailure,
} from "./student.actions";

import {
  refineStudentList,
  refineStudentAttendanceList,
} from "./student.utils";

function* studentListFetching(action) {
  try {
    const {
      payload: { course, username, token },
    } = action;
    const { courseCode, courseSlot } = course;

    const studentListResponse = yield axios.get(
      `https://das.pythonanywhere.com/api/attendance/class/${courseCode}/${courseSlot}/${username}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const studentList = yield refineStudentList(studentListResponse.data);
    yield put(getStudentListSuccess(courseCode, studentList));
  } catch (error) {
    alert(`[ERROR]: Facing a student fetching error: ${error}`);
    yield put(getStudentListFailure(error));
  }
}

function* studentAttendanceListFetching(action) {
  try {
    const {
      payload: { course, username, date, sessionToken },
    } = action;
    const { courseCode, courseSlot } = course;

    const studentAttendanceListResponse = yield axios.get(
      `https://das.pythonanywhere.com/api/attendance/list/${courseCode}/${courseSlot}/${username}/${date}/`,
      {
        headers: {
          Authorization: `Token ${sessionToken}`,
        },
      }
    );

    const studentAttendanceList = yield refineStudentAttendanceList(
      studentAttendanceListResponse.data
    );
    yield put(getStudentAttendanceListSuccess(studentAttendanceList));
  } catch (error) {
    alert(`[ERROR]: Facing a student attendance list fetching error: ${error}`);
    yield put(getStudentAttendanceListFailure(error));
  }
}

export function* onStudentAttendanceListFetch() {
  yield takeLatest(
    StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_START,
    studentAttendanceListFetching
  );
}

export function* onStudentListFetch() {
  yield takeLatest(
    StudentActionTypes.GET_STUDENT_LIST_START,
    studentListFetching
  );
}

export function* studentSaga() {
  yield all([call(onStudentListFetch), call(onStudentAttendanceListFetch)]);
}
