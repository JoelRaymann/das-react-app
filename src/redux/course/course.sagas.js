import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import CourseActionTypes from "./course.types";
import { getCourseListSuccess, getCourseListFailure } from "./course.actions";
import { refineCourseList } from "./course.utils";

// HANDLING COURSE LIST FETCHING
function* fetchCourseList(action) {
  try {
    const {
      payload: { currentUser, token },
    } = action;
    const { username } = currentUser;

    // Send a course list response
    const courseListResponse = yield axios.get(
      `https://das.pythonanywhere.com/api/teachers/${username}/courses`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    const courseListRaw = courseListResponse.data;
    const courseList = yield refineCourseList(courseListRaw);

    // Handle a successful course list fetch
    yield put(getCourseListSuccess(courseList));
  } catch (error) {
    // Handle a failed course list fetch
    alert(`[ERROR]: ${error}`);
    yield put(getCourseListFailure(error));
  }
}

/**
 * Course Saga Listening Function to process the retrieval for course
 * lists.
 */
export function* onCourseListFetch() {
  yield takeLatest(CourseActionTypes.GET_COURSE_LIST_START, fetchCourseList);
}

export function* courseSaga() {
  yield all([call(onCourseListFetch)]);
}
