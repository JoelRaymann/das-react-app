import { all, call } from "redux-saga/effects";

// Add all sagas here
import { userSaga } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(userSaga)]);
}
