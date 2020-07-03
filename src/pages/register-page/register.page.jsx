import React from "react";

import RegisterComponent from "../../components/register/register.component";
import LoginNavbarComponent from "../../components/login-navbar/login-navbar.component";

import "./register.styles.scss";

function RegisterPage(props) {
  return (
    <div className="register-page-container">
      <LoginNavbarComponent />
      <RegisterComponent />
    </div>
  );
}

export default RegisterPage;
