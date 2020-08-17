import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import QRDisplayComponent from "../qr-display/qr-display.component";
import ButtonComponent from "../button/button.component";

import "./attendance-qr.styles.scss";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remembering the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/**
 * Redux Functional Component
 */
function AttendanceQRComponent({ qrRotateDuration, cipherTexts, course }) {
  const [cipherIndex, setCipherIndex] = useState(0);
  const [endSession, setEndSession] = useState(false);
  const history = useHistory();

  // Get the current date
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const currentDate = `${yyyy}-${mm}-${dd}`;

  useInterval(
    () => {
      if (cipherIndex < cipherTexts.length) {
        setCipherIndex(cipherIndex + 1);
      } else {
        setEndSession(true);
      }
    },
    endSession
      ? history.push(
          `/course-page/${course.courseCode}/${course.courseSlot}/attendance-page/${currentDate}/review-attendance`
        )
      : qrRotateDuration * 1000
  );

  return (
    <div className="attendance-qr-container">
      <div className="attendance-qr-display-container">
        <QRDisplayComponent value={cipherTexts[cipherIndex]} />
      </div>
      <div className="attendance-qr-button-placement">
        <ButtonComponent
          type="button"
          onClick={() => setEndSession(true)}
          $primaryColor="rgba(192, 57, 43, 1.0)"
          $primaryTextColor="#ffffff"
          $secondaryColor="#ffffff"
          $secondaryTextColor="rgba(192, 57, 43, 1.0)"
        >
          End Session
        </ButtonComponent>
      </div>
    </div>
  );
}

export default AttendanceQRComponent;
