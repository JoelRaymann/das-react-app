import { createSelector } from "reselect";

const selectStudent = (state) => state.student;

export const selectStudentLists = createSelector(
  [selectStudent],
  (student) => student.studentLists
);
