import styled, { css } from "styled-components";

/**
 * Function to set Button primary and secondary button and text colors.
 * Primary colors are for the button before hover
 * Secondary colors are for button:onhover
 *
 * @param {String} primaryColor - A hexadecimal color string for the primary button color.
 * @param {String} primaryTextColor - A hexadecimal color string for the primary button text color.
 * @param {String} secondaryColor - A hexadecimal color string for the secondary button color.
 * @param {String} secondaryTextColor - A hexadecimal color string for the secondary button text color.
 *
 * @returns {CSS} - A styled CSS component
 */
const setButtonColor = (
  $primaryColor,
  $primaryTextColor,
  $secondaryColor,
  $secondaryTextColor,
  inverted = false
) => {
  return css`
    background-color: ${$primaryColor};
    color: ${$primaryTextColor};
    border: ${inverted
      ? `1.75px solid ${$primaryTextColor}`
      : `1.75px solid transparent`};

    &:hover {
      background-color: ${$secondaryColor};
      color: ${$secondaryTextColor};
      border: ${inverted
        ? `1.75px solid transparent`
        : `1.75px solid ${$primaryColor}`};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background-color: ${$primaryColor};
        color: ${$primaryTextColor};
        border: ${inverted
          ? `1.75px solid ${$primaryTextColor}`
          : `1.75px solid transparent`};
      }
    }
  `;
};

// Function for apply different button styles based on the classname,
// if no classname, then param: primary and secondary colors are used
// to render the button styles
const ButtonColorStyles = (props) => {
  // Handle special class styles
  if (props.$specialClassStyle) {
    switch (props.$specialClassStyle) {
      case "google-sign-in":
        return setButtonColor("#DB4437", "white", "white", "#DB4437");
      case "inverted-button":
        return setButtonColor("white", "black", "black", "white", true);
      default:
        return setButtonColor("black", "white", "white", "black");
    }
  } else if (
    props.$primaryColor &&
    props.$primaryTextColor &&
    props.$secondaryColor &&
    props.$secondaryTextColor
  ) {
    const {
      $primaryColor,
      $primaryTextColor,
      $secondaryColor,
      $secondaryTextColor,
    } = props;
    return setButtonColor(
      $primaryColor,
      $primaryTextColor,
      $secondaryColor,
      $secondaryTextColor
    );
  } else {
    return setButtonColor("black", "white", "white", "black");
  }
};

export const ButtonStyles = styled.button`
  outline: none !important;
  min-width: 200px;
  max-width: 300px;
  height: 50px;
  margin: 5px 15px;
  letter-spacing: 0.05em;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  border-radius: 8px;
  cursor: pointer;
  transition: 500ms ease all;
  display: flex;
  justify-content: center;

  ${(props) => ButtonColorStyles(props)}
`;
