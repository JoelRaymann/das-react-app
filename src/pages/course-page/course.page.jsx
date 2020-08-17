import React from "react";
import { Route, Switch } from "react-router-dom";

import CourseCanvasComponent from "../../components/course-canvas/course-canvas.component";

import AddCoursePage from "../add-course-page/add-course-page.page";
import CourseInfoPage from "../course-info-page/course-info.page";
import AddStudentPage from "../add-student-page/add-student-page.page";
import AttendancePage from "../attendance-page/attendance-page.page";
import EditAttendancePage from "../edit-attendance-page/edit-attendance-page.page";

import "./course.styles.scss";

/**
 * React Functional Page for displaying the course page.
 *
 * @param {React.Props} props - The properties needed for the course-page.
 */
function CoursePage() {
  return (
    <div className="course-page-container">
      <Switch>
        <Route exact path="/course-page/add-course" component={AddCoursePage} />
        <Route exact path="/course-page" component={CourseCanvasComponent} />

        <Route
          path="/course-page/:courseCode/:courseSlot/attendance-page"
          component={AttendancePage}
        />
        <Route
          path="/course-page/:courseCode/:courseSlot/add-students"
          component={AddStudentPage}
        />

        <Route
          path="/course-page/:courseCode/:courseSlot/edit-attendance"
          component={EditAttendancePage}
        />
        <Route
          path="/course-page/:courseCode/:courseSlot"
          component={CourseInfoPage}
        />
      </Switch>
    </div>
  );
}

export default CoursePage;
