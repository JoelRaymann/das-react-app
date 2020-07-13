import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CourseInfoComponent from "../../components/course-info/course-info.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import { selectCourseFromCourseList } from "../../redux/course/course.selectors";

import "./course-info.styles.scss";

function CourseInfoPage({ course }) {
  return (
    <div className="course-info-page-container">
      <div className="course-info-menu-navbar">
        <MenuNavbarComponent />
      </div>
      <div className="course-info-page-content">
        {course ? (
          <CourseInfoComponent course={course} />
        ) : (
          <Redirect to="/course-page" />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    course: selectCourseFromCourseList(
      ownProps.match.params.courseCode.toUpperCase(),
      ownProps.match.params.courseSlot
    )(state),
  };
};

export default connect(mapStateToProps)(CourseInfoPage);
