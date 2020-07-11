import React from "react";
import { connect } from "react-redux";

import AddStudentComponent from "../../components/add-student/add-student.component";

import { selectCourseFromCourseList } from "../../redux/course/course.selectors";

import "./add-student-page.styles.scss";

function AddStudentPage({ course }) {
  return (
    <div className="add-student-page-container">
      <AddStudentComponent course={course} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourseFromCourseList(ownProps.match.params.courseCode)(state),
});

export default connect(mapStateToProps)(AddStudentPage);
