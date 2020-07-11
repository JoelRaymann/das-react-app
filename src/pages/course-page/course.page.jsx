import React from "react";

import CourseCanvasComponent from "../../components/course-canvas/course-canvas.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import CourseInfoPage from "../course-info-page/course-info.page";
import AddStudentPage from "../add-student-page/add-student-page.page";

import "./course.styles.scss";
import { Route, Switch } from "react-router-dom";

/**
 * React Functional Page for displaying the course page.
 *
 * @param {React.Props} props - The properties needed for the course-page.
 */
function CoursePage() {
  return (
    <div className="course-page-container">
      <MenuNavbarComponent />
      <Switch>
        <Route
          path="/course-page/:courseCode/add-students"
          component={AddStudentPage}
        />
        <Route path="/course-page/:courseCode" component={CourseInfoPage} />
        <Route exact path="/course-page" component={CourseCanvasComponent} />
      </Switch>
    </div>
  );
}

export default CoursePage;
