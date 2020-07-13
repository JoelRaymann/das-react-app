import React from "react";

import EditAttendanceFormComponent from "../../components/edit-attendance-form/edit-attendance-form.component";
import { CourseClass } from "../../classes/course.class";

import "./test-page.styles.scss";

function TestPage() {
  const testCourse = new CourseClass("Python For Programming", "CSE1001", "F1");

  return (
    <div className="test-page-container">
      <EditAttendanceFormComponent
        dateLists={["2020-11-20", "2020-11-21", "2020-11-22"]}
      />
    </div>
  );
}

export default TestPage;
