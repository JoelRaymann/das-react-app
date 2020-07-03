import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/login-page/login.page";
import RegisterPage from "./pages/register-page/register.page";
import CoursePage from "./pages/course-page/course.page";
import LogoutPage from "./pages/logout-page/logout.pages";

import {
  selectCurrentUser,
  selectSessionToken,
} from "./redux/user/user.selectors";

import "./App.scss";

/**
 * The root component for the react application
 */
function App({ currentUser, sessionToken }) {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/login"
          render={() =>
            currentUser && sessionToken ? (
              <Redirect to="/course-page" />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={() =>
            currentUser && sessionToken ? (
              <Redirect to="/course-page" />
            ) : (
              <RegisterPage />
            )
          }
        />

        <Route
          exact
          path="/course-page"
          render={() =>
            currentUser && sessionToken ? (
              <CoursePage />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route exact path="/logout" component={LogoutPage} />

        <Route
          path="/"
          render={() =>
            currentUser && sessionToken ? (
              <Redirect to="/course-page" />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
});

export default connect(mapStateToProps)(App);
