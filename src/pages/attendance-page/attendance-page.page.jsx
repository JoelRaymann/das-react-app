import React from "react";
import { Route, Switch } from "react-router-dom";

import StartAttendanceComponent from "../../components/start-attendance/start-attendance.component";
import AttendanceNavbarComponent from "../../components/attendance-navbar/attendance-navbar.component";

import AttendanceQRPage from "../attendance-qr-page/attendance-qr-page.page";
import AttendanceReviewPage from "../attendance-review-page/attendance-review-page.page";

import "./attendance-page.styles.scss";

function AttendancePage() {
  return (
    <div className="attendance-page-container">
      <AttendanceNavbarComponent />
      <Switch>
        <Route
          exact
          path="/course-page/:courseCode/:courseSlot/attendance-page"
          component={StartAttendanceComponent}
        />
        <Route
          path="/course-page/:courseCode/:courseSlot/attendance-page/attendance-qr"
          component={AttendanceQRPage}
        />
        <Route
          path="/course-page/:courseCode/:courseSlot/attendance-page/:date/review-attendance"
          component={AttendanceReviewPage}
        />
      </Switch>
    </div>
  );
}

export default AttendancePage;
