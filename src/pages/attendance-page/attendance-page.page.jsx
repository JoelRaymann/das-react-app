import React from "react";
import { Route, Switch } from "react-router-dom";

import StartAttendanceComponent from "../../components/start-attendance/start-attendance.component";

import AttendanceQRPage from "../attendance-qr-page/attendance-qr-page.page";
import AttendanceReviewPage from "../attendance-review-page/attendance-review-page.page";

import "./attendance-page.styles.scss";

function AttendancePage() {
  return (
    <div className="attendance-page-container">
      <Switch>
        <Route
          exact
          path="/course-page/:courseCode/attendance-page"
          component={StartAttendanceComponent}
        />
        <Route
          path="/course-page/:courseCode/attendance-page/attendance-qr"
          component={AttendanceQRPage}
        />
        <Route
          path="/course-page/:courseCode/attendance-page/review-attendance"
          component={AttendanceReviewPage}
        />
      </Switch>
    </div>
  );
}

export default AttendancePage;
