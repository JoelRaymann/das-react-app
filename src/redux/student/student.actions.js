import StudentActionTypes from "./student.types";

/**
 * Redux Action Function to start fetching the student list for the
 * given course.
 *
 * @param {CourseClass} course - The course to fetch the student list.
 * @param {String} username - The current logged in teacher.
 * @param {String} token - The current session token.
 */
export function getStudentListStart(course, username, token) {
  return {
    type: StudentActionTypes.GET_STUDENT_LIST_START,
    payload: {
      course: course,
      username: username,
      token: token,
    },
  };
}

/**
 * Redux Action Function to handle a successful student list fetch for the
 * given course.
 *
 * @param {String} courseCode - The course code to associate the student list
 * with.
 * @param {Array<StudentInfoClass>} studentList - A array of fetched student list.
 */
export function getStudentListSuccess(courseCode, studentList) {
  return {
    type: StudentActionTypes.GET_STUDENT_LIST_SUCCESS,
    payload: {
      courseCode: courseCode,
      studentList: studentList,
    },
  };
}

/**
 * Redux Action Function to handle a failed student list fetching for the
 * given course.
 *
 * @param {String} error - The error message.
 */
export function getStudentListFailure(error) {
  return {
    type: StudentActionTypes.GET_STUDENT_LIST_FAILURE,
    action: error,
  };
}

export function CleanUpStudentStore() {
  return {
    type: StudentActionTypes.CLEANUP_STUDENT_STORE,
  };
}
