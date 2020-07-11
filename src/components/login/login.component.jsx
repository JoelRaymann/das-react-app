import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, useHistory } from "react-router-dom";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import ButtonSpinnerComponent from "../button-spinner/button-spinner.component";

import { userSignInStart } from "../../redux/user/user.actions";

import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./login.styles.scss";

function LoginComponent({ userSignInStart, currentUser, sessionToken }) {
  const history = useHistory();
  // Define states
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [spinners, toggleSpinners] = useState({
    signInSpinner: false,
    googleSpinner: false,
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
  }

  useEffect(() => {
    if (currentUser && sessionToken) {
      history.push("/course-page");
    }
  }, [currentUser, sessionToken, history]);

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
          iconPath={process.env.PUBLIC_URL + "/assets/icons/user_icon.svg"}
          value={userCredentials.username}
          required
        />
        <FormInputComponent
          label="password"
          handleChange={handleChange}
          type="password"
          name="password"
          iconPath={process.env.PUBLIC_URL + "/assets/icons/lock_icon.svg"}
          value={userCredentials.password}
          required
        />
        <Link to="#" className="password-forgot">
          Forgot Password?
        </Link>
        <div className="button-container">
          <ButtonComponent
            type="submit"
            value="Submit Login"
            onClick={() =>
              toggleSpinners({
                ...spinners,
                signInSpinner: !spinners.signInSpinner,
              })
            }
            $primaryColor="#007aff"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#007aff"
          >
            {spinners.signInSpinner ? <ButtonSpinnerComponent /> : "Sign In"}
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={() =>
              toggleSpinners({
                ...spinners,
                googleSpinner: !spinners.googleSpinner,
              })
            }
            value="Submit Login"
            $specialClassStyle="google-sign-in"
          >
            {spinners.googleSpinner ? (
              <ButtonSpinnerComponent />
            ) : (
              "Google Sign In"
            )}
          </ButtonComponent>
        </div>
        <p className="register">
          Don't have an account?{" "}
          <Link className="register-link" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
});

const mapDispatchToProps = (dispatch) => ({
  userSignInStart: (username, password) =>
    dispatch(userSignInStart(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
