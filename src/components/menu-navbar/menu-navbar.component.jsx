import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import NavItemComponent from "../nav-item/nav-item.component";
import PopoverComponent from "../popover/popover.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./menu-navbar.styles.scss";

function MenuNavbarComponent({ currentUser, brand }) {
  const [popMenu, togglePopMenu] = useState(false);

  const history = useHistory();

  // Render
  return (
    <div className="menu-navbar-container">
      <div
        className="menu-navbar-brand"
        onClick={() => history.push("/course-page")}
      >
        {brand ? brand : "DAS"}
      </div>
      <div
        className="menu-navbar-item-container"
        onClick={() => history.push("/course-page/add-course")}
      >
        <NavItemComponent
          id="add-course"
          to="#"
          $disableIconPopover
          $primaryBgColor="#0a84ff"
          $secondaryBgColor="#ffffff"
          $primaryLinkColor="#ffffff"
          $secondaryLinkColor="#0a84ff"
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
          id="menu-item"
          iconSrc={
            process.env.PUBLIC_URL + "/assets/icons/nav-option-icons/pass.svg"
          }
          $disableIconPopover
          $primaryBgColor="#ffffff"
          // $secondaryBgColor = "#23232e"
          $primaryIconColor="#0a84ff"
          $secondaryIconColor="#ffffff"
          $primaryLinkColor="#0a84ff"
          $secondaryLinkColor="#ffffff"
          $iconAnimation="enlarge"
        >
          Menu
        </NavItemComponent>
        {popMenu ? <PopoverComponent user={currentUser} /> : ""}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MenuNavbarComponent);
