import React from "react";

import LoginComponent from "../../components/login/login.component";

import "./login-register.styles.scss";

/**
 * The login registration page component for the react application
 *
 * @param {React.Props} props - The properties needed by the Login Register Page
 */
function LoginRegisterPage(props) {
  return (
    <div className="login-register-container">
      <LoginComponent />
    </div>
  );
}

export default LoginRegisterPage;
