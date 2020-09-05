import React from "react";

import NavItemComponent from "../nav-item/nav-item.component";

import "./login-navbar.styles.scss";

function LoginNavbarComponent() {
  return (
    <div className="login-navbar-container">
      <div className="login-navbar-brand">DAS</div>
      <div className="login-navbar-item-container">
        <NavItemComponent
          id="login"
          to="/login"
          iconSrc={
            process.env.PUBLIC_URL +
            "/assets/icons/login-nav-icons/login_icon.svg"
          }
          $primaryBgColor="#ffffff"
          $primaryIconColor="#0a84ff"
          $secondaryIconColor="#ffffff"
          $iconAnimation="enlarge"
          $disableIconPopover
        >
          Login
        </NavItemComponent>
      </div>
      <div className="login-navbar-item-container">
        <NavItemComponent
          id="register"
          to="/register"
          iconSrc={
            process.env.PUBLIC_URL +
            "/assets/icons/login-nav-icons/register_icon.svg"
          }
          $secondaryIconColor="#ffffff"
          $primaryBgColor="#ffffff"
          $primaryIconColor="#0a84ff"
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
