import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import NavItemComponent from "../nav-item/nav-item.component";

import { userSignOutStart } from "../../redux/user/user.actions";
import {
  selectCurrentUser,
  selectSessionToken,
} from "../../redux/user/user.selectors";

import {
  StyledPopoverContainer,
  StyledPopoverHeader,
  StyledPopoverList,
  StyledPopoverListItem,
} from "./popover.styles";

function PopoverComponent({ currentUser, sessionToken, userSignOutStart }) {
  // Render
  return (
    <StyledPopoverContainer>
      <StyledPopoverList>
        <StyledPopoverHeader>
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/icons/nav-option-icons/user_icon.svg"
              }
              alt="user-profile"
            />
            <span>Welcome, {currentUser.name}</span>
          </div>
        </StyledPopoverHeader>
        <StyledPopoverListItem>
          <NavItemComponent
            to="#"
            iconSrc={
              process.env.PUBLIC_URL +
              "/assets/icons/nav-option-icons/add_course_icon.svg"
            }
            $secondaryIconColor="00ff00"
            $disableIconPopover
          >
            Add Course
          </NavItemComponent>
        </StyledPopoverListItem>
        <StyledPopoverListItem>
          <NavItemComponent
            to="#"
            iconSrc={
              process.env.PUBLIC_URL +
              "/assets/icons/nav-option-icons/user_icon.svg"
            }
            $disableIconPopover
          >
            View Profile
          </NavItemComponent>
        </StyledPopoverListItem>
        <StyledPopoverListItem>
          <NavItemComponent
            to="#"
            iconSrc={
              process.env.PUBLIC_URL +
              "/assets/icons/nav-option-icons/settings_icon.svg"
            }
            $secondaryIconColor="ffff00"
            $iconAnimation="rotate"
            $disableIconPopover
          >
            Settings
          </NavItemComponent>
        </StyledPopoverListItem>
        <StyledPopoverListItem onClick={() => userSignOutStart(sessionToken)}>
          <NavItemComponent
            to="/logout"
            iconSrc={
              process.env.PUBLIC_URL +
              "/assets/icons/nav-option-icons/logout_icon.svg"
            }
            $secondaryIconColor="ff0000"
            $iconAnimation="enlarge"
            $disableIconPopover
          >
            Logout
          </NavItemComponent>
        </StyledPopoverListItem>
      </StyledPopoverList>
    </StyledPopoverContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userSignOutStart: (sessionToken) => dispatch(userSignOutStart(sessionToken)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  sessionToken: selectSessionToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverComponent);
