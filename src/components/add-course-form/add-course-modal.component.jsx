import React from "react";
import { Modal } from "react-bootstrap";

function AddCourseModalComponent({
  show,
  onHide,
  titleMessage,
  bodyMessage,
  children,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>{titleMessage}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyMessage}</Modal.Body>
      <Modal.Footer>{children}</Modal.Footer>
    </Modal>
  );
}

export default AddCourseModalComponent;
