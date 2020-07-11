import { createSelector } from "reselect";

const selectStudent = (state) => state.student;

export const selectStudentLists = createSelector(
  [selectStudent],
  (student) => student.studentLists
);

export const selectStudentAttendanceLists = createSelector(
  [selectStudent],
  (student) => student.selectStudentAttendanceLists
);

export const selectIsFetchingStudentAttendanceList = createSelector(
  [selectStudent],
  (student) => student.isFetchingStudentAttendanceList
);
