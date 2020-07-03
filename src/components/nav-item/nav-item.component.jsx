import React from "react";
import PropTypes from "prop-types";

import { NavItemLink } from "./nav-item.styles.jsx";

function NavItemComponent({ to, iconSrc, children, ...otherNavItemProps }) {
  // Render
  return (
    <NavItemLink to={to} {...otherNavItemProps}>
      {/* If there is a navigation icon */}
      {iconSrc ? <img src={iconSrc} alt="Option Icon" /> : ""}
      <span>{children}</span>
    </NavItemLink>
  );
}

NavItemComponent.propTypes = {
  /**
   * The link for the nav-item. required
   */
  to: PropTypes.string.isRequired,

  // Optional Props

  /**
   * The primary background color for the option. Normally
   * this must match the background color of the entire
   * navbar itself
   */
  primaryBgColor: PropTypes.string,

  /**
   * The secondary background color for the options. This
   * will be the background color when hovered over.
   */
  secondaryBgColor: PropTypes.string,

  /**
   * The primary color for the link text. This will be
   * a contrast color from the background color.
   */
  primaryLinkColor: PropTypes.string,

  /**
   * The secondary color for the link text. This
   * will be the link text color when hovered over.
   */
  secondaryLinkColor: PropTypes.string,

  /**
   * The primary icon color. This tends to match with
   * the primary link color.
   */
  primaryIconColor: PropTypes.string,

  /**
   * The secondary icon color. This will be
   * the icon color when hovered over.
   */
  secondaryIconColor: PropTypes.string,

  /**
   * A set of supported animations that you can
   * apply on the icon that works on hover.
   *
   * Supported Animations:
   *  "enlarge" => Makes the icon big and small infinite.
   *  "rotate" => Makes the icon rotate.
   */
  iconAnimation: PropTypes.string,

  /**
   * The source for the icon if we want to tie up a icon
   * with the options
   */
  iconSrc: PropTypes.string,
};

export default NavItemComponent;
