export class StudentAttendanceClass {
  constructor(studentId, studentName, attendanceStatus) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.attendanceStatus = attendanceStatus;
    this.toggled = false;
  }

  toggleAttendance() {
    this.attendanceStatus = !this.attendanceStatus;
    this.toggled = !this.toggled;
  }
}

export default StudentAttendanceClass;
