import React from "react";
import { Modal } from "react-bootstrap";

import ButtonComponent from "../button/button.component";

import { StyledModalBody, StyledModalFooter } from "./error-modal.styles";

function ErrorModalComponent({ show, onHide, errorMessage, fixMessage }) {
  return (
    <div className="error-modal-container">
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <StyledModalBody>
          <p className="error-message-container">{errorMessage}</p>
          <p className="fix-message-container">{fixMessage}</p>
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

export default ErrorModalComponent;
