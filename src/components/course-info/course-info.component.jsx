import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LoaderComponent from "../loader/loader.component";
import StudentReviewTableComponent from "../../components/student-review-table/student-review-table.component";
import ButtonComponent from "../../components/button/button.component";
import DeleteCourseModalComponent from "../delete-course-modal/delele-course-modal.component";

import { getStudentListStart } from "../../redux/student/student.actions";

import { selectStudentLists } from "../../redux/student/student.selectors";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./course-info.styles.scss";

function CourseInfoComponent({
  course,
  currentUser,
  sessionToken,
  studentLists,
  getStudentListStart,
}) {
  const history = useHistory();

  const [deleteModal, toggleDeleteModal] = useState(false);

  // Component did mount
  useEffect(() => {
    if (course.courseCode in studentLists) {
      console.log("[DEBUG]: Data already exist fired!");
    } else {
      console.log(
        `[DEBUG]: Student List Data Fetching Fired! ${course.courseCode}`
      );
      getStudentListStart(course, currentUser.username, sessionToken);
    }
  }, [course, getStudentListStart, currentUser, sessionToken, studentLists]);

  // Render
  if (course.courseCode in studentLists) {
    return (
      <div className="course-info-container">
        <div className="course-info-header-container">
          <div className="course-info-header">
            {`${course.courseCode} - ${course.courseName}`}
          </div>
          <div
            onClick={() => toggleDeleteModal(true)}
            className="delete-course-button"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/icons/course-info-icons/delete_icon.svg"
              }
              alt="Delete Course Icon"
              className="delete-course-icon"
            />
          </div>
        </div>
        <StudentReviewTableComponent
          studentList={studentLists[course.courseCode]}
        />
        <div className="course-info-button-placement">
          <ButtonComponent
            type="button"
            onClick={() =>
              history.push(`/course-page/${course.courseCode}/add-students`)
            }
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            Add Students
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => {
              console.log("redirecting");
              history.push(`/course-page/${course.courseCode}/attendance-page`);
            }}
            $primaryColor="rgba(39, 174, 96, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(39, 174, 96, 1.0)"
          >
            Take Attendance
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => history.push("/course-page")}
            $primaryColor="rgba(192, 57, 43, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(192, 57, 43, 1.0)"
          >
            Go Back
          </ButtonComponent>
        </div>
        <DeleteCourseModalComponent
          show={deleteModal}
          onHide={() => toggleDeleteModal(false)}
          course={course}
        />
        ;
      </div>
    );
  } else {
    return <LoaderComponent />;
  }
  // return <div>{course}</div>;
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
  studentLists: selectStudentLists,
});

const mapDispatchtoProps = (dispatch) => ({
  getStudentListStart: (course, username, token) =>
    dispatch(getStudentListStart(course, username, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CourseInfoComponent);
