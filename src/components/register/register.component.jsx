import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import ButtonSpinnerComponent from "../button-spinner/button-spinner.component";

import { userRegistrationStart } from "../../redux/user/user.actions";
import {
  selectIsRegistering,
  selectRegisterError,
} from "../../redux/user/user.selectors";

import "./register.styles.scss";

function RegisterComponent({
  isRegistering,
  registerError,
  userRegistrationStart,
}) {
  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [spinners, toggleSpinners] = useState({
    registerSpinner: false,
    googleRegisterSpinner: false,
  });

  const {
    name,
    username,
    email,
    password,
    confirmPassword,
  } = registerCredentials;

  /**
   * Function to handle the changes in the form inputs.
   *
   * @param {React.SyntheticEvent} event - The onChange() synthetic event.
   */
  function handleChange(event) {
    const { name, value } = event.target;

    setRegisterCredentials({
      ...registerCredentials,
      [name]: value,
    });
  }

  /**
   * Function to handle the submission of the registration form.
   *
   * @param {React.SyntheticEvent} event - The onSubmit() synthetic event.
   */
  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      toggleSpinners({
        ...spinners,
        registerSpinner: !spinners.registerSpinner,
      });
      return;
    }

    userRegistrationStart(username, password, name, email);
  }

  // Render
  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <FormInputComponent
          label="Given Name"
          handleChange={handleChange}
          type="text"
          name="name"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/name_icon.svg"}
          value={name}
          required
        />
        <FormInputComponent
          label="Username"
          handleChange={handleChange}
          type="text"
          name="username"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/user_icon.svg"}
          value={username}
          required
        />
        <FormInputComponent
          label="Email"
          handleChange={handleChange}
          type="email"
          name="email"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/mail_icon.svg"}
          value={email}
          required
        />
        <FormInputComponent
          label="Password"
          handleChange={handleChange}
          type="password"
          name="password"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/lock_icon.svg"}
          value={password}
          required
        />
        <FormInputComponent
          label="Confirm Password"
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/lock_icon.svg"}
          value={confirmPassword}
          required
        />
        <div className="button-container">
          <ButtonComponent
            type="submit"
            value="Submit Register"
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            {isRegistering ? <ButtonSpinnerComponent /> : "Register"}
          </ButtonComponent>
          <ButtonComponent
            type="button"
            value="Submit Register"
            onClick={() =>
              toggleSpinners({
                ...spinners,
                googleRegisterSpinner: !spinners.googleRegisterSpinner,
              })
            }
            $specialClassStyle="google-sign-in"
          >
            {spinners.googleRegisterSpinner ? (
              <ButtonSpinnerComponent />
            ) : (
              "Google Login"
            )}
          </ButtonComponent>
        </div>
        <p className="sign-in">
          Have an account?{" "}
          <Link className="sign-in-link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

const mapStateToProp = createStructuredSelector({
  isRegistering: selectIsRegistering,
  registerError: selectRegisterError,
});

const mapDispatchToProp = (dispatch) => ({
  userRegistrationStart: (username, password, givenName, email) =>
    dispatch(userRegistrationStart(username, password, givenName, email)),
});

export default connect(mapStateToProp, mapDispatchToProp)(RegisterComponent);
