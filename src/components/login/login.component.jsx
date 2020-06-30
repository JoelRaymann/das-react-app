import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

import { userSignInStart } from "../../redux/user/user.actions";

import "./login.styles.scss";

function LoginComponent({ userSignInStart }) {
  const history = useHistory();
  // Define states
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  /**
   * Function to handle the changes happening in the form input.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleChange(event) {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  }

  /**
   * Function to handle the submission event of the current form.
   *
   * @param {React.SyntheticEvent} event - The current event of the input form
   */
  function handleSubmit(event) {
    event.preventDefault();

    const { username, password } = userCredentials;
    userSignInStart(username, password);
    history.push("/course-page");
  }

  // Render
  return (
    <div className="login-container">
      <h2 className="login-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <FormInputComponent
          label="username"
          handleChange={handleChange}
          type="text"
          name="username"
          iconPath="./assets/icons/user_icon.svg"
          value={userCredentials.username}
          required
        />
        <FormInputComponent
          label="password"
          handleChange={handleChange}
          type="password"
          name="password"
          iconPath="./assets/icons/lock_icon.svg"
          value={userCredentials.password}
          required
        />
        <Link href="#" className="password-forgot">
          Forgot Password?
        </Link>
        <div className="button-container">
          <ButtonComponent
            type="submit"
            primaryColor="#007aff"
            primaryTextColor="#ffffff"
            secondaryColor="#ffffff"
            secondaryTextColor="#007aff"
            value="Submit Login"
          >
            Sign In
          </ButtonComponent>
          <ButtonComponent
            type="button"
            specialClassStyle="google-sign-in"
            value="Submit Login"
          >
            Google Sign In
          </ButtonComponent>
        </div>
        <p className="register">
          Don't have an account? <Link href="#">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userSignInStart: (username, password) =>
    dispatch(userSignInStart(username, password)),
});

export default connect(null, mapDispatchToProps)(LoginComponent);
