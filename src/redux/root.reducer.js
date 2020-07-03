import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import courseReducer from "./course/course.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
});

export default rootReducer;
