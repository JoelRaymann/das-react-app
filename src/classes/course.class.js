// Define Course Object

/**
 * A class Course which allows to store information of a course
 * and allows manipulation of it.
 *
 * @class CourseClass
 */
export class CourseClass {
  /**
   * Creates an instance of Course.
   *
   * @param {String} courseName - The name of the course.
   * @param {String} courseCode - The code of the course.
   * @param {String} courseSlot - The slot of the course.
   * @memberof CourseClass
   */
  constructor(courseName, courseCode, courseSlot) {
    this.courseName = courseName;
    this.courseCode = courseCode;
    this.courseSlot = courseSlot;
    this.courseIcon = this._setCourseIcon();
    this.classTaken = 0;
  }

  /**
   * Private Function to set the course icon based on the course
   * code
   *
   * @private
   * @memberof CourseClass
   */
  _setCourseIcon() {
    const courseType = this.courseCode.slice(0, 3).toUpperCase();

    switch (courseType) {
      case "CSE":
        return "./assets/icons/course-icons/cse_icon.svg";

      case "BFT":
        return "./assets/icons/course-icons/bft_icon.svg";

      case "BME":
        return "./assets/icons/course-icons/bme_icon.svg";

      default:
        return "./assets/icons/course-icons/cse_icon.svg";
    }
  }

  /**
   * Function to set the class taken in the course
   *
   * @param {Number} classTaken - The no. of class taken.
   * @memberof CourseClass
   */
  setClassTaken(classTaken) {
    this.classTaken = classTaken;
  }
}

export default CourseClass;
