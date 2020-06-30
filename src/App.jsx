import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginRegisterPage from "./pages/login-register/login-register.page";
import CoursePage from "./pages/course/course.page";

import "./App.scss";

/**
 * The root component for the react application
 */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginRegisterPage} />
        <Route exact path="/course-page" component={CoursePage} />
        <Route path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default App;
