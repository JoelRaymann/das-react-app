import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LoaderComponent from "../loader/loader.component";
import StudentReviewTableComponent from "../../components/student-review-table/student-review-table.component";
import ButtonComponent from "../../components/button/button.component";

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

  // Component did mount
  useEffect(() => {
    console.log(course);
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
        <StudentReviewTableComponent
          studentList={studentLists[course.courseCode]}
        />
        <div className="course-info-button-placement">
          <ButtonComponent
            type="button"
            onClick={() => history.push("/course-page")}
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            Add Students
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => history.push("/course-page")}
            $primaryColor="#00ff00"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#00ff00"
          >
            Take Attendance
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => history.push("/course-page")}
            $primaryColor="#ff0000"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#ff0000"
          >
            Go Back
          </ButtonComponent>
        </div>
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
