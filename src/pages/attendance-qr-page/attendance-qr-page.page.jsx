import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";

import AttendanceQRComponent from "../../components/attendance-qr/attendance-qr.component";
import LoaderComponent from "../../components/loader/loader.component";

import {
  selectCipherTexts,
  selectCipherTextsError,
} from "../../redux/attendance/attendance.selectors";

import "./attendance-qr-page.styles.scss";

function AttendanceQRPage({ cipherTexts, cipherTextsError, match }) {
  if (cipherTexts.length > 0) {
    return (
      <div className="attendance-qr-page-container">
        <AttendanceQRComponent
          courseCode={match.params.courseCode}
          cipherTexts={cipherTexts}
          qrRotateDuration={3}
        />
      </div>
    );
  } else if (cipherTextsError) {
    return <Redirect to="/course-page" />;
  } else {
    return <LoaderComponent />;
  }
}

const mapStateToProps = createStructuredSelector({
  cipherTexts: selectCipherTexts,
  cipherTextsError: selectCipherTextsError,
});

export default connect(mapStateToProps)(AttendanceQRPage);
