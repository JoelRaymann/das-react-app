import React from "react";

import AddCourseFormComponent from "../../components/add-course-form/add-course-form.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import "./add-course-page.styles.scss";

function AddCoursePage() {
  return (
    <div className="add-course-page-container">
      <MenuNavbarComponent />
      <AddCourseFormComponent />
    </div>
  );
}

export default AddCoursePage;
