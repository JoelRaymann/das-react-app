import React from "react";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import QRDisplayComponent from "../qr-display/qr-display.component";
import ButtonComponent from "../button/button.component";

import { cleanStudentList } from "../../redux/student/student.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./add-student.styles.scss";

/**
 * React Functional Component to allow students add themselves to a
 * particular course.
 *
 * @param {CourseClass} course - The course to add students to.
 */
function AddStudentComponent({ course, currentUser, cleanStudentList }) {
  const history = useHistory();

  const qrPayload = JSON.stringify({
    name: course.courseName,
    courseID: course.courseCode,
    slot: course.courseSlot,
    teacher: {
      username: currentUser.username,
      email: currentUser.email,
      name: currentUser.name,
      is_verified: currentUser.isVerified,
    },
  });

  return (
    <div className="add-student-container">
      <div className="add-student-qr-display-container">
        <QRDisplayComponent value={qrPayload} />
      </div>
      <div className="add-student-button-placement">
        <ButtonComponent
          onClick={() => {
            cleanStudentList();
            history.push(`/course-page/${course.courseCode}`);
          }}
          type="button"
        >
          Go Back
        </ButtonComponent>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  cleanStudentList: () => dispatch(cleanStudentList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentComponent);
