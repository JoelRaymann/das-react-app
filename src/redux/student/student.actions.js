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
 * @param {Array<StudentInfoClass>} studentList - A array of fetched student list.
 */
export function getStudentListSuccess(studentList) {
  return {
    type: StudentActionTypes.GET_STUDENT_LIST_SUCCESS,
    payload: studentList,
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
    payload: error,
  };
}

/**
 * Redux Action Function to fetch studentlists for a course for the given date.
 *
 * @param {CourseClass} course - The current course to fetch the student list for.
 * @param {String} username - The current user's username.
 * @param {String} date - The student list to fetch for a given date for a course.
 * @param {String} sessionToken - The current session token.
 */
export function getStudentAttendanceListStart(
  course,
  username,
  date,
  sessionToken
) {
  return {
    type: StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_START,
    payload: {
      course: course,
      username: username,
      date: date,
      sessionToken: sessionToken,
    },
  };
}

/**
 * Redux Action Function to handle a successful student attendance data
 * fetch for the given date.
 *
 * @param {Array<StudentAttendanceClass>} studentAttendanceList - A array of studentAttendanceClass
 * list
 */
export function getStudentAttendanceListSuccess(studentAttendanceList) {
  return {
    type: StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_SUCCESS,
    payload: studentAttendanceList,
  };
}

/**
 * Redux Action Function to handle a failed student attendance data fetch
 * for the given date.
 *
 * @param {string} error - The error message.
 */
export function getStudentAttendanceListFailure(error) {
  return {
    type: StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_FAILURE,
    payload: error,
  };
}

/**
 * Redux Action Function to clean up student redux
 */
export function cleanUpStudentStore() {
  return {
    type: StudentActionTypes.CLEANUP_STUDENT_STORE,
  };
}

/**
 * Redux Action Function to delete the list of students associated with
 * the given course code. NOTE: This is used to refresh the frontend
 * student lists DB.
 */
export function cleanStudentList() {
  return {
    type: StudentActionTypes.CLEAN_STUDENT_LIST,
  };
}
