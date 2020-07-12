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
    console.log(course, username, token);

    const studentListResponse = yield axios.post(
      `http://13.233.160.133:8080/api/attendance/class`,
      {
        courseID: courseCode,
        slot: courseSlot,
        faculty_id: username,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const studentList = yield refineStudentList(
      studentListResponse.data["attendance-class-info"]
    );
    yield put(getStudentListSuccess(studentList));
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
      `http://13.233.160.133:8080/api/attendance/list/${courseCode}/${courseSlot}/${username}/${date}/`,
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
