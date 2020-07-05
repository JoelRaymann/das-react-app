import React from "react";
import { useHistory } from "react-router-dom";

import "./course-card.styles.scss";

function CourseCardComponent({ course }) {
  const { courseCode, courseName, courseSlot, courseIcon } = course;
  const history = useHistory();

  return (
    <div className="course-card-container">
      <div className="course-card-header">
        <div className="course-card-header-content">
          {/* Your Header Content Here */}

          <img src={courseIcon} className="course-icon" alt="course-icon" />
          <h3 className="course-code">{courseCode}</h3>
        </div>
      </div>
      <div className="course-card-body">
        <div className="course-card-body-content">
          {/* Your Body Content Here */}

          <h3 className="course-slot">Slot: {courseSlot}</h3>
          <h3 className="course-name">{courseName}</h3>
          <div className="button-container">
            <button
              type="button"
              onClick={() => {
                history.push(`/course-page/${courseCode}`);
              }}
              className="course-button"
            >
              More Info
            </button>
            <button type="button" className="course-button">
              Take Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCardComponent;
