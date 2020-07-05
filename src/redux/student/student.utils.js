import StudentInfoClass from "../../classes/student-info.class";

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
    const { student_name, student_id, present, total } = rawStudentList[i];

    refinedStudentList.push(
      new StudentInfoClass(student_name, student_id, present, total)
    );
  }

  return refinedStudentList;
}
