/**
 * A class to hold student attendance details and other meta pertinent
 * to student attendance.
 * @class StudentAttendanceClass
 */
export class StudentAttendanceClass {
  /**
   * A Class to hold student attendance details and other details for
   * handling the student attendance process.
   *
   * @param {String} studentId - The student ID
   * @param {String} studentName - The student name.
   * @param {Boolean} attendanceStatus - The attendance status for the student.
   */
  constructor(studentId, studentName, attendanceStatus) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.attendanceStatus = attendanceStatus;
  }
}

export default StudentAttendanceClass;
