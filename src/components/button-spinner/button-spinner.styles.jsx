import styled from "styled-components";

const StyledButtonSpinnerComponent = styled.span`
  align-self: center;
  border: 4px solid;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledButtonSpinnerComponent;
