import StudentActionTypes from "./student.types";

const INITIAL_STATE = {
  studentLists: {},
  error: null,
};

function studentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Successful Student List Fetch
    case StudentActionTypes.GET_STUDENT_LIST_SUCCESS:
      return {
        ...state,
        studentLists: {
          ...state.studentLists,
          [action.payload.courseCode]: action.payload.studentList,
        },
      };

    // Failed Student List Fetch
    case StudentActionTypes.GET_STUDENT_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Cleanup
    case StudentActionTypes.CLEANUP_STUDENT_STORE:
      return {
        ...state,
        studentLists: {},
        error: null,
      };

    default:
      return state;
  }
}

export default studentReducer;
