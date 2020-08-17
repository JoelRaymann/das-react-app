import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import EditAttendanceFormComponent from "../../components/edit-attendance-form/edit-attendance-form.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";
import ErrorModalComponent from "../../components/error-modal/error-modal.component";

import { CourseClass } from "../../classes/course.class";

import "./test-page.styles.scss";

function TestPage() {
  const testCourse = new CourseClass("Python For Programming", "CSE1001", "F1");
  const [error, showError] = useState(true);
  const history = useHistory();

  return (
    <div className="test-page-container">
      <div className="edit-attendance-page-menubar">
        <MenuNavbarComponent />
      </div>
      <ErrorModalComponent
        show={error}
        onHide={() => {
          showError(false);
          history.push("/login");
        }}
        errorMessage={"This is a error"}
        fixMessage={"This is a fix"}
      />
    </div>
  );
}

export default TestPage;
