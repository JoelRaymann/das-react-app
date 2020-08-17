import AttendanceActionTypes from "./attendance.types";

const INITIAL_STATE = {
  // Fetching DateLists for attendance fetch
  dateList: null,
  isFetchingDateList: false,
  dateListError: null,

  // Fetching CipherTexts
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

    // Handle the date list fetch starting process
    case AttendanceActionTypes.GET_DATELIST_START:
      return {
        ...state,
        dateList: null,
        isFetchingDateList: true,
        dateListError: null,
      };

    // Handle the date list fetch success
    case AttendanceActionTypes.GET_DATELIST_SUCCESS:
      return {
        ...state,
        dateList: action.payload,
        isFetchingDateList: false,
        dateListError: null,
      };

    // Handle the date list fetch failure
    case AttendanceActionTypes.GET_DATELIST_FAILURE:
      return {
        ...state,
        dateList: null,
        isFetchingDateList: false,
        dateListError: action.payload,
      };

    default:
      return state;
  }
}

export default attendanceReducer;
