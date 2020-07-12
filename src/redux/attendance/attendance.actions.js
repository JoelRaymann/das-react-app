import AttendanceActionTypes from "./attendance.types";

/**
 * Redux Action Function to start fetching the cipher text process.
 *
 * @param {CourseClass} course - The course to take attendance for.
 * @param {String} username - The current user's username.
 * @param {Number} sessionDuration - The session duration inputted by the user.
 * @param {String} sessionToken - The current session token.
 * @param {Number} qrRotationDuration - The duration to rotate each QR.
 */
export function getAttendanceCipherTextStart(
  course,
  username,
  sessionDuration,
  sessionToken,
  qrRotationDuration
) {
  const numCipherTexts = Math.round(
    (sessionDuration * 60) / qrRotationDuration
  );
  return {
    type: AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_START,
    payload: {
      course: course,
      username: username,
      sessionToken: sessionToken,
      numCipherTexts: numCipherTexts,
    },
  };
}

/**
 * Redux Action Function to handle a successful cipher text fetch.
 *
 * @param {Array<String>} cipherTexts - The array of ciphertexts for proceeding with
 * the attendance process.
 */
export function getAttendanceCipherTextSuccess(cipherTexts) {
  return {
    type: AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_SUCCESS,
    payload: cipherTexts,
  };
}

/**
 * Redux Action Function to handle a failed cipher text fetch.
 *
 * @param {String} error - The current error message.
 */
export function getAttendanceCipherTextFailure(error) {
  return {
    type: AttendanceActionTypes.GET_ATTENDANCE_CIPHERTEXT_FAILURE,
    payload: error,
  };
}
