import CourseActionTypes from "./course.types";

import { addCourseToCourseList } from "./course.utils";

const INITIAL_STATE = {
  // Course List Fetching
  courseList: [],
  fetchingCourseList: false,
  getCourseListError: null,

  // Add Course
  addCourseInProgress: false,
  addCourseError: null,
};

function courseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle fetching course list
    case CourseActionTypes.GET_COURSE_LIST_START:
      return {
        ...state,
        fetchingCourseList: true,
        getCourseListError: null,
      };

    // Handle a successful course retrieval process
    case CourseActionTypes.GET_COURSE_LIST_SUCCESS:
      return {
        ...state,
        courseList: action.payload,
        fetchingCourseList: false,
        getCourseListError: null,
      };

    // Handle a failed course retrieval process
    case CourseActionTypes.GET_COURSE_LIST_FAILURE:
      return {
        ...state,
        courseList: [],
        fetchingCourseList: false,
        getCourseListError: action.payload,
      };

    // Handle a starting stages of course addition
    case CourseActionTypes.ADD_COURSE_START:
      return {
        ...state,
        addCourseInProgress: true,
        addCourseError: null,
      };

    // Handling a successful course addition
    case CourseActionTypes.ADD_COURSE_SUCCESS:
      return {
        ...state,
        courseList: addCourseToCourseList(state.courseList, action.payload),
        addCourseInProgress: false,
        addCourseError: null,
      };

    // Handling a failed course addition
    case CourseActionTypes.ADD_COURSE_FAILURE:
      return {
        ...state,
        addCourseInProgress: false,
        addCourseError: action.payload,
      };

    // Clearing Course List
    case CourseActionTypes.CLEAR_COURSE_LIST:
      return {
        ...state,
        courseList: [],
        fetchingCourseList: false,
        getCourseListError: null,
        addCourseInProgress: false,
        addCourseError: null,
      };

    default:
      return state;
  }
}

export default courseReducer;
