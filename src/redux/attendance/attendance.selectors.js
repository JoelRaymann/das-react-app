import { createSelector } from "reselect";

const selectAttendance = (state) => state.attendance;

export const selectCipherTexts = createSelector(
  [selectAttendance],
  (attendance) => attendance.cipherTexts
);

export const selectCipherTextsError = createSelector(
  [selectAttendance],
  (attendance) => attendance.cipherTextsError
);
