import React, { useState } from "react";

import AttendanceFormModalComponent from "../../components/attendance-form-modal/attendance-form-modal.component";

import "./attendance-page.styles.scss";

function AttendancePage() {
  const [modalShow, toggleModalShow] = useState(false);

  return (
    <div className="attendance-page-container">
      HELLO FRANKLIN
      <button type="button" onClick={() => toggleModalShow(true)}>
        Hella Bread
      </button>
      <AttendanceFormModalComponent
        show={modalShow}
        onHide={() => toggleModalShow(false)}
      />
    </div>
  );
}

export default AttendancePage;
