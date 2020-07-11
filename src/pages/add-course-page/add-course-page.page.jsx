import React from "react";

import AddCourseFormComponent from "../../components/add-course-form/add-course-form.component";

import "./add-course-page.styles.scss";

function AddCoursePage() {
  return (
    <div className="add-course-page-container">
      <AddCourseFormComponent />
    </div>
  );
}

export default AddCoursePage();
