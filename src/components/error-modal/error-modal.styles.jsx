import styled from "styled-components";
import { ModalBody, ModalFooter } from "react-bootstrap";

export const StyledModalBody = styled(ModalBody)`
  min-width: 600px;
  font-weight: 500;
`;

export const StyledModalFooter = styled(ModalFooter)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
