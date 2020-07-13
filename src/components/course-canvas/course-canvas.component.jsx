import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CourseCardComponent from "../course-card/course-card.component";
import LoaderComponent from "../loader/loader.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import {
  selectCourseList,
  selectFetchingCourseList,
} from "../../redux/course/course.selectors";

import "./course-canvas.styles.scss";

function CourseCanvasComponent({ courseList, fetchingCourseList }) {
  // Render
  return (
    <div className="course-canvas-container">
      {fetchingCourseList ? (
        <div className="loader-canvas-container">
          <LoaderComponent />
        </div>
      ) : courseList ? (
        <div className="course-canvas-page-container">
          <div className="course-canvas-menu-navbar">
            <MenuNavbarComponent />
          </div>
          <div className="course-card-list-container">
            {courseList.map((course) => (
              <CourseCardComponent
                key={`${course.courseCode}-${course.courseSlot}`}
                course={course}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  courseList: selectCourseList,
  fetchingCourseList: selectFetchingCourseList,
});

export default connect(mapStateToProps)(CourseCanvasComponent);
