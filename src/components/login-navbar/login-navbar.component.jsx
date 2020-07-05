import React from "react";

import NavItemComponent from "../nav-item/nav-item.component";

import "./login-navbar.styles.scss";

function LoginNavbarComponent() {
  return (
    <div className="login-navbar-container">
      <div className="login-navbar-brand">DAS</div>
      <div className="login-navbar-item-container">
        <NavItemComponent
          to="/login"
          iconSrc={
            process.env.PUBLIC_URL +
            "/assets/icons/login-nav-icons/login_icon.svg"
          }
          $secondaryIconColor="#007aff"
          $iconAnimation="enlarge"
          $disableIconPopover
        >
          Login
        </NavItemComponent>
      </div>
      <div className="login-navbar-item-container">
        <NavItemComponent
          to="/register"
          iconSrc={
            process.env.PUBLIC_URL +
            "/assets/icons/login-nav-icons/register_icon.svg"
          }
          $secondaryIconColor="#00ff7a"
          $iconAnimation="enlarge"
          $disableIconPopover
        >
          Register
        </NavItemComponent>
      </div>
    </div>
  );
}

export default LoginNavbarComponent;
