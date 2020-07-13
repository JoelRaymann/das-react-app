import React, { useState } from "react";
import { connect } from "react-redux";

import AttendanceFormModalComponent from "../../components/attendance-form-modal/attendance-form-modal.component";

import { selectCourseFromCourseList } from "../../redux/course/course.selectors";

import "./start-attendance.styles.scss";

function StartAttendanceComponent({ course }) {
  const [attendanceModal, toggleAttendanceModal] = useState(true);

  return (
    <div className="start-attendance-container">
      {}
      <AttendanceFormModalComponent
        show={attendanceModal}
        onHide={() => toggleAttendanceModal(false)}
        course={course}
        qrRotationDuration={5}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  course: selectCourseFromCourseList(
    ownProps.match.params.courseCode.toUpperCase(),
    ownProps.match.params.courseSlot
  )(state),
});

export default connect(mapStateToProps)(StartAttendanceComponent);
