import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import courseReducer from "./course/course.reducer";
import studentReducer from "./student/student.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  student: studentReducer,
});

export default rootReducer;
