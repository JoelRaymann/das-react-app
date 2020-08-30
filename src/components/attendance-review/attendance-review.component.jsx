import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import axios from "axios";

import TableRowComponent from "../table-row/table-row.component";
import ButtonComponent from "../button/button.component";
import LoaderComponent from "../loader/loader.component";

import { getStudentAttendanceListStart } from "../../redux/student/student.actions";
import {
  selectIsFetchingStudentAttendanceList,
  selectStudentAttendanceList,
} from "../../redux/student/student.selectors";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import BASEURL from "../../redux/network.env";

import "./attendance-review.styles.scss";

const OperationTypes = {
  PRESENT_TO_ABSENT: "PRESENT_TO_ABSENT",
  ABSENT_TO_PRESENT: "ABSENT_TO_PRESENT",
  REVERT_PRESENT: "REVERT_PRESENT",
  REVERT_ABSENT: "REVERT_ABSENT",
};

function AttendanceReviewTableComponent({
  studentAttendanceList,
  isFetchingStudentAttendanceList,
  currentUser,
  sessionToken,
  date,
  course,
  getStudentAttendanceListStart,
}) {
  const [state, setState] = useState({
    presentList: studentAttendanceList.filter(
      (studentAttendance) => studentAttendance.attendanceStatus === true
    ),
    absentList: studentAttendanceList.filter(
      (studentAttendance) => studentAttendance.attendanceStatus === false
    ),
    toggledPresentList: [],
    toggledAbsentList: [],
  });

  const {
    presentList,
    absentList,
    toggledPresentList,
    toggledAbsentList,
  } = state;
  const history = useHistory();

  useEffect(() => {
    setState((state) => ({
      ...state,
      presentList: studentAttendanceList.filter(
        (studentAttendance) => studentAttendance.attendanceStatus === true
      ),
      absentList: studentAttendanceList.filter(
        (studentAttendance) => studentAttendance.attendanceStatus === false
      ),
      toggledPresentList: [],
      toggledAbsentList: [],
    }));
  }, [studentAttendanceList]);

  /**
   * Function to handle the entire logic for
   * toggling attendance. NOTE: You can add sorting
   * here if possible.
   *
   *
   * @param {StudentAttendanceClass} studentAttendance
   * @param {String} usecase - The operation used
   */
  function handleDoubleClick(studentAttendance, operation) {
    switch (operation) {
      case OperationTypes.ABSENT_TO_PRESENT:
        toggledPresentList.push(studentAttendance);
        absentList.splice(
          absentList.findIndex(
            (absent) => absent.studentId === studentAttendance.studentId
          ),
          1
        );
        setState((state) => ({
          ...state,
          absentList: absentList,
          toggledPresentList: toggledPresentList,
        }));

        break;

      case OperationTypes.PRESENT_TO_ABSENT:
        toggledAbsentList.push(studentAttendance);
        presentList.splice(
          presentList.findIndex(
            (present) => present.studentId === studentAttendance.studentId
          ),
          1
        );
        setState((state) => ({
          ...state,
          presentList: presentList,
          toggledAbsentList: toggledAbsentList,
        }));
        break;

      case OperationTypes.REVERT_PRESENT:
        absentList.push(studentAttendance);
        toggledPresentList.splice(
          toggledPresentList.findIndex(
            (present) => present.studentId === studentAttendance.studentId
          ),
          1
        );
        setState((state) => ({
          ...state,
          absentList: absentList,
          toggledPresentList: toggledPresentList,
        }));
        break;

      case OperationTypes.REVERT_ABSENT:
        presentList.push(studentAttendance);
        toggledAbsentList.splice(
          toggledAbsentList.findIndex(
            (absent) => absent.studentId === studentAttendance.studentId
          ),
          1
        );
        setState((state) => ({
          ...state,
          presentList: presentList,
          toggledAbsentList: toggledAbsentList,
        }));
        break;
      default:
        break;
    }
  }

  /**
   * Function to handle the commit click.
   *
   * @param {React.SyntheticEvent} event - The synthetic event.
   */
  async function handleCommitClick(event) {
    // TODO: Migrate to saga later

    const payload = [];

    toggledPresentList.forEach((toggled) => {
      payload.push({
        username: toggled.studentId,
        name: toggled.studentName,
        date: date,
        is_present: true,
      });
    });

    toggledAbsentList.forEach((toggled) => {
      payload.push({
        username: toggled.studentId,
        name: toggled.studentName,
        date: date,
        is_present: false,
      });
    });

    try {
      const attendanceResponse = await axios.patch(
        `${BASEURL}/attendance/course/${course.courseCode}/${course.courseSlot}/${currentUser.username}/${date}/batch_update`,
        payload,
        {
          headers: {
            Authorization: `Token ${sessionToken}`,
          },
        }
      );
      const attendanceResponseData = await attendanceResponse.data;
      console.log(attendanceResponseData);

      // Get the update student list
      getStudentAttendanceListStart(
        course,
        currentUser.username,
        date,
        sessionToken
      );
    } catch (error) {
      alert(`[ERROR]: The attendance toggling faced a error ${error}`);
    }
  }

  /**
   * Function to handle the reset button.
   *
   * @param {React.SyntheticEvent} event - The synthetic event.
   */
  function handleResetClick(event) {
    event.preventDefault();

    setState({
      presentList: studentAttendanceList.filter(
        (studentAttendance) => studentAttendance.attendanceStatus === true
      ),
      absentList: studentAttendanceList.filter(
        (studentAttendance) => studentAttendance.attendanceStatus === false
      ),
      toggledPresentList: [],
      toggledAbsentList: [],
    });
  }

  if (isFetchingStudentAttendanceList) {
    return <LoaderComponent />;
  } else {
    return (
      <div className="student-attendance-review-table-container">
        <div className="student-attendance-review-table">
          <div className="absent-student-table-container">
            <h1 className="table-header">Absentees</h1>
            <div className="absent-student-table">
              <TableRowComponent
                rowData={{
                  "Given Name:": "Given Name",
                  "Reg. No:": "Reg. No",
                }}
                $primaryBgColor="rgba(189, 195, 199, 1.0)"
                $secondaryBgColor="rgba(189, 195, 199, 1.0)"
                $primaryTextColor="#000000"
                $secondaryTextColor="#000000"
                $columns={3}
                $header
                $sticky
                $ignoreFirstColumnCompression
              />
              {state.toggledAbsentList.map((toggledAbsent, index) => (
                <div
                  key={toggledAbsent.studentId}
                  className="toggled"
                  onDoubleClick={() =>
                    handleDoubleClick(
                      toggledAbsent,
                      OperationTypes.REVERT_ABSENT
                    )
                  }
                >
                  <TableRowComponent
                    rowData={{
                      "Given Name:": `${toggledAbsent.studentName}`,
                      "Reg. No:": `${toggledAbsent.studentId}`,
                    }}
                    key={toggledAbsent.studentId}
                    $primaryBgColor="rgba(243, 156, 18, 0.3)"
                    $secondaryBgColor="rgba(241, 196, 15, 0.3)"
                    $primaryTextColor="#000000"
                    $secondaryTextColor="#000000"
                    $columns={3}
                    $ignoreFirstColumnCompression
                  />
                </div>
              ))}
              {state.absentList.map((absentee, index) => (
                <div
                  className="table-row-element"
                  key={absentee.studentId}
                  onDoubleClick={() =>
                    handleDoubleClick(
                      absentee,
                      OperationTypes.ABSENT_TO_PRESENT
                    )
                  }
                >
                  <TableRowComponent
                    className="row-element"
                    key={absentee.studentId}
                    rowData={{
                      "Given Name:": `${absentee.studentName}`,
                      "Reg. No:": `${absentee.studentId}`,
                    }}
                    $primaryBgColor="rgba(231, 76, 60, 0.3)"
                    $secondaryBgColor="rgba(231, 76, 60, 0.3)"
                    $primaryTextColor="#000000"
                    $secondaryTextColor="#000000"
                    $columns={3}
                    $ignoreFirstColumnCompression
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="present-student-table-container">
            <h1 className="table-header">Presentees</h1>
            <div className="present-student-table">
              <TableRowComponent
                rowData={{
                  "Given Name:": "Given Name",
                  "Reg. No:": "Reg. No",
                }}
                $primaryBgColor="rgba(189, 195, 199, 1.0)"
                $secondaryBgColor="rgba(189, 195, 199, 1.0)"
                $primaryTextColor="#000000"
                $secondaryTextColor="#000000"
                $columns={3}
                $header
                $ignoreFirstColumnCompression
              />
              {state.toggledPresentList.map((toggledPresent, index) => (
                <div
                  className="toggled"
                  key={toggledPresent.studentId}
                  onDoubleClick={() =>
                    handleDoubleClick(
                      toggledPresent,
                      OperationTypes.REVERT_PRESENT
                    )
                  }
                >
                  <TableRowComponent
                    key={toggledPresent.studentId}
                    rowData={{
                      "Given Name:": `${toggledPresent.studentName}`,
                      "Reg. No:": `${toggledPresent.studentId}`,
                    }}
                    $primaryBgColor="rgba(243, 156, 18, 0.3)"
                    $secondaryBgColor="rgba(241, 196, 15, 0.3)"
                    $primaryTextColor="#000000"
                    $secondaryTextColor="#000000"
                    $columns={3}
                    $ignoreFirstColumnCompression
                  />
                </div>
              ))}
              {state.presentList.map((present, index) => (
                <div
                  className="table-row-element"
                  key={present.studentId}
                  onDoubleClick={() =>
                    handleDoubleClick(present, OperationTypes.PRESENT_TO_ABSENT)
                  }
                >
                  <TableRowComponent
                    key={present.studentId}
                    rowData={{
                      "Given Name:": `${present.studentName}`,
                      "Reg. No:": `${present.studentId}`,
                    }}
                    $primaryBgColor="rgba(39, 174, 96, 0.3)"
                    $secondaryBgColor="rgba(39, 174, 96, 0.3)"
                    $primaryTextColor="#000000"
                    $secondaryTextColor="#000000"
                    $columns={3}
                    $ignoreFirstColumnCompression
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="confirm-button-container">
          <ButtonComponent
            type="button"
            onClick={handleResetClick}
            $primaryColor="rgba(192, 57, 43, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(192, 57, 43,1.0)"
          >
            Reset Changes
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={handleCommitClick}
            $primaryColor="rgba(39, 174, 96, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(39, 174, 96, 1.0)"
          >
            Commit Changes
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() => {
              try {
                handleCommitClick();
                history.push("/course-page");
              } catch (error) {
                alert(`[ERROR]: Error: ${error}`);
              }
            }}
            $primaryColor="rgba(39, 174, 96, 1.0)"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="rgba(39, 174, 96, 1.0)"
          >
            Commit and Go Back
          </ButtonComponent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  studentAttendanceList: selectStudentAttendanceList,
  isFetchingStudentAttendanceList: selectIsFetchingStudentAttendanceList,
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
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
)(AttendanceReviewTableComponent);
