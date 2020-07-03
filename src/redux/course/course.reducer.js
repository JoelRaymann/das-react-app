import CourseActionTypes from "./course.types";

const INITIAL_STATE = {
  courseList: [],
  fetchingCourseList: false,
  error: null,
};

function courseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle fetching course list
    case CourseActionTypes.GET_COURSE_LIST_START:
      return {
        ...state,
        fetchingCourseList: true,
        error: null,
      };

    // Handle a successful course retrieval process
    case CourseActionTypes.GET_COURSE_LIST_SUCCESS:
      return {
        ...state,
        courseList: action.payload,
        fetchingCourseList: false,
        error: null,
      };

    // Handle a failed course retrieval process
    case CourseActionTypes.GET_COURSE_LIST_FAILURE:
      return {
        ...state,
        courseList: [],
        fetchingCourseList: false,
        error: action.payload,
      };

    // Clearing Course List
    case CourseActionTypes.CLEAR_COURSE_LIST:
      return {
        ...state,
        courseList: [],
        fetchingCourseList: false,
        error: null,
      };

    default:
      return state;
  }
}

export default courseReducer;
