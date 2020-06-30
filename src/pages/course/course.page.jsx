import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./course.styles.scss";

/**
 * React Functional Page for displaying the course page.
 *
 * @param {React.Props} props - The properties needed for the course-page.
 */
function CoursePage(props) {
  return (
    <div className="course-page-container">
      <h1>Welcome to course page</h1>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  token: selectSessionToken,
});

export default connect(mapStateToProps)(CoursePage);
