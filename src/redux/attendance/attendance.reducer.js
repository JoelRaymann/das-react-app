import AttendanceActionTypes from "./attendance.types";

const INITIAL_STATE = {
  cipherTexts: [],
  isFetchingCipherTexts: false,
  cipherTextsError: null,
};

function attendanceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Handle the starting of fetching ciphertext
    case AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_START:
      return {
        ...state,
        cipherTexts: [],
        isFetchingCipherTexts: true,
        cipherTextsError: null,
      };

    // Handle successful fetching ciphertext
    case AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_SUCCESS:
      return {
        ...state,
        cipherTexts: action.payload,
        isFetchingCipherTexts: false,
        cipherTextsError: null,
      };

    // Handle a failed fetching ciphertext
    case AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_FAILURE:
      return {
        ...state,
        cipherTexts: [],
        isFetchingCipherTexts: false,
        cipherTextsError: action.payload,
      };

    default:
      return state;
  }
}

export default attendanceReducer;
