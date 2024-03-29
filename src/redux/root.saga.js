import { all, call } from "redux-saga/effects";

// Add all sagas here
import { userSaga } from "./user/user.sagas";
import { courseSaga } from "./course/course.sagas";
import { studentSaga } from "./student/student.sagas";
import { attendanceSaga } from "./attendance/attendance.sagas";

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(courseSaga),
    call(studentSaga),
    call(attendanceSaga),
  ]);
}
