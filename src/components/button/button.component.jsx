import React from "react";
// import styled components
import { ButtonStyles } from "./button.styles";

const ButtonComponent = ({ children, ...otherButtonProps }) => {
  return <ButtonStyles {...otherButtonProps}>{children}</ButtonStyles>;
};

export default ButtonComponent;
