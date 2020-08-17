import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import BASEURL from "../network.env";

import CourseActionTypes from "./course.types";
import {
  getCourseListSuccess,
  getCourseListFailure,
  addCourseSuccess,
  addCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  removeCourseFromCourseList,
} from "./course.actions";
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
      `${BASEURL}/teachers/${username}/courses`,
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

function* addCourse(action) {
  try {
    const {
      payload: { newCourse, currentUser, sessionToken },
    } = action;

    const payloadCourse = {
      courseID: newCourse.courseCode,
      name: newCourse.courseName,
      slot: newCourse.courseSlot,
      teacher: {
        username: currentUser.username,
        email: currentUser.email,
        name: currentUser.name,
        is_verified: currentUser.isVerified,
      },
    };

    const addCourseResponse = yield axios.post(
      `${BASEURL}/courses`,
      payloadCourse,
      {
        headers: {
          Authorization: `Token ${sessionToken}`,
        },
      }
    );
    console.log(addCourseResponse);
    yield put(addCourseSuccess(newCourse));
  } catch (error) {
    alert(`[ERROR]: Course Addition Error ${error}`);
    yield put(addCourseFailure(error));
  }
}

function* deleteCourse(action) {
  try {
    const {
      payload: { course, username, sessionToken },
    } = action;
    const { courseCode, courseSlot } = course;

    const courseDeletionResponse = yield axios.post(
      `${BASEURL}/delete_course`,
      {
        courseID: courseCode,
        slot: courseSlot,
        faculty_id: username,
        username: username,
      },
      {
        headers: {
          Authorization: `Token ${sessionToken}`,
        },
      }
    );
    console.log(courseDeletionResponse);
    yield put(removeCourseFromCourseList(course));
    yield put(deleteCourseSuccess());
  } catch (error) {
    alert(`[ERROR]: Course Deletion Error: ${error}`);
    yield put(deleteCourseFailure(error));
  }
}

/**
 * Course Saga Listening Function to process the retrieval for course
 * lists.
 */
export function* onCourseListFetch() {
  yield takeLatest(CourseActionTypes.GET_COURSE_LIST_START, fetchCourseList);
}

/**
 * Course Saga Listening Function to process the addition of course
 */
export function* onAddCourse() {
  yield takeLatest(CourseActionTypes.ADD_COURSE_START, addCourse);
}

/**
 * Course Saga Listening Function to process the deletion of course
 */
export function* onDeleteCourse() {
  yield takeLatest(CourseActionTypes.DELETE_COURSE_START, deleteCourse);
}

export function* courseSaga() {
  yield all([call(onCourseListFetch), call(onAddCourse), call(onDeleteCourse)]);
}
