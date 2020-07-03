import React from "react";

import LoginComponent from "../../components/login/login.component";
import LoginNavbarComponent from "../../components/login-navbar/login-navbar.component";

import "./login.styles.scss";

/**
 * The login page component for the react application
 *
 * @param {React.Props} props - The properties needed by the Login  Page
 */
function LoginPage(props) {
  return (
    <div className="login-page-container">
      <LoginNavbarComponent />
      <LoginComponent />
    </div>
  );
}

export default LoginPage;
