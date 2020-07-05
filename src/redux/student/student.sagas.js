import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

import StudentActionTypes from "./student.types";
import {
  getStudentListSuccess,
  getStudentListFailure,
} from "./student.actions";

import { refineStudentList } from "./student.utils";

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

export function* onStudentListFetch() {
  yield takeLatest(
    StudentActionTypes.GET_STUDENT_LIST_START,
    studentListFetching
  );
}

export function* studentSaga() {
  yield all([call(onStudentListFetch)]);
}
