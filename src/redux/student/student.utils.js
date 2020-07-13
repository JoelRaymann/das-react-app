import StudentInfoClass from "../../classes/student-info.class";
import StudentAttendanceClass from "../../classes/student-attendance.class";

/**
 * Utility Function to refine the raw student list data recieved from the
 * backend and return a refined list of students.
 *
 * @param {Array<Object>} rawStudentList - The raw list of students from
 * the backend APi
 */
export function refineStudentList(rawStudentList) {
  const refinedStudentList = [];

  for (let i = 0; i < rawStudentList.length; ++i) {
    const { student_name, reg_no, present, total } = rawStudentList[i];

    refinedStudentList.push(
      new StudentInfoClass(student_name, reg_no, present, total)
    );
  }

  return refinedStudentList;
}

/**
 * Utility function to remove a course's fetched studentlist from the studentlists
 * object
 *
 * @param {Object} studentLists - The object consisting of the list of students for
 * each courseCode.
 * @param {String} courseCode - The course code to remove the list of students.
 */
export function removeStudentList(studentLists, courseCode) {
  delete studentLists[courseCode];
  return studentLists;
}

/**
 * Utility funtion to refine and refactor the raw student attendance data to suit
 * the app need.
 *
 * @param {Array<Object>} rawStudentAttendanceList - The raw list of student attendance data.
 */
export function refineStudentAttendanceList(rawStudentAttendanceList) {
  const refinedStudentAttendanceList = [];

  for (let i = 0; i < rawStudentAttendanceList.length; ++i) {
    const { username, name, is_present } = rawStudentAttendanceList[i];

    refinedStudentAttendanceList.push(
      new StudentAttendanceClass(username, name, is_present)
    );
  }

  return refinedStudentAttendanceList;
}
