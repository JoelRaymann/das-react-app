import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ButtonComponent from "../button/button.component";

function ReviewAlertModalComponent({ show, onHide }) {
  const history = useHistory();

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        There are some uncommitted changes. Do you wish to ignore these changes
        and go back?
      </Modal.Body>
      <Modal.Footer>
        <ButtonComponent
          onClick={() => {
            history.push("/course-page");
          }}
        >
          Yes
        </ButtonComponent>
        <ButtonComponent onClick={onHide}>No</ButtonComponent>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewAlertModalComponent;
