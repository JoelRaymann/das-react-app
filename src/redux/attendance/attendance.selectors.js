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

export const selectIsFetchingCipherTexts = createSelector(
  [selectAttendance],
  (attendance) => attendance.isFetchingCipherTexts
);

export const selectDateList = createSelector(
  [selectAttendance],
  (attendance) => attendance.dateList
);

export const selectIsFetchingDateList = createSelector(
  [selectAttendance],
  (attendance) => attendance.isFetchingDateList
);
