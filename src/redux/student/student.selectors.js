import { createSelector } from "reselect";

const selectStudent = (state) => state.student;

export const selectStudentLists = createSelector(
  [selectStudent],
  (student) => student.studentLists
);

export const selectStudentAttendanceList = createSelector(
  [selectStudent],
  (student) => student.studentAttendanceList
);

export const selectIsFetchingStudentAttendanceList = createSelector(
  [selectStudent],
  (student) => student.isFetchingStudentAttendanceList
);
