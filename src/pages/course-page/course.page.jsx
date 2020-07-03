import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CourseCanvasComponent from "../../components/course-canvas/course-canvas.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./course.styles.scss";

/**
 * React Functional Page for displaying the course page.
 *
 * @param {React.Props} props - The properties needed for the course-page.
 */
function CoursePage({ currentUser }) {
  return (
    <div className="course-page-container">
      <MenuNavbarComponent user={currentUser} />
      <CourseCanvasComponent />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CoursePage);
