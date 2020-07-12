import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import ButtonComponent from "../button/button.component";
import ButtonSpinnerComponent from "../button-spinner/button-spinner.component";
import FormInputComponent from "../form-input/form-input.component";

import { deleteCourseStart } from "../../redux/course/course.actions";
import { selectIsDeletingCourse } from "../../redux/course/course.selectors";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import {
  StyledModalBody,
  StyledModalFooter,
} from "./delete-course-modal.styles";

function DeleteCourseModalComponent({
  show,
  onHide,
  course,
  currentUser,
  sessionToken,
  isDeletingCourse,
  deleteCourseStart,
}) {
  const [confirmCourseName, setConfirmCourseName] = useState("");

  /**
   * Function to handle the changes happening in the form input.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleChange(event) {
    const { value } = event.target;

    setConfirmCourseName(value);
  }

  /**
   * Function to handle the submission event of the current form.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Call the course deletion saga
    deleteCourseStart(course, currentUser.username, sessionToken);
  }

  // Render
  return (
    <div className="attendance-form-modal-container">
      <Modal show={show} onHide={onHide} backdrop="static" size="lg" centered>
        <Modal.Header>
          <Modal.Title>
            Attention! Please read the instructions carefully
          </Modal.Title>
        </Modal.Header>
        <StyledModalBody>
          <p>You are deleting the following course:</p>
          <p>Course Code: {course.courseCode}</p>
          <p>Course Name: {course.courseName}</p>
          <p>Course Slot: {course.courseSlot}</p>
          <p>
            This can't be reverted. For your safety, please type the
            aforementioned course name as it is to proceed with the deletion
            process.
          </p>
          <form onSubmit={handleSubmit} className="course-deletion-form">
            <FormInputComponent
              label="Course Name"
              type="text"
              name="confirmCourseName"
              iconPath={process.env.PUBLIC_URL + "/assets/icons/user_icon.svg"}
              value={confirmCourseName}
              handleChange={handleChange}
              required
            />
            <ButtonComponent
              type="submit"
              value="Submit Course Deletion"
              disabled={
                confirmCourseName !== course.courseName || isDeletingCourse
              }
              $primaryColor="rgba(231, 76, 60,1.0)"
              $primaryTextColor="#ffffff"
              $secondaryColor="#ffffff"
              $secondaryTextColor="rgba(231, 76, 60,1.0)"
            >
              {isDeletingCourse ? <ButtonSpinnerComponent /> : "Delete Course"}
            </ButtonComponent>
          </form>
        </StyledModalBody>
        <StyledModalFooter>
          <ButtonComponent
            onClick={onHide}
            disabled={isDeletingCourse}
            type="button"
            $primaryColor="rgba(192, 57, 43,1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(192, 57, 43,1.0)"
          >
            {isDeletingCourse ? <ButtonSpinnerComponent /> : "Close"}
          </ButtonComponent>
        </StyledModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
  isDeletingCourse: selectIsDeletingCourse,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCourseStart: (course, username, sessionToken, history) =>
    dispatch(deleteCourseStart(course, username, sessionToken, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCourseModalComponent);
