import { createStore, applyMiddleware } from "redux";

// import middlewares
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// import root saga
import rootSaga from "./root.saga";

// import root reducer
import rootReducer from "./root.reducer";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // Add all middlewares here

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Store creation
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Add your sagas here
sagaMiddleware.run(rootSaga);

export default store;
