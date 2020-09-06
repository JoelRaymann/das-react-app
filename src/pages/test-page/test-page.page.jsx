import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AddStudentCSVComponent from "../../components/add-student-csv/add-student-csv.component";

import "./test-page.styles.scss";

function TestPage() {
  return (
    <div className="test-page-container">
      <AddStudentCSVComponent />
    </div>
  );
}

export default TestPage;
