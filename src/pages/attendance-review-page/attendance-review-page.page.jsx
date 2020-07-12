import React, { useEffect } from "react";
import { connect } from "react-redux";

import AttendanceReviewTableComponent from "../../components/attendance-review/attendance-review.component";

import { getStudentAttendanceListStart } from "../../redux/student/student.actions";
import { selectCourseFromCourseList } from "../../redux/course/course.selectors";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./attendance-review-page.styles.scss";

function AttendanceReviewPage({
  course,
  username,
  sessionToken,
  getStudentAttendanceListStart,
}) {
  // Get the current date
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const currentDate = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    // Calling the saga to get the student attendance
    getStudentAttendanceListStart(course, username, currentDate, sessionToken);
  }, [
    getStudentAttendanceListStart,
    course,
    username,
    sessionToken,
    currentDate,
  ]);

  return (
    <div className="attendance-review-page-container">
      <AttendanceReviewTableComponent
        course={course}
        currentDate={currentDate}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourseFromCourseList(
    ownProps.match.params.courseCode.toUpperCase()
  )(state),
  currentUser: selectCurrentUser(state),
  sessionToken: selectSessionToken(state),
});

const mapStateToDispatch = (dispatch) => ({
  getStudentAttendanceListStart: (course, username, date, sessionToken) =>
    dispatch(
      getStudentAttendanceListStart(course, username, date, sessionToken)
    ),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AttendanceReviewPage);
