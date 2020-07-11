import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LoginNavbarComponent from "../../components/login-navbar/login-navbar.component";
import ButtonComponent from "../../components/button/button.component";
import LoaderComponent from "../../components/loader/loader.component";

import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import "./logout.styles.scss";

function LogoutPage({ currentUser, sessionToken }) {
  const history = useHistory();

  // Render
  if (currentUser && sessionToken) {
    return <LoaderComponent />;
  } else {
    return (
      <div className="logout-page-container">
        <LoginNavbarComponent />
        <div className="logout-container">
          <h2 className="logout-message">
            You have been successfully logged out.
          </h2>
          <div className="logout-button-container">
            <ButtonComponent
              type="button"
              $primaryColor="#e74c3c"
              $primaryTextColor="#ffffff"
              $secondaryColor="#ffffff"
              $secondaryTextColor="#e74c3c"
              value="Close Tab"
              onClick={() => window.close()}
            >
              Close Tab
            </ButtonComponent>
            <ButtonComponent
              type="button"
              $primaryColor="#007aff"
              $primaryTextColor="#ffffff"
              $secondaryColor="#ffffff"
              $secondaryTextColor="#007aff"
              value="Login Button"
              onClick={() => history.push("/login")}
            >
              Go To Login
            </ButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
});

export default connect(mapStateToProps)(LogoutPage);
