import CourseActionTypes from "./course.types";

/**
 * Redux Action Function to Start fetching the currentUser.
 *
 * @param {TeacherUser} currentUser - The currentUser login.
 * @param {String} token - The authorization JWT token.
 */
export function getCourseListStart(currentUser, token) {
  return {
    type: CourseActionTypes.GET_COURSE_LIST_START,
    payload: {
      currentUser: currentUser,
      token: token,
    },
  };
}

/**
 * Redux Action Function to Handle a successful course retrieval.
 *
 * @param {Array<CourseClass>} courseList - A list of courses
 */
export function getCourseListSuccess(courseList) {
  return {
    type: CourseActionTypes.GET_COURSE_LIST_SUCCESS,
    payload: courseList,
  };
}

/**
 * Redux Action Function to handle a failed course
 * retrieval.
 *
 * @param {String} error - The error message.
 */
export function getCourseListFailure(error) {
  return {
    type: CourseActionTypes.GET_COURSE_LIST_FAILURE,
    payload: error,
  };
}

/**
 * Redux Action Function to start the course addition
 * process.
 *
 * @param {CourseClass} newCourse - The new course to add.
 * @param {TeacherUserClass} currentUser - The current user.
 * @param {String} sessionToken - The current session token.
 */
export function addCourseStart(newCourse, currentUser, sessionToken) {
  return {
    type: CourseActionTypes.ADD_COURSE_START,
    payload: {
      newCourse: newCourse,
      currentUser: currentUser,
      sessionToken: sessionToken,
    },
  };
}

/**
 * Redux Action Function to handle a successful course addition.
 *
 * @param {CourseClass} newCourse - The new course which was added.
 */
export function addCourseSuccess(newCourse) {
  return {
    type: CourseActionTypes.ADD_COURSE_SUCCESS,
    payload: newCourse,
  };
}

/**
 * Redux Action Function to handle a failed course addition process.
 *
 * @param {String} error - The error message.
 */
export function addCourseFailure(error) {
  return {
    type: CourseActionTypes.ADD_COURSE_FAILURE,
    payload: error,
  };
}

export function clearCourseList() {
  return {
    type: CourseActionTypes.CLEAR_COURSE_LIST,
  };
}
