import React from "react";

import TableRowComponent from "../table-row/table-row.component";

import "./student-review-table.styles.scss";

function StudentReviewTableComponent({ studentList }) {
  function handleHoverColor(attendancePercent) {
    if (attendancePercent < 75) {
      return "rgba(231, 76, 60, 1)";
    } else if (attendancePercent > 75) {
      return "rgba(0, 0, 0, 1)";
    } else {
      return "rgba(243, 156, 18, 1)";
    }
  }

  return (
    <table className="student-review-table-container">
      <TableRowComponent
        rowData={{
          "SNo:": "SNo",
          "Given Name:": "Given Name",
          "Reg. No:": "Reg. No",
          "Attendance Percentage: ": "Attendance Percentage",
        }}
        $primaryBgColor="#23232e"
        $secondaryBgColor="#23232e"
        $primaryTextColor="#ffffff"
        $secondaryTextColor="#ffffff"
        $header
        $columns={4}
      />
      {studentList.map((student, index) => {
        return (
          <TableRowComponent
            key={index + 1}
            rowData={{
              "SNo:": `${index + 1}`,
              "Given Name:": `${student.studentName}`,
              "Reg. No:": `${student.studentId}`,
              "Attendance Percentage": `${student.attendancePercent}%`,
            }}
            $primaryTextColor={`${handleHoverColor(student.attendancePercent)}`}
            $secondaryTextColor="#000000"
            // $primaryBgColor={`${handleHoverColor(student.attendancePercent)}`}
            // $secondaryBgColor={`${handleHoverColor(student.attendancePercent)}`}
            $columns={4}
          />
        );
      })}
    </table>
  );
}

export default StudentReviewTableComponent;
