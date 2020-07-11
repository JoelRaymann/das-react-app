import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import courseReducer from "./course/course.reducer";
import studentReducer from "./student/student.reducer";
import attendanceReducer from "./attendance/attendance.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  student: studentReducer,
  attendance: attendanceReducer,
});

export default rootReducer;
