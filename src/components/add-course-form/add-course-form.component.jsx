import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import ButtonSpinnerComponent from "../button-spinner/button-spinner.component";
import AddCourseModalComponent from "./add-course-modal.component";

import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";
import {
  selectAddCourseInProgress,
  selectAddCourseError,
} from "../../redux/course/course.selectors";

import { addCourseStart } from "../../redux/course/course.actions";

import CourseClass from "../../classes/course.class";

import "./add-course-form.styles.scss";

function AddCourseFormComponent({
  currentUser,
  sessionToken,
  addCourseInProgress,
  addCourseError,
  addCourseStart,
}) {
  const history = useHistory();

  // Define states
  const [courseDetails, setCourseDetails] = useState({
    courseName: "",
    courseCode: "",
    courseSlot: "",
  });
  const { courseName, courseCode, courseSlot } = courseDetails;

  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  /**
   * Function to handle the changes happening in the form input.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleChange(event) {
    const { value, name } = event.target;

    setCourseDetails({
      ...courseDetails,
      [name]: value,
    });
  }

  /**
   * Function to handle the submission event of the current form.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleSubmit(event) {
    event.preventDefault();

    if (addCourseInProgress) {
      alert("[INFO]: Adding Course already in progress. Please Wait.");
      return;
    }

    const newCourse = new CourseClass(courseName, courseCode, courseSlot);
    addCourseStart(newCourse, currentUser, sessionToken);
    handleModalShow();
  }

  return (
    <div className="add-course-form-container">
      <h2 className="add-course-title">Fill up course details</h2>
      <form onSubmit={handleSubmit} className="add-course-form">
        <FormInputComponent
          label="Course Name"
          handleChange={handleChange}
          type="text"
          name="courseName"
          iconPath={
            process.env.PUBLIC_URL +
            "/assets/icons/add-course-icons/add_course_icon.svg"
          }
          value={courseName}
          required
        />
        <FormInputComponent
          label="Course Code"
          handleChange={handleChange}
          type="text"
          name="courseCode"
          iconPath={
            process.env.PUBLIC_URL +
            "/assets/icons/add-course-icons/add_course_icon.svg"
          }
          value={courseCode}
          required
        />
        <FormInputComponent
          label="Course Slot"
          handleChange={handleChange}
          type="text"
          name="courseSlot"
          iconPath={
            process.env.PUBLIC_URL +
            "/assets/icons/add-course-icons/add_course_icon.svg"
          }
          value={courseSlot}
          required
        />
        <div className="add-course-button-container">
          <ButtonComponent
            type="submit"
            id="confirm"
            value="Submit Add Course"
            $primaryColor="#23232e"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#ffffff"
          >
            {addCourseInProgress ? <ButtonSpinnerComponent /> : "Add Course"}
          </ButtonComponent>
          <ButtonComponent
            type="button"
            id="btn"
            onClick={() => history.push("/course-page")}
            $primaryColor="rgba(192, 57, 43, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(192, 57, 43, 1.0)"
          >
            Go Back
          </ButtonComponent>
        </div>
      </form>

      {/* Handling Status message with Course Modal Component */}
      <AddCourseModalComponent
        show={showModal}
        onHide={handleModalClose}
        titleMessage={
          addCourseInProgress
            ? "Processing Request"
            : `${addCourseError ? "Error" : "Success"}`
        }
        bodyMessage={
          addCourseInProgress
            ? "Course Addition in Progress. Please wait."
            : `The course ${courseName} with course code: ${courseCode}
         is ${
           addCourseError ? "NOT" : "successfully"
         } added to the slot: ${courseSlot} ${
                addCourseError
                  ? `due to the following error: ${addCourseError}`
                  : ""
              }`
        }
      >
        <ButtonComponent
          disabled={addCourseInProgress}
          onClick={() => {
            setCourseDetails({
              courseName: "",
              courseCode: "",
              courseSlot: "",
            });
            handleModalClose();
          }}
        >
          {addCourseError ? "Try Again" : "Add More"}
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            history.push("/course-page");
            handleModalClose();
          }}
          disabled={addCourseInProgress}
        >
          Go Back
        </ButtonComponent>
      </AddCourseModalComponent>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
  addCourseInProgress: selectAddCourseInProgress,
  addCourseError: selectAddCourseError,
});

const mapDispatchToProps = (dispatch) => ({
  addCourseStart: (newCourse, currentUser, sessionToken) =>
    dispatch(addCourseStart(newCourse, currentUser, sessionToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourseFormComponent);
