import AttendanceActionTypes from "./attendance.types";

const INITIAL_STATE = {
  cipherTexts: [],
  cipherTextsError: null,
};

function attendanceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle fetching ciphertext for users
    case AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_SUCCESS:
      return {
        ...state,
        cipherTexts: action.payload,
        cipherTextsError: null,
      };

    case AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_FAILURE:
      return {
        ...state,
        cipherTexts: [],
        cipherTextsError: action.payload,
      };

    default:
      return state;
  }
}

export default attendanceReducer;
