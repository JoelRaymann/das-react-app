import React, { useState } from "react";

import DeleteCourseModalComponent from "../../components/delete-course-modal/delele-course-modal.component";

import { CourseClass } from "../../classes/course.class";

import "./test-page.styles.scss";

function TestPage() {
  const testCourse = new CourseClass("Python For Programming", "CSE1001", "F1");
  const [deleteModal, toggleDeleteModal] = useState(true);

  return (
    <div className="test-page-container">
      <button onClick={() => toggleDeleteModal(true)}>Delete Course</button>

      <DeleteCourseModalComponent
        show={deleteModal}
        onHide={() => toggleDeleteModal(false)}
        course={testCourse}
      />
    </div>
  );
}

export default TestPage;
