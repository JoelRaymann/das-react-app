import CourseClass from "../../classes/course.class";

/**
 * Utility function to refactor the course list coming from
 * backend.
 *
 * @param {Array} courseListRaw - The raw list of course from the backend.
 */
export function refineCourseList(courseListRaw) {
  const courseList = [];
  courseListRaw.forEach((course) => {
    courseList.push(new CourseClass(course.name, course.courseID, course.slot));
  });

  return courseList;
}

/**
 * Utility function to add a course to the course list.
 *
 * @param {Array<CourseClass>} courseList - A array of all the courses
 * @param {CourseClass} course - The new course to add
 */
export function addCourseToCourseList(courseList, course) {
  courseList.push(course);
  return courseList;
}
