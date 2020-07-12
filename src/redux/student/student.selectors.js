import { createSelector } from "reselect";

const selectStudent = (state) => state.student;

export const selectStudentList = createSelector(
  [selectStudent],
  (student) => student.studentList
);

export const selectIsFetchingStudentList = createSelector(
  [selectStudent],
  (student) => student.isFetchingStudentList
);

export const selectStudentAttendanceList = createSelector(
  [selectStudent],
  (student) => student.studentAttendanceList
);

export const selectIsFetchingStudentAttendanceList = createSelector(
  [selectStudent],
  (student) => student.isFetchingStudentAttendanceList
);
