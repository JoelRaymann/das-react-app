import React from "react";

import TableRowComponent from "../table-row/table-row.component";

import "./student-review-table.styles.scss";

function StudentReviewTableComponent({ studentList }) {
  return (
    <ul className="student-review-table-container">
      <TableRowComponent
        rowData={{
          "SNo:": "SNo",
          "Given Name:": "Given Name",
          "Reg. No:": "Reg. No",
        }}
        $primaryBgColor="#23232e"
        $secondaryBgColor="#23232e"
        $primaryTextColor="#ffffff"
        $secondaryTextColor="#ffffff"
        $header
        $columns={3}
      />
      {studentList.map((student, index) => {
        return (
          <TableRowComponent
            key={index + 1}
            rowData={{
              "SNo:": `${index + 1}`,
              "Given Name:": `${student.studentName}`,
              "Reg. No:": `${student.studentId}`,
            }}
            $secondaryBgColor="#141414"
            $columns={3}
          />
        );
      })}
    </ul>
  );
}

export default StudentReviewTableComponent;
