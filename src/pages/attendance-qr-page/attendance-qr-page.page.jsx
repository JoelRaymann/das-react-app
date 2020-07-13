import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AttendanceQRComponent from "../../components/attendance-qr/attendance-qr.component";
import LoaderComponent from "../../components/loader/loader.component";

import { selectCourseFromCourseList } from "../../redux/course/course.selectors";
import {
  selectCipherTexts,
  selectCipherTextsError,
} from "../../redux/attendance/attendance.selectors";

import "./attendance-qr-page.styles.scss";

function AttendanceQRPage({ cipherTexts, cipherTextsError, course }) {
  if (cipherTexts.length > 0) {
    return (
      <div className="attendance-qr-page-container">
        <AttendanceQRComponent
          course={course}
          cipherTexts={cipherTexts}
          qrRotateDuration={3}
        />
      </div>
    );
  } else if (cipherTextsError) {
    return <Redirect to="/course-page" />;
  } else {
    return <LoaderComponent />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  cipherTexts: selectCipherTexts(state),
  cipherTextsError: selectCipherTextsError(state),
  course: selectCourseFromCourseList(
    ownProps.match.params.courseCode.toUpperCase(),
    ownProps.match.params.courseSlot
  )(state),
});

export default connect(mapStateToProps)(AttendanceQRPage);
