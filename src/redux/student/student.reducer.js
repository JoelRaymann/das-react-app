import StudentActionTypes from "./student.types";
import { removeStudentList } from "./student.utils";

const INITIAL_STATE = {
  studentLists: {},
  error: null,

  // Student Attendance data fetch
  studentAttendanceList: [],
  isFetchingStudentAttendanceList: false,
  studentAttendanceListError: null,
};

function studentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle student list fetch
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

    // Handle the starting process of a student attendance list fetch
    case StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_START:
      return {
        ...state,
        studentAttendanceList: [],
        isFetchingStudentAttendanceList: true,
        studentAttendanceListError: null,
      };

    // Handle a successful student attendance list fetch
    case StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_SUCCESS:
      return {
        ...state,
        studentAttendanceList: action.payload,
        isFetchingStudentAttendanceList: false,
      };

    // Handle a failed student attendance list fetch
    case StudentActionTypes.GET_STUDENT_ATTENDANCE_LIST_FAILURE:
      return {
        ...state,
        studentAttendanceList: [],
        isFetchingStudentAttendanceList: false,
        studentAttendanceListError: null,
      };

    // Remove studentlists from student
    case StudentActionTypes.REMOVE_STUDENT_LIST:
      return {
        ...state,
        studentLists: removeStudentList(state.studentLists, action.payload),
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
