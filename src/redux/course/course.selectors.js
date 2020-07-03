import { createSelector } from "reselect";

const selectCourse = (state) => state.course;

export const selectCourseList = createSelector(
  [selectCourse],
  (course) => course.courseList
);

export const selectFetchingCourseList = createSelector(
  [selectCourse],
  (course) => course.fetchingCourseList
);
