import React, { useState } from "react";

import TableRowComponent from "../table-row/table-row.component";
import ButtonComponent from "../button/button.component";

import "./attendance-review.styles.scss";

const OperationTypes = {
  PRESENT_TO_ABSENT: "PRESENT_TO_ABSENT",
  ABSENT_TO_PRESENT: "ABSENT_TO_PRESENT",
  REVERT_PRESENT: "REVERT_PRESENT",
  REVERT_ABSENT: "REVERT_ABSENT",
};

function AttendanceReviewTableComponent({ studentAttendanceList }) {
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
        setState({
          ...state,
          absentList: absentList,
          toggledPresentList: toggledPresentList,
        });

        break;

      case OperationTypes.PRESENT_TO_ABSENT:
        toggledAbsentList.push(studentAttendance);
        presentList.splice(
          presentList.findIndex(
            (present) => present.studentId === studentAttendance.studentId
          ),
          1
        );
        setState({
          ...state,
          presentList: presentList,
          toggledAbsentList: toggledAbsentList,
        });
        break;

      case OperationTypes.REVERT_PRESENT:
        absentList.push(studentAttendance);
        toggledPresentList.splice(
          toggledPresentList.findIndex(
            (present) => present.studentId === studentAttendance.studentId
          ),
          1
        );
        setState({
          ...state,
          absentList: absentList,
          toggledPresentList: toggledPresentList,
        });
        break;

      case OperationTypes.REVERT_ABSENT:
        presentList.push(studentAttendance);
        toggledAbsentList.splice(
          toggledAbsentList.findIndex(
            (absent) => absent.studentId === studentAttendance.studentId
          ),
          1
        );
        setState({
          ...state,
          presentList: presentList,
          toggledAbsentList: toggledAbsentList,
        });
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
  function handleCommitClick(event) {
    event.preventDefault();

    console.log(
      `Toggled Absent Boiis: `,
      toggledAbsentList.map((ele) => ele.studentId)
    );
    console.log(
      `Toggled Present Boiis: `,
      toggledPresentList.map((ele) => ele.studentId)
    );
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
                  handleDoubleClick(toggledAbsent, OperationTypes.REVERT_ABSENT)
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
                  handleDoubleClick(absentee, OperationTypes.ABSENT_TO_PRESENT)
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
      </div>
    </div>
  );
}

export default AttendanceReviewTableComponent;
