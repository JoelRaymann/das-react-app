import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import ButtonComponent from "../button/button.component";
import FormInputComponent from "../form-input/form-input.component";

import {
  StyledModalBody,
  StyledModalFooter,
} from "./attendance-form-modal.styles";

function AttendanceFormModalComponent(props) {
  // Set state
  const [sessionDuration, setSessionDuration] = useState("");

  const { onHide } = props;

  /**
   * Function to handle the changes happening in the form input.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleChange(event) {
    const { value } = event.target;

    setSessionDuration(value >= 1 ? value : 1);
  }

  /**
   * Function to handle the submission event of the current form.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="attendance-form-modal-container">
      <Modal {...props} backdrop="static" size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Attention! Please Read the instructions carefully
          </Modal.Title>
        </Modal.Header>
        <StyledModalBody>
          <p className="attendance-instructions">
            Please read the following instructions carefully. This is a one time
            end-to-end process to process the attendance for the current class.
            Once started, there is no turning back. You can cancel the
            attendance process right now by pressing the{" "}
            <span className="go-back-instruction">Close</span> button. NOTE: The
            user has to follow the given instructions at all times to maintain
            the integrity of the attendance process.
          </p>
          <p>
            Please follow the given instructions to proceed with the attendance
            process. The attendance is a 3 stage process as show below:
          </p>
          <ol className="attendance-instruction-list">
            <li className="attendance-point">
              In the first stage, you will be asked for the amount of time for
              which the attendance should be engaged. Eg. if set as 2 minutes -
              then the students can post attendance only for the given 2
              minutes. After this, only the teacher can change the attendance
              manually for the students.
            </li>
            <li className="attendance-point">
              In the second stage, a QR will be posted in the screen. This is
              for students to post their attendance. The teacher have to display
              this QR code to facilitate the attendance process. The teacher
              HAVE to stream the QR code - PHOTOGRAPHS WILL NOT WORK. The
              teacher has the ability to end the QR session well before the
              session time by pressing the end session button.
            </li>
            <li className="attendance-point">
              In the final stage, a interface will be provided to the teacher to
              manually toggle attendance status for individual students. Once
              everything is verified, the teacher can submit the final
              attendance list. The final attendance list cannot be modified. The
              finalized attendance sheet will be displayed as a table. The
              teacher can export the finalized attendance sheet as a excel or a
              csv file.
            </li>
          </ol>
          <p>
            Please proceed with the first stage and enter the attendance session
            duration. Note: The session duration can't be less than a minute
          </p>
          <form onSubmit={handleSubmit} className="attendance-form">
            <FormInputComponent
              label="Session Duration"
              type="number"
              name="sessionDuration"
              iconPath={process.env.PUBLIC_URL + "/assets/icons/user_icon.svg"}
              value={sessionDuration}
              handleChange={handleChange}
              required
            />
            <ButtonComponent
              onClick={onHide}
              type="submit"
              value="Submit Session Details"
              $primaryColor="#2ecc71"
              $primaryTextColor="#ffffff"
              $secondaryColor="#ffffff"
              $secondaryTextColor="#2ecc71"
            >
              Start Session
            </ButtonComponent>
          </form>
        </StyledModalBody>
        <StyledModalFooter>
          <ButtonComponent
            onClick={onHide}
            type="button"
            $primaryColor="#e74c3c"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#e74c3c"
          >
            Close
          </ButtonComponent>
        </StyledModalFooter>
      </Modal>
    </div>
  );
}

export default AttendanceFormModalComponent;
