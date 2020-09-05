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
  currentUser,
  sessionToken,
  getStudentAttendanceListStart,
  date,
}) {
  useEffect(() => {
    // Calling the saga to get the student attendance
    getStudentAttendanceListStart(
      course,
      currentUser.username,
      date,
      sessionToken
    );
  }, [getStudentAttendanceListStart, course, currentUser, sessionToken, date]);

  return (
    <div className="attendance-review-page-container">
      <AttendanceReviewTableComponent course={course} date={date} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourseFromCourseList(
    ownProps.match.params.courseCode.toUpperCase(),
    ownProps.match.params.courseSlot
  )(state),
  currentUser: selectCurrentUser(state),
  sessionToken: selectSessionToken(state),
  date: ownProps.match.params.date,
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
