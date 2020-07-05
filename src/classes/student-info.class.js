/**
 * A class to hold student details and other meta pertinent
 * to students.
 * @class StudentInfoClass
 */
export class StudentInfoClass {
  /**
   * A class to hold student details and other meta pertinent
   * to students.
   *
   * @param {String} studentName - The name of the student
   * @param {String} studentId - The ID/Reg No. of the student
   * @param {String} classesAttended - The total class attended by the student
   * @param {String} totalClasses - The total class taken by the faculty.
   */
  constructor(studentName, studentId, classesAttended, totalClasses) {
    this.studentName = studentName;
    this.studentId = studentId;
    this.classesAttended = classesAttended;
    this.totalClasses = totalClasses;
  }
}

export default StudentInfoClass;
