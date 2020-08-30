import React from "react";
import { connect } from "react-redux";

import EditAttendanceFormComponent from "../../components/edit-attendance-form/edit-attendance-form.component";
import MenuNavbarComponent from "../../components/menu-navbar/menu-navbar.component";

import { getDateListStart } from "../../redux/attendance/attendance.actions";

import { selectCourseFromCourseList } from "../../redux/course/course.selectors";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./edit-attendance-page.styles.scss";

function EditAttendancePage({
  course,
  currentUser,
  sessionToken,
  getDateListStart,
}) {
  getDateListStart(course, currentUser.username, sessionToken);

  return (
    <div className="edit-attendance-page-container">
      <MenuNavbarComponent />
      <EditAttendanceFormComponent course={course} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourseFromCourseList(
    ownProps.match.params.courseCode,
    ownProps.match.params.courseSlot
  )(state),
  currentUser: selectCurrentUser(state),
  sessionToken: selectSessionToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  getDateListStart: (course, username, sessionToken) =>
    dispatch(getDateListStart(course, username, sessionToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAttendancePage);
