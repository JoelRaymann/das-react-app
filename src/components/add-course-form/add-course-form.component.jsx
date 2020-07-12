import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import ButtonSpinnerComponent from "../button-spinner/button-spinner.component";

import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";
import { selectAddCourseInProgress } from "../../redux/course/course.selectors";

import { addCourseStart } from "../../redux/course/course.actions";

import CourseClass from "../../classes/course.class";

import "./add-course-form.styles.scss";

function AddCourseFormComponent({
  currentUser,
  sessionToken,
  addCourseInProgress,
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

    setCourseDetails({
      courseName: "",
      courseCode: "",
      courseSlot: "",
    });
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
          iconPath={process.env.PUBLIC_URL + "/assets/icons/user_icon.svg"}
          value={courseName}
          required
        />
        <FormInputComponent
          label="Course Code"
          handleChange={handleChange}
          type="text"
          name="courseCode"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/lock_icon.svg"}
          value={courseCode}
          required
        />
        <FormInputComponent
          label="Course Slot"
          handleChange={handleChange}
          type="text"
          name="courseSlot"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/lock_icon.svg"}
          value={courseSlot}
          required
        />
        <div className="add-course-button-container">
          <ButtonComponent
            type="submit"
            value="Submit Login"
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            {addCourseInProgress ? <ButtonSpinnerComponent /> : "Add Course"}
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => history.push("/course-page")}
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            Go Back
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
  addCourseInProgress: selectAddCourseInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  addCourseStart: (newCourse, currentUser, sessionToken) =>
    dispatch(addCourseStart(newCourse, currentUser, sessionToken)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourseFormComponent);
