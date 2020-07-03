import React, { useState } from "react";

import NavItemComponent from "../nav-item/nav-item.component";
import PopoverComponent from "../popover/popover.component";

import "./menu-navbar.styles.scss";

function MenuNavbarComponent({ user }) {
  const [popMenu, togglePopMenu] = useState(false);

  // Render
  return (
    <div className="menu-navbar-container">
      <div className="menu-navbar-brand">DAS</div>
      <div className="menu-navbar-item-container">
        <NavItemComponent
          to="#"
          iconSrc="./assets/icons/nav-option-icons/add_course_icon.svg"
          $secondaryIconColor="#00ff7a"
          $iconAnimation="enlarge"
          $disableIconPopover
        >
          Add Courses
        </NavItemComponent>
      </div>
      <div
        className="menu-navbar-item-container"
        onClick={() => togglePopMenu(!popMenu)}
      >
        <NavItemComponent
          to="#"
          iconSrc="./assets/icons/nav-option-icons/person_icon.svg"
          $secondaryIconColor="#007aff"
          $iconAnimation="enlarge"
          $disableIconPopover
        >
          Menu
        </NavItemComponent>
        {popMenu ? <PopoverComponent user={user} /> : ""}
      </div>
    </div>
  );
}

export default MenuNavbarComponent;
