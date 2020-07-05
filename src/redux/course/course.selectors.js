import { createSelector } from "reselect";

const selectCourse = (state) => state.course;

export const selectCourseList = createSelector(
  [selectCourse],
  (course) => course.courseList
);

export const selectCourseFromCourseList = (courseCode) =>
  createSelector([selectCourseList], (courseList) =>
    courseList.find((course) => course.courseCode === courseCode)
  );

export const selectFetchingCourseList = createSelector(
  [selectCourse],
  (course) => course.fetchingCourseList
);
