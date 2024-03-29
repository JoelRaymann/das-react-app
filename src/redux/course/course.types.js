const CourseActionTypes = {
  // Getting Course list
  GET_COURSE_LIST_START: "GET_COURSE_LIST_START",
  GET_COURSE_LIST_SUCCESS: "GET_COURSE_LIST_SUCCESS",
  GET_COURSE_LIST_FAILURE: "GET_COURSE_LIST_FAILURE",

  // Adding course
  ADD_COURSE_START: "ADD_COURSE_START",
  ADD_COURSE_SUCCESS: "ADD_COURSE_SUCCESS",
  ADD_COURSE_FAILURE: "ADD_COURSE_FAILURE",

  // Deleting course
  DELETE_COURSE_START: "DELETE_COURSE_START",
  DELETE_COURSE_SUCCESS: "DELETE_COURSE_SUCCESS",
  DELETE_COURSE_FAILURE: "DELETE_COURSE_FAILURE",

  // Remove course from course list
  REMOVE_COURSE_FROM_COURSELIST: "REMOVE_COURSE_FROM_COURSELIST",

  // Reset Course Reducer
  RESET_COURSE_REDUCER: "RESET_COURSE_REDUCER",
};

export default CourseActionTypes;
