import React from "react";

import AttendanceReviewTableComponent from "../../components/attendance-review/attendance-review.component";

import { TestAttendanceList } from "../../data/students-attendance.data";

import "./test-page.styles.scss";

function TestPage() {
  return (
    <div className="test-page-container">
      <AttendanceReviewTableComponent
        studentAttendanceList={TestAttendanceList}
      />
    </div>
  );
}

export default TestPage;
