import styled from "styled-components";
import { ModalBody, ModalFooter } from "react-bootstrap";

export const StyledModalBody = styled(ModalBody)`
  min-width: 600px;
  font-weight: 500;

  .attendance-instructions {
    text-align: justify;

    .go-back-instruction {
      display: inline-block;
      color: #ffffff;
      font-size: 12px;
      border: 1px solid transparent;
      padding: 4px 18px;
      text-transform: uppercase;
      font-weight: bolder;
      border-radius: 4px;
      background-color: #e74c3c;
    }
  }

  .attendance-instruction-list {
    .attendance-point {
      text-align: left;
      margin: 0.5rem 0;
    }
  }

  .attendance-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledModalFooter = styled(ModalFooter)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
